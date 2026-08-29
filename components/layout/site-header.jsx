"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../ui/darkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Photos", path: "/photos" },
  { name: "Bookmarks", path: "/bookmarks" },
  { name: "Tech", path: "/techs" },
  { name: "Spendwise", path: "/spendwise" },
];

const SiteHeader = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header role="banner">
      <nav aria-label="Main navigation">
        <div className="flex items-center justify-between">
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
            <ul className="m-0 hidden list-none items-center gap-1 p-0 sm:flex">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-1.5 font-mono text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive(link.path) && "bg-muted text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ModeToggle />
        </div>
        <ul className="mt-4 grid grid-cols-5 gap-1 sm:hidden">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center justify-center rounded-lg px-2 font-mono text-xs font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive(link.path) && "bg-muted text-foreground"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
