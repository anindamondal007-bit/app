import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../mock";
import Footer from "../components/Footer";

const AllProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, []);

  return (
    <div className="page-enter grain bg-bg ink min-h-screen">
      {/* Top bar */}
      <header className="container-x flex items-center justify-between h-16">
        <button
          onClick={() => navigate(-1)}
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
          <div className="eyebrow mb-6">All Projects · {featuredProjects.length}</div>
          <h1 className="display text-[14vw] md:text-[8vw] lg:text-[7.5rem] font-bold leading-[0.92] tracking-[-0.04em] ink">
            The full<br />
            <span style={{ color: "hsl(var(--muted) / 0.55)" }}>archive.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed ink-soft">
            Every shipped product, in one place. Each card opens a dedicated case study with the full process, decisions and outcome.
          </p>
        </div>
      </section>

      {/* Vertical list of all projects */}
      <section className="container-x pb-24 md:pb-32 border-t border-line pt-12 md:pt-16">
        <div className="space-y-5 md:space-y-6">
          {featuredProjects.map((p, i) => (
            <article
              key={p.id}
              onClick={() => navigate(`/work/${p.slug}`)}
              className="reveal proj-card group cursor-pointer bg-surface border border-line overflow-hidden"
              style={{ borderRadius: "20px", transitionDelay: `${i * 70}ms` }}
            >
              <div className="grid grid-cols-12 gap-0">
                {/* Image */}
                <div
                  className="col-span-12 md:col-span-4 m-3 md:m-3 overflow-hidden"
                  style={{
                    borderRadius: "14px",
                    background: p.bgTint || "hsl(var(--ink) / 0.04)",
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden grid place-items-center p-5 md:p-6">
                    <img
                      src={p.cover}
                      alt={p.name}
                      loading="lazy"
                      className="cover-img max-h-full max-w-full object-contain transition-transform duration-700 ease-out drop-shadow-[0_16px_36px_rgba(11,27,58,0.16)]"
                    />
                  </div>
                </div>

                {/* Body */}
                <div className="col-span-12 md:col-span-8 px-6 md:px-8 py-6 md:py-7 flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="mono text-[11px] uppercase tracking-[0.2em] muted">
                        {String(i + 1).padStart(2, "0")} · {p.year}
                      </span>
                      <span className="muted">·</span>
                      <span className="mono text-[10.5px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-[hsl(var(--ink)/0.06)] ink-soft">
                        {p.category}
                      </span>
                    </div>
                    <StatusPill status={p.status} />
                  </div>

                  <h2 className="display text-2xl md:text-3xl font-semibold tracking-[-0.02em] ink leading-[1.1]">
                    {p.name}
                  </h2>
                  <p className="mt-3 ink-soft text-[15px] leading-relaxed max-w-2xl">
                    {p.teaser}
                  </p>

                  <div className="mt-auto pt-6 flex items-center gap-2 ink group-hover:text-accent transition-colors">
                    <span className="mono text-[11px] uppercase tracking-[0.2em] font-medium">View case study</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-[12deg] group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
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

export default AllProjects;
