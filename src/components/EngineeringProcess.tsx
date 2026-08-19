"use client";

import { ScrollReveal } from "./ScrollReveal";
import { engineeringProcess } from "@/data/portfolio";
import { Search, PenTool, Hammer, Plug, Gauge, Rocket } from "lucide-react";

const stepIcons = [Search, PenTool, Hammer, Plug, Gauge, Rocket];

export function EngineeringProcess() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-foreground mb-2">How I Work</h2>
          <div className="w-10 h-0.5 bg-accent rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {engineeringProcess.map((item, i) => {
            const Icon = stepIcons[i];
            return (
              <ScrollReveal key={item.step} delay={i * 40}>
                <div className="group p-5 rounded-xl bg-background border border-border hover:border-accent/40 hover:shadow-sm transition-all h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-[18px] h-[18px] text-accent" />
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground">{item.step}</span>
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
