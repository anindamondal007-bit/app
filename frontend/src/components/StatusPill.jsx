import React from "react";

/**
 * Centralised status pill used across featured cards, case study hero,
 * and the All Projects list. Solid tinted backgrounds with bold text,
 * tuned for both light and dark modes via Tailwind's dark: variants.
 */
const STYLES = {
  Live: {
    light: "bg-emerald-100 text-emerald-800 border-emerald-200",
    dark: "dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30",
    dot: "bg-emerald-500",
  },
  Ongoing: {
    light: "bg-amber-100 text-amber-900 border-amber-200",
    dark: "dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30",
    dot: "bg-amber-500",
  },
  Shipped: {
    light: "bg-sky-100 text-sky-900 border-sky-200",
    dark: "dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/30",
    dot: "bg-sky-500",
  },
};

const StatusPill = ({ status = "Live", className = "" }) => {
  const cfg = STYLES[status] || STYLES.Live;
  return (
    <span
      className={`inline-flex items-center gap-2 mono text-[10.5px] font-semibold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full border ${cfg.light} ${cfg.dark} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
};

export default StatusPill;
