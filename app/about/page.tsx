'use client'
import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              About Us
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
          </div>

          {/* Main Group Image */}
          <div className="mb-20">
            <div className="relative">
              <img 
                src="/assets/imgs/group_image.jpg" 
                alt="CUWMC Group" 
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Who We Are Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-cuwmc-primary mb-8 font-garamond text-center">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-garamond">
                <p>
                  CUWMC is the leading student organization at Columbia University dedicated to wealth advisory.
                </p>
                <p>
                  Established in 2023, we guide students through the multifaceted landscape of wealth management.
                </p>
                <p>
                  CUWMC's efforts are to train the next generation of private wealth advisors and educate undergraduates about personal finance.
                </p>
                <p>
                  As the impending 'Great Wealth Transfer' is set to redefine the financial landscape in the coming decades, our goal is to prepare Columbia's driven students, who are likely to be future inheritors and business leaders, with the necessary expertise to handle their wealth prudently.
                </p>
                <p>
                  Our club is split into three divisions: Investment Management, Financial Planning, and Private Banking.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-cuwmc-primary mb-8 font-garamond text-center">
                What We Do
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-garamond">
                <p>
                  Our Analysts work together to lead six educational programs throughout the academic year that are open to the entire student body:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-semibold text-cuwmc-primary mb-2">
                    PWM Masterclass, Intro to Personal Finance, Investment Management, Financial Planning, Banking Products, and the Pitch Competition.
                  </p>
                </div>
                <p>
                  Our signature initiative, the 'Private Wealth Management Masterclass,' is a testament to our commitment to financial education.
                </p>
                <p>
                  This two-hour seminar is meticulously designed to introduce students to the intricacies of the wealth management industry and fundamentals of financial planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
