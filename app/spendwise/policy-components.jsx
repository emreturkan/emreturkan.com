import Link from "next/link";

export function PolicyPage({ title, children }) {
  return <article><Link href="/spendwise" className="font-mono text-xs text-muted-foreground hover:text-foreground">← Spendwise</Link><header className="mt-8 border-b pb-8"><h1 className="text-3xl font-semibold tracking-tight">{title}</h1><p className="mt-3 font-mono text-xs text-muted-foreground">Last updated: August 29, 2026</p></header><div className="mt-10 space-y-10 text-sm leading-7 text-muted-foreground">{children}</div></article>;
}

export function Section({ title, children }) {
  return <section><h2 className="text-lg font-semibold text-foreground">{title}</h2><div className="mt-3 space-y-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">{children}</div></section>;
}
