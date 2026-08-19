"use client";

import { ScrollReveal } from "./ScrollReveal";
import { techStack } from "@/data/portfolio";
import { Monitor, Server, Database, Smartphone, Cloud, ShoppingBag, Mail, Bot } from "lucide-react";
import { techIconMap } from "./TechIcons";
import type { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Monitor,
  Backend: Server,
  Databases: Database,
  Mobile: Smartphone,
  "Cloud & DevOps": Cloud,
  "E-commerce & Shopify": ShoppingBag,
  "Marketing Automation & Email": Mail,
  "AI & Developer Tools": Bot,
};

export function TechStack() {
  return (
    <section id="skills" className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_50%)] opacity-[0.03]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
              Technologies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Tech Stack & Tools
            </h2>
            <p className="text-muted text-[15px] max-w-md mx-auto">
              Technologies I use daily to build production-grade software.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techStack).map(([category, techs], i) => {
            const Icon = categoryIcons[category] ?? Server;
            return (
              <ScrollReveal key={category} delay={i * 50}>
                <div className="group relative p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center ring-1 ring-accent/20">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <h4 className="text-[13px] font-bold text-foreground uppercase tracking-wide">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => {
                        const TechIcon = techIconMap[tech];
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] font-medium text-muted-foreground bg-background border border-border rounded-lg hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
                          >
                            {TechIcon && <TechIcon className="w-3.5 h-3.5" />}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
