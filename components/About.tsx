'use client'

import React from 'react'
import SectionHeading from './SectionHeading'

const divisions = [
  {
    name: 'Investment Management Division (IMD)',
    image: '/assets/imgs/imd.png',
    blurb:
      'Analysts research and develop investment theses, portfolio allocation, and trading strategies spanning traditional asset classes, alternative investments, and ESG. IMD also manages a portfolio on BlackRock’s Aladdin platform.',
    teams: ['Core Markets', 'Private Markets', 'Disruptive Markets'],
    imageLeft: true,
  },
  {
    name: 'Private Banking Division (PBD)',
    image: '/assets/imgs/pbd.png',
    blurb:
      'Analysts study the services that define private wealth management — credit and lending solutions, foreign exchange, concierge and lifestyle offerings, and cash management — and how banks serve ultra-high-net-worth clients.',
    teams: ['Emerging Trends', 'Wealth Strategies', 'Client Relationship'],
    imageLeft: false,
  },
  {
    name: 'Financial Planning Division (FPD)',
    image: '/assets/imgs/fpd.png',
    blurb:
      'Analysts explore the full arc of personal finance and estate planning — philanthropy, tax strategy, inheritance, wills and trusts, and retirement — building comprehensive plans tailored to individual goals and timelines.',
    teams: ['Philanthropy', 'Personal Finance', 'Tax Planning'],
    imageLeft: true,
  },
]

const stats = [
  {
    figure: '3',
    label: 'Divisions',
    detail:
      'Our analysts are split into three divisions that produce research and deliver presentations, open to all Columbia students.',
  },
  {
    figure: '9',
    label: 'Weeks of Training',
    detail:
      'Nine weeks of educational programming prepare new analysts to get certified on the SIE® by FINRA® — the only such program among Columbia finance clubs.',
  },
  {
    figure: '9',
    label: 'Specialist Teams',
    detail:
      'Three specialist teams inside each division let analysts go deep on a focused corner of wealth and asset management.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20">
      {/* Top border accent */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cuwmc-primary via-cuwmc-secondary to-cuwmc-primary" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About CUWMC" className="mb-16" />

        <div className="space-y-12">
          <p className="mx-auto max-w-4xl text-center font-garamond text-xl leading-relaxed text-gray-600">
            Founded on the motto <b>&ldquo;learning through teaching,&rdquo;</b>{' '}
            CUWMC is Columbia&rsquo;s leading student organization dedicated to
            Asset and Wealth Management. We bridge the financial-literacy gap
            across campus through accessible education, hands-on research, and
            industry access &mdash; training the next generation of finance
            leaders across our three divisions: Investment Management, Private
            Banking, and Financial Planning.
          </p>

          {/* Statistics */}
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="mb-2 font-garamond text-4xl font-bold text-cuwmc-primary">
                  {stat.figure}
                </h3>
                <p className="mb-3 font-garamond text-lg text-gray-600">
                  {stat.label}
                </p>
                <p className="font-garamond text-base leading-relaxed text-gray-500">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Analyst Divisions */}
      <div className="mt-20 border-t border-gray-200 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Analyst Divisions" className="mb-20" />

          {divisions.map((division, index) => (
            <div
              key={division.name}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index < divisions.length - 1 ? 'mb-24' : ''
              }`}
            >
              <div className={division.imageLeft ? 'order-2 lg:order-1' : ''}>
                <img
                  src={division.image}
                  alt={division.name}
                  className="h-96 w-full rounded-2xl object-cover shadow-xl"
                />
              </div>
              <div
                className={`space-y-6 ${
                  division.imageLeft ? 'order-1 lg:order-2' : ''
                }`}
              >
                <h3 className="font-garamond text-4xl font-bold text-cuwmc-primary">
                  {division.name}
                </h3>
                <p className="font-garamond text-xl leading-relaxed text-gray-600">
                  {division.blurb}
                </p>
                <div className="flex flex-wrap gap-2">
                  {division.teams.map((team) => (
                    <span
                      key={team}
                      className="rounded-full border border-cuwmc-primary/15 bg-cuwmc-primary/5 px-4 py-1.5 font-garamond text-sm font-medium text-cuwmc-primary"
                    >
                      {team}
                    </span>
                  ))}
                </div>
                <a
                  href="/divisions"
                  className="inline-block rounded-lg bg-cuwmc-primary px-8 py-4 font-garamond text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cuwmc-primary/90 hover:shadow-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="mt-20 border-t border-gray-200 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Partners" className="mb-16" />

          <div className="flex items-center justify-center gap-16 md:gap-24">
            <img
              src="/assets/imgs/company_logos/BlackRock_wordmark.svg.png"
              alt="BlackRock"
              className="h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-16"
            />
            <img
              src="/assets/imgs/company_logos/pwm_official_partner.PNG"
              alt="PWM Official Partner"
              className="h-24 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-32"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
