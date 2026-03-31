"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../ui/darkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const SiteHeader = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { id: 1, name: "Home", path: "/", label: "Go to homepage" },
    { id: 2, name: "Photos", path: "/photos", label: "View photography portfolio" },
    { id: 3, name: "Bookmarks", path: "/bookmarks", label: "Browse bookmarked resources" },
    { id: 4, name: "Tech", path: "/techs", label: "View tech stack" },
    { id: 5, name: "Games", path: "/games", label: "View gaming collection" },
  ];

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header role="banner">
      <nav
        className="flex items-center justify-between"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="group"
            aria-label="Emre Turkan - Go to homepage"
          >
            <Avatar className="h-10 w-10 rounded-xl ring-1 ring-border/70 transition-all duration-300 group-hover:ring-border group-focus-visible:ring-2 group-focus-visible:ring-ring">
              <AvatarImage
                src="https://i1.sndcdn.com/artworks-000578134589-jnit8m-t500x500.jpg"
                alt=""
                className="rounded-xl"
                loading="eager"
                fetchPriority="high"
              />
              <AvatarFallback className="rounded-xl" aria-hidden="true">
                ET
              </AvatarFallback>
            </Avatar>
          </Link>
          <ul
            className="hidden sm:flex items-center gap-1 list-none m-0 p-0"
            role="menubar"
          >
            {navLinks.map((link) => (
              <li key={link.id} role="none">
                <Link
                  href={link.path}
                  role="menuitem"
                  aria-label={link.label}
                  aria-current={mounted && isActive(link.path) ? "page" : undefined}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    mounted && isActive(link.path) && "text-foreground bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default SiteHeader;
