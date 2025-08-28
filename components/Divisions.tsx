'use client'

import React from 'react'

export default function Divisions() {
  const divisions = [
    {
      title: 'Investment Research',
      description: 'Conduct market research, analyze investment opportunities, and develop investment theses.',
      areas: ['Equity Analysis', 'Fixed Income Research', 'Alternative Investments']
    },
    {
      title: 'Portfolio Management',
      description: 'Manage mock portfolios and learn asset allocation strategies for different risk profiles.',
      areas: ['Asset Allocation', 'Risk Management', 'Performance Tracking']
    },
    {
      title: 'Financial Planning',
      description: 'Learn comprehensive financial planning including retirement, estate, and tax planning.',
      areas: ['Retirement Planning', 'Estate Planning', 'Tax Strategies']
    }
  ]

  return (
    <section id="divisions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4">
            Club Divisions
          </h2>
          <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-cuwmc-primary mb-4">
                {division.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {division.description}
              </p>
              <ul className="space-y-3">
                {division.areas.map((area, areaIndex) => (
                  <li key={areaIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-cuwmc-secondary rounded-full mr-3"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
