import { Button } from "@/components/ui/button";
import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
const Socials = () => {
  const socials = [
    {
      name: "Github",
      icon: <Github />,
      link: "https://github.com/emreturkan",
    },
    {
      name: "Linkedin",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/emreturkan/",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      link: "https://twitter.com/_emreturkan",
    },
  ];
  return (
    <div className="flex gap-2">
      <Link href={"mailto:emreturkan10@gmail.com"}>
        <Button variant="secondary">
          {" "}
          <Mail className="mr-2 h-4 w-4" /> Contact me
        </Button>
      </Link>
      {socials.map((social) => (
        <Link href={social.link} key={social.name} target="_blank">
          <Button variant="ghost" className="p-2 ">
            {social.icon}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
