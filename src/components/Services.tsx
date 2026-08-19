"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/data/portfolio";
import {
  Globe,
  Cpu,
  ShoppingBag,
  Webhook,
  Server,
  Monitor,
  Code2,
  Terminal,
  Braces,
  ShoppingCart,
  Smartphone,
  Workflow,
  Plug,
  Bot,
  RefreshCw,
} from "lucide-react";

const serviceIcons = [
  Globe,
  Cpu,
  ShoppingBag,
  Webhook,
  Server,
  Monitor,
  Code2,
  Terminal,
  Braces,
  ShoppingCart,
  Smartphone,
  Workflow,
  Plug,
  Bot,
  RefreshCw,
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="What I offer"
          description="End-to-end development services for startups and enterprise teams — from greenfield builds to modernizing what already exists."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-2.5 gap-y-0 sm:gap-y-2.5">
          {services.map((service, i) => {
            const Icon = serviceIcons[i] ?? Globe;
            return (
              <ScrollReveal key={service} delay={i * 25}>
                <div className="card-flush group flex items-center gap-3 h-full p-3.5 transition-colors duration-200 hover:border-border-strong hover:bg-card">
                  <div className="grid place-items-center w-8 h-8 shrink-0 rounded-lg bg-surface text-faint transition-colors duration-200 group-hover:bg-accent/10 group-hover:text-accent">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[12.5px] font-medium text-foreground">{service}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
