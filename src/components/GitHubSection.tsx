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
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Open Source</h2>
              <div className="w-10 h-0.5 bg-accent rounded-full" />
            </div>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="group hidden sm:inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-medium transition-colors">
              All repos <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {githubRepos.map((repo, i) => (
            <ScrollReveal key={repo.name} delay={i * 40}>
              <a href={repo.url} target="_blank" rel="noopener noreferrer"
                className="group block p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-sm transition-all h-full">
                <div className="flex items-center gap-2 mb-2.5">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  <h4 className="text-[13px] font-semibold text-foreground group-hover:text-accent transition-colors truncate">{repo.name}</h4>
                </div>
                <p className="text-[13px] text-muted mb-4 leading-relaxed line-clamp-2">{repo.description}</p>
                <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${langColors[repo.language] ?? "bg-zinc-400"}`} />
                    {repo.language}
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
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-sm text-accent font-medium">
              View all repositories <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
