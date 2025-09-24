"use client"

import React from "react"
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
  // Debug project stats
  React.useEffect(() => {
    if (project && isOpen) {
      console.log('Project data:', project);
      console.log('Project stats:', project.stats);
    }
  }, [project, isOpen]);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project || !isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
        style={{ overflowX: 'hidden' }}
      >
        <div className="min-h-screen">
          {/* Header - Fully Responsive */}
          <header className="sticky top-0 z-10 bg-black/50 backdrop-blur-2xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                {/* Left Side - Back Button & Title */}
                <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300 flex-shrink-0"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.button>
                  <div className="min-w-0 flex-1">
                    <h1 className="text-sm sm:text-lg md:text-xl font-bold text-white truncate">{project.title}</h1>
                    <p className="text-xs sm:text-sm text-white/60 hidden sm:block">Featured Project</p>
                  </div>
                </div>

                {/* Right Side - Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  {/* Show Play Store and App Store buttons for mobile apps */}
                  {project.liveLinks?.playStore && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 px-2 sm:px-3"
                      onClick={() => window.open(project.liveLinks?.playStore, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="ml-1 sm:ml-2 hidden sm:inline">Play Store</span>
                    </Button>
                  )}
                  {project.liveLinks?.appStore && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-2 sm:px-3"
                      onClick={() => window.open(project.liveLinks?.appStore, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="ml-1 sm:ml-2 hidden sm:inline">App Store</span>
                    </Button>
                  )}
                  {/* Show GitHub button only if project has GitHub link */}
                  {project.githubLink && (
                    <Button 
                      size="sm" 
                      className="bg-gray-900 text-white border border-gray-700 hover:bg-black hover:border-gray-600 px-2 sm:px-3"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      <span className="ml-1 sm:ml-2 hidden md:inline">GitHub</span>
                    </Button>
                  )}
                  {/* Show web link if available */}
                  {project.liveLinks?.web && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-slate-600 hover:from-cyan-600 hover:to-slate-700 text-white border-0 px-2 sm:px-3"
                      onClick={() => window.open(project.liveLinks?.web, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="ml-1 sm:ml-2 hidden sm:inline">Live Demo</span>
                    </Button>
                  )}
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">{project.title}</h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8">{project.description}</p>
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
                          className="px-4 py-2 bg-white/15 rounded-full border border-white/30 text-white/90 text-sm font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </motion.div>
                      )) || []}
                    </div>
                  </div>

                  {/* Action Buttons - Responsive */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* Primary Live Link */}
                    {project.liveLinks?.playStore && (
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 w-full sm:w-auto"
                        onClick={() => window.open(project.liveLinks?.playStore, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="text-sm sm:text-base">Download on Play Store</span>
                      </Button>
                    )}
                    {project.liveLinks?.web && (
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-slate-600 hover:from-cyan-600 hover:to-slate-700 text-white border-0 w-full sm:w-auto"
                        onClick={() => window.open(project.liveLinks?.web, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="text-sm sm:text-base">View Live Project</span>
                      </Button>
                    )}
                    
                    {/* Secondary Links */}
                    {project.liveLinks?.appStore && (
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 w-full sm:w-auto"
                        onClick={() => window.open(project.liveLinks?.appStore, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="text-sm sm:text-base">Download on App Store</span>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button 
                        size="lg" 
                        className="bg-gray-900 text-white border border-gray-700 hover:bg-black hover:border-gray-600 w-full sm:w-auto"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="text-sm sm:text-base">View Source Code</span>
                      </Button>
                    )}
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

                  {/* Floating Stats - Responsive */}
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 grid grid-cols-2 gap-2 sm:gap-4">
                    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 sm:p-4">
                      <CardContent className="p-0 text-center">
                        <div className="flex items-center justify-center mb-1 sm:mb-2">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        </div>
                        <div className="text-sm sm:text-lg font-bold text-white">
                          {project.stats?.rating || "4.5"}
                        </div>
                        <div className="text-xs text-white/60">Rating</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 sm:p-4">
                      <CardContent className="p-0 text-center">
                        <div className="text-sm sm:text-lg font-bold text-cyan-400">{project.stats?.views || "50K"}</div>
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
                      {project.challenge || "Creating a modern, responsive web application that delivers exceptional user experience while maintaining high performance and accessibility standards."}
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
                      {project.solution || "Implemented cutting-edge technologies and design patterns to create an intuitive, fast, and scalable application that exceeds user expectations."}
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
                      {project.impact || "Achieved significant improvements in user engagement, performance metrics, and overall business objectives while setting new standards for digital excellence."}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {(() => {
                  // Define available images for each project
                  const imageConfigs = {
                    'daily-deli': { count: 5, extension: 'png' },
                    'iqbal-foods': { count: 5, extension: 'png' },
                    'snappoll': { count: 3, extension: 'jpg' },
                    'rishta-nagar': { count: 5, extension: 'jpg' },
                    'security-guard-platform': { count: 5, extension: 'png' }
                  };
                  
                  const config = imageConfigs[project?.id as keyof typeof imageConfigs];
                  if (!config) return null;
                  
                  return Array.from({ length: config.count }, (_, index) => {
                    const item = index + 1;
                    const appNumber = project?.id === 'daily-deli' ? '1' : 
                                     project?.id === 'iqbal-foods' ? '2' : 
                                     project?.id === 'snappoll' ? '3' : 
                                     project?.id === 'rishta-nagar' ? '4' : '5';
                    
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-gray-800 cursor-pointer"
                      >
                        <Image
                          src={`/images/app${appNumber}_${item}.${config.extension}`}
                          alt={`Gallery ${item}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    );
                  });
                })()}
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
