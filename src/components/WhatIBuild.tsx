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
    <section className="py-28 bg-card/50 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--accent)_0%,transparent_50%)] opacity-[0.02]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">What I Build</h2>
            <p className="text-muted text-[15px] max-w-md mx-auto">
              Specialized in building complex systems that solve real business problems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {whatIBuild.map((item, i) => {
            const Icon = iconComponents[item.icon] || Cpu;
            return (
              <ScrollReveal key={item.title} delay={i * 50}>
                <div className="group relative p-6 rounded-2xl bg-background border border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 ring-1 ring-accent/20 group-hover:ring-accent/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-[13px] text-muted leading-relaxed">{item.description}</p>
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
