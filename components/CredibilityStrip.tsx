'use client'

import React from 'react'
import { firmLogos } from '../data/logos'

const stats = [
  { figure: '200+', label: 'Students reached' },
  { figure: '40+', label: 'Active members' },
  { figure: '<5%', label: 'Acceptance rate' },
  { figure: '3', label: 'Analyst divisions' },
]

export default function CredibilityStrip() {
  // Duplicate the logo set so the marquee can loop seamlessly (-50% translate).
  const marqueeLogos = [...firmLogos, ...firmLogos]

  return (
    <section className="bg-white">
      {/* Stat band */}
      <div className="bg-cuwmc-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-garamond text-4xl font-bold text-cuwmc-secondary md:text-5xl">
                  {stat.figure}
                </p>
                <p className="mt-2 font-garamond text-base text-gray-200 md:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo marquee */}
      <div className="py-16">
        <p className="mb-10 text-center font-garamond text-lg text-gray-500">
          Where our members intern and our alumni build their careers
        </p>
        <div className="marquee group relative overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

          <div className="marquee-track flex w-max items-center gap-16 md:gap-24">
            {marqueeLogos.map((logo, index) => (
              <img
                key={`${logo.name}-${index}`}
                src={logo.src}
                alt={logo.name}
                aria-hidden={index >= firmLogos.length}
                style={{ height: `${logo.height ?? 40}px`, width: 'auto' }}
                className="max-w-none object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
