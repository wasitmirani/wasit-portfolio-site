"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { whatIBuild } from "@/data/portfolio";
import { Cpu, ShoppingCart, ShoppingBag, Code2, Building2, Palette, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconComponents: Record<string, LucideIcon> = {
  saas: Cpu,
  ecommerce: ShoppingCart,
  shopify: ShoppingBag,
  api: Code2,
  business: Building2,
  frontend: Palette,
  automation: Mail,
};

const iconTints: Record<string, string> = {
  saas: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
  ecommerce: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
  shopify: "text-lime-600 dark:text-lime-400 bg-lime-500/10",
  api: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
  business: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
  frontend: "text-sky-600 dark:text-sky-400 bg-sky-500/10",
  automation: "text-rose-600 dark:text-rose-400 bg-rose-500/10",
};

export function WhatIBuild() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Expertise"
          title="What I build"
          description="Systems that carry real business load — not demos. Each area below represents work shipped to production."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
          {whatIBuild.map((item, i) => {
            const Icon = iconComponents[item.icon] ?? Cpu;
            const tint = iconTints[item.icon] ?? "text-accent bg-accent/10";
            return (
              <ScrollReveal key={item.title} delay={i * 40}>
                <div className="card card-interactive h-full p-5">
                  <div className={`grid place-items-center w-9 h-9 rounded-[10px] ${tint}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="mt-3.5 text-[13.5px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
