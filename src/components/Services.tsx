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
    <section id="services" className="py-28 bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">What I Offer</h2>
            <p className="text-muted text-[15px] max-w-md mx-auto">
              End-to-end development services for startups and enterprises.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i] ?? Globe;
            return (
              <ScrollReveal key={service} delay={i * 30}>
                <div className="group flex items-center gap-3.5 p-4 rounded-xl bg-background border border-border hover:border-accent/40 hover:shadow-md hover:shadow-accent/5 transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 ring-1 ring-accent/10 group-hover:ring-accent/30 group-hover:scale-110 transition-all">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-[13px] font-semibold text-foreground">{service}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
