import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { featuredProjects } from "../mock";

const Projects = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Update arrow disabled state on scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    // Scroll by ~one card width (card 420px + gap 24px = 444 on md+)
    const card = el.querySelector(".carousel-card");
    const step = card ? card.getBoundingClientRect().width + 24 : 440;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="container-x">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <div className="eyebrow mb-4">(02) — Selected Work</div>
            <h2 className="display text-[12vw] md:text-[6vw] lg:text-[6.4rem] font-bold leading-[0.92] tracking-[-0.03em] ink">
              Featured<br />
              <span style={{ color: "hsl(var(--muted) / 0.55)" }}>case studies.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-end gap-6 max-w-md">
            <p className="ink-soft text-[15px] leading-relaxed">
              Real products I shipped end-to-end. Each story covers the messy middle — problem, process, decisions and outcome.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <ArrowBtn disabled={!canPrev} onClick={() => scrollByCard(-1)} aria-label="Previous">
                <ArrowLeft size={16} />
              </ArrowBtn>
              <ArrowBtn disabled={!canNext} onClick={() => scrollByCard(1)} aria-label="Next">
                <ArrowRight size={16} />
              </ArrowBtn>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel track — full bleed scroll, but inner cards align to container */}
      <div
        ref={trackRef}
        className="carousel-track flex gap-6 overflow-x-auto pb-4 px-6 md:px-10 lg:px-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]"
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2 + 2.5rem))",
        }}
      >
        {featuredProjects.map((p) => (
          <CarouselCard
            key={p.id}
            project={p}
            onOpen={() => navigate(`/work/${p.slug}`)}
          />
        ))}
        {/* View All card at the end */}
        <ViewAllCard onClick={() => navigate("/work")} />
      </div>

      {/* Mobile arrows below */}
      <div className="container-x mt-6 flex md:hidden items-center justify-end gap-2">
        <ArrowBtn disabled={!canPrev} onClick={() => scrollByCard(-1)} aria-label="Previous">
          <ArrowLeft size={16} />
        </ArrowBtn>
        <ArrowBtn disabled={!canNext} onClick={() => scrollByCard(1)} aria-label="Next">
          <ArrowRight size={16} />
        </ArrowBtn>
      </div>
    </section>
  );
};

const CarouselCard = ({ project, onOpen }) => {
  return (
    <article
      onClick={onOpen}
      className="carousel-card proj-card group relative shrink-0 cursor-pointer bg-surface border border-line overflow-hidden flex flex-col w-[300px] sm:w-[360px] md:w-[420px]"
      style={{ borderRadius: "20px", scrollSnapAlign: "start" }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden m-3 mb-0"
        style={{
          borderRadius: "14px",
          background: project.bgTint || "hsl(var(--ink) / 0.04)",
        }}
      >
        <div className="aspect-[4/3] overflow-hidden grid place-items-center p-5 md:p-7">
          <img
            src={project.cover}
            alt={project.name}
            loading="lazy"
            className="cover-img max-h-full max-w-full object-contain transition-transform duration-700 ease-out drop-shadow-[0_18px_40px_rgba(11,27,58,0.18)]"
          />
        </div>
        <div className="absolute top-3 left-3">
          <StatusPill status={project.status} />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="mono text-[10.5px] uppercase tracking-[0.2em] muted">
            {project.index} · {project.year}
          </span>
          <span className="mono text-[10.5px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-[hsl(var(--ink)/0.06)] ink-soft">
            {project.category}
          </span>
        </div>
        <h3 className="display text-2xl md:text-[1.75rem] font-semibold tracking-[-0.02em] ink leading-[1.1]">
          {project.name}
        </h3>
        <p className="mt-3 ink-soft text-[14.5px] leading-relaxed line-clamp-3">
          {project.teaser}
        </p>
        <div className="mt-auto pt-6 flex items-center gap-2 ink group-hover:text-accent transition-colors">
          <span className="mono text-[11px] uppercase tracking-[0.2em] font-medium">View case study</span>
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:rotate-[12deg] group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  );
};

const ViewAllCard = ({ onClick }) => (
  <button
    onClick={onClick}
    className="carousel-card group shrink-0 bg-[hsl(var(--ink))] text-[hsl(var(--bg))] border border-line overflow-hidden flex flex-col items-start justify-between text-left p-7 md:p-8 w-[300px] sm:w-[360px] md:w-[420px] transition-all duration-500 hover:-translate-y-1.5"
    style={{ borderRadius: "20px", scrollSnapAlign: "start", boxShadow: "0 8px 24px -12px hsl(var(--ink) / 0.2)" }}
  >
    <div className="flex items-center gap-3">
      <span className="h-10 w-10 grid place-items-center rounded-full border border-[hsl(var(--bg)/0.25)]">
        <LayoutGrid size={18} />
      </span>
      <span className="mono text-[10.5px] uppercase tracking-[0.22em] opacity-70">All Projects</span>
    </div>
    <div className="mt-12">
      <h3 className="display text-3xl md:text-[2.4rem] font-semibold tracking-[-0.02em] leading-[1.05]">
        Browse the<br />full archive.
      </h3>
      <p className="mt-3 text-[14.5px] leading-relaxed opacity-75 max-w-xs">
        Six case studies, one place. Open the gallery to scroll through every shipped product.
      </p>
    </div>
    <div className="mt-8 inline-flex items-center gap-2 group-hover:text-accent transition-colors">
      <span className="mono text-[11px] uppercase tracking-[0.2em] font-medium">View all</span>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:rotate-[12deg] group-hover:translate-x-0.5"
      />
    </div>
  </button>
);

const ArrowBtn = ({ children, disabled, ...rest }) => (
  <button
    {...rest}
    disabled={disabled}
    className="h-10 w-10 grid place-items-center rounded-full border border-line ink hover:bg-ink hover:text-[hsl(var(--bg))] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
  >
    {children}
  </button>
);

const StatusPill = ({ status }) => {
  const map = {
    Live: { dot: "hsl(var(--accent))", label: "Live" },
    Ongoing: { dot: "#F59E0B", label: "Ongoing" },
    Shipped: { dot: "#10B981", label: "Shipped" },
  };
  const cfg = map[status] || map.Live;
  return (
    <span className="inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.18em] ink bg-surface/80 backdrop-blur px-2.5 py-1 rounded-full border border-line">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: cfg.dot }} />
      {cfg.label}
    </span>
  );
};

export default Projects;
