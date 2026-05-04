from fastapi import FastAPI, APIRouter, HTTPException, Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import hashlib
import io
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import httpx
from PIL import Image


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ----------------------------------------------------------------------
# Google Drive image proxy
# ----------------------------------------------------------------------
# Drive serves public images but Chrome blocks them via ORB when
# embedded directly. We proxy + resize them through our backend so the
# browser sees a clean same-origin image.

CACHE_DIR = Path("/tmp/asm_img_cache")
CACHE_DIR.mkdir(parents=True, exist_ok=True)
DRIVE_DOWNLOAD = "https://drive.usercontent.google.com/download?id={id}&export=view"


@api_router.get("/img/{file_id}")
async def proxy_drive_image(file_id: str, w: int = 1600, q: int = 82):
    """Fetch a public Drive image, resize it to max-width `w`, return a
    cached JPEG. Cached on disk by (file_id, width, quality)."""

    # Defensive bounds
    w = max(200, min(w, 2400))
    q = max(60, min(q, 95))

    cache_key = hashlib.sha1(f"{file_id}:{w}:{q}".encode()).hexdigest()
    cache_path = CACHE_DIR / f"{cache_key}.jpg"
    if cache_path.exists():
        return Response(
            content=cache_path.read_bytes(),
            media_type="image/jpeg",
            headers={"Cache-Control": "public, max-age=604800, immutable"},
        )

    try:
        url = DRIVE_DOWNLOAD.format(id=file_id)
        async with httpx.AsyncClient(follow_redirects=True, timeout=45.0) as client:
            r = await client.get(url, headers={"User-Agent": "Mozilla/5.0"})
        if r.status_code != 200:
            raise HTTPException(status_code=404, detail="Image not found")
        raw = r.content

        img = Image.open(io.BytesIO(raw))
        # Convert to RGB (JPEG can't store alpha, and large PNGs become tiny JPEGs)
        if img.mode in ("RGBA", "LA", "P"):
            bg = Image.new("RGB", img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[-1] if img.mode in ("RGBA", "LA") else None)
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")

        # Resize maintaining aspect ratio
        if img.width > w:
            new_h = int(img.height * (w / img.width))
            img = img.resize((w, new_h), Image.LANCZOS)

        out = io.BytesIO()
        img.save(out, format="JPEG", quality=q, optimize=True, progressive=True)
        data = out.getvalue()

        try:
            cache_path.write_bytes(data)
        except Exception as cache_err:
            logger.warning(f"Could not write image cache: {cache_err}")

        return Response(
            content=data,
            media_type="image/jpeg",
            headers={"Cache-Control": "public, max-age=604800, immutable"},
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.exception(f"Image proxy failed for {file_id}: {e}")
        raise HTTPException(status_code=502, detail="Upstream image fetch failed")


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()