import { Code, Palette, Smartphone, Database, Cpu, Layers } from "lucide-react"
import type { Skill } from "@/types"

export const skills: Skill[] = [
  { name: "React/Next.js", level: 95, icon: Code, color: "#00d4ff" },
  { name: "UI/UX Design", level: 90, icon: Palette, color: "#64748b" },
  { name: "Mobile Dev", level: 85, icon: Smartphone, color: "#94a3b8" },
  { name: "Backend", level: 88, icon: Database, color: "#475569" },
  { name: "AI/ML", level: 82, icon: Cpu, color: "#6b7280" },
  { name: "DevOps", level: 87, icon: Layers, color: "#9ca3af" },
]
