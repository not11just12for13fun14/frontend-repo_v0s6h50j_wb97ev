// If you prefer GSAP + ScrollTrigger instead of Framer Motion
// Install gsap if needed and enable the lines below.
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

// Example usage:
// export const fadeInUp = (el, delay = 0) => {
//   gsap.fromTo(el, { autoAlpha: 0, y: 50 }, {
//     autoAlpha: 1, y: 0, duration: 0.8, delay, ease: 'power2.out',
//     scrollTrigger: { trigger: el, start: 'top 80%' }
//   })
// }

export const motionEases = {
  soft: [0.16, 1, 0.3, 1],
  punchy: [0.22, 1, 0.36, 1],
  glide: [0.33, 1, 0.68, 1]
}
