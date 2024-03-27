"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="  flex flex-col items-start justify-center mt-0 md:mt-4 gap-2">
      <h1 className="text-lg md:text-xl  font-bold text-accent-foreground tracking-wide mb-1 md:mb-2 flex items-center justify-center">
        Hello, I'm Emre
        <motion.div
          animate={{ rotateZ: [-10, 20, -10] }}
          transition={{ repeat: Infinity }}
        >
          👋
        </motion.div>
      </h1>
      <p className="text-base md:text-base  text-accent-foreground ">
        I am currently living in Istanbul and working as a Frontend Developer at{" "}
        {""}
        <Link
          target="_blank"
          className=" text-sky-500 hover:text-blue-400 transition duration-300 ease-in-out"
          href="https://entererp.com"
        >
          EnterERP.
        </Link>{" "}
      </p>
      <p className="text-base md:text-base  text-accent-foreground ">
        I like 3D modeling, taking photos, playing games and developing
        projects. Recently I am interested in FPV Drone and flying drones.
      </p>
      <p className="text-base md:text-base  text-accent-foreground ">
        For now, I'm interested in game development in my free time and I'm
        learning Unity.
      </p>
    </div>
  );
};

export default Welcome;
