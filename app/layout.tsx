import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Rizqi Fauzi | Software Engineer",
  description:
    "Rizqi Fauzi is a Software Engineer and Fullstack Developer building modern, performant, and scalable web applications.",
  keywords: [
    "Rizqi Fauzi",
    "Software Engineer",
    "Fullstack Developer",
    "Web Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Rizqi Fauzi" }],
  creator: "Rizqi Fauzi",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rizqi Fauzi | Software Engineer",
    description:
      "Fullstack developer crafting clean, modern, and scalable web experiences.",
    siteName: "Rizqi Fauzi",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rizqi Fauzi | Software Engineer",
    description:
      "Fullstack developer crafting clean, modern, and scalable web experiences.",
  },

  icons: {
    icon: [
      {
        url: "/logo-rizqi-v0.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-rizqi-v0.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon-v2.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo-rizqi-v0.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <Navbar />
        <Footer />
      <Analytics />

      </body>
    </html>
  )
}
