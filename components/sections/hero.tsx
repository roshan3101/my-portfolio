"use client"

import { portfolioData } from "@/lib/data"
import { ArrowDown, Github, Linkedin, Mail, Download, Link } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const { profile } = portfolioData

  const handleScrollToProjects = () => {
    const section = document.querySelector("#projects")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid gap-10 md:gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 text-left animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium font-tagline">
                <span className="text-primary">
                  <TypingAnimation
                    texts={[profile.tagline]}
                    speed={80}
                    deleteSpeed={40}
                    pauseTime={2500}
                  />
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-start gap-4">
                <Button
                  onClick={handleScrollToProjects}
                  className="group w-full sm:w-auto"
                >
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const resumeUrl =
                      process.env.NEXT_PUBLIC_RESUME_LINK || "/resume.pdf"
                    window.open(resumeUrl, "_blank", "noopener,noreferrer")
                  }}
                  className="group w-full sm:w-auto"
                >
                  View Resume
                  <Link className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={profile.links.email}
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce z-10"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
