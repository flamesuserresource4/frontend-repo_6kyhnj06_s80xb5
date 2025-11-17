import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#070c11] py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© 2025 Mr. Green – The Moonbag Journey</div>
        <div className="flex items-center gap-4 text-sm">
          <a className="text-[#00ff8a] hover:underline" href="mailto:team@mrgreen.ai">team@mrgreen.ai</a>
          <a className="text-white/70 hover:text-white" href="https://x.com" target="_blank" rel="noreferrer">X</a>
          <a className="text-white/70 hover:text-white" href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>
    </footer>
  )
}
