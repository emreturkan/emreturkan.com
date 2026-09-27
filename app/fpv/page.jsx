import { ArrowDownRight, BatteryCharging, CircleDot, Radio, ScanEye, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "FPV Setup & Gear",
  description:
    "Emre Turkan's analog FPV setup: a Martian 2 based 5-inch build, FlySky FS-i6X radio, Eachine EV800 goggles, and a planned ELRS transition.",
  alternates: { canonical: `${siteConfig.url}/fpv` },
  openGraph: {
    title: "FPV Setup & Gear | Emre Turkan",
    description: "My current 5-inch analog FPV setup and the next steps in my flying journey.",
    url: `${siteConfig.url}/fpv`,
    type: "website",
  },
};

const buildParts = [
  ["Frame", "Martian 2", "5-inch freestyle build"],
  ["Motors", "XING 2207", "Brushless motors"],
  ["Flight controller", "T-Motor FC", "Flight control"],
  ["FPV camera", "Caddx Ratel 2", "Analog video"],
  ["Video transmitter", "TX1200", "Analog · 5.8 GHz"],
  ["Receiver", "FlySky FS-iA6B", "AFHDS 2A"],
  ["Battery", "4S 1550 mAh", "Current pack"],
];

const currentGear = [
  { icon: Radio, label: "RADIO", name: "FlySky FS-i6X", detail: "AFHDS 2A · current controller" },
  { icon: ScanEye, label: "GOGGLES", name: "Eachine EV800", detail: "Analog 5.8 GHz · no DVR on my unit" },
  { icon: BatteryCharging, label: "CHARGER", name: "iMAX B6 style", detail: "Exact model / authenticity unconfirmed" },
];

const nextGear = [
  { number: "01", name: "BETAFPV Air65 II", detail: "Analog · ELRS · considering the Freestyle version" },
  { number: "02", name: "RadioMaster Pocket", detail: "ELRS radio for both the Air65 II and my 5-inch" },
  { number: "03", name: "ELRS nano receiver", detail: "Planned swap for the FlySky receiver in my 5-inch" },
  { number: "04", name: "1S power setup", detail: "320 mAh BT2.0 batteries + multi-port 1S charger" },
];

export default function FpvPage() {
  return (
    <article>
      <header className="border-b border-border/70 pb-8">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          Flight notes / 001
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">My FPV setup<span className="text-emerald-600 dark:text-emerald-400">.</span></h1>
        <p className="mt-4 max-w-lg text-[15px] leading-7 text-muted-foreground">
          The parts I fly with today, and where I want to take the setup next. A 5-inch analog build now; a tiny whoop and ELRS on the horizon.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
          <span className="rounded-full border border-border bg-card px-3 py-1.5">5″ freestyle</span>
          <span className="rounded-full border border-border bg-card px-3 py-1.5">analog video</span>
          <span className="rounded-full border border-border bg-card px-3 py-1.5">Istanbul, TR</span>
        </div>
      </header>

      <section className="mt-10" aria-labelledby="current-build">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">01 / In the air</p>
            <h2 id="current-build" className="mt-1 text-xl font-semibold tracking-tight">The 5-inch build</h2>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-700 dark:text-emerald-300">CURRENT</span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative flex min-h-44 flex-col justify-between overflow-hidden border-b border-border bg-gradient-to-br from-emerald-500/10 via-background to-background p-6 sm:min-h-48">
            <div className="pointer-events-none absolute -right-8 -top-20 h-64 w-64 rounded-full border border-emerald-500/20" aria-hidden="true" />
            <div className="pointer-events-none absolute right-5 -top-7 h-48 w-48 rounded-full border border-emerald-500/20" aria-hidden="true" />
            <div className="pointer-events-none absolute right-16 top-4 h-28 w-28 rounded-full border border-emerald-500/20" aria-hidden="true" />
            <CircleDot className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Custom analog quad</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">Martian 2 / 5″</p>
            </div>
          </div>
          <dl className="divide-y divide-border/60 px-5 sm:px-6">
            {buildParts.map(([label, name, detail]) => (
              <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-3 py-3.5 sm:grid-cols-[9rem_1fr]">
                <dt className="font-mono text-xs text-muted-foreground">{label}</dt>
                <dd className="min-w-0 text-sm font-medium">{name}<span className="ml-2 font-normal text-muted-foreground">/ {detail}</span></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="ground-gear">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">02 / On the ground</p>
        <h2 id="ground-gear" className="mt-1 text-xl font-semibold tracking-tight">The rest of the kit</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {currentGear.map(({ icon: Icon, label, name, detail }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-4">
              <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.7} aria-hidden="true" />
              <p className="mt-6 font-mono text-[10px] tracking-[0.15em] text-muted-foreground">{label}</p>
              <h3 className="mt-1 text-sm font-semibold">{name}</h3>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="next-setup">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">03 / Next up</p>
            <h2 id="next-setup" className="mt-1 text-xl font-semibold tracking-tight">Going ELRS</h2>
          </div>
          <ArrowDownRight className="mt-2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">The plan is to fly a small indoor whoop and move both drones onto one radio. These are planned parts, not gear I own yet.</p>
        <ol className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
          {nextGear.map(({ number, name, detail }) => (
            <li key={number} className="flex gap-4 border-b border-border/60 p-4 last:border-b-0 sm:p-5">
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">{number}</span>
              <div>
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <aside className="mt-10 flex items-start gap-3 rounded-xl border border-dashed border-border px-4 py-4 text-sm text-muted-foreground">
        <Wrench className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <p>This is my personal setup log. I&apos;ll add photos and update the parts list as the build evolves.</p>
      </aside>
    </article>
  );
}
