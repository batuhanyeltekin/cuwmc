'use client'

import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function Board() {
  const boardMembers = [
    {
      position: 'President',
      name: 'John Smith',
      year: 'Class of 2025'
    },
    {
      position: 'Vice President',
      name: 'Sarah Johnson',
      year: 'Class of 2025'
    },
    {
      position: 'Treasurer',
      name: 'Michael Chen',
      year: 'Class of 2026'
    },
    {
      position: 'Secretary',
      name: 'Emily Davis',
      year: 'Class of 2026'
    }
  ]

  return (
    <section id="board" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4">
            Executive Board
          </h2>
          <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUser className="w-12 h-12 text-cuwmc-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cuwmc-primary mb-2">
                {member.position}
              </h3>
              <p className="text-lg text-gray-700 mb-2">{member.name}</p>
              <p className="text-sm text-gray-500">{member.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
