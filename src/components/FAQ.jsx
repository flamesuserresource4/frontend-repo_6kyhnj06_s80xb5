import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Is the token safe?', a: 'Security-first: renounced contract plan, LP lock at launch, and audited before listings.' },
  { q: 'What is the utility?', a: 'Access to the Mr. Green universe: AI companions, NFT drops, holders-only missions, and story-driven unlocks.' },
  { q: 'When launch?', a: 'TBA — building community and content first. Follow socials for the exact date.' },
  { q: 'Which chain?', a: 'Launching where the community votes. EVM-first approach.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-[#0a0f14]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-5 sm:p-6 group">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-white/60 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </div>
              {open === i && (
                <p className="text-white/80 mt-2 text-sm leading-relaxed">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
