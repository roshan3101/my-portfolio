"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -25% 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}
