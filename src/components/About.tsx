"use client";

import { ScrollReveal } from "./ScrollReveal";
import { stats } from "@/data/portfolio";
import { Layers, Server, Cloud, GitBranch } from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "Frontend Engineering",
    body: "React, Next.js, Vue.js and TypeScript — accessible, fast interfaces built on design systems.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    body: "Node.js, NestJS, Laravel, Python and Go — REST and gRPC services designed to scale.",
  },
  {
    icon: Cloud,
    title: "Cloud & Architecture",
    body: "AWS, Docker and CI/CD pipelines, with database and caching strategies that hold up in production.",
  },
  {
    icon: GitBranch,
    title: "Product & SaaS",
    body: "Multi-tenancy, billing, integrations and workflow automation for real business operations.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <ScrollReveal>
              <p className="eyebrow">About</p>
              <h2 className="mt-4 text-[1.85rem] sm:text-[2.15rem] font-semibold leading-[1.15] text-foreground">
                Engineering that
                <br />
                <span className="text-muted">earns its keep</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <div className="mt-8 grid grid-cols-2 gap-2.5">
                {stats.map((s) => (
                  <div key={s.label} className="card card-interactive p-4">
                    <div className="tabular text-[26px] font-semibold leading-none text-foreground">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[11.5px] text-faint">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={60}>
              <div className="space-y-4 text-[15px] leading-[1.8] text-muted">
                <p>
                  I&apos;m a{" "}
                  <strong className="font-medium text-foreground">
                    full-stack software engineer
                  </strong>{" "}
                  with over 7 years of professional experience, currently based in the UAE. I
                  specialize in building reliable, scalable, and maintainable software — from SaaS
                  platforms and e-commerce systems to workflow automation and AI-powered solutions.
                </p>
                <p>
                  My expertise spans{" "}
                  <strong className="font-medium text-foreground">React, Next.js, Vue.js</strong> on
                  the frontend;{" "}
                  <strong className="font-medium text-foreground">
                    Node.js, NestJS, Laravel, Python, and Go
                  </strong>{" "}
                  on the backend; with deep experience in Shopify app development, third-party API
                  integrations, and enterprise systems including WMS, ERP, CRM, and OMS platforms.
                </p>
                <p>
                  Currently at{" "}
                  <strong className="font-medium text-foreground">InsuranceMarket.ae</strong> in
                  Dubai, I focus on workflow automation, customer communication platforms, and
                  AI-assisted development — building systems that drive real business efficiency.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-2.5">
              {capabilities.map((c, i) => (
                <ScrollReveal key={c.title} delay={100 + i * 50}>
                  <div className="card card-interactive group h-full p-5">
                    <div className="grid place-items-center w-9 h-9 rounded-[10px] bg-surface text-muted transition-colors duration-200 group-hover:bg-accent/10 group-hover:text-accent">
                      <c.icon className="w-4 h-4" />
                    </div>
                    <h3 className="mt-3.5 text-[13.5px] font-semibold text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{c.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={300}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 mt-9 text-[13.5px] font-medium text-foreground transition-colors hover:text-accent"
              >
                Let&apos;s work together
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
