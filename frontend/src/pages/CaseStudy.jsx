import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { featuredProjects } from "../mock";
import Footer from "../components/Footer";
import MockupBand from "../components/MockupBand";

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = featuredProjects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger reveals
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen grid place-items-center bg-bg ink">
        <div className="text-center">
          <h1 className="display text-4xl mb-4">Project not found</h1>
          <Link to="/" className="btn-primary">Back home</Link>
        </div>
      </div>
    );
  }

  // Find next project for "Up next"
  const idx = featuredProjects.findIndex((p) => p.slug === slug);
  const next = featuredProjects[(idx + 1) % featuredProjects.length];

  return (
    <div className="page-enter grain bg-bg ink min-h-screen">
      {/* Top bar */}
      <header className="container-x flex items-center justify-between h-16">
        <button
          onClick={() => navigate(-1)}
          data-cursor="hover"
          className="inline-flex items-center gap-2 text-sm ink-soft hover:ink link-underline"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <Link to="/" className="flex items-center gap-2 group">
          <span className="display text-xl font-bold tracking-tight ink">A.S.M</span>
          <span className="mono text-[10px] uppercase tracking-[0.3em] muted">— UI/UX</span>
        </Link>
      </header>

      {/* Hero */}
      <section className="container-x pt-10 md:pt-16 pb-16 md:pb-20">
        <div className="reveal">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono text-[11px] uppercase tracking-[0.22em] muted">{project.index} · {project.year}</span>
            <span className="muted">·</span>
            <span className="mono text-[11px] uppercase tracking-[0.22em] muted">{project.role}</span>
            <span className="muted">·</span>
            <StatusPill status={project.status} />
          </div>

          <h1 className="display text-[12vw] md:text-[7vw] lg:text-[7rem] font-bold leading-[0.92] tracking-[-0.04em] ink">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] md:text-[18px] leading-relaxed ink-soft">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="mono text-[10.5px] uppercase tracking-[0.16em] px-3 py-1.5 rounded-full border border-line muted">
                {t}
              </span>
            ))}
          </div>

          {(project.links.length > 0 || project.figma !== "#") && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="view"
                  data-cursor-label="Open"
                  className="btn-primary"
                >
                  {l.label} <ExternalLink size={14} />
                </a>
              ))}
              {project.figma !== "#" && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="view"
                  data-cursor-label="Figma"
                  className="btn-ghost"
                >
                  Figma Prototype <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Cover image */}
        <div
          className="reveal mt-12 md:mt-16 overflow-hidden"
          style={{
            borderRadius: "20px",
            background: project.bgTint || "hsl(var(--ink) / 0.04)",
          }}
        >
          <div className="aspect-[16/9] md:aspect-[16/8] grid place-items-center p-8 md:p-14">
            <img
              src={project.cover}
              alt={project.name}
              className="max-h-full max-w-full object-contain drop-shadow-[0_28px_60px_rgba(11,27,58,0.20)]"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section eyebrow="01 — Overview" title="The problem, the people, the goals.">
        <div className="grid grid-cols-12 gap-8 md:gap-10">
          <Block title="Problem" className="col-span-12 md:col-span-12">
            <p className="text-[17px] leading-relaxed ink-soft max-w-3xl">{project.overview.problem}</p>
          </Block>
          <Block title="Users" className="col-span-12 md:col-span-6">
            <ul className="space-y-2">
              {project.overview.users.map((u, i) => (
                <li key={i} className="flex items-start gap-3 text-[15.5px] ink-soft">
                  <span className="text-accent shrink-0">—</span>
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Goals" className="col-span-12 md:col-span-6">
            <ul className="space-y-2">
              {project.overview.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-3 text-[15.5px] ink-soft">
                  <span className="text-accent shrink-0">—</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </Section>

      {/* Process */}
      <Section eyebrow="02 — Process" title="From research to a system that scales.">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <ProcessCard label="Research" body={project.process.research} num="01" />
          <ProcessCard label="User Flows" body={
            <ul className="space-y-2 mt-1">
              {project.process.flows.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] ink-soft">
                  <span className="mono text-[11px] muted shrink-0 w-5">{String(i + 1).padStart(2, "0")}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          } num="02" />
          <ProcessCard label="Wireframes" body={project.process.wireframes} num="03" />
          <ProcessCard label="Design System" body={project.process.designSystem} num="04" />
        </div>
      </Section>

      {/* Modules (Fleet Management) */}
      {project.modules && project.modules.length > 0 && (
        <Section eyebrow="03 — Modules" title="Four roles, one platform.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.modules.map((m, i) => (
              <a
                key={m.name}
                href={m.figma}
                target="_blank"
                rel="noreferrer"
                className="reveal proj-card group block bg-surface border border-line p-7"
                style={{ borderRadius: "20px", transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="mono text-[11px] uppercase tracking-[0.2em] muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display text-2xl font-semibold ink mt-1">{m.name}</h3>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="ink-soft group-hover:text-accent group-hover:rotate-[12deg] transition-all duration-300"
                  />
                </div>
                <p className="ink-soft text-[15px] leading-relaxed">{m.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.2em] ink group-hover:text-accent transition-colors">
                  Open Figma prototype <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* Solution */}
      <Section eyebrow={project.modules ? "04 — Solution" : "03 — Solution"} title="What got built.">
        <div>
          <h3 className="mono text-[11px] uppercase tracking-[0.22em] muted mb-4">Key features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl">
            {project.solution.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[16px] ink-soft">
                <span className="text-accent mt-1.5 shrink-0">◆</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Selected screens — full-bleed auto-scrolling mockup band */}
      <section className="py-16 md:py-24 border-t border-line overflow-hidden">
        <div className="container-x mb-10 md:mb-14 reveal">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="eyebrow mb-3">Selected screens</div>
              <h2 className="display text-[8vw] md:text-[3.4vw] lg:text-[3.6rem] font-semibold leading-[1.02] tracking-[-0.02em] ink">
                A glimpse of the work.
              </h2>
            </div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] muted">
              {project.gallery.length} screens · auto-scroll · hover to pause
            </p>
          </div>
        </div>
        <MockupBand images={project.gallery} speed={70} />
      </section>

      {/* Impact */}
      <Section eyebrow={project.modules ? "05 — Impact" : "04 — Impact"} title="Outcomes that mattered.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {project.impact.map((o, i) => (
            <div
              key={i}
              className="reveal bg-surface border border-line p-7"
              style={{ borderRadius: "20px", transitionDelay: `${i * 100}ms` }}
            >
              <div className="display text-3xl font-semibold ink mb-2">{String(i + 1).padStart(2, "0")}</div>
              <p className="ink-soft text-[15.5px] leading-relaxed">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* External links */}
      {(project.links.length > 0 || project.figma !== "#") && (
        <Section eyebrow="05 — Links" title="Explore the live product.">
          <div className="flex flex-wrap gap-3">
            {project.figma !== "#" && (
              <a
                href={project.figma}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                data-cursor-label="Figma"
                className="btn-primary"
              >
                Figma Prototype <ArrowUpRight size={14} />
              </a>
            )}
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                data-cursor-label="Open"
                className="btn-ghost"
              >
                {l.label} <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* Up next */}
      <section className="container-x py-20 md:py-28 border-t border-line">
        <div className="reveal">
          <div className="eyebrow mb-4">Up next</div>
          <Link
            to={`/work/${next.slug}`}
            data-cursor="view"
            data-cursor-label="Case study"
            className="group block"
          >
            <h3 className="display text-[12vw] md:text-[6vw] lg:text-[6rem] font-bold leading-[0.95] tracking-[-0.03em] ink group-hover:text-accent transition-colors">
              {next.name} <ArrowUpRight className="inline-block ml-2" size={48} strokeWidth={1.5} />
            </h3>
            <p className="mt-4 ink-soft text-[15.5px] max-w-xl">{next.teaser}</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Section = ({ eyebrow, title, children }) => (
  <section className="container-x py-20 md:py-28 border-t border-line">
    <div className="grid grid-cols-12 gap-8 md:gap-12">
      <div className="col-span-12 md:col-span-4 reveal">
        <div className="eyebrow mb-4">{eyebrow}</div>
        <h2 className="display text-[8vw] md:text-[3.4vw] lg:text-[3.8rem] font-semibold leading-[1.02] tracking-[-0.02em] ink">
          {title}
        </h2>
      </div>
      <div className="col-span-12 md:col-span-8 reveal">{children}</div>
    </div>
  </section>
);

const Block = ({ title, children, className = "" }) => (
  <div className={className}>
    <h3 className="mono text-[11px] uppercase tracking-[0.22em] muted mb-3">{title}</h3>
    {children}
  </div>
);

const ProcessCard = ({ label, body, num }) => (
  <div
    className="reveal col-span-12 md:col-span-6 bg-surface border border-line p-7 md:p-8"
    style={{ borderRadius: "20px" }}
  >
    <div className="flex items-baseline justify-between mb-4">
      <h3 className="display text-2xl font-semibold ink">{label}</h3>
      <span className="mono text-[11px] uppercase tracking-[0.22em] muted">{num}</span>
    </div>
    <div className="ink-soft text-[15.5px] leading-relaxed">{body}</div>
  </div>
);

const StatusPill = ({ status }) => {
  const map = {
    Live: { dot: "hsl(var(--accent))", label: "Live" },
    Ongoing: { dot: "#F59E0B", label: "Ongoing" },
    Shipped: { dot: "#10B981", label: "Shipped" },
  };
  const cfg = map[status] || map.Live;
  return (
    <span className="inline-flex items-center gap-1.5 mono text-[10.5px] uppercase tracking-[0.18em] muted">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: cfg.dot }} />
      {cfg.label}
    </span>
  );
};

export default CaseStudy;
