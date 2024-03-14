import { getTechs } from "@/lib/actions/supabase-tech";

const TechsPage = async () => {
  const techs = await getTechs();

  return (
    <div>
      <ul>
        {techs?.map((tech) => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechsPage;
