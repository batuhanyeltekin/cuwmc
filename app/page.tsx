'use client'
import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Board from '../components/Board'
import Programs from '../components/Programs'
import Divisions from '../components/Divisions'
import Recruitment from '../components/Recruitment'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <Board /> */}
      {/* <Programs /> */}
      {/* <Divisions /> */}
      <Recruitment />
      <Footer />
    </main>
  )
}
