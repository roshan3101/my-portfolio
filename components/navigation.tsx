"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Freelance", href: "#freelance" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`)
          break
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-6xl px-6 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full overflow-hidden border border-border/60 shadow-sm">
              <Image
                src="/me.png"
                alt="Roshan Kumar Sahu"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <a
              href="#"
              className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-70"
              aria-label="Home"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              RKS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm transition-colors relative",
                  activeSection === item.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-64 pt-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm transition-colors",
                  activeSection === item.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
