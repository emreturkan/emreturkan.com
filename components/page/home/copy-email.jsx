"use client";

import { useState, useEffect, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const EMAIL = siteConfig.links.email;

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked — fall back to opening the mail client
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  // Press "c" anywhere (unless typing) to copy.
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        document.activeElement?.isContentEditable ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      ) {
        return;
      }
      if (e.key === "c" || e.key === "C") copy();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [copy]);

  return (
    <motion.button
      type="button"
      onClick={copy}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      aria-label={`Copy email address ${EMAIL}`}
      className="group mt-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-500" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? (
        <span>copied to clipboard</span>
      ) : (
        <span className="flex items-center gap-1.5">
          press
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-foreground shadow-sm">
            c
          </kbd>
          to copy my email
        </span>
      )}
    </motion.button>
  );
};

export default CopyEmail;
