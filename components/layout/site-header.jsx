import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../ui/darkMode";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";
import SiteNavs from "./site-navs";
import DrawerNavs from "./drawer-navs";
import Link from "next/link";

const SiteHeader = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Photos", path: "/photos" },
    { id: 3, name: "Bookmarks", path: "/bookmarks" },
    { id: 4, name: "Technology", path: "/techs" },
    { id: 5, name: "Guestbook", path: "/guestbook" },
  ];

  return (
    <header>
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Avatar>
            <AvatarImage
              src="https://i1.sndcdn.com/artworks-000578134589-jnit8m-t500x500.jpg"
              alt="emreturkan.com avatar"
            />
            <AvatarFallback>ET</AvatarFallback>
          </Avatar>
        </Link>

        <SiteNavs navLinks={navLinks} />
        <div className="flex items-center gap-2">
          <DrawerNavs navLinks={navLinks} />
          <ModeToggle />
          <Button size="xs" variant="outline" aria-label="Github">
            <GithubIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
