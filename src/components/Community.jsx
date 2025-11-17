import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Twitter, MessageCircle } from 'lucide-react'

function Counter({ target = 0, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1200
    const start = performance.now()

    const step = (now) => {
      const t = Math.min(1, (now - start) / duration)
      setValue(Math.floor(t * target))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, target])

  return <div ref={ref} className="text-3xl sm:text-4xl font-extrabold text-white">{value.toLocaleString()}{suffix}</div>
}

export default function Community() {
  return (
    <section id="community" className="relative py-16 sm:py-24 bg-[#0a0f14]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center">Community</h2>
        <p className="text-white/70 text-center mt-3">Hype powered by people. Art powered by AI.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-white/70 text-sm">Telegram Members</div>
            <Counter target={12800} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-white/70 text-sm">X Followers</div>
            <Counter target={53200} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-white/70 text-sm">NFT Holders</div>
            <Counter target={890} />
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a href="https://x.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold bg-[rgba(0,255,138,0.15)] border border-[rgba(0,255,138,0.5)] text-white hover:bg-[rgba(0,255,138,0.25)] transition-colors">
            <Twitter className="mr-2 h-4 w-4" /> Follow on X
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors">
            <MessageCircle className="mr-2 h-4 w-4" /> Join Telegram
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div key={i} className="aspect-square rounded-xl bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900&auto=format&fit=crop')] bg-cover bg-center border border-white/10" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} />
          ))}
        </div>
      </div>
    </section>
  )
}
