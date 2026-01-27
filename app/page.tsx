import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { HighlightsSection } from "@/components/sections/highlights"
import { FreelanceSection } from "@/components/sections/freelance"
import { FeedbackSection } from "@/components/sections/feedback"
import { ExperienceSection } from "@/components/sections/experience"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <FreelanceSection />
        <FeedbackSection />
        <ContactSection />
        <Footer />
      </main>
    </ErrorBoundary>
  )
}
