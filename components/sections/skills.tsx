"use client"

import { portfolioData } from "@/lib/data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

const skillCategories = [
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "devops", label: "DevOps" },
  { key: "ml_ai", label: "ML / AI" },
] as const

const skillProficiency: Record<string, Record<string, number>> = {
  languages: {
    Python: 90,
    "C++": 85,
    JavaScript: 95,
    TypeScript: 90,
    HTML: 95,
    CSS: 90,
  },
  frontend: {
    React: 95,
    "Tailwind CSS": 90,
    Redux: 85,
    Zustand: 80,
    "Material UI": 85,
    "UI/UX": 80,
  },
  backend: {
    FastAPI: 90,
    "Node.js": 90,
    "Express.js": 85,
    Django: 80,
    "Next.js": 95,
    "REST APIs": 90,
    MERN: 90,
  },
  databases: {
    PostgreSQL: 85,
    MySQL: 80,
    MongoDB: 90,
    SQLite: 85,
    Redis: 75,
    Prisma: 90,
    Mongoose: 85,
  },
  devops: {
    Docker: 85,
    Git: 95,
    GitHub: 95,
    "AWS (S3, EC2)": 75,
    "CI/CD": 80,
    Linux: 85,
  },
  ml_ai: {
    TensorFlow: 80,
    PyTorch: 75,
    "Scikit-learn": 85,
    NLP: 85,
    RAG: 90,
    LLaMA: 80,
    "Computer Vision": 75,
  },
}

export function SkillsSection() {
  const { skills } = portfolioData
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="skills"
      ref={ref}
      className={cn("py-24 px-6", isVisible && "animate-on-scroll visible")}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12">
          Skills
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ key, label }, index) => (
            <article
              key={key}
              className={cn(
                "group rounded-2xl border border-border/70 bg-background/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/40",
                "animate-in fade-in slide-in-from-bottom-2 duration-500",
                index % 2 === 0 ? "delay-100" : "delay-200"
              )}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground/80">
                {skills[key].length} core tools
              </p>

              <div className="mt-4 space-y-2">
                {skills[key].map((skill) => {
                  const proficiency = skillProficiency[key]?.[skill] ?? 80
                  const filledStars = Math.round(proficiency / 20)

                  return (
                    <div
                      key={skill}
                      className="flex items-center justify-between gap-3 rounded-lg border border-transparent px-2 py-1.5 transition-colors group-hover:border-border/60"
                    >
                      <span className="text-xs sm:text-sm font-medium truncate">
                        {skill}
                      </span>
                      <div
                        className="flex items-center gap-0.5"
                        role="img"
                        aria-label={`${proficiency}% proficiency in ${skill}`}
                      >
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={cn(
                              "h-3 w-3 sm:h-3.5 sm:w-3.5 transition-colors",
                              starIndex < filledStars
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-muted-foreground/40"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
