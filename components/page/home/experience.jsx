import Link from "next/link";
import { MotionSection } from "@/components/ui/motion-wrapper";

// ── Edit your work history here (most recent first) ──────────────────
// Fill in the real periods/descriptions and add your previous roles.
const experiences = [
  {
    period: "2023 — Now",
    role: "Full Stack Developer",
    company: "EnterERP",
    companyUrl: "https://entererp.com",
    description:
      "Building ERP & e-commerce platforms end-to-end with Next.js, React and Node.js — inventory, orders and reporting dashboards, plus banking, POS, marketplace and shipping API integrations.",
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "Monachus Bilişim Sistemleri",
    description:
      "Built web apps with React, Next.js and Supabase in an NX monorepo, and shipped them on Linux & Docker.",
  },
];

const Experience = () => {
  if (!experiences.length) return null;

  return (
    <MotionSection className="mt-16">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Experience
      </h2>

      <div className="mt-5 border-l border-border/60">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="relative pl-5 pb-6 last:pb-0"
          >
            <span
              className="absolute -left-[3.5px] top-[7px] h-[7px] w-[7px] rounded-full bg-foreground/60 ring-4 ring-background"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-muted-foreground/70">
              {exp.period}
            </p>
            <h3 className="mt-0.5 text-sm font-medium text-foreground">
              {exp.role}
              <span className="text-muted-foreground"> · </span>
              {exp.companyUrl ? (
                <Link
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-muted-foreground/40 underline-offset-2 transition-colors duration-200 hover:decoration-foreground"
                >
                  {exp.company}
                </Link>
              ) : (
                exp.company
              )}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
};

export default Experience;
