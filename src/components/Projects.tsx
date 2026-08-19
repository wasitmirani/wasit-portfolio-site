"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ChevronDown, ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { techIconMap } from "./TechIcons";
import { projects, projectCategories, type Project } from "@/data/portfolio";

const categoryStyles: Record<string, { wash: string; art: string; chip: string }> = {
  SaaS: {
    wash: "from-blue-500/[0.14] to-transparent",
    art: "text-blue-500",
    chip: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
  },
  "E-commerce": {
    wash: "from-emerald-500/[0.14] to-transparent",
    art: "text-emerald-500",
    chip: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
  },
  Shopify: {
    wash: "from-lime-500/[0.16] to-transparent",
    art: "text-lime-500",
    chip: "text-lime-600 dark:text-lime-400 bg-lime-500/10",
  },
  Backend: {
    wash: "from-violet-500/[0.14] to-transparent",
    art: "text-violet-500",
    chip: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
  },
  "Open Source": {
    wash: "from-amber-500/[0.14] to-transparent",
    art: "text-amber-500",
    chip: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
  },
};

const fallbackStyle = {
  wash: "from-accent/[0.14] to-transparent",
  art: "text-accent",
  chip: "text-accent bg-accent/10",
};

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const style = categoryStyles[project.category] ?? fallbackStyle;

  const ArtIcon =
    project.technologies.map((t) => techIconMap[t]).find(Boolean) ?? Code2;

  return (
    <article className="card card-interactive group h-full flex flex-col overflow-hidden">
      {/* Generated cover keyed to the project's stack — gives the grid rhythm without stock art. */}
      <div className="relative h-24 shrink-0 overflow-hidden border-b border-border">
        <div className={`absolute inset-0 bg-gradient-to-br ${style.wash}`} />
        <div
          className="absolute inset-0 text-foreground/[0.07] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:11px_11px]"
          aria-hidden="true"
        />
        <ArtIcon
          className={`absolute -bottom-4 -right-3 w-24 h-24 opacity-[0.14] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${style.art}`}
        />
        <span
          className={`absolute top-3 left-3.5 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${style.chip}`}
        >
          {project.category}
        </span>

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source on GitHub`}
              className="grid place-items-center w-7 h-7 rounded-md bg-card/80 backdrop-blur-sm border border-border text-muted transition-colors hover:text-foreground"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="grid place-items-center w-7 h-7 rounded-md bg-card/80 backdrop-blur-sm border border-border text-muted transition-colors hover:text-foreground"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[14.5px] font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
          {project.name}
        </h3>

        <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-4 inline-flex items-center gap-1 self-start text-[12px] font-medium text-faint transition-colors hover:text-foreground"
        >
          {expanded ? "Hide details" : "View details"}
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-border space-y-3.5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-faint">
                Problem solved
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{project.problem}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-faint">
                Key features
              </p>
              <ul className="mt-1.5 grid gap-1">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[12.5px] text-muted">
                    <span
                      className="mt-[6px] w-1 h-1 shrink-0 rounded-full bg-accent/60"
                      aria-hidden="true"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          description="Starter kits, architecture templates and production tools — most of them open source and reused across real client work."
        />

        <ScrollReveal>
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="-mt-4 mb-8 flex flex-wrap gap-1.5"
          >
            {projectCategories.map((cat) => {
              const isActive = active === cat;
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[12.5px] font-medium rounded-full border transition-all duration-200 ${
                    isActive
                      ? "bg-foreground text-background border-transparent"
                      : "bg-card text-muted border-border hover:text-foreground hover:border-border-strong"
                  }`}
                >
                  {cat}
                  <span
                    className={`tabular text-[10.5px] ${isActive ? "opacity-60" : "text-faint"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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
