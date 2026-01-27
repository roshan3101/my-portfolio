"use client"

import { portfolioData } from "@/lib/data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function HighlightsSection() {
  const { achievements, leadership } = portfolioData
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="highlights"
      ref={ref}
      className={cn("py-24 px-6", isVisible && "animate-on-scroll visible")}
      aria-label="Achievements and leadership"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Achievements & Leadership
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A snapshot of the competitions, hackathons, and leadership roles that have
            shaped how I build and ship software.
          </p>
        </div>

        {/* Achievements */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight">
            Achievements
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Leadership */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight">
            Leadership
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {leadership.map((item, index) => (
              <article
                key={index}
                className="group rounded-xl border border-border bg-background/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-lg"
              >
                <p className="font-medium">{item.role}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.organization}
                </p>
                <p className="text-sm text-muted-foreground/80 mt-2">
                  {item.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

