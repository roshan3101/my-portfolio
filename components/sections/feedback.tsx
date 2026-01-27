"use client"

import { portfolioData } from "@/lib/data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function FeedbackSection() {
  const { testimonials } = portfolioData
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="feedback"
      ref={ref}
      className={cn("py-24 px-6", isVisible && "animate-on-scroll visible")}
      aria-label="Client feedback"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Feedback
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            What clients say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A few words from founders and teams I&apos;ve partnered with on freelance projects
            and consulting engagements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item: any, index: number) => (
            <article
              key={item.name + index}
              className={cn(
                "group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-background/60 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/40",
                "animate-in fade-in slide-in-from-bottom-2",
                index === 1 ? "delay-150" : index === 2 ? "delay-200" : "delay-100"
              )}
            >
              <p className="text-sm text-muted-foreground leading-relaxed font-testimonial">
                “{item.content ?? item.feedback}”
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <div className="space-y-0.5 font-testimonial">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.role}
                    {item.organization ? ` · ${item.organization}` : null}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

