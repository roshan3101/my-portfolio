"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Download, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function ResumePage() {
  const router = useRouter()
  const [resumeUrl, setResumeUrl] = useState<string>("")
  const [viewerUrl, setViewerUrl] = useState<string>("")
  const [downloadUrl, setDownloadUrl] = useState<string>("")

  useEffect(() => {
    const url =
      process.env.NEXT_PUBLIC_RESUME_LINK ||
      "https://drive.google.com/file/d/1A1lhW1zVUUFRQdYOmC7XdpWUOivOLO_B/view?usp=sharing"

    setResumeUrl(url)

    // Extract file ID from Google Drive URL
    // Format: https://drive.google.com/file/d/{FILE_ID}/view?usp=sharing
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
    if (fileIdMatch && fileIdMatch[1]) {
      const fileId = fileIdMatch[1]
      // Google Drive viewer URL
      setViewerUrl(`https://drive.google.com/file/d/${fileId}/preview`)
      // Direct download URL
      setDownloadUrl(`https://drive.google.com/uc?export=download&id=${fileId}`)
    } else {
      // Fallback: use the URL directly
      setViewerUrl(url)
      setDownloadUrl(url)
    }
  }, [])

  const handleDownload = () => {
    if (downloadUrl) {
      // Create a temporary anchor element to trigger download
      const link = document.createElement("a")
      link.href = downloadUrl
      link.download = "Roshan_Kumar_Sahu_Resume.pdf"
      link.target = "_blank"
      link.rel = "noopener noreferrer"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header with back button and download */}
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
            <Button onClick={handleDownload} className="group">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="border border-border rounded-lg overflow-hidden shadow-lg bg-background">
            {viewerUrl ? (
              <iframe
                src={viewerUrl}
                className="w-full h-[calc(100vh-12rem)] min-h-[800px]"
                title="Resume PDF Viewer"
                allow="autoplay"
              />
            ) : (
              <div className="flex items-center justify-center h-[calc(100vh-12rem)] min-h-[800px]">
                <p className="text-muted-foreground">Loading resume...</p>
              </div>
            )}
          </div>

          {/* Fallback message */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Having trouble viewing?{" "}
              <button
                onClick={handleDownload}
                className="text-primary hover:underline"
              >
                Download the PDF
              </button>{" "}
              or{" "}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                open in a new tab
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
