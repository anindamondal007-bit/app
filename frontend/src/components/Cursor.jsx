import React, { useEffect, useRef, useState } from "react";

// Smooth lerp-following custom cursor with hover states.
// Hovers grow / morph the cursor when user is over an interactive element.
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) {
      setEnabled(false);
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      // Dot follows almost instantly
      dotX += (mouseX - dotX) * 0.55;
      dotY += (mouseY - dotY) * 0.55;
      // Ring follows with delay (lerp)
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e) => {
      const t = e.target.closest(
        "a, button, [data-cursor], input, textarea, select, label"
      );
      if (!t) {
        setVariant("default");
        setLabel("");
        return;
      }
      const v = t.getAttribute("data-cursor");
      const l = t.getAttribute("data-cursor-label");
      if (v) {
        setVariant(v);
        setLabel(l || "");
      } else if (t.matches("input, textarea, select")) {
        setVariant("text");
        setLabel("");
      } else {
        setVariant("hover");
        setLabel("");
      }
    };
    const onOut = () => {
      setVariant("default");
      setLabel("");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const ringSize =
    variant === "hover" ? 56 : variant === "view" ? 96 : variant === "text" ? 28 : 32;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-[6px] w-[6px] rounded-full"
        style={{
          background: "hsl(var(--ink))",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full grid place-items-center"
        style={{
          height: ringSize,
          width: ringSize,
          border: "1px solid hsl(var(--ink))",
          background:
            variant === "view" ? "hsl(var(--accent))" : "transparent",
          borderColor:
            variant === "view" ? "hsl(var(--accent))" : "hsl(var(--ink))",
          transition:
            "height 0.28s cubic-bezier(0.16,1,0.3,1), width 0.28s cubic-bezier(0.16,1,0.3,1), background-color 0.25s ease, border-color 0.25s ease",
          mixBlendMode: variant === "view" ? "normal" : "difference",
        }}
      >
        {label && (
          <span
            className="mono text-[10px] uppercase tracking-[0.2em] text-white whitespace-nowrap"
            style={{ letterSpacing: "0.15em" }}
          >
            {label}
          </span>
        )}
      </div>
      <style>{`html, body, a, button { cursor: none !important; }`}</style>
    </>
  );
};

export default Cursor;
