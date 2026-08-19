"use client";

import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <ScrollReveal>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">About Me</h2>
              <div className="w-10 h-0.5 bg-accent rounded-full" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="space-y-5 text-[15px] text-muted leading-[1.8]">
              <p>
                I&apos;m a <strong className="text-foreground font-medium">full-stack software engineer</strong> with
                over 7 years of professional experience, currently based in the UAE. I specialize in building
                reliable, scalable, and maintainable software — from SaaS platforms and e-commerce systems
                to workflow automation and AI-powered solutions.
              </p>
              <p>
                My expertise spans <strong className="text-foreground font-medium">React, Next.js, Vue.js</strong> on
                the frontend; <strong className="text-foreground font-medium">Node.js, NestJS, Laravel, Python, and Go</strong> on
                the backend; with deep experience in Shopify app development, third-party API integrations,
                and enterprise systems including WMS, ERP, CRM, and OMS platforms.
              </p>
              <p>
                Currently at <strong className="text-foreground font-medium">InsuranceMarket.ae</strong> in Dubai,
                I focus on workflow automation, customer communication platforms, and AI-assisted development —
                building systems that drive real business efficiency.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
