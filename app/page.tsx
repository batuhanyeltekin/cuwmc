'use client'
import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import CredibilityStrip from '../components/CredibilityStrip'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CredibilityStrip />
      <Footer />
    </main>
  )
}
