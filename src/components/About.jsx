import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase h-title">About</h2>
          <p className="mt-6 text-lg text-[var(--muted-color)]">
            We craft high-end digital experiences that blend strategy, design, and technology. From brand systems to conversion-optimized websites, we partner with ambitious teams to shape meaningful outcomes.
          </p>
        </motion.div>
        <motion.div
          className="relative aspect-[4/3] rounded-2xl overflow-hidden card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
