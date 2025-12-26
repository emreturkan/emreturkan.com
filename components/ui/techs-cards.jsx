"use client";

import Image from "next/image";
import { cn, toCapitalize } from "@/lib/utils";
import { motion } from "framer-motion";

const TechsCards = ({ title, techs, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {toCapitalize(title)}
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {techs.map(
          (tech) =>
            tech.header === title && (
              <div
                key={tech.id}
                className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 text-sm transition-colors hover:bg-muted"
              >
                <Image
                  src={tech.img}
                  alt={tech.name}
                  width={16}
                  height={16}
                  className="rounded-sm"
                />
                <span className="font-medium text-foreground">{tech.name}</span>
                <span
                  className={cn("h-1.5 w-1.5 rounded-full", {
                    "bg-amber-500": tech.level === "beginner",
                    "bg-blue-500": tech.level === "intermediate",
                    "bg-emerald-500": tech.level === "expert",
                  })}
                />
              </div>
            )
        )}
      </div>
    </motion.div>
  );
};

export default TechsCards;
