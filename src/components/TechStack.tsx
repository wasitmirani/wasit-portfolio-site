"use client";

import { ScrollReveal } from "./ScrollReveal";
import { techStack } from "@/data/portfolio";
import { Monitor, Server, Database, Smartphone, Cloud, ShoppingBag, Mail, Bot } from "lucide-react";
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
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-foreground mb-2">Tech Stack</h2>
          <div className="w-10 h-0.5 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, techs], i) => {
            const Icon = categoryIcons[category] ?? Server;
            return (
              <ScrollReveal key={category} delay={i * 40}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <h4 className="text-[13px] font-semibold text-foreground">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {techs.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-[12px] text-muted bg-card border border-border rounded-md hover:border-accent/30 hover:text-accent transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
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
