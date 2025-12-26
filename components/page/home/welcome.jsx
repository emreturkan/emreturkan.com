"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const Welcome = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1
        variants={fadeInUp}
        className="text-xl font-medium tracking-tight"
      >
        Emre Turkan
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="mt-1 text-sm text-muted-foreground"
      >
        Frontend Developer
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="mt-8 space-y-4 text-[15px] leading-7 text-foreground/90"
      >
        <p>
          I am currently living in Istanbul and working as a Frontend Developer
          at{" "}
          <Link
            target="_blank"
            className="underline decoration-muted-foreground/50 underline-offset-2 transition-colors duration-200 hover:decoration-foreground"
            href="https://entererp.com"
          >
            EnterERP
          </Link>
          .
        </p>
        <p>
          I like 3D modeling, taking photos, playing games and developing
          projects. Recently I am interested in FPV Drone and flying drones.
        </p>
        <p>
          For now, I'm interested in game development in my free time and I'm
          learning Unity.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Welcome;
