'use client'

import React from 'react'
import { FaChartLine, FaUsers, FaTrophy, FaGraduationCap } from 'react-icons/fa'

export default function Programs() {
  const programs = [
    {
      icon: FaChartLine,
      title: 'Investment Workshops',
      description: 'Hands-on sessions covering portfolio management, risk assessment, and market analysis techniques.'
    },
    {
      icon: FaUsers,
      title: 'Networking Events',
      description: 'Connect with industry professionals and alumni working in wealth management and financial services.'
    },
    {
      icon: FaTrophy,
      title: 'Case Competitions',
      description: 'Compete in real-world financial scenarios and showcase your analytical and problem-solving skills.'
    },
    {
      icon: FaGraduationCap,
      title: 'Professional Development',
      description: 'Resume workshops, interview preparation, and career guidance from industry experts.'
    }
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4">
            Our Programs
          </h2>
          <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-20 h-20 bg-cuwmc-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <program.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cuwmc-primary mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
