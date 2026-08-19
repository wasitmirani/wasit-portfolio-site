import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const centered = align === "center";

  return (
    <ScrollReveal>
      <div
        className={`mb-12 md:mb-16 ${
          centered
            ? "text-center max-w-2xl mx-auto"
            : action
              ? "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"
              : ""
        }`}
      >
        <div className={centered ? "" : "max-w-2xl"}>
          <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
          <h2 className="mt-4 text-[1.85rem] sm:text-[2.15rem] font-semibold leading-[1.15] text-foreground">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{description}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </ScrollReveal>
  );
}
