"use client"

import { useState, useEffect } from "react"
import type { Project } from "@/types"

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const { projectsData, fallbackProjects } = await import("@/data/projects")
        setProjects(projectsData?.length > 0 ? projectsData : (fallbackProjects as Project[]))
      } catch (err) {
        console.warn("Could not load project data:", err)
        setError("Failed to load projects")
        // Set fallback projects
        const { fallbackProjects } = await import("@/data/projects")
        setProjects(fallbackProjects as Project[])
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return { projects, loading, error }
}
