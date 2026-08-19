"use client";

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { githubRepos, siteConfig, stats } from "@/data/portfolio";

const langColors: Record<string, string> = {
  PHP: "bg-[#4F5D95]",
  Go: "bg-[#00ADD8]",
  Vue: "bg-[#41B883]",
  Dart: "bg-[#00B4AB]",
  TypeScript: "bg-[#3178C6]",
  JavaScript: "bg-[#F7DF1E]",
  Python: "bg-[#3572A5]",
  CSS: "bg-[#563D7C]",
};

const languages = Array.from(new Set(githubRepos.map((r) => r.language)));
const repoCount = stats.find((s) => s.label === "Public Repositories")?.value ?? "";

export function GitHubSection() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub activity"
          description="Starter kits and architecture templates I maintain publicly, spanning PHP, TypeScript, Go and Dart."
          action={
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group"
            >
              <Github className="w-4 h-4" />
              View profile
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        <ScrollReveal>
          <div className="card p-5 mb-2.5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-foreground text-background">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-foreground">
                    {siteConfig.name}
                  </div>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] text-accent hover:underline underline-offset-2"
                  >
                    @wasitmirani
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px h-9 bg-border" />

              <div>
                <div className="tabular text-[20px] font-semibold leading-none text-foreground">
                  {repoCount}
                </div>
                <div className="mt-1.5 text-[11px] text-faint">Public repositories</div>
              </div>

              <div className="hidden sm:block w-px h-9 bg-border" />

              <div className="min-w-0">
                <div className="text-[11px] text-faint mb-2">Primary languages</div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="flex items-center gap-1.5 text-[12px] text-muted"
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${langColors[lang] ?? "bg-zinc-400"}`}
                        aria-hidden="true"
                      />
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {githubRepos.map((repo, i) => (
            <ScrollReveal key={repo.name} delay={i * 40}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-interactive group block h-full p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Github className="w-4 h-4 shrink-0 text-faint transition-colors group-hover:text-foreground" />
                    <h3 className="truncate font-mono text-[12.5px] font-medium text-foreground transition-colors group-hover:text-accent">
                      {repo.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-faint opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5" />
                </div>

                <p className="mt-2.5 line-clamp-2 text-[12.5px] leading-relaxed text-muted">
                  {repo.description}
                </p>

                <div className="mt-4 flex items-center gap-3.5 text-[11.5px] text-faint">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${langColors[repo.language] ?? "bg-zinc-400"}`}
                      aria-hidden="true"
                    />
                    {repo.language}
                  </span>
                  {repo.stars > 0 && (
                    <span className="tabular flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </span>
                  )}
                  {repo.forks > 0 && (
                    <span className="tabular flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks}
                    </span>
                  )}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
