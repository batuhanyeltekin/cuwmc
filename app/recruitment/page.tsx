'use client'
import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CoffeeChatGrid from '../../components/CoffeeChatGrid'
import ApplicationButton from '../../components/ApplicationButton'
import { recruitmentTimeline } from '../../data/recruitment'

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Fall '26 Analyst Recruitment
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Application Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <ApplicationButton />

                <p className="text-lg text-gray-700 leading-relaxed font-garamond mb-6">
                  We’re excited to potentially welcome you to our team and support your journey in wealth management. Attend our events below and submit your application by the deadline. Feel free to also sign up for a coffee chat with one of our current executive board members.
                </p>
                
                <p className="text-sm text-gray-600 italic leading-relaxed font-garamond">
                  Disclaimer: CUWMC is not an investment banking group or a student-managed investment fund. As a club, we do not actively manage money on behalf of individuals or institutions. Our focus is on Private Wealth Management, which emphasizes the relationship-driven, personal side of finance. We offer education and resources to help students with recruiting and to deepen their understanding of investment concepts. Our activities are purely educational and intended to prepare students for careers in wealth management, not to provide financial services or advice.
                </p>
              </div>
            </div>

            {/* Right Column - Division Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-garamond">
                  Each semester, we recruit 10-12 new Analysts who can choose to join one of our three divisions: Investment Management, Financial Planning, or Private Banking.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-cuwmc-primary mb-2 font-garamond">
                      Investment Management:
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-garamond">
                      Learn about asset classes, portfolio construction, and alternative investments. This division offers the most technical training, providing a deep dive into investing.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-cuwmc-primary mb-2 font-garamond">
                      Private Banking:
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-garamond">
                      Learn about banking solutions, credit, lending, and relationship management. This division emphasizes interpersonal skills, investor behavior, and high-net-worth client service.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-cuwmc-primary mb-2 font-garamond">
                      Financial Planning:
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-garamond">
                      Learn about philanthropy, estate planning, tax strategies, and wealth preservation. This division focuses on the broader financial markets and the creation of comprehensive financial plans.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed font-garamond">
                    As an Analyst, you'll first go through a training period. After that, you will:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed font-garamond ml-4">
                    <li>Collaborate with fellow Analysts on research projects and presentations within your division.</li>
                    <li>Lead educational workshops and share insights with other Columbia students.</li>
                    <li>Organize networking events, site visits, and guest speaker sessions.</li>
                  </ul>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed font-garamond">
                  If you have any additional questions, reach out to us at{' '}
                  <a 
                    href="mailto:ugradwealthmanagement@columbia.edu" 
                    className="text-cuwmc-primary hover:text-cuwmc-primary/80 underline font-garamond"
                  >
                    ugradwealthmanagement@columbia.edu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Recruitment Timeline
            </h2>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
          </div>

          <ol className="relative mx-auto max-w-5xl list-none">
            {/* Spine: left rail on mobile, centered on desktop */}
            <div
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-cuwmc-primary/25 md:left-1/2 md:-translate-x-1/2"
            />

            <div className="space-y-10">
              {recruitmentTimeline.map((event, i) => {
                const rightSide = i % 2 === 1
                return (
                  <li key={event.label} className="relative md:flex md:items-start">
                    {/* Node */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-gray-50 bg-cuwmc-primary shadow md:left-1/2 md:-translate-x-1/2"
                    />
                    <div
                      className={`pl-8 md:w-1/2 md:pl-0 ${
                        rightSide
                          ? 'md:ml-auto md:pl-10 md:text-left'
                          : 'md:pr-10 md:text-right'
                      }`}
                    >
                      <h3 className="font-garamond text-xl font-semibold text-cuwmc-primary">
                        {event.label}
                      </h3>
                      <p className="font-garamond text-base font-medium text-cuwmc-accent">
                        {event.date}
                      </p>
                      {event.detail && (
                        <p className="mt-1 font-garamond text-sm leading-relaxed text-gray-600">
                          {event.detail}
                        </p>
                      )}
                    </div>
                  </li>
                )
              })}
            </div>
          </ol>
        </div>
      </section>

      {/* Coffee Chats */}
      <CoffeeChatGrid />

      <Footer />
    </main>
  )
}
