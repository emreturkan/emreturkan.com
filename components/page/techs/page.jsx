import TechsCards from "@/components/ui/techs-cards";
import { getTechs } from "@/lib/actions/supabase-tech";

const Techs = async () => {
  const techs = await getTechs();
  const categories = [
    "languages",
    "frontend",
    "backend",
    "mobile",
    "ui",
    "service",
    "store",
    "utils",
    "game",
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
            techs={techs.filter((tech) => tech.header === category)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Techs;
