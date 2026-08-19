"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { experiences, education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Career"
          title="Work experience"
          description="7+ years across insurance, logistics, e-commerce and CRM — shipping software that teams depend on daily."
        />

        <div className="relative">
          {/* Timeline rail, faded at both ends so it reads as continuous rather than clipped. */}
          <div
            className="hidden md:block absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent"
            aria-hidden="true"
          />

          <ol className="space-y-0">
            {experiences.map((exp, i) => {
              const isCurrent = i === 0;
              return (
                <li key={`${exp.company}-${i}`}>
                  <ScrollReveal delay={i * 50}>
                    <div className="group relative md:pl-9 py-8 border-b border-border">
                      <span
                        className={`hidden md:block absolute left-0 top-[2.35rem] w-[11px] h-[11px] rounded-full border-2 border-background transition-colors ${
                          isCurrent
                            ? "bg-accent ring-4 ring-accent/15"
                            : "bg-border-strong group-hover:bg-muted"
                        }`}
                        aria-hidden="true"
                      />

                      <div className="grid md:grid-cols-[150px_minmax(0,1fr)] gap-3 md:gap-8">
                        <div className="md:pt-0.5">
                          <div className="tabular font-mono text-[11.5px] text-faint">
                            {exp.period}
                          </div>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Current
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                            <h3 className="text-[15.5px] font-semibold text-foreground">
                              {exp.title}
                            </h3>
                            <span className="text-faint">·</span>
                            <span className="text-[14px] font-medium text-accent">
                              {exp.company}
                            </span>
                          </div>
                          <p className="mt-1 text-[12px] text-faint">{exp.location}</p>

                          <ul className="mt-4 space-y-2">
                            {exp.highlights.slice(0, 4).map((h, j) => (
                              <li
                                key={j}
                                className="flex gap-2.5 text-[13px] leading-relaxed text-muted"
                              >
                                <span
                                  className="mt-[7px] w-1 h-1 shrink-0 rounded-full bg-accent/60"
                                  aria-hidden="true"
                                />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {exp.technologies.slice(0, 8).map((tech) => (
                              <span key={tech} className="chip">
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 8 && (
                              <span className="chip !bg-transparent !text-faint">
                                +{exp.technologies.length - 8} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}

            <li>
              <ScrollReveal delay={experiences.length * 50}>
                <div className="group relative md:pl-9 py-8">
                  <span
                    className="hidden md:block absolute left-0 top-[2.35rem] w-[11px] h-[11px] rounded-full border-2 border-background bg-border-strong"
                    aria-hidden="true"
                  />
                  <div className="grid md:grid-cols-[150px_minmax(0,1fr)] gap-3 md:gap-8">
                    <div className="tabular font-mono text-[11.5px] text-faint md:pt-0.5">
                      {education.period}
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="grid place-items-center w-9 h-9 shrink-0 rounded-[10px] bg-violet-500/10 text-violet-600 dark:text-violet-400">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-[14.5px] font-semibold text-foreground">
                          {education.degree}
                        </h3>
                        <a
                          href={education.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] font-medium text-accent hover:underline underline-offset-2"
                        >
                          {education.university}
                        </a>
                        <p className="text-[12px] text-faint">{education.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
