"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  // =====================
  // FORM STATE (TAMBAHAN)
  // =====================
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.error || "Gagal mengirim pesan")
        return
      }

      alert("Pesan berhasil dikirim")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      alert("Terjadi kesalahan")
    } finally {
      setLoading(false)
    }
  }

  // =====================
  // DATA STATIS (ASLI)
  // =====================
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
      label: "Instagram",
      href: "https://www.instagram.com/rizqifau__/",
      username: "@rizqifau__",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rizqifauzi.dev@outlook.co.id",
      href: "mailto:rizqifauzi.dev@outlook.co.id",
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
      <div className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* PAGE HEADER */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Punya ide project atau ingin berdiskusi? Jangan ragu untuk
              menghubungi saya melalui form di bawah ini.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  <Input
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                  />

                  <Textarea
                    rows={6}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />

                  <Button
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* CONTACT INFO & SOCIAL (ASLI, TIDAK DIUBAH) */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <Card key={item.label} className="p-4">
                      <div className="flex items-center gap-4">
                        <item.icon className="w-5 h-5" />
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="font-medium">{item.value}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Connect With Me
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                    >
                      <Card className="p-4 hover:shadow-lg">
                        <div className="flex items-center gap-4">
                          <social.icon className="w-5 h-5" />
                          <div>
                            <div className="font-medium">
                              {social.label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {social.username}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
