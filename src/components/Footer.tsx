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
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-violet-600 text-white flex items-center justify-center text-[11px] font-bold shadow-md shadow-accent/20">W</div>
            <div>
              <span className="text-sm font-semibold text-foreground">{siteConfig.name}</span>
              <span className="text-[12px] text-muted ml-2">&copy; {new Date().getFullYear()}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {links.map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"} aria-label={l.label}
                className="p-2.5 text-muted hover:text-foreground hover:bg-card rounded-lg transition-all">
                <l.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
