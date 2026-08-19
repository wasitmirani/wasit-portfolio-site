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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-sm" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-violet-600 text-white flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform shadow-lg shadow-accent/25">W</div>
            <span className="font-bold text-foreground hidden sm:block tracking-tight">{siteConfig.name}</span>
          </a>

          <div className="hidden md:flex items-center gap-1 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] rounded-full transition-all ${
                  activeSection === link.href ? "text-accent font-semibold bg-accent/10" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-card">
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-card">
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <button onClick={toggle} aria-label="Toggle theme" className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-card">
              {theme === "dark" ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>
            <a href="#contact" className="hidden lg:inline-flex items-center px-4 py-2 ml-2 text-[13px] font-semibold bg-accent text-white rounded-xl hover:bg-accent/90 transition-all shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/30">
              Hire Me
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-muted hover:text-foreground" aria-label="Toggle menu">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`px-4 py-3.5 text-[15px] rounded-xl transition-colors ${activeSection === link.href ? "text-accent font-semibold bg-accent/10" : "text-foreground hover:bg-card"}`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-4 px-4 py-3.5 text-center bg-accent text-white rounded-xl font-semibold shadow-lg shadow-accent/25">Hire Me</a>
        </div>
      </div>
    </nav>
  );
}
