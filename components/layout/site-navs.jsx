"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { usePathname } from "next/navigation";

const SiteNavs = ({ drawer, navLinks }) => {
  const activeLink = usePathname();
  return (
    <ScrollArea className=" ">
      <div className="flex w-max space-x-4 p-4">
        <Menubar
          className={cn(" hidden md:flex items-center justify-center ", {
            flex: drawer,
          })}
        >
          <MenubarMenu>
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link.id}
                className=" relative rounded-full  text-sm font-medium transition focus-visible:outline-2"
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeLink === link.path && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-background dark:bg-foreground mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    animate={{
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.6,
                    }}
                  />
                )}
                <MenubarTrigger>{link.name}</MenubarTrigger>
              </Link>
            ))}
          </MenubarMenu>
        </Menubar>
        <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  );
};

export default SiteNavs;
