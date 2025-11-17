import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const milestones = [
  { label: '500 holders', progress: 70 },
  { label: 'LP locked', progress: 40 },
  { label: 'First NFT drop', progress: 15 },
  { label: 'First CEX listing', progress: 0 },
  { label: 'Animated short film release', progress: 0 },
]

export default function Roadmap() {
  const computed = useMemo(() => milestones.map(m => ({ ...m, unlocked: m.progress >= 100 })), [])

  return (
    <section id="roadmap" className="relative py-16 sm:py-24 bg-[#081019]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center">Gamified Roadmap</h2>
        <p className="text-white/70 text-center mt-3">Milestones unlock as the community progresses. Check back often!</p>

        <div className="mt-8 grid grid-cols-1 gap-4">
          {computed.map((m, i) => {
            const locked = !m.unlocked
            return (
              <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className={`rounded-2xl p-5 border bg-white/5 backdrop-blur-md ${locked ? 'border-white/10 opacity-80' : 'border-[#00ff8a]/40 shadow-[0_0_40px_rgba(0,255,138,0.2)]'}`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className={`text-white font-semibold ${locked ? '' : 'drop-shadow-[0_0_20px_rgba(0,255,138,0.3)]'}`}>{m.label}</div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-[#00ff8a]" style={{ width: `${m.progress}%`, transition: 'width 800ms ease' }} />
                    </div>
                  </div>
                  <CheckCircle2 className={`h-6 w-6 ${m.unlocked ? 'text-[#00ff8a]' : 'text-white/30'}`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
