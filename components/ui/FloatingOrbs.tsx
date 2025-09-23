"use client"

import { motion } from "framer-motion"

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-400/15 to-slate-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            left: `${15 + i * 20}%`,
            top: `${25 + i * 15}%`,
          }}
        />
      ))}
    </div>
  )
}
