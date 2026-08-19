"use client";

import { ScrollReveal } from "./ScrollReveal";
import { siteConfig, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-28 border-t border-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <ScrollReveal>
            <div>
              <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Passionate about<br />
                <span className="gradient-text">building software</span>
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold gradient-text">{s.value}</div>
                    <div className="text-[12px] text-muted-foreground mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="space-y-5 text-[15px] text-muted leading-[1.85]">
              <p>
                I&apos;m a <strong className="text-foreground font-semibold">full-stack software engineer</strong> with
                over 7 years of professional experience, currently based in the UAE. I specialize in building
                reliable, scalable, and maintainable software — from SaaS platforms and e-commerce systems
                to workflow automation and AI-powered solutions.
              </p>
              <p>
                My expertise spans <strong className="text-foreground font-semibold">React, Next.js, Vue.js</strong> on
                the frontend; <strong className="text-foreground font-semibold">Node.js, NestJS, Laravel, Python, and Go</strong> on
                the backend; with deep experience in Shopify app development, third-party API integrations,
                and enterprise systems including WMS, ERP, CRM, and OMS platforms.
              </p>
              <p>
                Currently at <strong className="text-foreground font-semibold">InsuranceMarket.ae</strong> in Dubai,
                I focus on workflow automation, customer communication platforms, and AI-assisted development —
                building systems that drive real business efficiency.
              </p>
              <div className="pt-4">
                <a href="#contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline underline-offset-4">
                  Let&apos;s work together &rarr;
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
