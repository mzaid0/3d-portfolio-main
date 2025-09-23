"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/data/skills"

interface SkillsSectionProps {
  isDark: boolean
}

export function SkillsSection({ isDark }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-white/80" : "text-slate-700"}`}>
            Mastering the tools and technologies that shape the future of digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 h-full">
                <CardContent className="p-0 text-center">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                      style={{ backgroundColor: skill.color }}
                    />
                    <div
                      className="relative w-full h-full rounded-2xl flex items-center justify-center shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}30)`,
                        border: `2px solid ${skill.color}40`,
                      }}
                    >
                      <skill.icon className="w-10 h-10" style={{ color: skill.color }} />
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-800"}`}>
                    {skill.name}
                  </h3>

                  {/* Progress Circle */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-white/10"
                      />
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke={skill.color}
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: skill.level / 100 }}
                        transition={{ duration: 2, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          pathLength: skill.level / 100,
                          filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                        }}
                        strokeDasharray="314"
                        strokeDashoffset="314"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
