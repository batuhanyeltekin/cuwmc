'use client'

import React from 'react'

export default function Recruitment() {
  return (
    <section id="recruitment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cuwmc-primary mb-6">
            Spring 2026 Recruitment Is Now Open
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Apply using our form, and follow our{' '}
            <a
              href="https://www.instagram.com/cuwmc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cuwmc-primary hover:text-cuwmc-secondary underline font-semibold"
            >
              Instagram
            </a>
            {' '}for updates.
          </p>
          <button
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSeSwGMr2kkLNdiYMCpJMdbNvF3blSfzafTF5mQdOYdzD9r_EA/viewform',
                '_blank'
              )
            }
            className="inline-block bg-cuwmc-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Spring 2026 Application
          </button>
        </div>
      </div>
    </section>
  )
}
