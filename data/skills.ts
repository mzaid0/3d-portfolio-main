import { Code, Palette, Smartphone, Database, Cpu, Layers } from "lucide-react"
import type { Skill } from "@/types"

export const skills: Skill[] = [
  { name: "Flutter/Dart", level: 95, icon: Code, color: "#00d4ff" },
  { name: "Mobile Design ", level: 90, icon: Palette, color: "#64748b" },
  { name: "Mobile Dev", level: 85, icon: Smartphone, color: "#94a3b8" },
  { name: "Databases", level: 88, icon: Database, color: "#475569" },
  // { name: "Web Dev", level: 82, icon: Cpu, color: "#6b7280" },
  { name: "DevOps", level: 70, icon: Layers, color: "#9ca3af" },
]
