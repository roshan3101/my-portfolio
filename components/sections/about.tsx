"use client"

import { portfolioData } from "@/lib/data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { profile, achievements, leadership } = portfolioData
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" ref={ref} className={cn("py-24 px-6", isVisible && "animate-on-scroll visible")}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12">
          About
        </h2>

        <div className="space-y-10">
          {/* Bio */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {profile.bio}
          </p>

          {/* What I bring to the table */}
          {profile.whatIBringToTable && profile.whatIBringToTable.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-tight">
                What I bring to the table
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.whatIBringToTable.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-background/60 p-4 text-sm text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
