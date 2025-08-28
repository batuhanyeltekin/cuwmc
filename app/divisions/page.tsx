'use client'
import React from 'react'
import Link from 'next/link'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function DivisionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Our Analyst Divisions
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto font-garamond leading-relaxed">
              Our analysts are split into three divisions that produce research and deliver presentations, open to attendance by all Columbia students.
            </p>
          </div>

          {/* Investment Management Division */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/assets/imgs/imd.png" 
                  alt="Investment Management Division" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-cuwmc-primary mb-6 font-garamond">
                  Investment Management Division (IMD)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-garamond">
                  Our Investment Management Division focuses on the strategic management of investment portfolios to achieve financial goals. Analysts research and present on traditional asset allocations, including debt and equity, as well as alternative investments and ESG (Environmental, Social, and Governance) investing. They cover key concepts such as portfolio theory, diversification, hedging strategies, investment horizons, and liquidity management, ultimately providing a comprehensive understanding of effective portfolio management.
                </p>
                <button className="bg-cuwmc-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Private Banking Division */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-cuwmc-primary mb-6 font-garamond">
                  Private Banking Division (PBD)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-garamond">
                  The Private Banking Division specializes in the array of banking services essential for ultra-high-net-worth clients. Students gain a thorough understanding of credit and lending solutions, foreign exchange services, concierge and lifestyle offerings, and cash management techniques. By studying these products and services, Analysts learn how to address the complex financial needs of affluent individuals and provide tailored banking solutions to enhance their financial well-being.
                </p>
                <button className="bg-cuwmc-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Learn More
                </button>
              </div>
              <div>
                <img 
                  src="/assets/imgs/pbd.png" 
                  alt="Private Banking Division" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Financial Planning Division */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="/assets/imgs/fpd.png" 
                  alt="Financial Planning Division" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-cuwmc-primary mb-6 font-garamond">
                  Financial Planning Division (FPD)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-garamond">
                  Analysts in the Financial Planning Division delve into a wide range of personal finance topics, including budgeting, retirement planning, philanthropy, and tax strategies. The emphasis is on creating comprehensive financial plans tailored to individual timelines, risk tolerance, and investment horizons. This includes in-depth exploration of estate planning, charitable giving, tax optimization, and other aspects essential to achieving long-term financial stability and growth.
                </p>
                <button className="bg-cuwmc-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-cuwmc-primary mb-6 font-garamond">
              Are you interested in joining any of these divisions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-garamond">
              Check out our recruitment page!
            </p>
            <Link 
              href="/recruitment"
              className="inline-block bg-cuwmc-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cuwmc-secondary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Join CUWMC
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
