"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const projects = [
      {
        title: "Apex Group Company Profile",
        description: "Corporate company profile website for an engineering and technology firm",
        longDescription:
          "Developed a modern corporate website for Apex Group featuring company overview, vision and mission, core values, and leadership team showcase. Designed with a professional layout, responsive design, and clear information structure to reflect the company's brand and credibility.",
        image: "/apexgroup.png",
        tags: ["Next.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
        category: "frontend",
        year: "2025",
        metrics: ["Professional", "Responsive design", "Optimized performance"],
        github: "https://github.com/RizqiFauu/apex-grup",
        demo: "https://apex-grup.vercel.app/",
      },

      {
        title: "HIMSI Management Website",
        description: "Fullstack organization platform with dashboard, task management, and team collaboration",
        longDescription:
          "Developed a fullstack web platform for HIMSI as a collaborative project by the research and development division. Features include internal dashboard, task management system, event management, CRUD data operations, file upload, and real-time updates using Supabase. Built with focus on usability, collaboration, and efficient workflow management.",
        image: "/himsi.png",
        tags: ["Next.js", "Supabase", "Tailwind CSS", "Fullstack"],
        category: "fullstack",
        year: "2025",
        metrics: ["CRUD System", "Realtime Data", "File Upload"],
        github: "https://github.com/Mohammed1708/himsi_statis",
        demo: "https://himsi-web.vercel.app/",
      },

    
      {
        title: "Personal Portfolio Website",
        description: "Fullstack developer portfolio with project showcase and contact message storage",
        longDescription:
          "Built a modern developer portfolio featuring project showcase, responsive design, and contact form with message storage using Neon PostgreSQL database. Designed with clean UI, smooth user experience, and production-ready deployment.",
        image: "/portfolio.png",
        tags: ["Next.js", "Tailwind CSS", "Neon DB", "Fullstack"],
        category: "fullstack",
        year: "2025",
        metrics: ["Responsive design", "Db integration", "contact system"],
        github: "https://github.com/RizqiFauu/Portfolio",
        demo: "https://rizqifauzi.vercel.app/",
      },

     

      {
        title: "Restaurant Website UI",
        description: "Modern restaurant website UI with menu showcase, reservation section, and contact page",
        longDescription:
          "Designed and developed a modern restaurant website interface focused on user experience and clean layout. Features include menu showcase, responsive design, reservation section, contact form, and location map integration.",
        image: "/resto.v1.png",
        tags: ["Next.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
        category: "frontend",
        year: "2025",
        metrics: ["Fully responsive", "Modern UI", "Optimized performance"],
        github: "https://github.com/RizqiFauu/restoran.v1-simple",
        demo: "https://restoran-v1-simple.vercel.app/",
      },

      {
      title: "Nexus Digital Agency Website",
      description: "Modern digital agency website with company profile, services, and team showcase",
      longDescription:
        "Built a responsive digital agency website featuring company profile, team showcase, values section, and service presentation. Designed with clean UI, modern layout, and smooth user experience to highlight brand identity and digital solutions.",
      image: "/nexusagency.png",
      tags: ["Next.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
      category: "frontend",
      year: "2025",
      metrics: ["Responsive design", "Modern UI", "Optimized performance"],
      github: "https://github.com/RizqiFauu/nexus-agency",
      demo: "https://nexsus-agency.vercel.app/",
    },
      
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "fullstack", label: "Fullstack" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A collection of my work showcasing web applications, tools, and creative solutions built with modern
              technologies.
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeFilter === category.value ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.value)}
                  className="rounded-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={activeFilter + searchQuery}
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.1 }}
                  layout
                >
                  <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow">
                      {/* Project Image */}
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Year Badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium">
                          {project.year}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                          {project.description}
                        </p>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted-foreground">
                          {project.metrics.map((metric) => (
                            <span key={metric} className="px-2 py-1 rounded-md bg-muted">
                              {metric}
                            </span>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-4 border-t border-border">
                          <Button variant="ghost" size="sm" className="flex-1" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button variant="ghost" size="sm" className="flex-1" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
