import TechsCards from "@/components/ui/techs-cards";
import { getTechs } from "@/lib/actions/supabase-tech";

// Preferred display order; any header found in the data but not listed
// here is appended automatically, so new categories just work.
const CATEGORY_ORDER = [
  "languages",
  "frontend",
  "framework",
  "backend",
  "database",
  "mobile",
  "ui",
  "service",
  "store",
  "utils",
  "ai",
  "game",
];

const Techs = async () => {
  const techs = (await getTechs()) || [];

  const present = [
    ...new Set(techs.map((t) => (t.header || "").toLowerCase()).filter(Boolean)),
  ];
  const categories = [
    ...CATEGORY_ORDER.filter((c) => present.includes(c)),
    ...present.filter((c) => !CATEGORY_ORDER.includes(c)).sort(),
  ];

  return (
    <div className="fade-in-up">
      <h1 className="text-xl font-medium tracking-tight">Tech Stack</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Technologies I work with
      </p>

      <div className="mt-8 space-y-10">
        {categories.map((category, index) => (
          <TechsCards
            key={category}
            title={category}
            techs={techs.filter(
              (tech) => (tech.header || "").toLowerCase() === category
            )}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Techs;
