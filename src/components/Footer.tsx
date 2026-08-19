import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, XTwitterIcon as Twitter } from "./BrandIcons";
import { siteConfig } from "@/data/portfolio";

const links = [
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Twitter, href: siteConfig.twitter, label: "X" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-accent text-white flex items-center justify-center text-[10px] font-bold">W</div>
          <span className="text-sm text-muted">&copy; {new Date().getFullYear()} {siteConfig.name}</span>
        </div>
        <div className="flex items-center gap-0.5">
          {links.map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"} aria-label={l.label}
              className="p-2 text-muted hover:text-foreground transition-colors">
              <l.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
