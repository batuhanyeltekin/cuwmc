'use client'
import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EboardCard from '../../components/EboardCard'
import { eboardMembers, eboardTiers } from '../../data/eboard'

const presidentEmeriti = [
  'Anghelo Adrian Chavira-Barrera',
  'Leen Alawi Alshorafa',
  'Kyle Shrader',
]

// Cards render 4-across on desktop in data-file order, grouped under tier
// headings; partial rows center themselves. Edit data/eboard.ts to change
// people or ordering.
export default function EBoardPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-gray-50 pb-24 pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 text-center">
            <h1 className="mb-4 font-garamond text-4xl font-bold text-cuwmc-primary md:text-5xl">
              Executive Board
            </h1>
            <div className="mx-auto h-1 w-20 bg-cuwmc-secondary" />
            <p className="mx-auto mt-6 max-w-2xl font-garamond text-lg leading-relaxed text-gray-600">
              Meet the 2026&ndash;2027 leadership driving CUWMC&rsquo;s mission to
              train the next generation of wealth and asset management leaders.
            </p>
          </div>

          {eboardTiers.map((tier) => {
            const members = eboardMembers.filter((m) => m.tier === tier)
            if (members.length === 0) return null

            return (
              <div key={tier}>
                <p className="mt-14 mb-8 text-center font-garamond text-sm font-semibold uppercase tracking-[0.16em] text-cuwmc-accent">
                  {tier}
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  {members.map((member) => (
                    <div
                      key={member.name}
                      className="w-full sm:w-[calc(50%-12px)] lg:w-[250px]"
                    >
                      <EboardCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="mt-16 border-t border-gray-200 pt-2">
            <p className="mt-12 mb-6 text-center font-garamond text-sm font-semibold uppercase tracking-[0.16em] text-cuwmc-accent">
              President Emeriti
            </p>
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-2">
              {presidentEmeriti.map((name) => (
                <li
                  key={name}
                  className="font-garamond text-lg text-cuwmc-primary"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
