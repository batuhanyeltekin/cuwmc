'use client'
import React, { useState } from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

interface ProgramInfo {
  id: string
  title: string
  content: string
  hasLink?: boolean
  linkUrl?: string
  linkText?: string
}

const programs: ProgramInfo[] = [
  {
    id: 'semester-research',
    title: 'Semester Research',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 'the-fund',
    title: 'The Fund',
    content: 'The Fund is a paper-trading portfolio built on second-order thinking, risk consciousness, and principles of anti-fragility. By applying disciplined capital allocation and rigorous risk premia pricing, it aims to create resilient portfolios capable of navigating diverse market conditions. As the capstone of CUWMC\'s Investment Management Division pipeline, it transforms years of research into practice within a live, simulated market environment.',
    hasLink: true,
    linkUrl: '#',
    linkText: 'Click here for The Fund website.'
  },
  {
    id: 'social-bonding',
    title: 'Social Bonding',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
]

export default function ProgramsPage() {
  const [activeProgram, setActiveProgram] = useState<string | null>(null)

  const toggleProgram = (programId: string) => {
    if (activeProgram === programId) {
      setActiveProgram(null)
    } else {
      setActiveProgram(programId)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Programs
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto font-garamond leading-relaxed">
              CUWMC offers a plethora of programs for its analysts, which includes semester research, paper trading through "The Fund," and team/club-wide social bonding.
            </p>
          </div>

          {/* Program Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => toggleProgram(program.id)}
                className={`
                  relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform
                  ${activeProgram === program.id
                    ? 'bg-cuwmc-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-cuwmc-primary hover:bg-cuwmc-primary hover:text-white hover:scale-105 hover:shadow-lg'
                  }
                  active:scale-95
                `}
              >
                {program.title}
                <div className={`
                  absolute inset-0 rounded-xl border-2 border-cuwmc-secondary
                  ${activeProgram === program.id ? 'opacity-100' : 'opacity-0'}
                  transition-opacity duration-300
                `}></div>
              </button>
            ))}
          </div>

          {/* Accordion Content */}
          <div className="max-w-4xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${activeProgram === program.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-cuwmc-primary">
                  <h3 className="text-2xl font-bold text-cuwmc-primary mb-4 font-garamond">
                    {program.title}
                  </h3>
                  
                  {/* BlackRock Logo for The Fund */}
                  {program.id === 'the-fund' && (
                    <div className="flex justify-center mb-6">
                      <img 
                        src="/assets/imgs/company_logos/BlackRock_wordmark.svg.png" 
                        alt="BlackRock" 
                        className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-700 leading-relaxed mb-4 font-garamond">
                    {program.content}
                  </p>
                  {program.hasLink && (
                    <a
                      href={program.linkUrl}
                      className="inline-block bg-cuwmc-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cuwmc-secondary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      {program.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
