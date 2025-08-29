'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/imgs/columbia-campusandcityfromnwcb.day_.eileenbarroso.jpg"
          alt="Columbia Campus"
          className="w-full h-full object-cover"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-garamond drop-shadow-lg animate-fade-in-up">
            Columbia Undergraduate Wealth Management Club
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-garamond max-w-4xl mx-auto drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Empowering the next generation of financial leaders through education, networking, and hands-on experience in wealth management.
          </p>
          <button 
            onClick={() => window.open('https://www.instagram.com/cuwmc/', '_blank')}
            className="inline-block bg-cuwmc-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-garamond backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Follow us on Instagram!
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  )
}
