"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SiteNavs = ({ drawer, navLinks, activeTab, setActiveTab }) => {
  return (
    <div>
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
              onClick={() => setActiveTab(link.id)}
              className={`${
                activeTab === link.id ? "" : ""
              } relative rounded-full  text-sm font-medium transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === link.id && (
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
    </div>
  );
};

export default SiteNavs;
