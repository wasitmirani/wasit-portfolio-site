"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { siteConfig, navLinks } from "@/data/portfolio";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/72 backdrop-blur-xl backdrop-saturate-150 border-b border-border"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-page">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="group flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-[9px] bg-foreground text-background grid place-items-center text-[13px] font-bold transition-transform duration-200 group-hover:scale-105">
                W
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="text-[13.5px] font-semibold text-foreground">
                  {siteConfig.name}
                </div>
                <div className="text-[10.5px] text-faint">Software Engineer</div>
              </div>
            </a>

            <nav
              aria-label="Sections"
              className="hidden md:flex items-center gap-0.5 p-1 rounded-full border border-border bg-card/60 backdrop-blur-sm"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative px-3 py-1.5 text-[12.5px] font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-surface" />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-1">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hidden sm:grid place-items-center w-8 h-8 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                <Github className="w-[15px] h-[15px]" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hidden sm:grid place-items-center w-8 h-8 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                <Linkedin className="w-[15px] h-[15px]" />
              </a>

              <div className="hidden sm:block w-px h-5 bg-border mx-1" />

              <button
                onClick={toggle}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                className="grid place-items-center w-8 h-8 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-[15px] h-[15px]" />
                ) : (
                  <Moon className="w-[15px] h-[15px]" />
                )}
              </button>

              <a
                href="#contact"
                className="btn btn-primary group hidden lg:inline-flex ml-2"
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden grid place-items-center w-9 h-9 text-muted hover:text-foreground rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-background transition-all duration-200 ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="container-page flex flex-col py-6 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 text-[15px] rounded-xl transition-colors ${
                activeSection === link.href
                  ? "text-foreground font-medium bg-surface"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              {link.label}
            </a>
          ))}

            <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary btn-lg mt-5"
          >
            Get in touch
          </a>

          <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex-1"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex-1"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
