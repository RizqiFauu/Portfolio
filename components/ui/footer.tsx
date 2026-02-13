"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
} from "lucide-react"

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  const socials = [
    {
      icon: Github,
      href: "https://github.com/RizqiFauu",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rizqi-fauzi-417575336/",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/rizqifau__/",
    },
    {
      icon: Mail,
      href: "mailto:rizqifauzi.dev@outlook.co.id",
    },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative border-t bg-background/80 backdrop-blur-xl"
    >
      {/* gradient divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* BRAND + CTA */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold">
              Rizqi Fauzi
            </h3>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Fullstack developer yang fokus membangun web modern, scalable, dan berkinerja tinggi.
              </p>

            {/* CTA */}
            <Link href="/contact">
              <button className="flex items-center gap-2 mt-4 text-sm font-medium hover:text-primary transition">
                Let’s work together
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-6">
              Navigation
            </h4>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-6">
              Connect
            </h4>

            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-xl border bg-background hover:bg-muted hover:scale-110 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Rizqi Fauzi. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
