import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { ModeToggle } from "../ui/darkMode";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";

const SiteHeader = () => {
  return (
    <header>
      <div className="flex justify-between">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>ET</AvatarFallback>
        </Avatar>
        <Menubar>
          <MenubarMenu>
            <Link href={"/"}>
              <MenubarTrigger>Home</MenubarTrigger>
            </Link>
            <Link href={"/photos"}>
              <MenubarTrigger>Photos</MenubarTrigger>
            </Link>
            <Link href={"/bookmarks"}>
              <MenubarTrigger>Bookmarks</MenubarTrigger>
            </Link>
            <Link href={"/techs"}>
              <MenubarTrigger>Techs</MenubarTrigger>
            </Link>
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
