"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { projects, projectCategories, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-[15px] font-bold text-foreground leading-snug pr-2 group-hover:text-accent transition-colors">
            {project.name}
          </h4>
          <div className="flex items-center gap-1 shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Source" className="p-2 text-muted hover:text-foreground hover:bg-card-hover rounded-lg transition-all">
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo" className="p-2 text-muted hover:text-foreground hover:bg-card-hover rounded-lg transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <span className="inline-block self-start px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-3">
          {project.category}
        </span>

        <p className="text-[13px] text-muted mb-4 leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-[11px] font-medium text-muted-foreground bg-background border border-border rounded-lg">
              {tech}
            </span>
          ))}
        </div>

        <button onClick={() => setExpanded(!expanded)} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent hover:text-accent/80 transition-colors self-start">
          {expanded ? "Less details" : "More details"}
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-border space-y-3 text-[13px]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1.5">Problem Solved</p>
              <p className="text-muted leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-accent mb-1.5">Key Features</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {project.features.map((f) => (
                  <span key={f} className="text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />{f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Featured Projects</h2>
            <p className="text-sm text-muted max-w-md mx-auto">Open-source starter kits and production tools I&apos;ve built.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-[13px] font-semibold rounded-full transition-all ${
                  active === cat ? "bg-accent text-white shadow-md shadow-accent/25" : "text-muted hover:text-foreground bg-background border border-border hover:border-accent/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 50}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
