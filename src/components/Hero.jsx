import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Send, Rocket } from 'lucide-react'

const neon = '#00ff8a'

export default function Hero({ onViewRoadmap }) {
  return (
    <section id="hero" className="relative w-full h-[100svh] overflow-hidden bg-[#0a0f14]">      
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30" style={{ background: `radial-gradient(closest-side, ${neon}, transparent)` }} />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(closest-side, #39ffb6, transparent)' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-end sm:items-center justify-center">
        <div className="px-6 sm:px-10 max-w-6xl w-full text-center sm:text-left">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,255,138,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Next Generation Meme – Built for the Moonbag Era.
          </motion.h1>

          <motion.p
            className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            A Pixar-style Meme Universe powered by AI, Community & Storytelling.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start justify-center sm:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a href="https://t.me" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold bg-[rgba(0,255,138,0.15)] border border-[rgba(0,255,138,0.5)] text-white hover:bg-[rgba(0,255,138,0.25)] transition-colors">
              <Send className="mr-2 h-4 w-4 text-[\#00ff8a]" /> Join Telegram
            </a>
            <button onClick={onViewRoadmap} className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors">
              <Rocket className="mr-2 h-4 w-4" /> View Roadmap
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block w-1 h-1 rounded-full"
            style={{ backgroundColor: neon }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2], y: [-10, -30, -10] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
            
            // random positions
            custom={i}
          />
        ))}
      </div>
    </section>
  )
}
