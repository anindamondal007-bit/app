import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../mock";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="eyebrow mb-4">(02) — Selected Work</div>
            <h2 className="display text-[12vw] md:text-[6vw] lg:text-[6.4rem] font-bold leading-[0.92] tracking-[-0.03em] ink">
              Featured<br />
              <span style={{ color: "hsl(var(--muted) / 0.55)" }}>case studies.</span>
            </h2>
          </div>
          <div className="hidden md:block max-w-xs">
            <p className="ink-soft text-[15px] leading-relaxed">
              Three products I shipped end-to-end — from messy ambiguity to live, scalable design systems.
            </p>
          </div>
        </div>

        <ul className="divide-y" style={{ borderTop: "1px solid hsl(var(--line))", borderColor: "hsl(var(--line))" }}>
          {featuredProjects.map((p) => (
            <li
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="reveal"
              style={{ borderColor: "hsl(var(--line))" }}
            >
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group relative grid grid-cols-12 gap-4 items-center py-7 md:py-8"
              >
                <div className="col-span-2 md:col-span-1 mono text-xs muted">
                  {p.index}
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="display text-3xl md:text-5xl font-semibold tracking-[-0.02em] ink group-hover:translate-x-2 transition-transform duration-300">
                    {p.name}
                  </h3>
                </div>
                <div className="col-span-7 md:col-span-3">
                  <p className="text-sm ink-soft">{p.category}</p>
                </div>
                <div className="hidden md:block col-span-2 mono text-xs muted">{p.year}</div>
                <div className="col-span-5 md:col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={26}
                    className="ink-soft group-hover:text-accent group-hover:rotate-[12deg] transition-all duration-300"
                  />
                </div>

                {/* Floating preview */}
                {hoveredId === p.id && (
                  <div className="hidden lg:block pointer-events-none absolute right-24 -top-6 w-72 aspect-[4/3] rounded-md overflow-hidden shadow-xl border border-line z-10">
                    <img src={p.cover} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Detail cards */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <article key={p.id} className="reveal group bg-surface border border-line rounded-lg overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-[hsl(var(--ink)/0.04)]">
                <img
                  src={p.cover}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="mono text-[11px] uppercase tracking-[0.18em] muted">{p.index} · {p.year}</span>
                  <span className="mono text-[11px] uppercase tracking-[0.18em] muted">{p.role}</span>
                </div>
                <h3 className="display text-2xl font-semibold ink">{p.name}</h3>
                <p className="mt-1 text-sm ink-soft">{p.category}</p>
                <p className="mt-4 text-[14.5px] leading-relaxed ink-soft">{p.summary}</p>

                <div className="mt-5 space-y-2 text-[13.5px]">
                  <Row label="Problem" value={p.problem} />
                  <Row label="Process" value={p.process} />
                  <Row label="Solution" value={p.solution} />
                </div>

                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {p.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] ink-soft">
                      <span className="text-accent mt-1">—</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="mono text-[10.5px] uppercase tracking-[0.16em] px-2 py-1 rounded-full border border-line muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-sm ink hover:text-accent inline-flex items-center gap-1 link-underline">
                    View <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Row = ({ label, value }) => (
  <div className="flex gap-3">
    <span className="mono text-[10.5px] uppercase tracking-[0.18em] muted shrink-0 w-[64px] pt-[3px]">{label}</span>
    <span className="ink-soft">{value}</span>
  </div>
);

export default Projects;
