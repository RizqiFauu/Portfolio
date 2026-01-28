"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/RizqiFauu",
      username: "@RizqiFauu",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rizqi-fauzi-417575336/",
      username: "Rizqi Fauzi",
    },
    {
      icon: Instagram,
      label: "instagram",
      href: "https://www.instagram.com/rizqifau__/",
      username: "@rizqifau__",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rizqi553218@gmail.com",
      href: "mailto:rizqi553218@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: null,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border/40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div className="text-xl font-bold" whileHover={{ scale: 1.05 }}>
              {"<Dev />"}
            </motion.div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-sm text-primary font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </motion.header>

      <div className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Punya ide project atau ingin berdiskusi?
Jangan ragu untuk menghubungi saya melalui form di bawah ini.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell me about your project or idea..." rows={6} />
                  </div>

                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      {item.href ? (
                        <a href={item.href}>
                          <Card className="p-4 hover:shadow-lg transition-all group">
                            <div className="flex items-center gap-4">
                              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">{item.label}</div>
                                <div className="font-medium">{item.value}</div>
                              </div>
                            </div>
                          </Card>
                        </a>
                      ) : (
                        <Card className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">{item.label}</div>
                              <div className="font-medium">{item.value}</div>
                            </div>
                          </div>
                        </Card>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                <div className="space-y-4">
                  {socialLinks.map((social, idx) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Card className="p-4 hover:shadow-lg transition-all group">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <social.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-medium">{social.label}</div>
                              <div className="text-sm text-muted-foreground">{social.username}</div>
                            </div>
                          </div>
                        </Card>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional CTA */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-bold mb-2">Looking for my resume?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Anda dapat mengunduh CV saya untuk melihat ringkasan pengalaman dan skill yang saya miliki.
                </p>
                <Button variant="outline" size="sm">
                  Download Resume
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
