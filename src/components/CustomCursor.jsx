import React, { useEffect, useRef } from 'react'

// Lightweight custom cursor with GSAP-like easing using requestAnimationFrame
export default function CustomCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef(0)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const loop = () => {
      // power2.out-like lerp
      const dx = target.current.x - pos.current.x
      const dy = target.current.y - pos.current.y
      pos.current.x += dx * 0.2
      pos.current.y += dy * 0.2
      cursor.style.transform = `translate(${pos.current.x - 9}px, ${pos.current.y - 9}px)`
      raf.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(loop)

    const add = (el) => el?.classList.add('is-hover')
    const remove = (el) => el?.classList.remove('is-hover')

    const hoverables = document.querySelectorAll('a, button, [data-cursor="hover"]')
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => add(cursor))
      el.addEventListener('mouseleave', () => remove(cursor))
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', () => add(cursor))
        el.removeEventListener('mouseleave', () => remove(cursor))
      })
    }
  }, [])

  return <div id="custom-cursor" />
}
