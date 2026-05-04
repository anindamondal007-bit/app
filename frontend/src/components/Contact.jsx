import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { profile } from "../mock";

// Build wa.me link from phone number — strip anything non-numeric.
const waNumber = profile.phone.replace(/\D/g, "");
const waLink = `https://wa.me/${waNumber}`;

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-8 md:gap-14">
          <div className="col-span-12 md:col-span-5 reveal">
            <div className="eyebrow mb-4">(06) — Contact</div>
            <h2 className="display text-[12vw] md:text-[6vw] lg:text-[6rem] font-bold leading-[0.92] tracking-[-0.04em] ink">
              Let's build<br />
              <span className="text-accent">something</span><br />
              <span style={{ color: "hsl(var(--muted) / 0.55)" }}>impactful.</span>
            </h2>

            <div className="mt-10 space-y-4">
              <ContactRow icon={<Mail size={16} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={<Phone size={16} />} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
              <ContactRow icon={<MapPin size={16} />} label="Location" value={profile.location} />
              <ContactRow icon={<ArrowUpRight size={16} />} label="LinkedIn" value="linkedin.com/in/aninda-mondal" href={profile.linkedin} external />
              <ContactRow icon={<ArrowUpRight size={16} />} label="Behance" value="behance.net/anindasundar" href={profile.behance} external />
            </div>
          </div>

          {/* Right: single CTA panel */}
          <div className="col-span-12 md:col-span-7 reveal">
            <div
              className="bg-surface border border-line p-8 md:p-12 flex flex-col items-start justify-between min-h-[420px]"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <span className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Available for new projects
                </span>
                <h3 className="display text-3xl md:text-4xl lg:text-[2.8rem] font-semibold leading-[1.08] tracking-[-0.02em] ink mt-6 max-w-xl">
                  Have a product in mind? Send me a message on WhatsApp — I usually reply within a few hours.
                </h3>
                <p className="mt-5 ink-soft text-[15.5px] leading-relaxed max-w-md">
                  Briefly share what you're building, your timeline and any context. I'll get back with next steps.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={16} /> Send Message
                </a>
                <span className="mono text-[11px] uppercase tracking-[0.2em] muted">
                  Opens WhatsApp · {profile.phone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactRow = ({ icon, label, value, href, external }) => {
  const Tag = href ? "a" : "div";
  const props = href ? (external ? { href, target: "_blank", rel: "noreferrer" } : { href }) : {};
  return (
    <Tag
      {...props}
      className="group flex items-center justify-between gap-4 py-3 border-b border-line hover:border-[hsl(var(--ink))] transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="h-8 w-8 grid place-items-center rounded-full border border-line group-hover:bg-ink group-hover:text-[hsl(var(--bg))] transition-colors">
          {icon}
        </span>
        <div>
          <div className="mono text-[10.5px] uppercase tracking-[0.22em] muted">{label}</div>
          <div className="ink text-[15px]">{value}</div>
        </div>
      </div>
      {href && <ArrowUpRight size={16} className="ink-soft group-hover:text-accent group-hover:rotate-[12deg] transition-all" />}
    </Tag>
  );
};

export default Contact;
