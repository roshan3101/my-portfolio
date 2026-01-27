"use client"

import { portfolioData } from "@/lib/data"
import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const { profile } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 border-t border-border" role="contentinfo">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/50 flex items-center gap-1">
              Made with{" "}
              <Heart
                className="h-3 w-3 fill-destructive text-destructive"
                aria-hidden="true"
              />{" "}
              using Next.js & Tailwind CSS
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <a
                href={profile.links.email}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
