"use client"

import { portfolioData } from "@/lib/data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Briefcase, Globe2 } from "lucide-react"

export function FreelanceSection() {
  const { freelance } = portfolioData
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="freelance"
      ref={ref}
      className={cn("py-24 px-6", isVisible && "animate-on-scroll visible")}
      aria-label="Freelance services"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-3 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" /> Freelance
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Available for Freelance & Consulting
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            I work with early-stage teams and founders to ship real products fast – from MVPs
            and internal tools to AI-powered features and automation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {freelance.map((item, index) => (
            <article
              key={index}
              className="group relative h-full rounded-xl border border-border/80 bg-background/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.summary}</p>
                </div>
                <Globe2 className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                    Typical work
                  </p>
                  <ul className="space-y-1.5 text-muted-foreground">
                    {item.focus.map((point: string) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-foreground" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground transition-colors group-hover:border-foreground/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{item.availability}</span>
                <span className="font-medium text-foreground/80">
                  Let&apos;s build something
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

