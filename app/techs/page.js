import Techs from "@/components/page/techs/page";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Tech Stack",
  description:
    "Technologies and tools used by Emre Turkan. Including React, Next.js, TypeScript, Node.js, and more frontend and backend technologies.",
  keywords: [
    "tech stack",
    "React developer skills",
    "Next.js developer",
    "TypeScript",
    "frontend technologies",
    "web development tools",
    "JavaScript frameworks",
  ],
  openGraph: {
    title: "Tech Stack | Emre Turkan",
    description: "Technologies and tools I work with as a Frontend Developer.",
    url: `${siteConfig.url}/techs`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/techs`,
  },
};

const TechsPage = async () => {
  return <Techs />;
};

export default TechsPage;
