import { Mail } from "lucide-react";
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
  XTwitterIcon as Twitter,
} from "./BrandIcons";
import { siteConfig, navLinks } from "@/data/portfolio";

const links = [
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Twitter, href: siteConfig.twitter, label: "X" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid place-items-center w-7 h-7 rounded-lg bg-foreground text-background text-[11px] font-bold">
                W
              </div>
              <div className="leading-tight">
                <div className="text-[13.5px] font-semibold text-foreground">
                  {siteConfig.name}
                </div>
                <div className="text-[11px] text-faint">Full-Stack Software Engineer</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-[12px] leading-relaxed text-faint">
              Building SaaS platforms, APIs and e-commerce systems from {siteConfig.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12.5px] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <p className="text-[11.5px] text-faint">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-0.5">
            {links.map((l) => {
              const isExternal = !l.href.startsWith("mailto");
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={l.label}
                  className="grid place-items-center w-8 h-8 rounded-lg text-faint transition-colors hover:bg-surface hover:text-foreground"
                >
                  <l.icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
