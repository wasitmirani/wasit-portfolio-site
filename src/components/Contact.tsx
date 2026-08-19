"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  ArrowUpRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, XTwitterIcon as Twitter } from "./BrandIcons";
import { siteConfig } from "@/data/portfolio";

const inputClass =
  "w-full px-3.5 py-2.5 text-[13px] rounded-[10px] border border-border bg-background text-foreground placeholder:text-faint transition-all duration-150 focus:outline-none focus:border-accent/50 focus:ring-[3px] focus:ring-accent/12 disabled:opacity-60";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [loadedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    const data = {
      ...formData,
      _timestamp: String(loadedAt),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Failed to send message. Please try again.");
      }

      form.reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <section id="contact" className="section">
      <div className="container-page">
        {/* CTA panel — the one place on the page that gets a filled background. */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-12 sm:py-14 text-center">
            <div
              className="dot-grid absolute inset-0 opacity-60"
              aria-hidden="true"
            />
            <div
              className="glow absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[420px] opacity-60"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border bg-card/70 backdrop-blur-sm">
                <span className="relative grid place-items-center w-3.5 h-3.5">
                  <span className="absolute w-2 h-2 rounded-full bg-emerald-500/40 animate-ping" />
                  <span className="relative w-[6px] h-[6px] rounded-full bg-emerald-500" />
                </span>
                <span className="text-[11px] font-medium text-muted">
                  Open to full-time, contract and consulting
                </span>
              </div>

              <h2 className="mt-6 text-[1.85rem] sm:text-[2.4rem] font-semibold leading-[1.12] text-foreground">
                Let&apos;s build something
                <br className="hidden sm:block" />{" "}
                <span className="gradient-text">worth shipping</span>
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-[14.5px] leading-relaxed text-muted">
                Have a project in mind, a team to strengthen, or a system that needs rescuing? I
                usually reply within a day.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${siteConfig.email}`} className="btn btn-accent btn-lg group">
                  <Mail className="w-4 h-4" />
                  Start a Conversation
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg group"
                >
                  <Linkedin className="w-4 h-4" />
                  View LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] gap-10 lg:gap-14">
          <ScrollReveal>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
                Contact details
              </h3>

              <div className="mt-5 space-y-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="card card-interactive group flex items-center gap-3 p-3.5"
                >
                  <div className="grid place-items-center w-9 h-9 shrink-0 rounded-[10px] bg-surface text-faint transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-faint">
                      Email
                    </div>
                    <div className="truncate text-[13px] text-foreground">{siteConfig.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="card card-interactive group flex items-center gap-3 p-3.5"
                >
                  <div className="grid place-items-center w-9 h-9 shrink-0 rounded-[10px] bg-surface text-faint transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-faint">
                      Phone
                    </div>
                    <div className="tabular truncate text-[13px] text-foreground">
                      {siteConfig.phone}
                    </div>
                  </div>
                </a>

                <div className="card flex items-center gap-3 p-3.5">
                  <div className="grid place-items-center w-9 h-9 shrink-0 rounded-[10px] bg-surface text-faint">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-faint">
                      Location
                    </div>
                    <div className="truncate text-[13px] text-foreground">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
                Elsewhere
              </h3>
              <div className="mt-4 flex items-center gap-1.5">
                {[
                  { icon: Github, href: siteConfig.github, label: "GitHub" },
                  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: siteConfig.twitter, label: "X" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center w-9 h-9 rounded-[10px] border border-border bg-card text-muted transition-all duration-200 hover:text-foreground hover:border-border-strong hover:-translate-y-0.5"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <form onSubmit={handleSubmit} className="card p-5 sm:p-6">
              <h3 className="text-[14px] font-semibold text-foreground">Send a message</h3>
              <p className="mt-1 text-[12.5px] text-muted">
                Goes straight to my inbox — no mail client needed.
              </p>

              <div className="mt-6 space-y-4">
                {/* Honeypot field — hidden from humans, traps bots */}
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1.5 text-[12px] font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      disabled={sending}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1.5 text-[12px] font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      disabled={sending}
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-1.5 text-[12px] font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={sending}
                    placeholder="Project inquiry"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1.5 text-[12px] font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={sending}
                    placeholder="Tell me about your project, timeline and what success looks like..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" /> Sending
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Send message
                      </>
                    )}
                  </button>

                  <p role="status" aria-live="polite" className="text-[12.5px]">
                    {status === "success" && (
                      <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        Message sent — I&apos;ll be in touch shortly.
                      </span>
                    )}
                    {status === "error" && (
                      <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {error}{" "}
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="font-medium underline underline-offset-2"
                          >
                            Email me directly
                          </a>
                          .
                        </span>
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
