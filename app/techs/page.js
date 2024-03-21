import Techs from "@/components/page/techs/page";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: {
    default: "Techs | " + siteConfig.title,
    template: "%s | " + siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords + ", techs",
  url: siteConfig.url + "/techs",
  author: {
    name: siteConfig.creator,
    url: siteConfig.url + "/techs",
  },
  creator: siteConfig.creator,
};

const TechsPage = async () => {
  return <Techs />;
};

export default TechsPage;
