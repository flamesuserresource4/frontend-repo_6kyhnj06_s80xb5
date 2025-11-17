import React from 'react'
import { motion } from 'framer-motion'

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-[#081019]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center">Art Gallery</h2>
        <p className="text-white/70 text-center mt-3">Character sheets, renders, memes & behind the scenes.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
