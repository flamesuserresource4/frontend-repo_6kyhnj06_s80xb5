import React from 'react'
import { motion } from 'framer-motion'

export default function Token() {
  const cards = [
    { label: 'Supply', value: '1,000,000,000 $GREEN' },
    { label: 'Taxes', value: '0% buy / 0% sell (launch plan)' },
    { label: 'Utilities', value: 'NFTs, AI companions, gamified lore' },
    { label: 'Contract', value: 'TBA' },
  ]

  return (
    <section id="token" className="relative py-16 sm:py-24 bg-[#0a0f14]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center">Tokenomics</h2>
        <p className="text-white/70 text-center mt-3">Designed for fair launch and sustainable growth.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="text-white/70 text-sm">{c.label}</div>
              <div className="text-white font-semibold mt-1">{c.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
