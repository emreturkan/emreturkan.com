"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Socials = () => {
  const socials = [
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      link: "mailto:emreturkan10@gmail.com",
    },
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4" />,
      link: "https://github.com/emreturkan",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      link: "https://www.linkedin.com/in/emreturkan/",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      link: "https://twitter.com/_emreturkan",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="mt-8"
    >
      <div className="flex flex-wrap gap-4">
        {socials.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + index * 0.1,
              duration: 0.4,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <Link
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {social.icon}
              <span>{social.name}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Socials;
