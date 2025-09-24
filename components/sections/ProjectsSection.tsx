"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projectsData } from "@/data/projects"
import type { Project } from "@/types"

interface ProjectsSectionProps {
  isDark: boolean
  onProjectSelect: (project: Project) => void
}

export function ProjectsSection({ isDark, onProjectSelect }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-white/80" : "text-slate-700"}`}>
            Showcasing innovative solutions that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => onProjectSelect(project)}
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden h-full group-hover:border-cyan-400/30 transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-800"}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${isDark ? "text-white/70" : "text-slate-600"}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/15 to-slate-500/15 text-cyan-300 text-sm rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`w-full bg-gradient-to-r ${project.gradient} text-white border-0 py-3 rounded-xl font-semibold`}
                    >
                      View Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 to-slate-500 text-white border-0 py-3 px-8 rounded-xl font-semibold hover:from-cyan-600 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <a href="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
