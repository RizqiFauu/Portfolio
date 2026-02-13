"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code2, Rocket, Users, Award, Figma } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const technologies = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  Backend: ["Next.js", "Node.js", "PHP", "REST API", "Python"],
  Database: ["MySQL", "Supabase", "Neon DB"],
  Tools: ["Git", "GitHub", "VS Code", "Prisma", "Figma"],
  Deployment: ["Vercel", "Environment Variables"],
}

  const achievements = [
    {
      icon: Code2,
      title: "Project Portfolio",
      description: "Mengembangkan beberapa project web pribadi sebagai sarana belajar dan eksplorasi teknologi frontend dan backend.",
    },
    {
      icon: Users,
      title: "Learning Experience",
      description: "Membangun aplikasi web sederhana dengan integrasi API dan database sebagai bagian dari proses pembelajaran.",
    },
    {
      icon: Rocket,
      title: "Consistent Growth",
      description: "Berkomitmen meningkatkan skill secara konsisten melalui latihan, debugging, dan pengembangan project nyata.",
    },
    {
      icon: Award,
      title: "Deployment & Version Control",
      description: "Terbiasa menggunakan Git, GitHub, dan Vercel untuk mengelola kode dan mempublikasikan aplikasi web.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
             Saya adalah mahasiswa dan developer web yang fokus membangun website yang rapi, fungsional, dan mudah digunakan.
Saya terbiasa mengembangkan aplikasi web yang terhubung ke backend dan database untuk mengelola data secara dinamis.
            </p>
          </motion.div>

          {/* Photo and Bio Section */}
          <motion.div
            className="grid lg:grid-cols-5 gap-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="lg:col-span-2">
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-muted/50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src="/poto2brok.jpg" alt="About Photo" fill className="object-cover" />
              </motion.div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-3xl font-bold">My Journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                Perjalanan saya di dunia web development dimulai dari rasa penasaran terhadap cara kerja sebuah website.
Saya memulai dari dasar seperti HTML dan CSS, lalu berkembang ke JavaScript untuk membangun tampilan yang lebih interaktif.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Saat ini saya fokus menggunakan React dan Next.js untuk membangun aplikasi web modern, serta mempelajari backend dasar.
Saya sudah terbiasa menghubungkan frontend dengan API dan database untuk kebutuhan penyimpanan dan pengelolaan data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Saya percaya bahwa kode yang rapi, mudah dibaca, dan konsisten adalah kunci dari aplikasi yang dapat dikembangkan dalam jangka panjang.
Di luar coding, saya terus belajar melalui project nyata dan eksplorasi teknologi web terbaru.Saya tertarik memahami bagaimana sebuah aplikasi bekerja secara menyeluruh, mulai dari tampilan hingga proses data di server.
              </p>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all h-full">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold mb-2">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Technical Stack</h2>
            <div className="grid md:grid-cols-2 gap-8">
  {Object.entries(technologies).map(([category, techs], idx, arr) => {
    const isLast = idx === arr.length - 1

    return (
      <motion.div
        key={category}
        className={isLast ? "md:col-span-2 flex justify-center" : ""}
        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
      >
        <div className={isLast ? "w-full md:w-1/2" : ""}>
          <Card className="p-6 hover:shadow-lg transition-all h-full">
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    )
  })}
</div>

          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">Tertarik untuk berkolaborasi atau punya ide project?
Silakan hubungi saya, saya terbuka untuk diskusi dan kerja sama.</p>
            <Button size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
