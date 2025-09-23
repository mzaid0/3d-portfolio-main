"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  isDark: boolean
}

export function ScrollIndicator({ isDark }: ScrollIndicatorProps) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex flex-col items-center space-y-2">
        <span className={`text-sm ${isDark ? "text-white/60" : "text-slate-600"}`}>Scroll to explore</span>
        <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
      </div>
    </motion.div>
  )
}
