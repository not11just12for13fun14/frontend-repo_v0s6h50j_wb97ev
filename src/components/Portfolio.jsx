import React from 'react'
import { motion } from 'framer-motion'

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  img: `https://picsum.photos/seed/serene-${i}/1200/900`
}))

export default function Portfolio() {
  return (
    <section id="work" className="section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase h-title mb-10">Selected Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.id}
              href="#"
              className="relative overflow-hidden rounded-2xl block group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
                <span className="text-white font-semibold drop-shadow">{item.title}</span>
                <span className="text-white/80 text-sm">View</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
