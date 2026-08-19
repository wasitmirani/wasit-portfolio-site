"use client";

import { ScrollReveal } from "./ScrollReveal";
import { engineeringProcess } from "@/data/portfolio";

export function EngineeringProcess() {
  return (
    <section className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_60%)] opacity-[0.02]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">How I Work</h2>
            <p className="text-muted text-[15px] max-w-md mx-auto">
              A systematic approach to delivering high-quality software.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {engineeringProcess.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 60}>
              <div className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                <div className="text-4xl font-black text-accent/10 group-hover:text-accent/20 transition-colors absolute top-4 right-5">
                  {item.step}
                </div>
                <div className="relative pt-2">
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-[13px] text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
