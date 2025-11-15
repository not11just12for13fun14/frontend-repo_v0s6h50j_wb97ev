import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const heading = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  })
}

export default function Hero() {
  const overlayRef = useRef(null)

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    const onScroll = () => {
      const scrolled = window.scrollY
      overlay.style.opacity = String(Math.max(0.2, 1 - scrolled / 600))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black text-white select-none">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-start justify-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase h-title"
          initial="hidden"
          animate="visible"
          variants={heading}
        >
          Serene Designs
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Web Design • Branding • Digital Marketing
        </motion.p>
        <motion.a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--accent-color)] text-black font-semibold px-6 py-3 uppercase tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Let’s Work Together
        </motion.a>
      </div>
    </section>
  )
}
