"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code,
  Star,
  Hexagon,
  Triangle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  isDark: boolean;
}

export function HeroSection({ isDark }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black pt-24 w-full max-w-full"
      style={{ overflowX: 'hidden' }}
    >
      {/* Ultra-Modern Animated Background */}
      <div className="absolute inset-0 ultra-grid opacity-20" />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 3 === 0 && <Hexagon className="w-6 h-6 text-white/10" />}
            {i % 3 === 1 && <Triangle className="w-4 h-4 text-white/15" />}
            {i % 3 === 2 && <Star className="w-5 h-5 text-white/20" />}
          </motion.div>
        ))}
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-black/50" />

      <div className="text-center max-w-6xl mx-auto relative z-10 w-full px-4" style={{ maxWidth: 'calc(100vw - 2rem)', overflowX: 'hidden' }}>
        {/* Ultra-Modern Profile Section */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", bounce: 0.4 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 mx-auto" style={{ maxWidth: '90vw', overflow: 'hidden', margin: '0 auto' }}>
            {/* Outer Rotating Ring with Code Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #ffffff, #f0f0f0, #ffffff, #e0e0e0, #ffffff)",
                padding: "3px",
              }}
            >
              <div className="w-full h-full rounded-full bg-black" />
              
              {/* Large Code Elements on Outer Ring - Only on very large screens to prevent overflow */}
              <motion.div 
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden xl:block"
                animate={{ 
                  y: [0, -10, 0],
                  rotateX: [0, 360, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                <div className="px-3 py-2 bg-gradient-to-r from-cyan-500/25 to-blue-600/25 backdrop-blur-xl rounded-xl border border-cyan-300/50 text-sm text-cyan-100 font-mono shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all duration-300 whitespace-nowrap">
                  useState()
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden xl:block"
                animate={{ 
                  y: [0, 10, 0],
                  rotateZ: [0, 360, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 4
                }}
              >
                <div className="px-3 py-2 bg-gradient-to-r from-purple-500/25 to-violet-600/25 backdrop-blur-xl rounded-xl border border-purple-300/50 text-sm text-purple-100 font-mono shadow-2xl shadow-purple-500/40 hover:shadow-purple-400/60 transition-all duration-300 whitespace-nowrap">
                  async/await
                </div>
              </motion.div>
            </motion.div>

            {/* Middle Ring with Code Elements */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-4 rounded-full border-2 border-white/30"
            >
              {/* Floating Code Tags on Middle Ring - Very safe positioning */}
              <motion.div 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                <div className="px-1.5 py-0.5 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 backdrop-blur-xl rounded-full border border-teal-400/40 text-xs text-teal-200 font-mono shadow-lg shadow-teal-500/30">
                  API
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="px-1.5 py-0.5 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 backdrop-blur-xl rounded-full border border-amber-400/40 text-xs text-amber-200 font-mono shadow-lg shadow-amber-500/30">
                  UI
                </div>
              </motion.div>

              {/* Side elements only on larger screens */}
              <motion.div 
                className="absolute top-1/2 -right-2 transform -translate-y-1/2 hidden lg:block"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="px-1.5 py-0.5 bg-gradient-to-r from-violet-500/30 to-purple-500/30 backdrop-blur-xl rounded-full border border-violet-400/40 text-xs text-violet-200 font-mono shadow-lg shadow-violet-500/30">
                  DB
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -left-2 transform -translate-y-1/2 hidden lg:block"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 3
                }}
              >
                <div className="px-1.5 py-0.5 bg-gradient-to-r from-rose-500/30 to-red-500/30 backdrop-blur-xl rounded-full border border-rose-400/40 text-xs text-rose-200 font-mono shadow-lg shadow-rose-500/30">
                  AI
                </div>
              </motion.div>
            </motion.div>

            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-6 sm:inset-8 rounded-full border border-white/20"
            />

            {/* Profile Image */}
            <div className="absolute inset-8 sm:inset-10 md:inset-12 rounded-full overflow-hidden glass-ultra">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Profile"
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Code Orbs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              {/* Safe Code Snippets - Only centered elements to prevent overflow */}
              <motion.div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  y: [0, -5, 0],
                  rotateY: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                <div className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-lg border border-cyan-400/30 text-xs text-cyan-300 font-mono whitespace-nowrap shadow-lg shadow-cyan-500/20">
                  &lt;React /&gt;
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  y: [0, 5, 0],
                  rotateZ: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-lg border border-purple-400/30 text-xs text-purple-300 font-mono whitespace-nowrap shadow-lg shadow-purple-500/20">
                  .awesome { }
                </div>
              </motion.div>
            </motion.div>

            {/* Pulsing Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-white/10 blur-2xl"
            />
          </div>
        </motion.div>

        {/* Ultra-Modern Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 glass-ultra rounded-full border border-white/20 shiny">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Available for Projects
              </span>
              <Sparkles className="w-4 h-4 text-white/70" />
            </div>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 leading-tight px-6 max-w-full" style={{ wordBreak: 'break-word' }}>
            <motion.div
              className="block holographic-text mb-2 sm:mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              DIGITAL ARCHITECT
            </motion.div>
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto px-6" style={{ wordBreak: 'break-word' }}>
              Crafting{" "}
              <motion.span
                className="font-semibold text-white"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 10px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                immersive digital experiences
              </motion.span>{" "}
              that transcend the boundaries of imagination
            </p>
          </motion.div>

          {/* Ultra-Modern CTA Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center px-6 max-w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-200 to-white rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <Link href="/projects">
                <Button
                  size="lg"
                  className="relative bg-white text-black hover:bg-gray-100 border-0 px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-2xl btn-ultra"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">Explore My Universe</span>
                  <span className="sm:hidden">Explore</span>
                  <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Ultra-Modern Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12 sm:mt-16 md:mt-20 mb-16 sm:mb-24 md:mb-32 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-sm md:max-w-lg mx-auto z-10 px-6"
          style={{ maxWidth: 'calc(100vw - 3rem)' }}
        >
          {[
            { number: "10+", label: "Projects" },
            { number: "5+", label: "Years" },
            // { number: "50+", label: "Clients" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center glass-ultra p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/20 shiny magnetic"
            >
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 20px rgba(255,255,255,0.6)",
                    "0 0 10px rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/70 font-medium text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
    </section>
  );
}
