'use client'

import React from 'react'

export default function Recruitment() {
  const benefits = [
    'Gain practical experience in wealth management',
    'Network with industry professionals',
    'Develop analytical and leadership skills',
    'Build a strong foundation for your finance career'
  ]

  return (
    <section id="recruitment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4">
            Fall 2025 Recruitment
          </h2>
          <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cuwmc-primary mb-6">
              Why Join CUWMC?
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Coffee Chats */}
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold text-cuwmc-primary mb-6">
              Coffee Chats
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Connect with our members and learn more about CUWMC
            </p>
            <button 
              onClick={() => window.open('/recruitment', '_blank')}
              className="bg-cuwmc-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              Schedule Coffee Chat
            </button>
          </div>

          {/* Application Form */}
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold text-cuwmc-primary mb-6">
              Application Form
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Applications will open soon for Fall 2025
            </p>
            <button className="bg-cuwmc-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 text-lg">
              Application Form
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
