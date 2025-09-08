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
              Fall '25 Analyst Recruitment
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Application Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <button 
                  onClick={() => window.open('https://forms.gle/KpyxUv5XdmAT9wv68', '_blank')}
                  className="inline-block bg-cuwmc-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cuwmc-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mb-8"
                >
                  Application Link
                </button>
                
                <p className="text-lg text-gray-700 leading-relaxed font-garamond mb-6">
                  Analyst applications will open on Monday, September 1st at 11:59pm EST. We're excited to potentially welcome you to our team and support your journey in wealth management! Feel free to also sign up for a coffee chat with one of our current executive board members.
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
              {/* Applications Open */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Applications Open</h3>
                  <p className="text-gray-600 font-garamond">Sep 1, 11:59pm</p>
                </div>
              </div>

              {/* Club Fair Tabling */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Club Fair Tabling</h3>
                  <p className="text-gray-600 font-garamond">Sep 5, 12:00pm-4:00pm</p>
                </div>
              </div>

              {/* CUWMC Info Session */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">CUWMC Info Session</h3>
                  <p className="text-gray-600 font-garamond">Sep 8, 6:00-8:00pm, Uris 107</p>
                </div>
              </div>

              {/* CUWMC Sample Presentation */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">CUWMC Sample Presentation</h3>
                  <p className="text-gray-600 font-garamond">Sep 9, 5:00-6:00pm, Uris 107</p>
                </div>
              </div>

              {/* Lawn Recruitment Social */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Lawn Recruitment Social</h3>
                  <p className="text-gray-600 font-garamond">Sep 10, 5:00-6:00pm, Furnald Lawn</p>
                </div>
              </div>

              {/* Applications Due */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Applications Due/Coffee Chats Close</h3>
                  <p className="text-gray-600 font-garamond">Sep 12, 11:59pm</p>
                </div>
              </div>

              {/* First-Round Interviews */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">First-Round Interviews</h3>
                  <p className="text-gray-600 font-garamond">Sep 15-18, Times TBD</p>
                </div>
              </div>

              {/* Pitch Interviews (IMD Only) */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Pitch Interviews (IMD Only)</h3>
                  <p className="text-gray-600 font-garamond">Sep 18, Times TBD</p>
                </div>
              </div>

              {/* Deliberations and Offer Notifications Sent */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">Deliberations and Offer Notifications Sent</h3>
                  <p className="text-gray-600 font-garamond">Sep 20</p>
                </div>
              </div>

              {/* New Analyst Onboarding */}
              <div className="relative flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cuwmc-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-5/12 ml-auto pl-8 text-left">
                  <h3 className="text-xl font-semibold text-cuwmc-primary mb-2 font-garamond">New Analyst Onboarding</h3>
                  <p className="text-gray-600 font-garamond">Sep 21</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register for Coffee Chats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Register for Coffee Chats
            </h2>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed font-garamond max-w-3xl mx-auto mb-6">
              Schedule a coffee chat with our executive board members to learn more about CUWMC and get your questions answered. Choose from the available time slots below.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-4xl mx-auto">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 font-garamond">
                    <strong>Important:</strong> Each prospective applicant can sign up for a maximum of 2 coffee chats (each with a different member). Any additional bookings beyond this limit will be automatically cancelled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Calendar Appointment Schedules */}
          <div className="space-y-12">
            {/* Calendar 1 - New Coffee Chat (Added First) */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2H0M4QvU3H-kDALsjtnJvDXAtW-kcAvPpiiCNszhpU5_bGIrqa3msOXQVqc9vVVMyQbDtNuJ4K?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 1"
              ></iframe>
            </div>

            {/* Calendar 2 - New Coffee Chat */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ36DwnalMBO7SgBZC3X86KhoYWGMeppTBCgPb-pmyvRVbIKRfByknJ5dJzVQXs_ctdPZd7Ty1RA" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 2"
              ></iframe>
            </div>

            {/* Calendar 3 - New Coffee Chat */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ17OipzYBtk4oEcBY2iiniKBa4PJgPnqI0eJd5AxFYeOiVxjMaMiNzN0jQTX46hiET0a4rRAUfQ?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 3"
              ></iframe>
            </div>

            {/* Calendar 4 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3y3VCi1EbP2i6hbEI2CNIF6W5NwJpLu4NGq8odz4D-rmcOF4p_SwcnFYPPe69HOo3OTLA_ZAMW?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 4"
              ></iframe>
            </div>

            {/* Calendar 5 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2EzUxLMenkAp1jay3HNulbarWzMdkrMncOp2kJ7Tzsfqgq8o4hjU3_ZgxebiW9tNYvFQVdUqt1?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 5"
              ></iframe>
            </div>

            {/* Calendar 6 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ13QCdEuWEBYQdlCVV6MYovdG7KMo2VU57LSGl0OW_B6fho9j6t39lZZntCBX7BjJoH_LidH0rp?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 6"
              ></iframe>
            </div>

            {/* Calendar 7 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3WDsLA1acHqlwhZ3fmfFIAjOU1GSE2bHybAvAHZEaC95jIFBRFI5Ly3vNvvM5zFiRcGJB023Q7?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 7"
              ></iframe>
            </div>

            {/* Calendar 8 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2TNpSnLM7vau0C_gMcDqfdlQB6ZAVBIQxo7P31chxpGu94m28KbFIpg4POBQ9rnzNiEZMSqNuN?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 8"
              ></iframe>
            </div>

            {/* Calendar 9 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2409J5i3yz02x7DWgBKHUWaztR5roKEVWah1PErDvAX5q1jlCgXB6jOAdbY62X_dEwALu6HJA9?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 9"
              ></iframe>
            </div>

            {/* Calendar 10 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2orb5F14frT5o7wOplasi913JA-7XiqAJ3lYGNXybb_0vnVMk9Vmm_nHdFjzJ7K6Xh2rDH26FQ?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 10"
              ></iframe>
            </div>

            {/* Calendar 11 */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Utw3jYXzrUag1Vv6ChDOQm9EtNM7Pfj_1YUy-3EkNuXSEf6qWAKp59zFeONPI2fY6Hku9WxvS?gv=true"                
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Coffee Chat Schedule 11"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
