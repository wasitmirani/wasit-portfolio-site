"use client";

import { ScrollReveal } from "./ScrollReveal";
import { services } from "@/data/portfolio";
import {
  Globe, Cpu, ShoppingBag, Webhook, Server, Monitor,
  Code2, Terminal, Braces, ShoppingCart, Smartphone,
  Workflow, Plug, Bot, RefreshCw,
} from "lucide-react";

const serviceIcons = [
  Globe, Cpu, ShoppingBag, Webhook, Server, Monitor,
  Code2, Terminal, Braces, ShoppingCart, Smartphone,
  Workflow, Plug, Bot, RefreshCw,
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-foreground mb-2">Services</h2>
          <div className="w-10 h-0.5 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i] ?? Globe;
            return (
              <ScrollReveal key={service} delay={i * 25}>
                <div className="group flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-accent/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-[13px] font-medium text-foreground">{service}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
