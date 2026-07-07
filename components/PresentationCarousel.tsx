'use client'

import React from 'react'
import { pastPresentations } from '../data/presentations'

// Continuously-rotating carousel of past presentation titles.
// The track holds two copies of the list and slides by -50% (same technique
// as the logo marquee); hovering pauses the track and grows the hovered card.
export default function PresentationCarousel() {
  const cards = [...pastPresentations, ...pastPresentations]

  return (
    <div className="marquee group relative -mx-4 mb-16 overflow-hidden py-2 sm:-mx-6 lg:-mx-8">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-28" />

      <div className="marquee-track-slow flex w-max items-stretch gap-5">
        {cards.map((title, index) => (
          <div
            key={`${title}-${index}`}
            aria-hidden={index >= pastPresentations.length}
            className="flex w-[260px] items-center rounded-xl border border-cuwmc-primary/10 bg-white px-6 py-5 shadow-[0_4px_16px_rgba(31,38,71,0.08)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-[0_8px_24px_rgba(31,38,71,0.16)]"
          >
            <div>
              <div className="mb-2 h-1 w-8 bg-cuwmc-secondary" />
              <p className="font-garamond text-[15px] font-semibold leading-snug text-cuwmc-primary">
                {title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
