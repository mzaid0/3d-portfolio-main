"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, User, Zap, Target, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AboutSectionProps {
  isDark: boolean
}

export function AboutSection({ isDark }: AboutSectionProps) {
  const stats = [
    { number: "100+", label: "Projects", icon: Briefcase },
    { number: "7+", label: "Years", icon: Award },
    { number: "50+", label: "Clients", icon: User },
  ]

  const features = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable, scalable code" },
    { icon: Zap, title: "Performance", description: "Optimized for speed and efficiency" },
    { icon: Target, title: "Precision", description: "Pixel-perfect implementations" },
  ]

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-7xl font-black mb-8 holographic-text">ABOUT ME</h2>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Pushing the boundaries of digital innovation through code, design, and imagination
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Card className="glass-ultra border border-white/20 p-10 shiny magnetic">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold mb-8 text-white">My Journey</h3>
                <p className="text-xl leading-relaxed mb-8 text-white/80">
                  With over 7 years of experience in cutting-edge web development and digital design, I specialize in
                  creating immersive experiences that blur the line between the digital and physical worlds.
                </p>
                <p className="text-xl leading-relaxed text-white/80">
                  My passion lies in leveraging emerging technologies like WebGL, AI, and spatial computing to craft
                  solutions that don't just meet today's needs, but anticipate tomorrow's possibilities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center p-8 glass-ultra rounded-3xl border border-white/20 shiny magnetic"
              >
                <div className="p-4 bg-white rounded-2xl mr-6">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-lg font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-8 glass-ultra rounded-3xl border border-white/20 shiny magnetic"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
