import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { featuredProjects } from "../mock";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="container-x">
        {/* Header */}
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
              Real products I shipped end-to-end. Each story covers the messy middle — problem, process, decisions and outcome.
            </p>
          </div>
        </div>

        {/* Single vertical flow of case-study cards */}
        <div className="space-y-8 md:space-y-10">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => navigate(`/work/${p.slug}`)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  const ref = useRef(null);

  // Subtle 3D tilt on mouse move (desktop)
  const onMove = (e) => {
    if (!ref.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const img = ref.current.querySelector(".cover-img");
    if (img) {
      img.style.transform = `scale(1.04) translate3d(${x * -12}px, ${y * -12}px, 0)`;
    }
  };
  const onLeave = () => {
    const img = ref.current?.querySelector(".cover-img");
    if (img) img.style.transform = "scale(1) translate3d(0,0,0)";
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      data-cursor="view"
      data-cursor-label="Case study"
      className="reveal proj-card group relative overflow-hidden cursor-pointer bg-surface border border-line"
      style={{
        borderRadius: "24px",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="grid grid-cols-12 gap-0 md:gap-2 items-stretch">
        {/* Left: copy */}
        <div className="col-span-12 md:col-span-5 p-7 md:p-10 lg:p-12 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <span className="mono text-[11px] uppercase tracking-[0.22em] muted">{project.index} · {project.year}</span>
            <StatusPill status={project.status} />
          </div>

          <h3 className="display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] ink leading-[1.02]">
            {project.name}
          </h3>

          <p className="mt-4 ink-soft text-[15.5px] leading-relaxed max-w-md">
            {project.teaser}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="mono text-[10.5px] uppercase tracking-[0.16em] px-3 py-1.5 rounded-full bg-[hsl(var(--ink)/0.06)] ink-soft">
              {project.category}
            </span>
          </div>

          <div className="mt-auto pt-8 flex items-center gap-2 ink group-hover:text-accent transition-colors">
            <span className="mono text-[12px] uppercase tracking-[0.2em] font-medium">View case study</span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-[12deg] group-hover:translate-x-0.5"
            />
          </div>
        </div>

        {/* Right: image */}
        <div className="col-span-12 md:col-span-7 relative overflow-hidden m-0 md:m-3" style={{ borderRadius: "16px" }}>
          <div className="aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-[hsl(var(--ink)/0.04)] rounded-[16px]">
            <img
              src={project.cover}
              alt={project.name}
              className="cover-img w-full h-full object-cover transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

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

export default Projects;
