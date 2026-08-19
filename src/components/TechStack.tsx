"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { techStack } from "@/data/portfolio";
import {
  Monitor,
  Server,
  Database,
  Smartphone,
  Cloud,
  ShoppingBag,
  Mail,
  Bot,
} from "lucide-react";
import { techIconMap } from "./TechIcons";
import type { LucideIcon } from "lucide-react";

const categoryMeta: Record<string, { icon: LucideIcon; tint: string }> = {
  Frontend: { icon: Monitor, tint: "text-blue-600 dark:text-blue-400 bg-blue-500/10" },
  Backend: { icon: Server, tint: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10" },
  Databases: { icon: Database, tint: "text-amber-600 dark:text-amber-400 bg-amber-500/10" },
  Mobile: { icon: Smartphone, tint: "text-violet-600 dark:text-violet-400 bg-violet-500/10" },
  "Cloud & DevOps": { icon: Cloud, tint: "text-sky-600 dark:text-sky-400 bg-sky-500/10" },
  "E-commerce & Shopify": {
    icon: ShoppingBag,
    tint: "text-lime-600 dark:text-lime-400 bg-lime-500/10",
  },
  "Marketing Automation & Email": {
    icon: Mail,
    tint: "text-rose-600 dark:text-rose-400 bg-rose-500/10",
  },
  "AI & Developer Tools": {
    icon: Bot,
    tint: "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-500/10",
  },
};

export function TechStack() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technologies"
          title="Tech stack & tools"
          description="The technologies I reach for day to day, grouped by where they sit in the stack."
        />

        {/*
          A row-per-category spec sheet rather than a card grid — the categories hold
          between 3 and 11 items, which leaves a card grid full of dead space.
        */}
        <div className="border-y border-border divide-y divide-border">
          {Object.entries(techStack).map(([category, techs], i) => {
            const meta = categoryMeta[category] ?? {
              icon: Server,
              tint: "text-accent bg-accent/10",
            };
            const Icon = meta.icon;
            return (
              <ScrollReveal key={category} delay={i * 35}>
                <div className="grid md:grid-cols-[230px_minmax(0,1fr)] gap-3 md:gap-8 py-5">
                  <div className="flex items-center gap-2.5">
                    <div className={`grid place-items-center w-7 h-7 rounded-lg ${meta.tint}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-[12.5px] font-semibold text-foreground">{category}</h3>
                    <span className="tabular text-[11px] text-faint md:ml-auto">
                      {techs.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:pt-0.5">
                    {techs.map((tech) => {
                      const TechIcon = techIconMap[tech];
                      return (
                        <span key={tech} className="chip cursor-default">
                          {TechIcon && <TechIcon className="w-3 h-3 opacity-70" />}
                          {tech}
                        </span>
                      );
                    })}
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
