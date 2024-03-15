"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { ModeToggle } from "../ui/darkMode";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";
import { motion } from "framer-motion";
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
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>ET</AvatarFallback>
        </Avatar>
        <Menubar>
          <MenubarMenu>
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`${
                  activeTab === link.id ? "" : ""
                } relative rounded-full   text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === link.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-nav mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    animate={{
                      scale: 1.2,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <MenubarTrigger>{link.name}</MenubarTrigger>
              </Link>
            ))}
          </MenubarMenu>
        </Menubar>
        <div className="flex items-center gap-2">
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
