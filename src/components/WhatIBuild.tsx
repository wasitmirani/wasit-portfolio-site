"use client";

import { ScrollReveal } from "./ScrollReveal";
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

export function WhatIBuild() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-foreground mb-2">What I Build</h2>
          <div className="w-10 h-0.5 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {whatIBuild.map((item, i) => {
            const Icon = iconComponents[item.icon] || Cpu;
            return (
              <ScrollReveal key={item.title} delay={i * 40}>
                <div className="group p-5 rounded-xl bg-background border border-border hover:border-accent/40 hover:shadow-sm transition-all h-full">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-[18px] h-[18px] text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h4>
                  <p className="text-[13px] text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
