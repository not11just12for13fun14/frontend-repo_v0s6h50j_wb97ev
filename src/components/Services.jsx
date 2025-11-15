import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { title: 'Web Design', desc: 'Conversion-focused websites with performance, accessibility, and craft.' },
  { title: 'Branding', desc: 'Naming, identity systems, and visual language that resonate.' },
  { title: 'Digital Marketing', desc: 'SEO, content, and lifecycle strategies to grow demand.' }
]

export default function Services() {
  return (
    <section id="services" className="section accent-gradient">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase h-title mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-bold uppercase">{s.title}</h3>
              <p className="mt-3 text-[var(--muted-color)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
