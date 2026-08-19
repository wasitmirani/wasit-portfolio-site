"use client";

import { ScrollReveal } from "./ScrollReveal";
import { experiences, education } from "@/data/portfolio";
import { GraduationCap, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
              Career
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Work Experience</h2>
            <p className="text-muted text-[15px] max-w-md mx-auto">
              7+ years of building scalable software across multiple industries.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[100px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group relative grid md:grid-cols-[180px_1fr] gap-3 md:gap-10 py-8 border-b border-border last:border-b-0">
                  <div className="text-sm text-muted shrink-0 md:pt-1">
                    <div className="font-mono text-[13px] font-medium">{exp.period}</div>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-[96px] top-10 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-background" />
                  </div>
                  <div className="relative p-5 rounded-2xl border border-transparent group-hover:border-border group-hover:bg-card/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1.5">
                      <h4 className="text-[16px] font-bold text-foreground">{exp.title}</h4>
                      <span className="hidden sm:inline text-muted-foreground">at</span>
                      <span className="text-sm text-accent font-semibold">{exp.company}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">{exp.location}</p>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.slice(0, 4).map((h, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-[13px] text-muted leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.slice(0, 8).map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-[11px] font-semibold text-muted-foreground bg-card-hover/80 border border-border/50 rounded-lg">
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 8 && (
                        <span className="px-2.5 py-1 text-[11px] text-muted-foreground">+{exp.technologies.length - 8}</span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={experiences.length * 60}>
              <div className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-10 py-8">
                <div className="text-sm shrink-0 md:pt-1">
                  <div className="font-mono text-[13px] text-muted font-medium">{education.period}</div>
                  <div className="hidden md:block absolute left-[96px] w-[9px] h-[9px] rounded-full bg-violet-500 ring-4 ring-background" />
                </div>
                <div className="flex items-start gap-3 p-5 rounded-2xl border border-border/50 bg-card/30">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-foreground">{education.degree}</h4>
                    <p className="text-sm text-accent font-semibold">{education.university}</p>
                    <p className="text-xs text-muted-foreground">{education.city}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
