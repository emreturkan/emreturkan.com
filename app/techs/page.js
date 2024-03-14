import TechsCards from "@/components/ui/techs-cards";
import { getTechs } from "@/lib/actions/supabase-tech";

const TechsPage = async () => {
  const techs = await getTechs();

  return (
    <div className="grid gap-4">
      <TechsCards title="languages" techs={techs} />
      <TechsCards title="frontend" techs={techs} />
      <TechsCards title="ui" techs={techs} />
      <TechsCards title="service" techs={techs} />
      <TechsCards title="store" techs={techs} />
      <TechsCards title="utils" techs={techs} />
    </div>
  );
};

export default TechsPage;
