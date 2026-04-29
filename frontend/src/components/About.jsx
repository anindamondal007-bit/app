import React from "react";
import { profile, aboutCopy } from "../mock";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Left: photo + meta */}
          <div className="col-span-12 md:col-span-5 reveal">
            <div className="relative">
              <div
                className="aspect-[4/5] w-full overflow-hidden rounded-md"
                style={{ background: "hsl(var(--ink) / 0.05)" }}
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.92) contrast(1.02)" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden md:flex flex-col items-end bg-surface border border-line rounded-md px-4 py-3 shadow-sm">
                <span className="mono text-[10px] uppercase tracking-[0.22em] muted">Based in</span>
                <span className="display text-lg font-semibold ink">Kolkata, IN</span>
              </div>
            </div>
          </div>

          {/* Right: copy + highlights */}
          <div className="col-span-12 md:col-span-7 reveal">
            <div className="eyebrow mb-6">(01) — About</div>
            <h2 className="display text-[10vw] md:text-[4.5rem] lg:text-[5.4rem] font-semibold leading-[0.95] tracking-[-0.03em] ink">
              {aboutCopy.headline}
            </h2>

            <div className="mt-8 md:mt-10 space-y-5 max-w-2xl">
              {aboutCopy.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] md:text-[17px] leading-relaxed ink-soft">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {aboutCopy.highlights.map((h, i) => (
                <div key={i} className="border-t border-line pt-4">
                  <div className="display text-3xl md:text-4xl font-semibold ink">{h.value}</div>
                  <div className="mono text-[11px] uppercase tracking-[0.18em] muted mt-1">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Let's talk <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm ink-soft link-underline"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
