import React from "react";
import { skills } from "../mock";

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8 md:gap-14">
          <div className="col-span-12 md:col-span-4 reveal">
            <div className="eyebrow mb-4">(04) — Skills</div>
            <h2 className="display text-[10vw] md:text-[5vw] lg:text-[5.4rem] font-bold leading-[0.95] tracking-[-0.03em] ink">
              The toolkit.
            </h2>
            <p className="mt-6 ink-soft text-[15px] leading-relaxed max-w-xs">
              A blend of research, craft and systems thinking — sharpened with modern AI workflows.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 space-y-12">
            {/* UX skills as tags */}
            <div className="reveal">
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="mono text-[11px] uppercase tracking-[0.22em] muted">UX · Craft</h3>
                <span className="mono text-[11px] muted">{skills.ux.length} skills</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.ux.map((s) => (
                  <li
                    key={s}
                    className="px-4 py-2 rounded-full border border-line bg-surface text-sm ink-soft hover:bg-ink hover:text-[hsl(var(--bg))] transition-colors cursor-default"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools with progress */}
            <div className="reveal">
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="mono text-[11px] uppercase tracking-[0.22em] muted">Tools · Proficiency</h3>
                <span className="mono text-[11px] muted">{skills.tools.length} tools</span>
              </div>
              <ul className="divide-y border-y" style={{ borderColor: "hsl(var(--line))" }}>
                {skills.tools.map((t) => (
                  <li key={t.name} className="py-4 grid grid-cols-12 items-center gap-4" style={{ borderColor: "hsl(var(--line))" }}>
                    <span className="col-span-5 md:col-span-3 ink font-medium">{t.name}</span>
                    <div className="col-span-5 md:col-span-8 h-[3px] rounded-full bg-[hsl(var(--ink)/0.08)] overflow-hidden">
                      <div
                        className="h-full bg-ink transition-all duration-1000"
                        style={{ width: `${t.level}%` }}
                      />
                    </div>
                    <span className="col-span-2 md:col-span-1 text-right mono text-[11px] muted">{t.level}%</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI tools */}
            <div className="reveal">
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="mono text-[11px] uppercase tracking-[0.22em] muted">AI · Augmented design</h3>
                <span className="mono text-[11px] muted">{skills.ai.length} platforms</span>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {skills.ai.map((a) => (
                  <li key={a} className="display text-xl md:text-2xl font-medium ink-soft hover:text-accent transition-colors cursor-default">
                    {a}
                    <span className="text-accent ml-2">/</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
