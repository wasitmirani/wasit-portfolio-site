"use client";

import { ArrowRight, MapPin, Download } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { siteConfig, stats } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/[0.07] rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.3]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm text-[13px] text-muted mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for opportunities
              </div>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.75rem] font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Wasit Ali</span>
                <br />
                <span className="text-muted-foreground font-semibold text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]">
                  Full-Stack Software Engineer
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-[17px] text-muted leading-relaxed mb-6 max-w-lg">
                7+ years crafting production SaaS, e-commerce platforms,
                Shopify apps, and scalable APIs. Turning complex problems into elegant solutions.
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
                <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5">
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-foreground rounded-xl border border-border hover:bg-card hover:border-foreground/20 transition-all hover:-translate-y-0.5">
                  Let&apos;s Talk
                </a>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground rounded-xl border border-border hover:bg-card hover:text-foreground transition-all hover:-translate-y-0.5">
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-border text-muted hover:text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-border text-muted hover:text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <div className="h-8 w-px bg-border mx-1" />
                <div className="flex items-center gap-6">
                  {stats.slice(0, 3).map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-xl font-bold text-foreground leading-none gradient-text">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground mt-1.5 font-medium">{s.label}</div>
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
                <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-card-hover/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 font-mono">wasit.config.ts</span>
                  </div>
                  <div className="p-6 font-mono text-[13px] leading-7 text-muted">
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
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Dubai, UAE&quot;</span>,
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">stack:</span>{" "}
                      [<span className="text-emerald-600 dark:text-emerald-400">&quot;React&quot;</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Node&quot;</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Laravel&quot;</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Go&quot;</span>],
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">passion:</span>{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">&quot;Building at scale&quot;</span>,
                    </div>
                    <div className="pl-5">
                      <span className="text-foreground/50">available:</span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">true</span>,
                    </div>
                    <div>{"}"} <span className="text-violet-500 dark:text-violet-400">as const</span>;</div>
                  </div>
                </div>

                {/* Floating tech badges */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg text-[11px] font-semibold text-accent animate-bounce-slow">
                  React + Next.js
                </div>
                <div className="absolute -bottom-3 -left-3 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 animate-bounce-slow animation-delay-1000">
                  Node.js + Go
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
