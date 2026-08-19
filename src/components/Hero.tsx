"use client";

import { ArrowRight, MapPin, Download } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { siteConfig, stats } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

const codeLines = [
  { indent: 0, parts: [["kw", "export const"], ["fn", " developer"], ["op", " = {"]] },
  { indent: 1, parts: [["key", "name:"], ["str", ' "Wasit Ali"'], ["op", ","]] },
  { indent: 1, parts: [["key", "role:"], ["str", ' "Sr. Software Engineer"'], ["op", ","]] },
  { indent: 1, parts: [["key", "experience:"], ["num", ' "7+ years"'], ["op", ","]] },
  { indent: 1, parts: [["key", "location:"], ["str", ' "UAE"'], ["op", ","]] },
  { indent: 1, parts: [["key", "stack:"], ["op", " ["], ["str", '"React"'], ["op", ", "], ["str", '"Node"'], ["op", ", "], ["str", '"Laravel"'], ["op", ", "], ["str", '"Go"'], ["op", "],"]] },
  { indent: 1, parts: [["key", "available:"], ["bool", " true"], ["op", ","]] },
  { indent: 0, parts: [["op", "} "], ["kw", "as const"], ["op", ";"]] },
] as const;

const tokenClass: Record<string, string> = {
  kw: "text-violet-600 dark:text-violet-400",
  fn: "text-blue-600 dark:text-blue-400",
  key: "text-foreground/45",
  str: "text-emerald-600 dark:text-emerald-400",
  num: "text-amber-600 dark:text-amber-400",
  bool: "text-sky-600 dark:text-sky-400",
  op: "text-faint",
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-[92vh] pt-24 pb-20 overflow-hidden"
    >
      <div className="dot-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div
        className="glow absolute -top-40 right-[-10%] w-[620px] h-[620px] -z-10 animate-pulse-slow"
        aria-hidden="true"
      />
      <div
        className="glow absolute bottom-[-30%] left-[-15%] w-[460px] h-[460px] -z-10 opacity-50 animate-pulse-slow animation-delay-3000"
        aria-hidden="true"
      />

      <div className="container-page w-full">
        <div className="grid lg:grid-cols-[1fr_minmax(0,420px)] gap-14 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-border bg-card/70 backdrop-blur-sm shadow-[var(--shadow-sm)]">
                <span className="relative grid place-items-center w-4 h-4">
                  <span className="absolute w-2 h-2 rounded-full bg-emerald-500/40 animate-ping" />
                  <span className="relative w-[6px] h-[6px] rounded-full bg-emerald-500" />
                </span>
                <span className="text-[11.5px] font-medium text-muted">
                  Available for new opportunities
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="mt-7 text-[2.6rem] sm:text-[3.4rem] lg:text-[3.9rem] font-semibold leading-[1.04] text-foreground">
                Full-Stack
                <br />
                <span className="gradient-text">Software Engineer</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={90}>
              <p className="mt-6 max-w-[34rem] text-[15.5px] sm:text-base leading-[1.7] text-muted">
                I&apos;m <strong className="font-medium text-foreground">Wasit Ali</strong> — 7+
                years building production SaaS platforms, e-commerce systems, Shopify apps, and
                scalable APIs. I turn complex business problems into elegant, maintainable
                software.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={110}>
              <div className="mt-5 flex items-center gap-1.5 text-[13px] text-faint">
                <MapPin className="w-3.5 h-3.5" />
                <span>{siteConfig.location}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={130}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn btn-primary btn-lg group">
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="btn btn-secondary btn-lg">
                  Contact Me
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="mt-11 pt-8 border-t border-border flex flex-wrap items-center gap-x-8 gap-y-6">
                <div className="flex items-center gap-8">
                  {stats.slice(0, 3).map((s) => (
                    <div key={s.label}>
                      <div className="tabular text-[22px] font-semibold leading-none text-foreground">
                        {s.value}
                      </div>
                      <div className="mt-1.5 text-[11px] text-faint">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="hidden sm:block w-px h-9 bg-border" />

                <div className="flex items-center gap-1.5">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="grid place-items-center w-9 h-9 rounded-[10px] border border-border bg-card text-muted transition-all duration-200 hover:text-foreground hover:border-border-strong hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="grid place-items-center w-9 h-9 rounded-[10px] border border-border bg-card text-muted transition-all duration-200 hover:text-foreground hover:border-border-strong hover:-translate-y-0.5"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={180}>
            <div className="hidden lg:block">
              <div className="relative animate-float">
                <div
                  className="absolute -inset-4 glow opacity-40 -z-10"
                  aria-hidden="true"
                />
                <div className="card overflow-hidden shadow-[var(--shadow-lg)]">
                  <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border bg-surface/60">
                    <div className="flex gap-[5px]">
                      <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                      <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                      <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                    </div>
                    <span className="ml-1.5 font-mono text-[10.5px] text-faint">
                      wasit.config.ts
                    </span>
                  </div>

                  <div className="px-4 py-4 font-mono text-[11.5px] leading-[1.85]">
                    {codeLines.map((line, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="select-none text-faint/40 tabular w-3 text-right">
                          {i + 1}
                        </span>
                        <span style={{ paddingLeft: `${line.indent * 1}rem` }}>
                          {line.parts.map(([token, text], j) => (
                            <span key={j} className={tokenClass[token]}>
                              {text}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                    <div className="flex gap-3">
                      <span className="select-none text-faint/40 tabular w-3 text-right">
                        {codeLines.length + 1}
                      </span>
                      <span className="animate-caret text-accent">▍</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 px-2.5 py-1 rounded-lg border border-border bg-card shadow-[var(--shadow-md)] text-[10.5px] font-medium text-foreground animate-bounce-slow">
                  React · Next.js
                </div>
                <div className="absolute -bottom-3 -left-3 px-2.5 py-1 rounded-lg border border-border bg-card shadow-[var(--shadow-md)] text-[10.5px] font-medium text-foreground animate-bounce-slow animation-delay-2000">
                  Node.js · Laravel · Go
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
