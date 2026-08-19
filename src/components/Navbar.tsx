"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { siteConfig, navLinks } from "@/data/portfolio";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center text-sm font-bold group-hover:scale-105 transition-transform">W</div>
            <span className="font-semibold text-foreground hidden sm:block">{siteConfig.name}</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] rounded-md transition-colors ${
                  activeSection === link.href ? "text-accent font-medium" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-0.5">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted hover:text-foreground transition-colors rounded-md hover:bg-card">
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted hover:text-foreground transition-colors rounded-md hover:bg-card">
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <button onClick={toggle} aria-label="Toggle theme" className="p-2 text-muted hover:text-foreground transition-colors rounded-md hover:bg-card">
              {theme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>
            <a href="#contact" className="hidden lg:inline-flex items-center px-4 py-1.5 ml-2 text-[13px] font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
              Hire Me
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-muted hover:text-foreground" aria-label="Toggle menu">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 top-16 bg-background z-40 transition-all duration-200 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="flex flex-col p-4 gap-0.5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 text-[15px] rounded-lg transition-colors ${activeSection === link.href ? "text-accent font-medium bg-accent/5" : "text-foreground hover:bg-card"}`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-3 px-4 py-3 text-center bg-accent text-white rounded-lg font-medium">Hire Me</a>
        </div>
      </div>
    </nav>
  );
}
