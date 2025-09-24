import type { LucideIcon } from "lucide-react"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  gradient: string
  category?: string
  year?: string
  status?: string
  modelType?: string
  features?: string[]
  challenge?: string
  solution?: string
  impact?: string
  liveLinks?: {
    playStore?: string
    appStore?: string
    web?: string
  }
  githubLink?: string
  stats?: {
    views: string
    likes: string
    downloads: string
    rating: string
  }
  technologies?: Array<{
    name: string
    icon: LucideIcon
    items: Array<{
      name: string
      description: string
    }>
  }>
  timeline?: Array<{
    title: string
    duration: string
    icon: LucideIcon
    description: string
    deliverables: string[]
  }>
  gallery?: Array<{
    title: string
    description: string
    url: string
  }>
  results?: {
    metrics: Array<{
      value: string
      label: string
      description: string
    }>
    testimonials: Array<{
      content: string
      author: string
      role: string
      rating: number
    }>
  }
  relatedProjects?: Array<{
    title: string
    description: string
    category: string
    image: string
  }>
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
