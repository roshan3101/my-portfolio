"use client"

import React, { useState } from "react"
import Image from "next/image"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export function ContactSection() {
  const { profile } = portfolioData
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)

    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}))
        const message =
          typeof errorBody?.error === "string"
            ? errorBody.error
            : "Failed to send message. Please try again."
        throw new Error(message)
      }
      
      toast.success("Message sent successfully! I'll get back to you soon.")
      form.reset()
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      toast.error("Failed to send message. Please try again or email directly.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className={cn("py-24 px-6", isVisible && "animate-on-scroll visible")}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg">
          {"I'm always open to discussing new projects, opportunities, or just having a chat about technology."}
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="bg-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="bg-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="bg-transparent resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || submitted}
              className="w-full sm:w-auto"
            >
              {submitted ? (
                "Message Sent!"
              ) : isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="h-[300px] w-[300px] rounded-full overflow-hidden border border-border/70 shadow-sm shrink-0">
              <Image src="/me.png" alt="Roshan Kumar Sahu" width={250} height={250} className="object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
