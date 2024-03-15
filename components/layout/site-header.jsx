"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../ui/darkMode";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";
import SiteNavs from "./site-navs";
import { useState } from "react";
import DrawerNavs from "./drawer-navs";

const SiteHeader = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Photos", path: "/photos" },
    { id: 3, name: "Bookmarks", path: "/techs" },
    { id: 4, name: "Techs", path: "/techs" },
  ];
  let [activeTab, setActiveTab] = useState(navLinks[0].id);
  return (
    <header>
      <div className="flex justify-between">
        <Avatar>
          <AvatarImage src="https://i1.sndcdn.com/artworks-000578134589-jnit8m-t500x500.jpg" />
          <AvatarFallback>ET</AvatarFallback>
        </Avatar>

        <SiteNavs
          navLinks={navLinks}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="flex items-center gap-2">
          <DrawerNavs
            navLinks={navLinks}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <ModeToggle />
          <Button size="xs" variant="outline">
            <GithubIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
