'use client'
import React, { useState } from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

interface ProgramInfo {
  id: string
  title: string
  content: string
  hasLink?: boolean
  linkUrl?: string
  linkText?: string
}

const programs: ProgramInfo[] = [
  {
    id: 'semester-research',
    title: 'Semester Research',
    content: "Each analyst at the Columbia Undergraduate Wealth Management Club will actively contribute to research throughout the semester, focusing on topics central to the fields of Investment Management, Private Banking, and Financial Planning. Analysts will work individually and in teams to explore industry trends, evaluate investment strategies, and analyze case studies that reflect real-world client scenarios. In Investment Management, they will study portfolio construction, asset allocation, and performance evaluation across different market environments. Within Private Banking, analysts will examine the role of relationship management, tailored financial solutions, and high-net-worth client services. On the Financial Planning side, they will research retirement planning, tax optimization, and wealth transfer strategies. By engaging with these interconnected areas, each analyst will not only sharpen their technical and analytical skills but also develop a holistic understanding of wealth management, ultimately contributing to the club’s collective output of research-driven insights."
  },
  {
    id: 'the-fund',
    title: 'The Fund',
    content: 'The Fund is a paper-trading portfolio built on second-order thinking, risk consciousness, and principles of anti-fragility. By applying disciplined capital allocation and rigorous risk premia pricing, it aims to create resilient portfolios capable of navigating diverse market conditions. As the capstone of CUWMC\'s Investment Management Division pipeline, it transforms years of research into practice within a live, simulated market environment.',
    hasLink: true,
    linkUrl: 'https://thefund.columbiawm.org/',
    linkText: 'Click here for The Fund website.'
  },
  {
    id: 'past-events',
    title: 'Past Events',
    content: 'CUWMC has hosted numerous successful events, from educational panels with industry professionals to exciting trips and collaborative initiatives. These events showcase our commitment to providing valuable experiences and networking opportunities for our members and the broader Columbia community.'
  }
]

export default function ProgramsPage() {
  const [activeProgram, setActiveProgram] = useState<string | null>(null)

  const toggleProgram = (programId: string) => {
    if (activeProgram === programId) {
      setActiveProgram(null)
    } else {
      setActiveProgram(programId)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Programs
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto font-garamond leading-relaxed">
              CUWMC offers a plethora of programs for its analysts, which includes semester research, paper trading through "The Fund," and team/club-wide social bonding.
            </p>
          </div>

          {/* Program Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => toggleProgram(program.id)}
                className={`
                  relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform
                  ${activeProgram === program.id
                    ? 'bg-cuwmc-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-cuwmc-primary hover:bg-cuwmc-primary hover:text-white hover:scale-105 hover:shadow-lg'
                  }
                  active:scale-95
                `}
              >
                {program.title}
                <div className={`
                  absolute inset-0 rounded-xl border-2 border-cuwmc-secondary
                  ${activeProgram === program.id ? 'opacity-100' : 'opacity-0'}
                  transition-opacity duration-300
                `}></div>
              </button>
            ))}
          </div>

          {/* Accordion Content */}
          <div className="max-w-4xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.id}
                className={activeProgram === program.id ? 'block' : 'hidden'}
              >
                <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-cuwmc-primary">
                  <h3 className="text-2xl font-bold text-cuwmc-primary mb-4 font-garamond">
                    {program.title}
                  </h3>
                  
                  {/* BlackRock Logo for The Fund */}
                  {program.id === 'the-fund' && (
                    <div className="flex justify-center mb-6">
                      <img 
                        src="/assets/imgs/company_logos/BlackRock_wordmark.svg.png" 
                        alt="BlackRock" 
                        className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Past Events Content */}
                  {program.id === 'past-events' && (
                    <div className="space-y-8">
                      <p className="text-gray-700 leading-relaxed mb-6 font-garamond">
                        {program.content}
                      </p>
                      
                      {/* Miami Trip */}
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <img src="/assets/imgs/past_events/miami.jpeg" alt="Miami Trip" className="w-full md:w-48 h-32 object-cover rounded-lg" />
                          <div>
                            <h4 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Miami Trip</h4>
                            <p className="text-gray-700 leading-relaxed font-garamond">
                              CUWMC E-Board and analysts embarked on an exciting trip to Miami, where they visited prestigious financial institutions including JP Morgan Chase, Santander, and other leading asset and wealth management offices. This immersive experience provided valuable insights into the industry's operations and networking opportunities with professionals in the field.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Goldman Sachs VP Event */}
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <img src="/assets/imgs/past_events/joseph_puerner_gs.JPG" alt="Goldman Sachs VP Event" className="w-full md:w-48 h-32 object-cover rounded-lg" />
                          <div>
                            <h4 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Goldman Sachs VP Event</h4>
                            <p className="text-gray-700 leading-relaxed font-garamond">
                              Joseph Puerner, Vice President at Goldman Sachs, visited Columbia University for an exclusive panel hosted by CUWMC. He shared his expertise and insights about the wealth management industry, answered questions from students, and provided valuable career advice for those interested in pursuing opportunities at Goldman Sachs.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* CUWMC x SHE Presentation */}
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <img src="/assets/imgs/past_events/cuwmc_x_she.jpeg" alt="CUWMC x SHE Presentation" className="w-full md:w-48 h-32 object-cover rounded-lg" />
                          <div>
                            <h4 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">CUWMC x SHE Presentation</h4>
                            <p className="text-gray-700 leading-relaxed font-garamond">
                              CUWMC collaborated with SHE, a non-profit organization, to teach young high school girls about financial literacy. This initiative demonstrated our commitment to giving back to the community and empowering the next generation with essential financial knowledge and skills.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stifel MDs Panel */}
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <img src="/assets/imgs/past_events/stifel.jpg" alt="Stifel MDs Panel" className="w-full md:w-48 h-32 object-cover rounded-lg" />
                          <div>
                            <h4 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Stifel MDs Panel</h4>
                            <p className="text-gray-700 leading-relaxed font-garamond">
                              Stephen Brown and Patrick Buckley, Managing Directors at Stifel, visited Columbia University for an engaging panel hosted by CUWMC. They shared their extensive experience in the financial industry, answered questions from students, and provided insights into career opportunities at Stifel and the broader wealth management sector.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Senior Farewell */}
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <img src="/assets/imgs/past_events/senior_farewell.JPG" alt="Senior Farewell" className="w-full md:w-48 h-32 object-cover rounded-lg" />
                          <div>
                            <h4 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Senior Farewell</h4>
                            <p className="text-gray-700 leading-relaxed font-garamond">
                              Club members gathered to bid farewell to the graduating seniors, celebrating their contributions to CUWMC and wishing them success in their future endeavors. This emotional event highlighted the strong bonds formed within the club and the lasting impact of our members' dedication and leadership.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Default content for other programs */}
                  {program.id !== 'past-events' && (
                    <p className="text-gray-700 leading-relaxed mb-4 font-garamond">
                      {program.content}
                    </p>
                  )}
                  
                  {program.hasLink && (
                    <a
                      href={program.linkUrl}
                      className="inline-block bg-cuwmc-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      {program.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
