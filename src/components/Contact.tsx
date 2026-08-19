"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Mail, MapPin, Phone, Send, Check, ArrowRight } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      data.get("subject") as string
    )}&body=${encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    )}`;
    window.open(mailto, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold text-foreground mb-2">Get in Touch</h2>
          <div className="w-10 h-0.5 bg-accent rounded-full mb-3" />
          <p className="text-sm text-muted mb-12 max-w-md">
            Have a project in mind? I&apos;m available for full-time roles, contract work, and consulting.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="space-y-5">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                {siteConfig.phone}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                {siteConfig.location}
              </div>

              <div className="pt-4 flex items-center gap-2">
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-foreground/20 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-foreground/20 transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl border border-border bg-card">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-foreground mb-1.5">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" id="email" name="email" required placeholder="you@email.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[13px] font-medium text-foreground mb-1.5">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Project inquiry"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-foreground mb-1.5">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell me about your project..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                {submitted ? <><Check className="w-4 h-4" /> Sent!</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
