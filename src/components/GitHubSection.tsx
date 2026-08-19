"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Star, GitFork, ArrowRight } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { githubRepos, siteConfig } from "@/data/portfolio";

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

export function GitHubSection() {
  return (
    <section className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--accent)_0%,transparent_50%)] opacity-[0.03]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
                Open Source
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">GitHub Repositories</h2>
            </div>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm text-accent font-semibold border border-accent/30 rounded-xl hover:bg-accent/5 transition-all">
              View all <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {githubRepos.map((repo, i) => (
            <ScrollReveal key={repo.name} delay={i * 50}>
              <a href={repo.url} target="_blank" rel="noopener noreferrer"
                className="group block p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-card-hover flex items-center justify-center">
                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-[13px] font-bold text-foreground group-hover:text-accent transition-colors truncate">{repo.name}</h4>
                </div>
                <p className="text-[13px] text-muted mb-4 leading-relaxed line-clamp-2">{repo.description}</p>
                <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-full ${langColors[repo.language] ?? "bg-zinc-400"}`} />
                    <span className="font-medium">{repo.language}</span>
                  </span>
                  {repo.stars > 0 && <span className="flex items-center gap-1"><Star className="w-3 h-3" />{repo.stars}</span>}
                  {repo.forks > 0 && <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{repo.forks}</span>}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 text-center sm:hidden">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-sm text-accent font-semibold">
              View all repositories <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
