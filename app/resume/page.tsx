"use client"

import { useEffect, useState } from "react"
import { resumeData } from "@/lib/resume-data"
import { resumeFixedData } from "@/lib/resume-fixed"
import { generateResumeLatex } from "@/lib/resume-template"

type RoleKey = keyof typeof resumeData

type EditableExperience = {
  company: string
  role: string
  start: string
  end: string
  highlights: string
}

type EditableProject = {
  title: string
  codeUrl: string
  liveUrl: string
  tech: string
  highlights: string
}

const roleOptions: { key: RoleKey; label: string }[] = [
  { key: "Full Stack Developer", label: "Full Stack Developer (FSD)" },
  { key: "Backend Developer", label: "Backend Developer (BD)" },
  { key: "Frontend Developer", label: "Frontend Developer (FD)" },
  { key: "SDE", label: "Software Development Engineer (SDE)" },
  { key: "ML/DS Engineer", label: "ML / Data Science Engineer (DS)" },
  { key: "AI Engineer", label: "AI Engineer (AI)" },
  { key: "AI + Backend Engineer", label: "AI + Backend Engineer (AIB)" },
]

export default function ResumeLatexPage() {
  const [selectedRole, setSelectedRole] = useState<RoleKey>(
    "Full Stack Developer",
  )
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [summaryText, setSummaryText] = useState("")
  const [latex, setLatex] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState<string>(resumeFixedData.email)
  const [showAchievements, setShowAchievements] = useState(true)
  const [showLeadership, setShowLeadership] = useState(true)
  const [experiences, setExperiences] = useState<EditableExperience[]>([])
  const [projects, setProjects] = useState<EditableProject[]>([])

  useEffect(() => {
    const lines =
      (resumeFixedData as any).summaryByRole?.[selectedRole] ?? []
    const paragraph = Array.isArray(lines)
      ? lines.slice(0, 3).join(" ")
      : ""
    setSummaryText(paragraph)
  }, [selectedRole])

  useEffect(() => {
    const block: any = resumeData[selectedRole]
    const baseExperiences: EditableExperience[] = (block.experience ?? []).map(
      (exp: any) => ({
        company: exp.company ?? "",
        role: exp.role ?? "",
        start: exp.start ?? "",
        end: exp.end ?? "",
        highlights: Array.isArray(exp.highlights)
          ? exp.highlights.join("\n")
          : "",
      }),
    )
    const baseProjects: EditableProject[] = (block.projects ?? []).map(
      (proj: any) => ({
        title: proj.title ?? proj.name ?? "",
        codeUrl: proj.codeUrl ?? proj.githubUrl ?? "",
        liveUrl: proj.liveUrl ?? "",
        tech: Array.isArray(proj.tags ?? proj.techStack)
          ? (proj.tags ?? proj.techStack).join(", ")
          : "",
        highlights: Array.isArray(proj.highlights)
          ? proj.highlights.join("\n")
          : "",
      }),
    )
    setExperiences(baseExperiences)
    setProjects(baseProjects)
  }, [selectedRole])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const experienceOverride = experiences.map((exp) => ({
        company: exp.company,
        role: exp.role,
        start: exp.start,
        end: exp.end,
        highlights: exp.highlights
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean),
      }))

      const projectsOverride = projects.map((proj) => ({
        title: proj.title,
        codeUrl: proj.codeUrl || undefined,
        liveUrl: proj.liveUrl || undefined,
        tags: proj.tech
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        highlights: proj.highlights
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean),
      }))

      const nextLatex = generateResumeLatex(selectedRole, {
        summaryOverride: summaryText,
        emailOverride: email,
        showAchievements,
        showLeadership,
        experienceOverride,
        projectsOverride,
      })
      setLatex(nextLatex)
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [
    selectedRole,
    summaryText,
    email,
    showAchievements,
    showLeadership,
    experiences,
    projects,
  ])

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              LaTeX Resume Generator
            </h1>
            <p className="text-sm text-muted-foreground">
              Fill this 3-step wizard to customize your resume, then copy the
              generated LaTeX code into Overleaf, TeXLive, or your preferred
              editor.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="role"
                className="text-xs font-medium text-muted-foreground"
              >
                Select role
              </label>
              <select
                id="role"
                className="min-w-[240px] rounded-md border border-border bg-background/80 px-3 py-2 text-sm"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as RoleKey)}
              >
                {roleOptions.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-medium">Step {step} of 4</span>
            </div>
          </div>
        </div>
        {step === 1 && (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border border-border bg-background/80 px-2 py-1.5 text-xs"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <span className="block text-xs font-medium text-muted-foreground">
                  Sections
                </span>
                <div className="flex flex-wrap gap-3">
                  <label className="flex items-center gap-1 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      className="h-3 w-3 accent-primary"
                      checked={showAchievements}
                      onChange={(e) => setShowAchievements(e.target.checked)}
                    />
                    <span>Show achievements</span>
                  </label>
                  <label className="flex items-center gap-1 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      className="h-3 w-3 accent-primary"
                      checked={showLeadership}
                      onChange={(e) => setShowLeadership(e.target.checked)}
                    />
                    <span>Show leadership</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="summary"
                className="block text-xs font-medium text-muted-foreground"
              >
                Summary (paragraph, max ~3 lines)
              </label>
              <textarea
                id="summary"
                className="w-full h-24 rounded-md border border-border bg-background/80 p-2 text-xs leading-relaxed"
                value={summaryText}
                onChange={(e) => setSummaryText(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-border bg-background/80 px-4 py-1.5 text-xs hover:bg-muted"
                onClick={() => setStep(2)}
              >
                Next: Projects →
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-tight">
              Projects (editable for this session)
            </h2>
            <div className="space-y-3">
              {projects.map((proj, index) => (
                <div
                  key={index}
                  className="rounded-md border border-border bg-background/60 p-3 space-y-2"
                >
                  <div className="grid gap-2 md:grid-cols-2">
                    <input
                      className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs"
                      placeholder="Title"
                      value={proj.title}
                      onChange={(e) =>
                        setProjects((prev) => {
                          const next = [...prev]
                          next[index] = { ...next[index], title: e.target.value }
                          return next
                        })
                      }
                    />
                    <input
                      className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs"
                      placeholder="Tech / tags (comma-separated)"
                      value={proj.tech}
                      onChange={(e) =>
                        setProjects((prev) => {
                          const next = [...prev]
                          next[index] = { ...next[index], tech: e.target.value }
                          return next
                        })
                      }
                    />
                    <input
                      className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs"
                      placeholder="Code URL"
                      value={proj.codeUrl}
                      onChange={(e) =>
                        setProjects((prev) => {
                          const next = [...prev]
                          next[index] = {
                            ...next[index],
                            codeUrl: e.target.value,
                          }
                          return next
                        })
                      }
                    />
                    <input
                      className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs"
                      placeholder="Live URL (or N/A)"
                      value={proj.liveUrl}
                      onChange={(e) =>
                        setProjects((prev) => {
                          const next = [...prev]
                          next[index] = {
                            ...next[index],
                            liveUrl: e.target.value,
                          }
                          return next
                        })
                      }
                    />
                  </div>
                  <textarea
                    className="w-full h-20 rounded-md border border-border bg-background/80 p-2 text-xs leading-relaxed"
                    placeholder={"One bullet per line"}
                    value={proj.highlights}
                    onChange={(e) =>
                      setProjects((prev) => {
                        const next = [...prev]
                        next[index] = {
                          ...next[index],
                          highlights: e.target.value,
                        }
                        return next
                      })
                    }
                  />
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-destructive/60 bg-background/80 px-2 py-1 text-[11px] text-destructive hover:bg-destructive/10"
                    onClick={() =>
                      setProjects((prev) => prev.filter((_, i) => i !== index))
                    }
                  >
                    Remove project
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs hover:bg-muted"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs hover:bg-muted"
                  onClick={() =>
                    setProjects((prev) => [
                      ...prev,
                      {
                        title: "",
                        codeUrl: "",
                        liveUrl: "",
                        tech: "",
                        highlights: "",
                      },
                    ])
                  }
                >
                  + Add project
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-border bg-background/80 px-4 py-1.5 text-xs hover:bg-muted"
                  onClick={() => setStep(3)}
                >
                  Next: Experience →
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <>
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-tight">
                Experience (editable for this session)
              </h2>
              <div className="space-y-3">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="rounded-md border border-border bg-background/60 p-3 space-y-2"
                  >
                    <div className="grid gap-2 md:grid-cols-2">
                      <input
                        className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) =>
                          setExperiences((prev) => {
                            const next = [...prev]
                            next[index] = {
                              ...next[index],
                              company: e.target.value,
                            }
                            return next
                          })
                        }
                      />
                      <input
                        className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs"
                        placeholder="Role"
                        value={exp.role}
                        onChange={(e) =>
                          setExperiences((prev) => {
                            const next = [...prev]
                            next[index] = {
                              ...next[index],
                              role: e.target.value,
                            }
                            return next
                          })
                        }
                      />
                      <input
                        className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs"
                        placeholder="Start (e.g. Jun 2025)"
                        value={exp.start}
                        onChange={(e) =>
                          setExperiences((prev) => {
                            const next = [...prev]
                            next[index] = {
                              ...next[index],
                              start: e.target.value,
                            }
                            return next
                          })
                        }
                      />
                      <input
                        className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs"
                        placeholder="End (e.g. Dec 2025 / Present)"
                        value={exp.end}
                        onChange={(e) =>
                          setExperiences((prev) => {
                            const next = [...prev]
                            next[index] = { ...next[index], end: e.target.value }
                            return next
                          })
                        }
                      />
                    </div>
                    <textarea
                      className="w-full h-20 rounded-md border border-border bg-background/80 p-2 text-xs leading-relaxed"
                      placeholder={"One bullet per line"}
                      value={exp.highlights}
                      onChange={(e) =>
                        setExperiences((prev) => {
                          const next = [...prev]
                          next[index] = {
                            ...next[index],
                            highlights: e.target.value,
                          }
                          return next
                        })
                      }
                    />
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-destructive/60 bg-background/80 px-2 py-1 text-[11px] text-destructive hover:bg-destructive/10"
                      onClick={() =>
                        setExperiences((prev) =>
                          prev.filter((_, i) => i !== index),
                        )
                      }
                    >
                      Remove experience
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs hover:bg-muted"
                  onClick={() => setStep(2)}
                >
                  ← Back
                </button>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs hover:bg-muted"
                    onClick={() =>
                      setExperiences((prev) => [
                        ...prev,
                        {
                          company: "",
                          role: "",
                          start: "",
                          end: "",
                          highlights: "",
                        },
                      ])
                    }
                  >
                    + Add experience
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-border bg-background/80 px-4 py-1.5 text-xs hover:bg-muted"
                    onClick={() => setStep(4)}
                  >
                    Next: LaTeX →
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-tight">
              LaTeX source for this resume
            </h2>
            <p className="text-xs text-muted-foreground">
              Copy this LaTeX into Overleaf or your local TeX environment to
              compile a PDF.
            </p>
            <textarea
              className="w-full h-[60vh] rounded-md border border-border bg-background/80 p-3 font-mono text-xs leading-relaxed resize-none"
              readOnly
              value={
                isLoading
                  ? "% Generating LaTeX resume... (this takes ~2 seconds after changes)"
                  : latex
              }
            />
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs hover:bg-muted"
                onClick={() => setStep(3)}
              >
                ← Back
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs hover:bg-muted"
                onClick={async () => {
                  if (!latex || isLoading) return
                  try {
                    await navigator.clipboard.writeText(latex)
                  } catch (error) {
                    console.error("Failed to copy LaTeX to clipboard:", error)
                  }
                }}
              >
                Copy LaTeX
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

