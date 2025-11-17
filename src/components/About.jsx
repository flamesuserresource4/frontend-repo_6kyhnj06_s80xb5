import React from 'react'
import { motion } from 'framer-motion'

const neon = '#00ff8a'

const Card = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_40px_rgba(0,255,138,0.2)] transition-shadow"
  >
    <h3 className="text-white font-semibold text-lg mb-2" style={{ textShadow: '0 0 20px rgba(0,255,138,0.2)' }}>{title}</h3>
    <p className="text-white/80 text-sm leading-relaxed">{children}</p>
  </motion.div>
)

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#0a0f14]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-3xl opacity-20" style={{ background: `radial-gradient(closest-side, ${neon}, transparent)` }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center">About Mr. Green</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">A comic misfit turned legend. Mr. Green is the optimistic trickster who believes every bag can be a Moonbag with enough heart, hustle, and a splash of chaos.</p>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card title="Origin" delay={0.05}>
            Born in the pixel alleys of Shitcoin Valley, raised by charts and memes. Forged during the late-night degen hours.
          </Card>
          <Card title="Mission" delay={0.15}>
            Turn community energy into a cinematic meme universe. Make crypto fun, safe, and wildly creative again.
          </Card>
          <Card title="Core Traits" delay={0.25}>
            Diamond Hands • Optimistic • Mischievous. The holy trinity for making it to the Moon.
          </Card>
        </div>
      </div>
    </section>
  )
}
