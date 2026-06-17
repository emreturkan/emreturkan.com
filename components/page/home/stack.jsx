import Link from "next/link";
import TechLogo from "@/components/ui/tech-logo";
import { MotionSection } from "@/components/ui/motion-wrapper";

// ── The apps & tools I actually use day to day. Edit freely. ──────────
// `name` must match an icon key in lib/tech-icons.js (case/space-insensitive).
// `color` forces an icon tint (hex, no #) so near-black marks stay visible on
// the dark tile — e.g. GitHub/Vercel/Cursor.
const tools = [
  { name: "VS Code", href: "https://code.visualstudio.com" },
  { name: "Claude", href: "https://claude.ai" },
  { name: "Cursor", href: "https://cursor.com", color: "ffffff" },
  { name: "GitHub", href: "https://github.com", color: "ffffff" },
  { name: "Bitbucket", href: "https://bitbucket.org" },
  { name: "Raycast", href: "https://raycast.com" },
  { name: "YouTube Music", href: "https://music.youtube.com" },
  { name: "Figma", href: "https://figma.com" },
  { name: "Vercel", href: "https://vercel.com", color: "ffffff" },
];

const StackSection = () => {
  return (
    <MotionSection className="mt-16">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Stack
      </h2>

      {/* grid columns == number of tools -> single, full-width desktop row.
          If you change the tool count, update `sm:grid-cols-9`. */}
      <div className="mt-5 grid grid-cols-5 gap-2.5 sm:grid-cols-9 sm:gap-2">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tool.name}
            className="group relative flex aspect-square items-center justify-center rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:ring-white/25 hover:shadow-lg"
          >
            <TechLogo name={tool.name} color={tool.color} className="h-7 w-7" />
            <span className="pointer-events-none absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 translate-y-1 scale-90 whitespace-nowrap rounded-md bg-foreground px-2 py-1 font-mono text-[10px] font-medium text-background opacity-0 shadow-md transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              {tool.name}
            </span>
          </Link>
        ))}
      </div>
    </MotionSection>
  );
};

export default StackSection;
