import React from "react";
import { experience, education, certifications } from "../mock";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8 md:gap-14">
          <div className="col-span-12 md:col-span-4 reveal">
            <div className="eyebrow mb-4">(03) — Experience</div>
            <h2 className="display text-[10vw] md:text-[5vw] lg:text-[5.4rem] font-bold leading-[0.95] tracking-[-0.03em] ink">
              A career,<br />
              <span style={{ color: "hsl(var(--muted) / 0.55)" }}>in motion.</span>
            </h2>
            <p className="mt-6 ink-soft text-[15px] leading-relaxed max-w-xs">
              From systems engineering to shipping consumer products — a path that fuses analytical rigour with design empathy.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ol className="relative">
              <span
                aria-hidden
                className="absolute left-[7px] top-2 bottom-2 w-px"
                style={{ background: "hsl(var(--line))" }}
              />
              {experience.map((e, i) => (
                <li key={i} className="reveal pl-8 pb-12 last:pb-0 relative">
                  <span
                    className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 bg-bg"
                    style={{ borderColor: "hsl(var(--ink))" }}
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                    <h3 className="display text-2xl md:text-3xl font-semibold ink">{e.company}</h3>
                    <span className="mono text-[11px] uppercase tracking-[0.18em] muted">{e.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm ink-soft mb-4">
                    <span className="font-medium">{e.role}</span>
                    <span className="muted">·</span>
                    <span className="muted">{e.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {e.bullets.map((b, k) => (
                      <li key={k} className="flex gap-3 text-[15px] ink-soft">
                        <span className="text-accent shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            {/* Education + certifications */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal border border-line rounded-lg p-6 bg-surface">
                <h4 className="mono text-[11px] uppercase tracking-[0.22em] muted mb-4">Education</h4>
                <ul className="space-y-4">
                  {education.map((ed, i) => (
                    <li key={i}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="ink font-medium">{ed.degree}</span>
                        <span className="mono text-[11px] muted">{ed.period}</span>
                      </div>
                      <div className="text-sm ink-soft">{ed.school}</div>
                      {ed.note && <div className="text-[12.5px] muted mt-0.5">{ed.note}</div>}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal border border-line rounded-lg p-6 bg-surface">
                <h4 className="mono text-[11px] uppercase tracking-[0.22em] muted mb-4">Certifications</h4>
                <ul className="space-y-3">
                  {certifications.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14.5px] ink-soft">
                      <span className="text-accent">✦</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
