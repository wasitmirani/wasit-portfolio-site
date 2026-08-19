"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { projects, projectCategories, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group border border-border rounded-xl bg-card hover:border-accent/40 hover:shadow-sm transition-all h-full flex flex-col">
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-sm font-semibold text-foreground leading-snug pr-2 group-hover:text-accent transition-colors">
            {project.name}
          </h4>
          <div className="flex items-center gap-0.5 shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Source" className="p-1.5 text-muted hover:text-foreground transition-colors">
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo" className="p-1.5 text-muted hover:text-foreground transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        <span className="inline-block self-start px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/8 rounded mb-2.5">
          {project.category}
        </span>

        <p className="text-[13px] text-muted mb-3 leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-1.5 py-0.5 text-[11px] text-muted-foreground bg-background border border-border rounded">
              {tech}
            </span>
          ))}
        </div>

        <button onClick={() => setExpanded(!expanded)} className="inline-flex items-center gap-1 text-[12px] font-medium text-accent hover:text-accent/80 transition-colors self-start">
          {expanded ? "Less" : "More"}
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-border space-y-2.5 text-[13px]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-1">Problem</p>
              <p className="text-muted leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-1">Features</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {project.features.map((f) => (
                  <span key={f} className="text-muted flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent" />{f}
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
    <section id="projects" className="py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-foreground mb-2">Projects</h2>
          <div className="w-10 h-0.5 bg-accent rounded-full mb-3" />
          <p className="text-sm text-muted mb-8 max-w-md">Open-source starter kits and production tools I&apos;ve built.</p>

          <div className="flex flex-wrap gap-1.5 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  active === cat ? "bg-accent text-white" : "text-muted hover:text-foreground bg-background border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 40}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
