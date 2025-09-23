import { Code, Palette, Smartphone, Globe, Zap, Settings } from "lucide-react"
import type { Service } from "@/types"

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies",
    icon: Code,
    features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    features: ["React Native", "iOS/Android", "App Store Deployment", "Push Notifications"],
  },
  {
    title: "E-commerce",
    description: "Complete online stores with payment integration",
    icon: Globe,
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Analytics"],
  },
  {
    title: "AI Integration",
    description: "Smart features powered by artificial intelligence",
    icon: Zap,
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Chatbots"],
  },
  {
    title: "Consulting",
    description: "Technical guidance and architecture planning",
    icon: Settings,
    features: ["Code Review", "Architecture Design", "Performance Audit", "Team Training"],
  },
]
