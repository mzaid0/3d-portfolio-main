import type { LucideIcon } from "lucide-react"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  gradient: string
}

export interface Skill {
  name: string
  level: number
  icon: LucideIcon
  color: string
}

export interface Service {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export interface NavItem {
  name: string
  href: string
  icon: LucideIcon
}

export interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

export interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}
