import React from "react";
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
    <div className="grid gap-4">
      {categories.map((category) => (
        <TechsCards
          key={category}
          title={category}
          techs={techs.filter((tech) => tech.header === category)}
        />
      ))}
    </div>
  );
};

export default Techs;
