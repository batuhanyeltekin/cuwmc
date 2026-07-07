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

          {/* Recruitment CTA — disabled until applications open in September */}
          <div
            className="flex flex-col items-center gap-3 pt-2 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="group relative inline-block">
              <button
                type="button"
                disabled
                aria-disabled="true"
                aria-label="Fall 2026 Recruitment — applications open in September"
                className="inline-block cursor-not-allowed rounded-full border-2 border-white/50 bg-white/5 px-8 py-4 font-garamond text-lg font-semibold text-white/70 line-through decoration-2 backdrop-blur-sm"
              >
                Fall 2026 Recruitment
              </button>
              {/* Desktop hover tooltip */}
              <span className="pointer-events-none absolute left-1/2 top-full mt-3 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-cuwmc-primary px-4 py-2 font-garamond text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
                Check back in September
              </span>
            </div>
            {/* Mobile caption (hover isn't available on touch) */}
            <p className="font-garamond text-sm text-gray-200 md:hidden">
              Check back in September
            </p>
          </div>
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
