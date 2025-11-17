import React, { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Universe from './components/Universe'
import Token from './components/Token'
import Roadmap from './components/Roadmap'
import Community from './components/Community'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const roadmapRef = useRef(null)
  const scrollToRoadmap = () => {
    const el = document.getElementById('roadmap')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#05090e]">
      <Hero onViewRoadmap={scrollToRoadmap} />
      <About />
      <Universe />
      <Token />
      <Roadmap ref={roadmapRef} />
      <Community />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
