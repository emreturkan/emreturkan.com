import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, KeyRound, LockKeyhole, PauseCircle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Spendwise — Google Ads Intelligence & Operations",
  description: "Spendwise is a Google Ads intelligence and operations platform under active development for small businesses and agencies.",
  alternates: { canonical: "/spendwise" },
  openGraph: { title: "Spendwise — Google Ads Intelligence & Operations", description: "Google Ads API use case, authorization model, safeguards, and data practices.", url: "/spendwise", type: "website" },
};

const reportingData = [
  "Campaign, ad group, keyword, and search-term performance",
  "Cost, clicks, conversions, and conversion value",
  "Device, location, network, and schedule performance",
  "Invalid-click and account-level reporting signals",
];

const approvedActions = [
  "Add negative keywords",
  "Pause campaigns or keywords",
  "Reduce bids or campaign budgets",
  "Create new campaigns in a paused state",
  "Activate a prepared campaign only after a separate confirmation",
];

export default function SpendwisePage() {
  return <article className="space-y-16">
    <header className="space-y-6">
      <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground"><span className="rounded-full border px-3 py-1.5">Product brief</span><span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-amber-700 dark:text-amber-300">Active development</span></div>
      <div className="space-y-4"><p className="font-mono text-sm text-muted-foreground">SPENDWISE / GOOGLE ADS API</p><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Turn advertising data into controlled, explainable action.</h1><p className="text-base leading-7 text-muted-foreground">Spendwise is a Google Ads intelligence and operations platform being developed by Emre Turkan for small businesses and agencies. Authorized users can understand performance, identify potential waste, prepare improvements, and apply narrowly scoped changes with explicit approval.</p></div>
      <div className="flex flex-wrap gap-3"><a href="mailto:emreturkan10@gmail.com?subject=Spendwise%20API%20inquiry" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">Contact the developer <ArrowRight className="h-4 w-4" /></a><Link href="/spendwise/privacy" className="inline-flex min-h-11 items-center rounded-lg border bg-card px-4 py-2 text-sm font-medium">Privacy details</Link></div>
    </header>

    <section className="rounded-2xl border bg-card p-6 sm:p-8"><p className="font-mono text-xs text-muted-foreground">CURRENT STATUS</p><h2 className="mt-3 text-2xl font-semibold">Private development and pilot preparation</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">The application is not presented as a finished public service. The current build includes authenticated multi-tenant workspaces, Google OAuth connection, reporting, reviewable recommendations, audit history, campaign preparation, and local-business lead operations. Production Google Ads access remains subject to Google&apos;s developer-token review and OAuth requirements.</p></section>

    <section className="space-y-6"><div><p className="font-mono text-xs text-muted-foreground">PRODUCT WORKFLOW</p><h2 className="mt-2 text-2xl font-semibold">One account owner, one controlled workflow</h2></div><ol className="grid gap-3 sm:grid-cols-2">{[
      ["01", "Connect", "A user connects only a Google Ads account they are authorized to access through Google OAuth."],
      ["02", "Analyze", "Spendwise retrieves permitted reporting and account-structure data through the Google Ads API."],
      ["03", "Review", "The product shows evidence and assumptions before any account change is prepared."],
      ["04", "Confirm", "Authorized users explicitly approve each supported mutation; every change is bounded and audited."],
    ].map(([number, title, body]) => <li key={number} className="rounded-xl border bg-card p-5"><span className="font-mono text-xs text-muted-foreground">{number}</span><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></li>)}</ol></section>

    <section className="space-y-6"><div><p className="font-mono text-xs text-muted-foreground">API USE CASE</p><h2 className="mt-2 text-2xl font-semibold">How Spendwise uses the Google Ads API</h2></div><div className="grid gap-4 sm:grid-cols-2"><InfoCard icon={BarChart3} title="Reporting and analysis" items={reportingData} /><InfoCard icon={PauseCircle} title="Customer-approved operations" items={approvedActions} /></div><div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm leading-6"><strong>Safety boundary:</strong> Spendwise does not autonomously publish ads, increase bids, increase budgets, or initiate advertising spend. Supported mutations require an authorized user&apos;s clear confirmation and are recorded in a tenant-scoped audit history.</div></section>

    <section className="space-y-6"><div><p className="font-mono text-xs text-muted-foreground">SECURITY &amp; CONTROL</p><h2 className="mt-2 text-2xl font-semibold">Designed around account ownership and least privilege</h2></div><div className="grid gap-3 sm:grid-cols-2"><Feature icon={KeyRound} title="OAuth authorization" body="Users grant access through Google OAuth and may disconnect the integration." /><Feature icon={LockKeyhole} title="Encrypted credentials" body="OAuth credentials and sensitive lead data are encrypted at rest and excluded from audit records." /><Feature icon={ShieldCheck} title="Tenant isolation" body="Every account, report, recommendation, and mutation is scoped to the authenticated organization." /><Feature icon={CheckCircle2} title="Review and audit" body="Role checks, bounded inputs, rate limits, explicit confirmations, and privacy-safe audit events protect operations." /></div></section>

    <section className="space-y-5"><div><p className="font-mono text-xs text-muted-foreground">INTERFACE DRAFT</p><h2 className="mt-2 text-2xl font-semibold">Development interface preview</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">This representative draft contains no customer or Google Ads data.</p></div><div className="overflow-hidden rounded-2xl border bg-[#0d1713] text-white"><div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div><p className="text-sm font-semibold">Spendwise overview</p><p className="mt-1 text-xs text-white/50">Illustrative interface · no live data</p></div><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Account connected</span></div><div className="grid gap-3 p-5 sm:grid-cols-3">{["Evidence reviewed", "Approval required", "Audit recorded"].map((label, index) => <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-white/50">STEP 0{index + 1}</p><p className="mt-6 text-sm font-medium">{label}</p></div>)}</div></div></section>

    <section className="space-y-5 border-t pt-10"><h2 className="text-xl font-semibold">Policies and requests</h2><div className="grid gap-3 sm:grid-cols-3"><PolicyLink href="/spendwise/privacy" title="Privacy policy" /><PolicyLink href="/spendwise/terms" title="Terms of use" /><PolicyLink href="/spendwise/data-deletion" title="Data deletion" /></div><p className="text-xs leading-5 text-muted-foreground">Spendwise is an independent product under development and is not affiliated with or endorsed by Google. Google Ads is a trademark of Google LLC.</p></section>
  </article>;
}

function InfoCard({ icon: Icon, title, items }) { return <div className="rounded-xl border bg-card p-5"><Icon className="h-5 w-5" /><h3 className="mt-4 font-semibold">{title}</h3><ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">{items.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" /><span>{item}</span></li>)}</ul></div>; }
function Feature({ icon: Icon, title, body }) { return <div className="flex gap-4 rounded-xl border bg-card p-5"><Icon className="mt-0.5 h-5 w-5 shrink-0" /><div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></div></div>; }
function PolicyLink({ href, title }) { return <Link href={href} className="group rounded-xl border bg-card p-4 transition-colors hover:bg-muted"><p className="font-medium">{title}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-medium">Read policy <ArrowRight className="h-3 w-3" /></span></Link>; }
