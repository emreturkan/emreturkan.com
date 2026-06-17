"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

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
        className="flex items-center gap-1.5 text-xl font-medium tracking-tight"
      >
        Emre Turkan
        <BadgeCheck
          className="h-5 w-5 fill-[#0099ff] text-white"
          aria-label="Verified"
        />
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="mt-1 font-mono text-sm text-muted-foreground"
      >
        Full Stack Developer · Istanbul
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="mt-8 space-y-4 text-[15px] leading-7 text-foreground/90"
      >
        <p>
          hey, i&apos;m emre — a full stack developer based in istanbul. i build
          erp &amp; e-commerce platforms end-to-end with next.js, react &amp;
          node.js, currently at{" "}
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
          outside work i&apos;m into 3d modeling, photography and flying fpv
          drones. just building things and figuring it out as i go.
        </p>
      </motion.div>

      <motion.p
        variants={fadeInUp}
        className="mt-6 font-mono text-xs text-muted-foreground/80"
      >
        <span className="text-emerald-500">now</span> — building games with
        unity
      </motion.p>
    </motion.section>
  );
};

export default Welcome;
