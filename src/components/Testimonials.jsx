import React from 'react'
import { motion } from 'framer-motion'

const quotes = [
  {
    name: 'Elena M.',
    role: 'VP Marketing',
    quote: 'Serene Designs elevated our brand and rebuilt our site with a finesse that immediately impacted our pipeline.'
  },
  {
    name: 'James R.',
    role: 'Founder',
    quote: 'The collaboration was seamless. Their design system and motion work made our product feel premium.'
  },
  {
    name: 'Priya S.',
    role: 'Head of Growth',
    quote: 'From strategy to execution, they delivered. Conversions are up and the experience feels effortless.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section block-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase h-title mb-10">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-lg leading-relaxed">“{q.quote}”</p>
              <div className="mt-4 text-sm text-white/70">{q.name} — {q.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
