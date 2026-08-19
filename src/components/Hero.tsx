"use client";

import { ArrowRight, MapPin, Download } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { siteConfig, stats } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.03] dark:bg-accent/[0.05] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-[13px] text-muted mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for work
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight mb-5">
                I&apos;m <span className="gradient-text">Wasit Ali</span>,<br />
                a Full-Stack<br />
                Software Engineer.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-[17px] text-muted leading-relaxed mb-6 max-w-lg">
                7+ years building production SaaS, e-commerce platforms,
                Shopify apps, and scalable APIs — from Dubai to the world.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{siteConfig.location}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                  View Projects
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#contact" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-foreground rounded-lg border border-border hover:bg-card transition-colors">
                  Contact Me
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="flex items-center gap-4">
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-foreground/20 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-foreground/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <div className="h-6 w-px bg-border mx-1" />
                <div className="flex items-center gap-5">
                  {stats.slice(0, 3).map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-lg font-bold text-foreground leading-none">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Code card */}
          <ScrollReveal delay={200}>
            <div className="hidden lg:block">
              <div className="relative animate-float">
                <div className="rounded-2xl border border-border bg-card shadow-xl shadow-black/5 dark:shadow-black/30 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 font-mono">wasit.config.ts</span>
                  </div>
                  <div className="p-5 font-mono text-[13px] leading-7 text-muted">
                    <div>
                      <span className="text-violet-500 dark:text-violet-400">export const</span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">developer</span> = {"{"}
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">name:</span>{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Wasit Ali&quot;</span>,
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">role:</span>{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Sr. Software Engineer&quot;</span>,
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">experience:</span>{" "}
                      <span className="text-amber-600 dark:text-amber-400">&quot;7+ years&quot;</span>,
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">location:</span>{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;UAE&quot;</span>,
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">stack:</span>{" "}
                      [<span className="text-emerald-600 dark:text-emerald-400">&quot;React&quot;</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Node&quot;</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Laravel&quot;</span>],
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">passion:</span>{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Building at scale&quot;</span>,
                    </div>
                    <div>{"}"} <span className="text-violet-500 dark:text-violet-400">as const</span>;</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
