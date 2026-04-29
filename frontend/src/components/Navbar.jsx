import React, { useEffect, useState } from "react";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "../mock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    const saved = localStorage.getItem("asm-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("asm-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("asm-theme", "light");
    }
    window.dispatchEvent(new CustomEvent("asm-theme", { detail: next ? "dark" : "light" }));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{ background: scrolled ? "hsl(var(--bg) / 0.78)" : "transparent", borderBottom: scrolled ? "1px solid hsl(var(--line))" : "1px solid transparent" }}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="display text-xl font-bold tracking-tight ink">A.S.M</span>
          <span className="hidden sm:inline mono text-[10px] uppercase tracking-[0.3em] muted group-hover:text-accent transition-colors">
            — UI/UX
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm ink-soft hover:ink link-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="h-9 w-9 grid place-items-center rounded-full border border-line hover:bg-ink hover:text-[hsl(var(--bg))] transition-colors"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a href={`mailto:${profile.email}`} className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-[13px]">
            Hire me <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
