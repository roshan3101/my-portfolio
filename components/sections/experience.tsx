"use client"

import { portfolioData } from "@/lib/data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  const { experience, education } = portfolioData
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="experience"
      ref={ref}
      className={cn("py-24 px-6", isVisible && "animate-on-scroll visible")}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12">
          Experience
        </h2>

        {/* Work Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 pb-8 last:pb-0">
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[3px] top-3 bottom-0 w-px bg-border" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-foreground" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold">{job.company}</h3>
                  <span className="text-sm text-muted-foreground">
                    {job.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {job.role} · {job.location}
                </p>
                <ul className="space-y-2 mt-3">
                  {job.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-foreground" />

              <div className="space-y-1">
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground/70">
                  <span>{"duration" in edu ? edu.duration : edu.year}</span>
                  {"location" in edu && <span>{edu.location}</span>}
                  {"cgpa" in edu && <span>CGPA: {edu.cgpa}</span>}
                  {"score" in edu && <span>Score: {edu.score}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
