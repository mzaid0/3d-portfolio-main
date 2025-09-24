"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Star, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"
import type { Project } from "@/types"
import { useState } from "react"
import dynamic from "next/dynamic"
import ProjectShowcase from "@/components/project-showcase"

const DynamicCanvas = dynamic(
  () =>
    import("@/components/3d/UltraModernCanvas").then(
      (mod) => mod.UltraModernCanvas
    ),
  { ssr: false }
)

export default function AllProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isProjectOpen, setIsProjectOpen] = useState(false)

    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project)
        setIsProjectOpen(true)
    }

    const handleProjectClose = () => {
        setIsProjectOpen(false)
        setSelectedProject(null)
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative min-h-screen bg-black text-white"
                style={{ cursor: "auto" }}
            >
                <div className="fixed inset-0 z-0">
                    <DynamicCanvas />
                </div>

                <div className="fixed inset-0 z-0 bg-gradient-to-br from-white/5 via-transparent to-black/80" />

                <div className="relative z-10">
                {/* Header */}
                <header className="sticky top-0 z-10 bg-black/50 backdrop-blur-2xl border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <Link href="/">
                                    <motion.button
                                        whileHover={{ scale: 1.1, x: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
                                    >
                                        <ArrowLeft className="w-5 h-5 text-white" />
                                    </motion.button>
                                </Link>
                                <div>
                                    <h1 className="text-2xl font-bold text-white">All Projects</h1>
                                    <p className="text-sm text-white/60">Explore My Complete Portfolio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-slate-500 bg-clip-text text-transparent">
                                My Project Universe
                            </h2>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                Discover innovative mobile applications and solutions that push the boundaries of technology and user experience
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                        >
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                                <div className="text-white/80">Projects Completed</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-green-400 mb-2">110K+</div>
                                <div className="text-white/80">Total Downloads</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-purple-400 mb-2">4.7</div>
                                <div className="text-white/80">Average Rating</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group cursor-pointer"
                                    onClick={() => handleProjectSelect(project)}
                                >
                                    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden h-full group-hover:border-cyan-400/30 transition-all duration-300">
                                        {/* Project Image */}
                                        <div className="relative overflow-hidden h-64">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            {/* Status Badge */}
                                            <div className="absolute top-4 left-4">
                                                <Badge className={`${project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                                                    project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                                                        'bg-blue-500/20 text-blue-400 border-blue-500/30'
                                                    } border backdrop-blur-xl`}>
                                                    {project.status}
                                                </Badge>
                                            </div>

                                            {/* Quick Actions */}
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="flex space-x-2">
                                                    <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-slate-600 hover:from-cyan-600 hover:to-slate-700 text-white border-0">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </Button>
                                                    <Button size="sm" className="bg-gray-900 text-white border border-gray-700 hover:bg-black hover:border-gray-600">
                                                        <Github className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Project Category */}
                                            <div className="absolute bottom-4 left-4">
                                                <Badge className="bg-white/15 text-white/90 border-white/30 backdrop-blur-xl">
                                                    {project.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <CardContent className="p-6">
                                            {/* Project Title & Year */}
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <div className="flex items-center text-white/60 text-sm">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {project.year}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-white/70 mb-4 leading-relaxed overflow-hidden" style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical'
                                            }}>
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech?.slice(0, 3).map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-2 py-1 bg-white/15 rounded-full text-xs text-white/90 border border-white/30 backdrop-blur-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.tech && project.tech.length > 3 && (
                                                        <span className="px-2 py-1 bg-white/15 rounded-full text-xs text-white/70 border border-white/30 backdrop-blur-sm">
                                                            +{project.tech.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            {project.stats && (
                                                <div className="flex items-center justify-between text-sm">
                                                    <div className="flex items-center text-white/60">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                        {project.stats.rating}
                                                    </div>
                                                    <div className="text-white/60">{project.stats.downloads} downloads</div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Build Something Amazing?
                            </h3>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                Let's collaborate and create innovative solutions that make a difference
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#contact">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-cyan-500 to-slate-600 hover:from-cyan-600 hover:to-slate-700 text-white border-0 px-8 py-3"
                                    >
                                        Start a Project
                                    </Button>
                                </Link>
                                <Link href="/">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/40 bg-gray-600 hover:text-white text-white bg hover:bg-white/20 hover:border-white/60 px-8 py-3 backdrop-blur-sm"
                                    >
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
                </div>
            </motion.div>

            {/* Project Showcase Modal */}
            <ProjectShowcase
                project={selectedProject}
                isOpen={isProjectOpen}
                onClose={handleProjectClose}
                isDark={true}
            />
        </>
    )
}