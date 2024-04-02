import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Github, Linkedin, ExternalLink, X } from "lucide-react";

const Socials = () => {
  const socials = [
    {
      name: "Email",
      icon: <Mail size={16} />,
      link: "mailto:emreturkan10@gmail.com",
    },
    {
      name: "Github",
      icon: <Github size={16} />,
      link: "https://github.com/emreturkan",
    },
    {
      name: "Linkedin",
      icon: <Linkedin size={16} />,
      link: "https://www.linkedin.com/in/emreturkan/",
    },
    {
      name: "Twitter",
      icon: <X size={16} />,
      link: "https://twitter.com/_emreturkan",
    },
  ];
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-2">
      {socials.map((social) => (
        <Link
          className="w-full"
          href={social.link}
          target="_blank"
          key={social.name}
        >
          <Button
            variant="outline"
            className="py-6 flex w-full items-center justify-between gap-2"
            aria-label={social.name}
          >
            <div className="flex items-center gap-2">
              <span>{social.icon}</span>
              <span className="text-sm ">{social.name}</span>
            </div>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
