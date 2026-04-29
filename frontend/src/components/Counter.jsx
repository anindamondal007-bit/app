import React, { useEffect, useRef, useState } from "react";

// Animated number counter that triggers when scrolled into view.
// Supports prefix/suffix and decimals (e.g. "2.5+").
const Counter = ({ value, duration = 1600, className = "" }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");

  // Parse numeric portion + suffix from value string (e.g. "2.5+", "100%", "6")
  const match = String(value).match(/^([0-9]*\.?[0-9]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    let raf;

    const start = () => {
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - p, 3);
        const v = target * eased;
        setDisplay(v.toFixed(decimals) + suffix);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            start();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default Counter;
