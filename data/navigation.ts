import { User, Zap, Briefcase, Settings, Mail } from "lucide-react"
import type { NavItem } from "@/types"

export const navItems: NavItem[] = [
  { name: "Home", href: "#hero", icon: User },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Zap },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Services", href: "#services", icon: Settings },
  { name: "Contact", href: "#contact", icon: Mail },
]
