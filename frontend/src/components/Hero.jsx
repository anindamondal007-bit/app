import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { profile } from "../mock";
import useMagnetic from "../hooks/useMagnetic";

const rotatingWords = ["intuitive.", "scalable.", "impactful.", "human."];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const viewRef = useMagnetic(0.45);
  const contactRef = useMagnetic(0.45);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotatingWords.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative pt-10 md:pt-16 pb-24 md:pb-32">
      <div className="container-x">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Available for new projects — 2025
          </div>
          <div className="hidden md:flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] muted">
            <MapPin size={12} /> {profile.location}
          </div>
        </div>

        {/* Big display name */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-9">
            <div className="eyebrow mb-6">— {profile.title} · {profile.yearsExperience}+ yrs</div>
            <h1 className="display ink font-bold text-[16vw] md:text-[12vw] lg:text-[10.4rem] leading-[0.88] tracking-[-0.04em] mask-reveal reveal in">
              <span className="mask-word"><span className="mask-inner">Aninda<span className="text-accent">.</span></span></span>
            </h1>
            <h2 className="display ink font-bold text-[12vw] md:text-[9vw] lg:text-[8rem] leading-[0.9] tracking-[-0.04em] mt-1 md:mt-2 -ml-[1px] mask-reveal reveal in">
              <span className="mask-word"><span className="mask-inner" style={{ transitionDelay: "120ms", color: "hsl(var(--muted) / 0.55)" }}>Sundar&nbsp;</span></span>
              <span className="mask-word"><span className="mask-inner" style={{ transitionDelay: "240ms" }}>Mondal</span></span>
            </h2>
          </div>

          {/* Right rail */}
          <div className="col-span-12 md:col-span-3 md:pb-3 flex md:block items-end justify-between gap-6">
            <div className="hidden md:block w-full h-px bg-[hsl(var(--line))] mb-6" />
            <p className="max-w-xs ink-soft text-[15px] leading-relaxed">
              Designing{" "}
              <span className="inline-block min-w-[8ch] text-accent font-medium cursor-blink">
                {rotatingWords[idx]}
              </span>
              <br />
              Digital experiences that ship.
            </p>
            <div className="mono text-[11px] uppercase tracking-[0.22em] muted md:mt-6">
              {profile.yearsExperience}+ years · 6 products
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-14 md:mt-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-3">
            <a ref={viewRef} href="#work" className="btn-primary" data-cursor="view" data-cursor-label="View">
              View Work <ArrowUpRight size={16} />
            </a>
            <a ref={contactRef} href="#contact" className="btn-ghost" data-cursor="hover">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 md:max-w-md">
            <Sparkles size={16} className="text-accent shrink-0" />
            <p className="ink-soft text-[15px] leading-snug">
              {profile.tagline}
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 md:mt-28 flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] muted">
          <span className="h-px w-10 bg-[hsl(var(--line))]" />
          Scroll <ArrowDown size={14} />
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="mt-16 md:mt-20 overflow-hidden border-y border-line py-5">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0">
              {["Mobile design", "Design systems", "User research", "Prototyping", "Web platforms", "Telematics", "Marketplaces", "Wellbeing"].map((w, i) => (
                <span key={i} className="display text-3xl md:text-4xl font-medium tracking-tight ink-soft flex items-center gap-12">
                  {w}
                  <span className="text-accent text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
