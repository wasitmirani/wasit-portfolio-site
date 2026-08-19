"use client";

import { ScrollReveal } from "./ScrollReveal";
import { experiences, education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-foreground mb-2">Experience</h2>
          <div className="w-10 h-0.5 bg-accent rounded-full mb-14" />
        </ScrollReveal>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="group relative grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-8 border-b border-border last:border-b-0">
                <div className="text-sm text-muted shrink-0 md:pt-0.5">
                  <div className="font-mono text-[13px]">{exp.period}</div>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                    <h4 className="text-[15px] font-semibold text-foreground">{exp.title}</h4>
                    <span className="hidden sm:inline text-muted-foreground">·</span>
                    <span className="text-sm text-accent font-medium">{exp.company}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{exp.location}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.slice(0, 4).map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[13px] text-muted leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 8).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[11px] font-medium text-muted bg-card-hover rounded">
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 8 && (
                      <span className="px-2 py-0.5 text-[11px] text-muted-foreground">+{exp.technologies.length - 8}</span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={experiences.length * 50}>
            <div className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-8 border-b border-border">
              <div className="text-sm shrink-0">
                <div className="font-mono text-[13px] text-muted">{education.period}</div>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[15px] font-semibold text-foreground">{education.degree}</h4>
                  <p className="text-sm text-accent font-medium">{education.university}</p>
                  <p className="text-xs text-muted-foreground">{education.city}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
