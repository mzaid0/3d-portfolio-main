"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Star, Calendar } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types"

interface ProjectShowcaseProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  isDark?: boolean
}

export default function ProjectShowcase({ project, isOpen, onClose, isDark = true }: ProjectShowcaseProps) {
  if (!project || !isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
      >
        <div className="min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-black/50 backdrop-blur-2xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-5 h-5 text-white" />
                  </motion.button>
                  <div>
                    <h1 className="text-xl font-bold text-white">{project.title}</h1>
                    <p className="text-sm text-white/60">Featured Project</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-slate-600 hover:from-cyan-600 hover:to-slate-700 text-white border-0"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-slate-500 text-white border-0">
                        Featured
                      </Badge>
                      <span className="text-white/60 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2024
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
                    <p className="text-xl text-white/80 leading-relaxed mb-8">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech?.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                          className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white/80 text-sm font-medium"
                        >
                          {tech}
                        </motion.div>
                      )) || []}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-slate-600 hover:from-cyan-600 hover:to-slate-700 text-white border-0"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Project
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Github className="w-5 h-5 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </motion.div>

                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-gray-800 shadow-2xl">
                    <Image
                      src={project.image || "/placeholder.svg?height=600&width=800"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-4">
                    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-4">
                      <CardContent className="p-0 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </div>
                        <div className="text-lg font-bold text-white">4.9</div>
                        <div className="text-xs text-white/60">Rating</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-4">
                      <CardContent className="p-0 text-center">
                        <div className="text-lg font-bold text-cyan-400">125K</div>
                        <div className="text-xs text-white/60">Views</div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="py-12 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Challenge */}
                <Card className="bg-white/5 border-white/10 p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                      Challenge
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Creating a modern, responsive web application that delivers exceptional user experience while
                      maintaining high performance and accessibility standards.
                    </p>
                  </CardContent>
                </Card>

                {/* Solution */}
                <Card className="bg-white/5 border-white/10 p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                      Solution
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Implemented cutting-edge technologies and design patterns to create an intuitive, fast, and
                      scalable application that exceeds user expectations.
                    </p>
                  </CardContent>
                </Card>

                {/* Impact */}
                <Card className="bg-white/5 border-white/10 p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                      Impact
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Achieved significant improvements in user engagement, performance metrics, and overall business
                      objectives while setting new standards for digital excellence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-gray-800 cursor-pointer"
                  >
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Gallery+${item}`}
                      alt={`Gallery ${item}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
