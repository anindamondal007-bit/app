import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "../mock";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setSubmitting(true);
    // Mock submit — store in localStorage so the action feels real until backend is wired.
    const all = JSON.parse(localStorage.getItem("asm-messages") || "[]");
    all.unshift({ ...form, at: new Date().toISOString() });
    localStorage.setItem("asm-messages", JSON.stringify(all));
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setForm({ name: "", email: "", company: "", budget: "", message: "" });
    toast.success("Message sent. I'll get back within 24 hours.");
  };

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

          <div className="col-span-12 md:col-span-7 reveal">
            <form
              onSubmit={onSubmit}
              className="bg-surface border border-line rounded-lg p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Your name" value={form.name} onChange={update("name")} placeholder="Jane Doe" required />
                <Field label="Email" type="email" value={form.email} onChange={update("email")} placeholder="jane@studio.com" required />
                <Field label="Company / Team" value={form.company} onChange={update("company")} placeholder="Optional" />
                <Field label="Budget" value={form.budget} onChange={update("budget")} placeholder="e.g. $5k – $15k" />
              </div>
              <div className="mt-5">
                <label className="mono text-[11px] uppercase tracking-[0.22em] muted">
                  Tell me about your project
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  placeholder="What problem are we solving? Timeline, scope, anything that helps."
                  className="mt-2 w-full bg-transparent outline-none border-b py-3 text-[15px] ink placeholder:text-[hsl(var(--muted))] focus:border-[hsl(var(--ink))] transition-colors"
                  style={{ borderColor: "hsl(var(--line))" }}
                />
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[12.5px] muted max-w-xs">
                  Average reply time — within 24 hours, Mon–Fri.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"} <Send size={14} />
                </button>
              </div>
            </form>
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

const Field = ({ label, type = "text", value, onChange, placeholder, required }) => (
  <div>
    <label className="mono text-[11px] uppercase tracking-[0.22em] muted">{label}{required && <span className="text-accent">*</span>}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="mt-2 w-full bg-transparent outline-none border-b py-2.5 text-[15px] ink placeholder:text-[hsl(var(--muted))] focus:border-[hsl(var(--ink))] transition-colors"
      style={{ borderColor: "hsl(var(--line))" }}
    />
  </div>
);

export default Contact;
