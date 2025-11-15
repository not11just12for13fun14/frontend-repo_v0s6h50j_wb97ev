import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase h-title">Let’s build something serene</h2>
            <p className="mt-4 text-[var(--muted-color)]">Tell us about your goals and we’ll come back with a tailored plan.</p>
          </motion.div>
          <motion.form
            className="card p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium">Name</span>
                <input className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent-color)]" placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input type="email" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent-color)]" placeholder="you@company.com" />
              </label>
            </div>
            <label className="block mt-4">
              <span className="text-sm font-medium">Project Details</span>
              <textarea rows="4" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent-color)]" placeholder="Tell us about your timeline, budget, and goals..." />
            </label>
            <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent-color)] text-black font-semibold px-6 py-3 uppercase tracking-wide">Submit</button>
          </motion.form>
        </div>
        <motion.div
          className="mt-16 text-center text-sm text-[var(--muted-color)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          © {new Date().getFullYear()} Serene Designs. All rights reserved.
        </motion.div>
      </div>
    </section>
  )
}
