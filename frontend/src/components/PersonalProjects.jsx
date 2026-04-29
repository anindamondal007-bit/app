import React from "react";
import { ArrowUpRight } from "lucide-react";
import { personalProjects } from "../mock";

const PersonalProjects = () => {
  return (
    <section id="personal" className="py-24 md:py-32 border-t border-line">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="eyebrow mb-4">(05) — On the side</div>
            <h2 className="display text-[12vw] md:text-[6vw] lg:text-[6.4rem] font-bold leading-[0.92] tracking-[-0.03em] ink">
              Personal<br />
              <span style={{ color: "hsl(var(--muted) / 0.55)" }}>experiments.</span>
            </h2>
          </div>
          <p className="hidden md:block max-w-xs ink-soft text-[15px] leading-relaxed">
            Concepts I design for myself — to explore patterns, push craft, and stay curious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalProjects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="reveal group relative overflow-hidden rounded-lg border border-line bg-surface"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[hsl(var(--ink)/0.04)]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="mono text-[11px] uppercase tracking-[0.2em] muted mb-2">{p.type}</div>
                    <h3 className="display text-2xl md:text-3xl font-semibold ink group-hover:text-accent transition-colors">
                      {p.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={28}
                    className="ink-soft shrink-0 group-hover:text-accent group-hover:rotate-[12deg] transition-all duration-300"
                  />
                </div>
                <p className="mt-4 ink-soft text-[15px] leading-relaxed max-w-lg">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-[10.5px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border border-line muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
