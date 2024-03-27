"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn, toCapitalize } from "@/lib/utils";
import { motion } from "framer-motion";
import { container, items } from "@/lib/animation";
import { Separator } from "./separator";
const TechsCards = ({ title, techs }) => {
  return (
    <div className="w-full">
      <div>
        <h2 className="text-lg font-semibold">{toCapitalize(title)}</h2>
        <Separator />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 "
      >
        {techs.map(
          (tech) =>
            tech.header === title && (
              <motion.div key={tech.id} variants={items}>
                <Card className="flex items-center justify-between ">
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        width={30}
                        height={30}
                      />
                      <div className="grid gap-1">
                        <h3 className="font-semibold text-sm">{tech.name}</h3>
                        <div className="flex items-center gap-1">
                          <div
                            className={cn("w-2 h-2  rounded-full", {
                              "bg-red-500": tech.level === "beginner",
                              "bg-blue-500": tech.level === "intermediate",
                              "bg-green-500": tech.level === "expert",
                            })}
                          ></div>
                          <p className="text-xs font-medium text-background-foreground">
                            {toCapitalize(tech.level)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
        )}
      </motion.div>
    </div>
  );
};

export default TechsCards;
