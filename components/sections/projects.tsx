"use client"

import { useEffect, useState } from "react"
import { portfolioData } from "@/lib/data"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"

type Project = (typeof portfolioData.projects)[number]

export function ProjectsSection() {
  const { projects } = portfolioData
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useScrollAnimation()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const total = projects.length

  const drawerImageSrc =
    selectedProject &&
    (typeof selectedProject.image === "string"
      ? selectedProject.image
      : !mounted
      ? selectedProject.image.light ?? selectedProject.image.dark
      : resolvedTheme === "dark"
      ? selectedProject.image.dark ?? selectedProject.image.light
      : selectedProject.image.light ?? selectedProject.image.dark)

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  const getPosition = (index: number) => {
    if (index === currentIndex) return "center"
    if (index === (currentIndex - 1 + total) % total) return "left"
    if (index === (currentIndex + 1) % total) return "right"
    return "hidden"
  }

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className={cn("py-24 px-6", isVisible && "animate-on-scroll visible")}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12">
            Projects
          </h2>

          <div className="relative">
            <div className="flex items-stretch justify-center gap-8 overflow-hidden">
              {projects.map((project, index) => {
                const position = getPosition(index)

                if (position === "hidden") {
                  return null
                }

                const baseClasses =
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/60 shadow-sm transition-transform transition-opacity duration-700 ease-in-out"

                const imageSrc =
                  typeof project.image === "string"
                    ? project.image
                    : !mounted
                    ? project.image.light ?? project.image.dark
                    : resolvedTheme === "dark"
                    ? project.image.dark ?? project.image.light
                    : project.image.light ?? project.image.dark

                const positionClasses =
                  position === "center"
                    ? "z-20 w-full max-w-2xl md:max-w-3xl h-[440px] opacity-100 scale-100 translate-x-0 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/40"
                    : position === "left"
                    ? "z-10 hidden sm:flex w-40 md:w-48 h-[340px] opacity-45 scale-90 -translate-x-10"
                    : "z-10 hidden sm:flex w-40 md:w-48 h-[340px] opacity-45 scale-90 translate-x-10"

                return (
                  <article
                    key={project.name}
                    className={cn(
                      baseClasses,
                      positionClasses,
                      "animate-in fade-in slide-in-from-bottom-2 duration-500"
                    )}
                  >
                    {/* Project Image */}
                    <div className="relative h-40 md:h-48 bg-background overflow-hidden">
                      <Image
                        src={imageSrc || "/placeholder.jpg"}
                        alt={project.name}
                        loading="lazy"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-1 flex-col p-5 space-y-4">
                      <div className="space-y-1.5">
                        <h3 className="font-semibold tracking-tight text-base sm:text-lg">
                          {project.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-[11px] text-muted-foreground border border-border rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 text-[11px] text-muted-foreground">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto flex items-center gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedProject(project)}
                          className="flex-1"
                        >
                          View Details
                        </Button>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 border border-border rounded hover:border-foreground/50 transition-colors"
                            aria-label={`View ${project.name} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      {project.liveUrl && project.liveUrl !== "N/A" ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 border border-border rounded hover:border-foreground/50 transition-colors"
                          aria-label={`View ${project.name} live`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="p-2 border border-border rounded opacity-40 cursor-not-hover:text-muted-foreground"
                          aria-disabled="true"
                          disabled
                          title="Live demo coming soon"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={goToPrev}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-xs text-muted-foreground">
                {currentIndex + 1} / {total}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={goToNext}
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Sheet
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null)
        }}
      >
        <SheetContent
          side="right"
          className="w-full sm:max-w-lg md:max-w-xl flex flex-col gap-0"
          aria-label="Project details"
        >
          {selectedProject && (
            <>
              {drawerImageSrc && (
                <div className="relative h-40 md:h-52 bg-background overflow-hidden border-b border-border/60">
                  <Image
                    src={drawerImageSrc}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                </div>
              )}

              <SheetHeader className="p-6 pb-4">
                <SheetTitle className="font-project-accent text-lg sm:text-xl">
                  {selectedProject.name}
                </SheetTitle>
                <SheetDescription className="font-testimonial text-sm text-muted-foreground">
                  {selectedProject.description}
                </SheetDescription>
              </SheetHeader>

              <div className="px-6 pb-4 pt-2 space-y-6 overflow-y-auto font-testimonial">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm border border-border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <SheetFooter className="p-6 pt-4 flex-row items-center justify-between gap-3 font-testimonial">
                <div className="text-xs text-muted-foreground max-w-[60%]">
                  View the source code or explore a live demo of this project.
                </div>
                <div className="flex items-center gap-2">
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "N/A" ? (
                    <Button
                      size="sm"
                      asChild
                    >
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled className="opacity-40 cursor-not-allowed">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Soon
                    </Button>
                  )}
                </div>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}
