'use client'
import React from 'react'
import Link from 'next/link'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PresentationCarousel from '../../components/PresentationCarousel'

// Fall 2026 class photos (Low Library steps, October 2026). The division → photo
// mapping lives here only; swap the file names if a division is on the wrong photo.
const CLASS_PHOTO_DIR = '/assets/imgs/analyst-class'
// Names come from the "CUWMC 2026-2027 Roster" sheet (IMD / PBD / FPD tabs), read 2026-10-12,
// with spellings checked against each analyst's own form entries. `pictured` = the people in
// that division's photo (new analysts, plus the three who moved into IMD). `notPictured` =
// returning analysts, listed under the class photo. Edit here when the roster changes.
const DIVISIONS = {
  imd: {
    name: 'Investment Management Division',
    short: 'IMD',
    photo: `${CLASS_PHOTO_DIR}/fall-2026-group-7625.jpg`,
    pictured: ['Nakul Balaji', 'Aadya Kothari', 'Ishan Rekhi', 'Izzy Esses', 'Anna Genov', 'Joshua Turner', 'Sidharth Sharma', 'Chris Choi', 'Maitree Mody', 'Prim Atikarnbodee', 'Isabella Toledo'],
    notPictured: ['Catherine Liu', 'Fiona Hu', 'Jeffrey Kim', 'Krish Lambah', 'Milan Agarwala', 'Pranay Mahindrakar'],
  },
  pbd: {
    name: 'Private Banking Division',
    short: 'PBD',
    photo: `${CLASS_PHOTO_DIR}/fall-2026-group-7636.jpg`,
    pictured: ['Orinthia Burgher', 'Anusha Sharma', 'Ezo Arinc', 'Maximillian Williams', 'Iris Wang', 'Mario Gianni Garcia'],
    notPictured: ['Daniel Kim', 'Yianni Goulandris', 'Leo Munasinghe', 'Madeleine Detray', 'Maria Beka', 'Mila Ansorge', 'Derek Qian', 'Aidan Rodgers', 'Isabella Mendez', 'Isabella Cohen', 'Angela Qin'],
  },
  fpd: {
    name: 'Financial Planning Division',
    short: 'FPD',
    photo: `${CLASS_PHOTO_DIR}/fall-2026-group-7631.jpg`,
    pictured: ['Liora Mester', 'Claire Kim', 'Grazia Hottenrott', 'Raffaella Mauro', 'Rita Bennani', 'Cristina Arias', 'Dara Popkoleva', 'Kaitlyn Chao', 'Anibal Segovia', 'Hugo Bueno'],
    notPictured: ['Leonardo Rafael Moreno', 'Claire Lee'],
  },
}

function DivisionPhoto({ division }: { division: keyof typeof DIVISIONS }) {
  const { name, short, photo, pictured } = DIVISIONS[division]
  return (
    <figure className="mt-2 max-w-xs">
      <div className="p-1.5 bg-white border border-cuwmc-accent/50 rounded-xl shadow-md">
        <img
          src={photo}
          alt={`Analysts new to the ${name} in Fall 2026, on the steps of Low Library`}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover rounded-lg"
        />
      </div>
      <figcaption className="mt-3 text-base text-gray-600 font-garamond leading-snug">
        <span className="block font-semibold text-cuwmc-primary uppercase tracking-wider text-[15px] mb-1">
          New to {short}, Fall 2026
        </span>
        <span className="italic">Pictured:</span> {pictured.join(', ')}.
      </figcaption>
    </figure>
  )
}

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

          {/* Past presentation titles — rotating carousel */}
          <PresentationCarousel />

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
                <DivisionPhoto division="imd" />
                {/* <button className="bg-cuwmc-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Learn More
                </button> */}
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
                <DivisionPhoto division="pbd" />
                {/* <button className="bg-cuwmc-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Learn More
                </button> */}
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
                <DivisionPhoto division="fpd" />
                {/* <button className="bg-cuwmc-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>

          {/* Current analyst class */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-cuwmc-primary mb-4 font-garamond">
                Fall 2026 New Analyst Class
              </h2>
              <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
            </div>
            <img
              src={`${CLASS_PHOTO_DIR}/fall-2026-new-analysts.jpg`}
              alt="The Fall 2026 new analyst class on the steps of Low Library"
              loading="lazy"
              className="w-full max-w-5xl mx-auto aspect-[3/2] object-cover rounded-2xl shadow-lg border-4 border-white ring-1 ring-cuwmc-accent/50"
            />
            <p className="mt-5 text-center text-base text-gray-600 font-garamond italic">
              The 24 analysts who joined CUWMC in Fall 2026, across all three divisions.
            </p>

            <div className="mt-12 max-w-5xl mx-auto border-t border-cuwmc-accent/30 pt-8">
              <h3 className="text-center font-semibold text-cuwmc-primary uppercase tracking-wider text-base mb-6 font-garamond">
                Active analysts not pictured
              </h3>
              <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
                {(Object.keys(DIVISIONS) as (keyof typeof DIVISIONS)[]).map((key) => (
                  <div key={key}>
                    <p className="text-lg font-bold text-cuwmc-primary font-garamond mb-1">{DIVISIONS[key].short}</p>
                    <p className="text-base text-gray-600 font-garamond leading-relaxed">
                      {DIVISIONS[key].notPictured.join(', ')}
                    </p>
                  </div>
                ))}
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
              className="inline-block bg-cuwmc-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
