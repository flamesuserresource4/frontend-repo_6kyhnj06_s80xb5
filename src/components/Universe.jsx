import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  { title: 'Birth', desc: 'A spark in the dark web. Mr. Green awakens.', color: '#00ff8a' },
  { title: 'Crypto School', desc: 'Learning charts, wallets, and wise degen lore.', color: '#39ffb6' },
  { title: 'Shitcoin Valley', desc: 'Where hype is high and rugs are higher.', color: '#00e6a0' },
  { title: 'Bear Market', desc: 'Friends sold. Mr. Green held.', color: '#19cc8a' },
  { title: 'Diamond Hands Scene', desc: 'Forged by pressure, glowing brighter.', color: '#00ff8a' },
  { title: 'Moon', desc: 'The Moonbag prophecy fulfilled.', color: '#66ffd1' },
]

export default function Universe() {
  const [active, setActive] = useState(0)

  return (
    <section id="universe" className="relative py-16 sm:py-24 bg-[#081019]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center">The Universe</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">Scroll through Mr. Green’s cinematic journey. Tap each step to expand the scene.</p>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              onClick={() => setActive(idx)}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 sm:p-6 cursor-pointer ${active === idx ? 'ring-2 ring-[#00ff8a]/50' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
              </div>
              <AnimatePresence>
                {active === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-white/80 text-sm leading-relaxed">
                      {s.desc}
                    </div>
                    <div className="mt-4 h-40 sm:h-60 rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" style={{ filter: 'saturate(1.2) contrast(1.1)' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
