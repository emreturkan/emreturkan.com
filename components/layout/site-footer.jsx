"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Europe/Istanbul",
});

const SiteFooter = () => {
  // Empty on the server and first client render to avoid hydration mismatch;
  // the live clock fills in once mounted.
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-20 flex items-center justify-between border-t border-border/50 pt-6 font-mono text-xs text-muted-foreground">
      <a
        href={`mailto:${siteConfig.links.email}`}
        className="transition-colors duration-200 hover:text-foreground"
      >
        {siteConfig.links.email}
      </a>
      <span className="flex items-center gap-1.5 tabular-nums">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Istanbul
        <span className="min-w-[4.5rem] text-right">{time || "--:--:--"}</span>
      </span>
    </footer>
  );
};

export default SiteFooter;
