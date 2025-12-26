"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../ui/darkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SiteHeader = () => {
  const pathname = usePathname();

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Photos", path: "/photos" },
    { id: 3, name: "Bookmarks", path: "/bookmarks" },
    { id: 4, name: "Tech", path: "/techs" },
  ];

  return (
    <header>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="group">
            <Avatar className="h-10 w-10 rounded-xl ring-1 ring-border/70 transition-all duration-300 group-hover:ring-border">
              <AvatarImage
                src="https://i1.sndcdn.com/artworks-000578134589-jnit8m-t500x500.jpg"
                alt="Emre Turkan"
                className="rounded-xl"
              />
              <AvatarFallback className="rounded-xl">ET</AvatarFallback>
            </Avatar>
          </Link>
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground rounded-lg",
                  pathname === link.path && "text-foreground bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default SiteHeader;
