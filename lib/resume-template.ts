import { resumeData } from "@/lib/resume-data"
import { resumeFixedData } from "@/lib/resume-fixed"

type RoleKey = keyof typeof resumeData

function escapeLatex(text: string): string {
  return text
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(/~/g, "\\textasciitilde{}")
}

export function generateResumeLatex(
  role: RoleKey,
  options?: {
    summaryOverride?: string
    emailOverride?: string
    extraExperienceBullets?: string[]
    extraProjectBullets?: string[]
    showAchievements?: boolean
    showLeadership?: boolean
    experienceOverride?: any[]
    projectsOverride?: any[]
  },
): string {
  const roleBlock = resumeData[role]
  const {
    name,
    location,
    email: defaultEmail,
    website,
    github,
    linkedin,
    mobile,
    leetcode,
    achievements,
    education,
  } = resumeFixedData

  const email = options?.emailOverride?.trim().length
    ? options.emailOverride.trim()
    : defaultEmail

  const summaryLines =
    (resumeFixedData as any).summaryByRole?.[role] ??
    [
      "Software Engineer focused on building reliable, scalable systems.",
      "Experience across frontend, backend, and AI/ML, with a strong focus on production readiness.",
    ]

  const summarySection =
    typeof options?.summaryOverride === "string" &&
    options.summaryOverride.trim().length > 0
      ? escapeLatex(options.summaryOverride.trim())
      : summaryLines && summaryLines.length
      ? escapeLatex(summaryLines.slice(0, 3).join(" "))
      : ""

  const skillsSection =
    roleBlock.skills && Object.keys(roleBlock.skills).length
      ? Object.entries(roleBlock.skills)
          .map(
            ([category, items]: [string, any]) =>
              `\\textbf{${escapeLatex(category)}:} ${escapeLatex(
                (items as string[]).join(", "),
              )} \\\\`,
          )
          .join("\n")
      : ""

  const eduSection =
    education && education.length
      ? education
          .map(
            (edu) =>
              `  \\resumeSubheading{${escapeLatex(
                edu.institution,
              )}}{${escapeLatex(
                edu.duration,
              )}}{${escapeLatex(edu.degree)}}{${
                edu.location ? escapeLatex(edu.location) : ""
              }}`,
          )
          .join("\n\n")
      : ""

  const achievementsSection =
    achievements && achievements.length
      ? achievements
          .map((item) => `  \\resumeItem{}{${escapeLatex(item)}}`)
          .join("\n")
      : ""

  const experience =
    options?.experienceOverride && options.experienceOverride.length
      ? options.experienceOverride
      : roleBlock.experience

  const projects =
    options?.projectsOverride && options.projectsOverride.length
      ? options.projectsOverride
      : roleBlock.projects

  const experienceSection =
    experience && experience.length
      ? experience
          .map((exp: any) => {
            const highlights =
              exp.highlights && exp.highlights.length
                ? exp.highlights
                    .map(
                      (h: string) =>
                        `    \\resumeItem{}{${escapeLatex(h)}}`,
                    )
                    .join("\n")
                : ""
            return `
  \\resumeSubheading{${escapeLatex(exp.company)}}{${escapeLatex(
              `${exp.start} -- ${exp.end}`,
            )}}{${escapeLatex(exp.role)}}{}
  \\resumeItemListStart
${highlights}
  \\resumeItemListEnd
`
          })
          .join("\n")
      : ""

  const projectsSection =
    projects && projects.length
      ? projects
          .map((proj: any) => {
            const highlights =
              proj.highlights && proj.highlights.length
                ? proj.highlights
                    .map(
                      (h: string) =>
                        `    \\item\\footnotesize{${escapeLatex(h)}}`,
                    )
                    .join("\n")
                : ""
            const codeUrl = proj.codeUrl as string | undefined
            const liveUrl = proj.liveUrl as string | undefined
            const tech =
              (proj.tags && proj.tags.length
                ? proj.tags.join(", ")
                : proj.techStack && proj.techStack.length
                ? proj.techStack.join(", ")
                : ""
              ) || ""
            const techWithLinks = [
              tech ? escapeLatex(tech) : "",
              codeUrl ? `\\href{${codeUrl}}{Code}` : "",
              liveUrl && liveUrl !== "N/A"
                ? `\\href{${liveUrl}}{Live}`
                : "",
            ]
              .filter(Boolean)
              .join(" $|$ ")
            return `
\\projectListStart
\\projectHeader{${escapeLatex(proj.title)}}{${techWithLinks}}
\\projectBulletsStart
${highlights}
\\projectBulletsEnd
\\projectListEnd
`
          })
          .join("\n")
      : ""

  const extraExperienceSection =
    options?.extraExperienceBullets && options.extraExperienceBullets.length
      ? `
  \\resumeSubheading{Additional Experience}{}{}{}
  \\resumeItemListStart
${options.extraExperienceBullets
  .map((b) => `    \\resumeItem{}{${escapeLatex(b)}}`)
  .join("\n")}
  \\resumeItemListEnd
`
      : ""

  const extraProjectsSection =
    options?.extraProjectBullets && options.extraProjectBullets.length
      ? `
% Additional projects
\\projectListStart
\\projectHeader{Additional Projects}{}
\\projectBulletsStart
${options.extraProjectBullets
  .map((b) => `  \\item\\footnotesize{${escapeLatex(b)}}`)
  .join("\n")}
\\projectBulletsEnd
\\projectListEnd
`
      : ""

  return `
\\documentclass[letterpaper,10pt]{article}

\\usepackage{titlesec}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{enumitem}
\\usepackage[pdftex, hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[charter]{mathdesign}
\\usepackage[top=0.3in, bottom=0.3in, left=.4in, right=.4in]{geometry}
\\urlstyle{same}
\\raggedright
\\setlength{\\tabcolsep}{0in}

% ---- SECTION FORMATTING ----
\\titleformat{\\section}{\\scshape\\raggedright\\normalsize}{}{0em}{}[\\color{black}\\titlerule]

% ---- SPACING MACROS ----
\\newcommand{\\resumeItem}[2]{\\item\\footnotesize{#2}}
\\newcommand{\\resumeSubheading}[4]{\\item[]
  \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\
    \\textit{\\footnotesize#3} & \\textit{\\footnotesize #4} \\\\
  \\end{tabular*}\\vspace{-4pt}}

\\renewcommand{\\labelitemii}{$\\circ$}

% ---- LIST ENVIRONMENTS ----
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=*, itemsep=1pt, topsep=1pt]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}\\vspace{-2pt}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}[leftmargin=*, itemsep=1pt, topsep=1pt]}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-2pt}}

\\newcommand{\\projectListStart}{\\begin{itemize}[leftmargin=*, itemsep=1pt, topsep=1pt]}
\\newcommand{\\projectListEnd}{\\end{itemize}\\vspace{3pt}}
\\newcommand{\\projectHeader}[2]{\\item[]\\footnotesize
  \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & \\textit{#2}
  \\end{tabular*}\\vspace{-3pt}}

\\newcommand{\\projectBulletsStart}{\\begin{itemize}[leftmargin=*, itemsep=0pt, topsep=0pt]}
\\newcommand{\\projectBulletsEnd}{\\end{itemize}\\vspace{-4pt}}

\\newcommand{\\shorterSection}[1]{\\vspace{-6pt}\\section{#1}}

% ---- HEADER/FOOTER ----
\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\begin{document}

\\begin{center}
  {\\huge \\textbf{${escapeLatex(name)}}}\\\\[4pt]
  \\href{mailto:${email}}{\\underline{${escapeLatex(email)}}} $\\vert$
  ${mobile ? `\\underline{${escapeLatex(mobile)}} $\\vert$` : "" }
  ${linkedin ? `\\href{${linkedin}}{\\underline{LinkedIn}} $\\vert$` : "" }
  ${github ? `\\href{${github}}{\\underline{GitHub}} $\\vert$` : "" }
  ${leetcode ? ` $\\vert$ \\href{${leetcode}}{\\underline{LeetCode}}` : "" }
\\end{center}

% ---------------- SUMMARY ----------------
\\section{Summary}
\\small
${summarySection}
\\normalsize

% ---------------- EXPERIENCE ----------------
\\section{Experience}
\\resumeSubHeadingListStart

${experienceSection}${extraExperienceSection}

\\resumeSubHeadingListEnd

% ---------------- SKILLS ----------------
\\section{Skills}
\\small
${skillsSection}
\\normalsize

% ---------------- PROJECTS ----------------
\\section{Projects}

${projectsSection}

${extraProjectsSection}

% ---------------- EDUCATION ----------------
\\section{Education}
\\resumeSubHeadingListStart
${eduSection}
\\resumeSubHeadingListEnd

% ---------------- ACHIEVEMENTS ----------------
${options?.showAchievements === false ? "% Achievements hidden" : "\\section{Achievements}\n\\resumeSubHeadingListStart\n" + achievementsSection + "\n\\resumeSubHeadingListEnd"}

% ---------------- LEADERSHIP ----------------
${options?.showLeadership === false
  ? "% Leadership hidden"
  : `\\section{Leadership}
\\small
\\begin{itemize}[leftmargin=*]
  \\item[] Lead Organizer, TechFest '24 (Coordinated 200+ participant hackathon)
  \\item[] Core Member, Coding Club (IIIT Una) — active in contests, system design discussions, and peer reviews
\\end{itemize}
\\normalsize`}

\\end{document}
`.trim()
}

