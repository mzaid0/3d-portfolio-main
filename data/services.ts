import { Palette, Smartphone, Globe } from "lucide-react"
import type { Service } from "@/types"

export const services: Service[] = [
  {
    title: "Mobile Design",
    description: "Beautiful, intuitive mobile interfaces that users love to interact with",
    icon: Palette,
    features: ["User Research", "Mobile Wireframing", "Prototyping", "Mobile Design Systems"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    features: ["Flutter", "iOS/Android", "App Store Deployment", "Push Notifications"],
  },
  {
    title: "E-commerce",
    description: "Complete online stores with payment integration",
    icon: Globe,
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Analytics"],
  },
]
