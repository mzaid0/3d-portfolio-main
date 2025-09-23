"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-8"
    >
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-slate-400 to-gray-400 rounded-full blur-2xl opacity-60 animate-pulse" />
        <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-slate-400 rounded-full blur-lg opacity-40" />
        <Image
          src="/placeholder.svg?height=160&width=160"
          alt="Profile"
          width={160}
          height={160}
          className="relative rounded-full border-4 border-white/20 backdrop-blur-sm shadow-2xl"
        />
        {/* Holographic Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0 border-2 border-cyan-400/40 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent, cyan, transparent)",
            mask: "radial-gradient(circle, transparent 70%, black 71%, black 72%, transparent 73%)",
          }}
        />
      </div>
    </motion.div>
  )
}
