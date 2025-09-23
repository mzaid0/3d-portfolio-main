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
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  isDark: boolean;
}

export function HeroSection({ isDark }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black pt-24"
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

      <div className="text-center max-w-6xl mx-auto relative z-10">
        {/* Ultra-Modern Profile Section */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", bounce: 0.4 }}
          className="mb-16"
        >
          <div className="relative w-48 h-48 mx-auto">
            {/* Outer Rotating Ring */}
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
            </motion.div>

            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-4 rounded-full border-2 border-white/30"
            />

            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-8 rounded-full border border-white/20"
            />

            {/* Profile Image */}
            <div className="absolute inset-12 rounded-full overflow-hidden glass-ultra">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Profile"
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Orbs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full blur-sm opacity-60" />
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full blur-sm opacity-40" />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full blur-sm opacity-50" />
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm opacity-70" />
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-none">
            <motion.div
              className="block holographic-text mb-4"
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
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/80 font-light leading-relaxed max-w-5xl mx-auto">
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
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
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
              <Button
                size="lg"
                className="relative bg-white text-black hover:bg-gray-100 border-0 px-10 py-6 rounded-full text-xl font-bold shadow-2xl btn-ultra"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Explore My Universe
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button
                size="lg"
                variant="outline"
                className="glass-ultra border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 rounded-full text-xl font-semibold backdrop-blur-xl shiny"
              >
                <Code className="w-6 h-6 mr-3" />
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Ultra-Modern Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-20 mb-32 grid grid-cols-3 gap-8 max-w-2xl mx-auto z-10"
        >
          {[
            { number: "100+", label: "Projects" },
            { number: "7+", label: "Years" },
            { number: "50+", label: "Clients" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center glass-ultra p-6 rounded-2xl border border-white/20 shiny magnetic"
            >
              <motion.div
                className="text-3xl sm:text-4xl font-black text-white mb-2"
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
              <div className="text-white/70 font-medium">{stat.label}</div>
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
