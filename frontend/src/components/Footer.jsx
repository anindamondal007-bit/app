import React from "react";
import { profile } from "../mock";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow mb-4">(§) — Get in touch</div>
            <a
              href={`mailto:${profile.email}`}
              className="display text-[12vw] md:text-[7vw] lg:text-[7.5rem] font-bold leading-[0.92] tracking-[-0.04em] ink hover:text-accent transition-colors block"
            >
              Say hello{"."}
            </a>
          </div>
          <div className="col-span-12 md:col-span-4 space-y-2">
            <a href={`mailto:${profile.email}`} className="block ink-soft hover:ink link-underline text-sm">{profile.email}</a>
            <a href={`tel:${profile.phone}`} className="block ink-soft hover:ink link-underline text-sm">{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block ink-soft hover:ink link-underline text-sm">LinkedIn ↗</a>
            <a href={profile.behance} target="_blank" rel="noreferrer" className="block ink-soft hover:ink link-underline text-sm">Behance ↗</a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="mono text-[11px] uppercase tracking-[0.22em] muted">
            © {new Date().getFullYear()} Aninda Sundar Mondal — Built with care.
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] ink-soft hover:text-accent"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
