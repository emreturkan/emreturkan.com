import {
  GithubIcon,
  GlobalIcon,
  NpmIcon,
  TextIcon,
  WebsiteIcon,
  YoutubeIcon,
} from "@/assets/icons";
import React from "react";

const useTagIcon = (tag) => {
  switch (tag) {
    case "youtube":
      return <YoutubeIcon className="w-4 h-4" />;
    case "read":
      return <TextIcon className="w-4 h-4" />;
    case "link":
      return <GlobalIcon className="w-4 h-4" />;
    case "website":
      return <WebsiteIcon className="w-4 h-4" />;
    case "code":
      return <GithubIcon className="w-4 h-4" />;
    case "npm":
      return <NpmIcon className="w-4 h-4" />;
    default:
      return <GlobalIcon className="w-4 h-4" />;
  }
};

export default useTagIcon;
