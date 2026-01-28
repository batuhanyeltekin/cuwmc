'use client'
import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Spring '26 Analyst Recruitment
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Application Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <button 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeSwGMr2kkLNdiYMCpJMdbNvF3blSfzafTF5mQdOYdzD9r_EA/viewform', '_blank')}
                  className="inline-block bg-cuwmc-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mb-8"
                >
                  Application Link
                </button>
                
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

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cuwmc-primary h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Info Session */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Info Session</h3>
                  <p className="text-gray-600 font-garamond">Tuesday, January 27 • 6–7 PM • (TBD)</p>
                </div>
              </div>

              {/* Sample Presentation */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Sample Presentation</h3>
                  <p className="text-gray-600 font-garamond">Thursday, January 29 • 6–8 PM • (TBD)</p>
                </div>
              </div>

              {/* Applications Close */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Applications Close</h3>
                  <p className="text-gray-600 font-garamond">Fri, January 30 • 11:59 PM</p>
                </div>
              </div>

              {/* Applications Review */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Applications Review</h3>
                  <p className="text-gray-600 font-garamond">January 31 – February 1</p>
                </div>
              </div>

              {/* In-Person Interviews */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">In-Person Interviews</h3>
                  <p className="text-gray-600 font-garamond">February 2 – February 3</p>
                </div>
              </div>

              {/* IMD Pitch Interviews */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">IMD Pitch Interviews</h3>
                  <p className="text-gray-600 font-garamond">Thurs, February 5</p>
                </div>
              </div>

              {/* Deliberations + Offers Sent */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Deliberations + Offers Sent</h3>
                  <p className="text-gray-600 font-garamond">Sat, February 7</p>
                </div>
              </div>

              {/* New Analyst Onboarding */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">New Analyst Onboarding</h3>
                  <p className="text-gray-600 font-garamond">Sun, February 8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
