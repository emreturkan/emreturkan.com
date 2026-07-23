import Techs from "@/components/page/techs/page";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Tech Stack - React, Next.js, TypeScript & Modern Web Technologies",
  description:
    "Explore Emre Turkan's tech stack and development tools. Expertise in React, Next.js, TypeScript, Tailwind CSS, Node.js, and modern full stack technologies for building high-performance web applications.",
  keywords: [
    "tech stack full stack developer",
    "React developer skills",
    "Next.js expert",
    "TypeScript developer",
    "full stack technologies 2024",
    "web development tools",
    "JavaScript frameworks",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "REST API",
    "Git version control",
    "Figma design",
    "Vercel deployment",
    "modern web development stack",
  ],
  openGraph: {
    title: "Tech Stack | Emre Turkan - Full Stack Developer",
    description:
      "Technologies and tools I use: React, Next.js, TypeScript, Tailwind CSS, and more.",
    url: `${siteConfig.url}/techs`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Emre Turkan Tech Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Stack | Emre Turkan",
    description: "My development toolkit: React, Next.js, TypeScript & more",
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/techs`,
  },
};

const TechsPage = async () => {
  return (
    <section>
      <Techs />
    </section>
  );
};

export default TechsPage;
