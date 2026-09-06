'use client'
import React from 'react'

import { eboardMembers } from '../data/eboard'
import {
  coffeeChatLinks,
  coffeeChatExcluded,
  COFFEE_CHAT_MAX_PER_APPLICANT,
  COFFEE_CHAT_WINDOW,
} from '../data/recruitment'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function CoffeeChatGrid() {
  const members = eboardMembers.filter((m) => !coffeeChatExcluded.includes(m.name))

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-garamond text-3xl font-bold text-cuwmc-primary md:text-4xl">
            Coffee Chats
          </h2>
          <div className="mx-auto h-1 w-20 bg-cuwmc-secondary" />
          <p className="mx-auto mt-6 max-w-2xl font-garamond text-lg leading-relaxed text-gray-700">
            Book an optional 15-minute chat with a member of the Executive Board
            between <span className="font-semibold">{COFFEE_CHAT_WINDOW}</span>. Coffee
            chats are in person wherever possible, and they are not required to apply —
            they are simply a chance to ask us anything about the club before you do.
          </p>

          {/* The cap — stated plainly, not buried */}
          <p className="mx-auto mt-5 max-w-2xl rounded-lg border border-cuwmc-accent/30 bg-cuwmc-secondary/10 px-5 py-3 font-garamond text-base text-cuwmc-primary">
            <span className="font-semibold">
              Please book no more than {COFFEE_CHAT_MAX_PER_APPLICANT} coffee chats
              in total.
            </span>{' '}
            Slots are limited and we want to speak with as many of you as we can.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => {
            const url = coffeeChatLinks[member.name]
            return (
              <div
                key={member.name}
                className="flex items-center gap-4 rounded-xl border border-cuwmc-primary/10 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {member.imagePath ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.imagePath}
                    alt=""
                    loading="lazy"
                    className="h-20 w-20 flex-none rounded-full object-cover object-top saturate-[0.88]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-cuwmc-primary font-garamond text-xl font-semibold text-white"
                  >
                    {initials(member.name)}
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-garamond text-lg font-semibold text-cuwmc-primary">
                    {member.name}
                  </h3>
                  <p className="mb-3 font-garamond text-sm leading-snug text-cuwmc-accent">
                    {member.role}
                  </p>

                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-md border border-cuwmc-primary bg-cuwmc-primary px-4 py-2 font-garamond text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-cuwmc-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cuwmc-primary"
                    >
                      Book 15 min
                      <span className="sr-only"> with {member.name}</span>
                    </a>
                  ) : (
                    <span className="inline-block rounded-md border border-dashed border-gray-300 px-4 py-2 font-garamond text-sm text-gray-500">
                      Booking link coming soon
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
