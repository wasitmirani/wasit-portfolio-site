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
    <section id="contact" className="py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_50%)] opacity-[0.03]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Let&apos;s Work Together</h2>
            <p className="text-[15px] text-muted max-w-md mx-auto">
              Have a project in mind? I&apos;m available for full-time roles, contract work, and consulting.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="space-y-5">
              <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3.5 p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-accent/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 ring-1 ring-accent/20">
                  <Mail className="w-4.5 h-4.5 text-accent" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Email</div>
                  <div className="text-sm text-foreground font-medium">{siteConfig.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 ring-1 ring-accent/20">
                  <Phone className="w-4.5 h-4.5 text-accent" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Phone</div>
                  <div className="text-sm text-foreground font-medium">{siteConfig.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 ring-1 ring-accent/20">
                  <MapPin className="w-4.5 h-4.5 text-accent" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Location</div>
                  <div className="text-sm text-foreground font-medium">{siteConfig.location}</div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2">
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border text-muted hover:text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border text-muted hover:text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <form onSubmit={handleSubmit} className="space-y-5 p-7 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-semibold text-foreground mb-2">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-semibold text-foreground mb-2">Email</label>
                  <input type="email" id="email" name="email" required placeholder="you@email.com"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[13px] font-semibold text-foreground mb-2">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Project inquiry"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-[13px] font-semibold text-foreground mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-white rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5">
                {submitted ? <><Check className="w-4 h-4" /> Message Sent!</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
