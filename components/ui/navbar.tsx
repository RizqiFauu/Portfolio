"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()

  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // detect scroll direction + state
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    if (previous) {
      // hide saat scroll down
      if (latest > previous && latest > 150) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }

    // detect sudah scroll
    setScrolled(latest > 20)
  })

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo-rizqi-v0.png"
            alt="Logo"
            width={32}
            height={32}
            className="cursor-pointer hover:opacity-80 transition"
          />
        </Link>

        {/* MENU */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-all ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}

                {/* active underline */}
                {isActive && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute left-0 -bottom-2 w-full h-[2px] bg-primary"
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.header>
  )
}
