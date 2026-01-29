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
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard",
      longDescription:
        "Built a complete e-commerce solution with Stripe integration, real-time inventory tracking, order management, and comprehensive analytics dashboard.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
      category: "fullstack",
      year: "2024",
      metrics: ["50K+ users", "99.9% uptime", "$2M+ processed"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization platform with ML-powered insights and predictive analytics",
      longDescription:
        "Created an advanced analytics platform that processes terabytes of data, provides AI-powered insights, and beautiful visualizations using D3.js and custom charts.",
      image: "/analytics-dashboard-charts.png",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      category: "frontend",
      year: "2024",
      metrics: ["10TB data processed", "Real-time updates", "AI predictions"],
      github: "#",
      demo: "#",
    },
    {
      title: "DevOps Automation Tool",
      description: "CI/CD pipeline orchestration with automated testing, deployment, and monitoring",
      longDescription:
        "Developed a comprehensive DevOps tool that automates deployment pipelines, handles 500+ deployments daily, and provides detailed monitoring and alerting.",
      image: "/devops-pipeline-interface.jpg",
      tags: ["Go", "Docker", "Kubernetes", "Terraform"],
      category: "backend",
      year: "2023",
      metrics: ["500+ deploys/day", "Zero downtime", "Multi-cloud"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media App",
      description: "Mobile-first social platform with real-time messaging and content sharing",
      longDescription:
        "Built a modern social media application with real-time chat, story features, and content discovery algorithms.",
      image: "/modern-social-media-app-interface.jpg",
      tags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      category: "fullstack",
      year: "2023",
      metrics: ["100K+ users", "Real-time chat", "1M+ posts"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards and team features",
      longDescription:
        "Created a powerful project management tool with drag-and-drop boards, time tracking, and team collaboration features.",
      image: "/project-management-kanban-board-interface.jpg",
      tags: ["Next.js", "PostgreSQL", "Prisma", "tRPC"],
      category: "fullstack",
      year: "2023",
      metrics: ["10K+ projects", "Team collab", "Time tracking"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with detailed forecasts and interactive maps",
      longDescription:
        "Designed an elegant weather app with hourly/daily forecasts, weather maps, and location-based alerts.",
      image: "/modern-weather-forecast-app-with-maps.jpg",
      tags: ["React", "TypeScript", "Mapbox", "Weather API"],
      category: "frontend",
      year: "2022",
      metrics: ["50K+ users", "Real-time data", "Global coverage"],
      github: "#",
      demo: "#",
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
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border/40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div className="text-xl font-bold" whileHover={{ scale: 1.05 }}>
              <Image 
                src="/logogw2.png"
                alt="Dev Logo"
                width={40} 
                height={60} 
                className="cursor-pointer"
              />
            </motion.div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-sm text-primary font-medium">
              Projects
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </motion.header>

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
