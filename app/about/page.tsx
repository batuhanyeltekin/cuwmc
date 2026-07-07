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
                  CUWMC is the leading student organization at Columbia University dedicated to Asset and Wealth Management.
                </p>
                <p>
                  We specialize in investment and client relationship strategies through our three main divisions: Investment Management, Financial Planning, and Private Banking.
                </p>
                <p>
                  Following our motto of learning through teaching, we are motivated to bridge the financial literacy gap within the Columbia community by providing educational resources accessible to all Columbia students.
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
                  At CUWMC, we give undergraduates the tools and experiences to understand asset and wealth management at a professional level. Our work is organized across three divisions: Investment Management, Financial Planning, and Private Banking, each offering students the opportunity to delve into research, strategy, and client-facing skills.
                </p>
                <p>
                  We run a 9-week Securities Industry Essentials (SIE) training program, operate a paper-trading fund powered by BlackRock's Aladdin platform, and host our flagship "Wealth Management Week," where analysts present semester-long research to the broader Columbia community.
                </p>
                <p>
                  Through workshops, speaker events, and direct access to industry platforms, our members bridge the gap between theory and practice, preparing for careers in asset management, banking, and beyond.
                </p>
              </div>
            </div>
          </div>

          {/* Alumni Placements */}
          <div className="border-t border-gray-200 pt-20">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-garamond text-3xl font-bold text-cuwmc-primary md:text-4xl">
                Alumni Placements
              </h2>
              <div className="mx-auto h-1 w-20 bg-cuwmc-secondary" />
            </div>

            <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-8">
              <img src="/assets/imgs/company_logos/barclays-3-e1748366367942.png" alt="Barclays" style={{ height: '160px', width: 'auto' }} className="object-contain" />
              <img src="/assets/imgs/company_logos/BlackRock_wordmark.svg.png" alt="BlackRock" style={{ height: '160px', width: 'auto' }} className="object-contain" />
              <img src="/assets/imgs/company_logos/Citi.svg.png" alt="Citi" style={{ height: '80px', width: 'auto' }} className="object-contain" />
              <img src="/assets/imgs/company_logos/gs.png" alt="Goldman Sachs" style={{ height: '160px', width: 'auto' }} className="object-contain" />
              <img src="/assets/imgs/company_logos/HSBC_Logo_2018.png" alt="HSBC" style={{ height: '160px', width: 'auto' }} className="object-contain" />
              <img src="/assets/imgs/company_logos/jpm.png" alt="JPMorgan Chase" style={{ height: '160px', width: 'auto' }} className="object-contain" />
              <img src="/assets/imgs/company_logos/Morgan_Stanley_Logo_1.svg" alt="Morgan Stanley" style={{ height: '160px', width: 'auto' }} className="object-contain" />
              <img src="/assets/imgs/company_logos/ubs.png" alt="UBS" style={{ height: '160px', width: 'auto' }} className="object-contain" />
              <div className="col-span-full flex w-full justify-center">
                <img
                  src="/assets/imgs/company_logos/nasa.png"
                  alt="NASA"
                  title="Yes, we actually have a CUWMC board member who is interning at NASA. #cuwmcstrong #wealthmanagingspace"
                  style={{ height: '160px', width: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
