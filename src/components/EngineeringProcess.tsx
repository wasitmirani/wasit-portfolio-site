"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { engineeringProcess } from "@/data/portfolio";

export function EngineeringProcess() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          title="How I work"
          description="A systematic approach that keeps delivery predictable and the codebase healthy long after launch."
        />

        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {engineeringProcess.map((item, i) => (
            <li key={item.step}>
              <ScrollReveal delay={i * 45}>
                <div className="card card-interactive group h-full p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="tabular grid place-items-center w-7 h-7 rounded-lg bg-surface font-mono text-[11px] font-semibold text-muted transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                      {item.step}
                    </span>
                    <div className="h-px flex-1 bg-border" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-[14.5px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
