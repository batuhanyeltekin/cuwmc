'use client'

import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cuwmc-primary via-cuwmc-secondary to-cuwmc-primary"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
            About CUWMC
          </h2>
          <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
        </div>

        <div className="space-y-12">
          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed font-garamond text-center max-w-4xl mx-auto">
              CUWMC is the leading student organization at Columbia University dedicated to Asset and Wealth Management. We specialize in investment and client relationship strategies through our three main divisions: Investment Management, Financial Planning, and Private Banking.
            </p>
          </div>

          {/* Statistics - Now horizontal under the paragraph */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg border border-gray-100">
              <h3 className="text-4xl font-bold text-cuwmc-primary mb-2 font-garamond">3</h3>
              <p className="text-lg text-gray-600 font-garamond mb-3">Divisions</p>
              <p className="text-base text-gray-500 font-garamond leading-relaxed">
                Our analysts are split into <b> three divisions </b> that produce research and deliver presentations, open to attendance by all Columbia students.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg border border-gray-100">
              <h3 className="text-4xl font-bold text-cuwmc-primary mb-2 font-garamond">9</h3>
              <p className="text-lg text-gray-600 font-garamond mb-3">Weeks of Training</p>
              <p className="text-base text-gray-500 font-garamond leading-relaxed">
                We offer <b>nine</b> weeks of educational programming for new analysts to get certified on the SIE® by FINRA®.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg border border-gray-100">
              <h3 className="text-4xl font-bold text-cuwmc-primary mb-2 font-garamond">10</h3>
              <p className="text-lg text-gray-600 font-garamond mb-3">Specialist Teams</p>
              <p className="text-base text-gray-500 font-garamond leading-relaxed">
                Our <b>rigorous</b> interview process ensures our alumni secure offers at Wall Street's top firms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Analyst Divisions Section */}
      <div className="mt-20 pt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Our Analyst Divisions
            </h2>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
          </div>

          {/* Division 1: Investment Management Division - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <img 
                src="/assets/imgs/imd.png" 
                alt="Investment Management Division" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-4xl font-bold text-cuwmc-primary font-garamond">
                Investment Management Division (IMD)
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-garamond">
                Analysts research and develop investment theses, portfolio allocation and trading strategies, spanning traditional asset classes, alternative investments, and ESG.
              </p>
              <button className="bg-cuwmc-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 font-garamond text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Division 2: Private Banking Division - Image Right, Text Left */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-cuwmc-primary font-garamond">
                Private Banking Division (PBD)
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-garamond">
                Analysts gain a thorough understanding on client solutions in the wealth management industry and gain valuable insights on private banking methods like credit and lending solutions, foreign exchange services, concierge and lifestyle offerings, and cash management techniques.
              </p>
              <button className="bg-cuwmc-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 font-garamond text-lg">
                Learn More
              </button>
            </div>
            <div>
              <img 
                src="/assets/imgs/pbd.png" 
                alt="Private Banking Division" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Division 3: Financial Planning Division - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/assets/imgs/fpd.png" 
                alt="Financial Planning Division" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-4xl font-bold text-cuwmc-primary font-garamond">
                Financial Planning Division (FPD)
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-garamond">
                Analysts delve into a wide range of estate planning topics including philanthropy, tax strategies, inheritence, wills and trusts, and retirement planning.
              </p>
              <button className="bg-cuwmc-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-cuwmc-primary/90 transition-all duration-300 font-garamond text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS Section */}
      <div className="mt-20 pt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Partners
            </h2>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
          </div>
          
          <div className="flex justify-center">
            <button onClick={() => window.open('https://thefund.columbiawm.org/', '_blank')}>
                <img 
              src="/assets/imgs/company_logos/BlackRock_wordmark.svg.png" 
              alt="BlackRock" 
              className="h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            </button>
          </div>
        </div>
      </div>

      {/* ALUMNI PLACEMENTS Section */}
      <div className="mt-20 pt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Alumni Placements
            </h2>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
          </div>
        </div>
        
                {/* Static Logo Display */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            <img src="/assets/imgs/company_logos/barclays-3-e1748366367942.png" alt="Barclays" style={{ height: '160px', width: 'auto' }} className="object-contain" />
            <img src="/assets/imgs/company_logos/BlackRock_wordmark.svg.png" alt="BlackRock" style={{ height: '160px', width: 'auto' }} className="object-contain" />
            <img src="/assets/imgs/company_logos/Citi.svg.png" alt="Citi" style={{ height: '80px', width: 'auto' }} className="object-contain" />
            <img src="/assets/imgs/company_logos/gs.png" alt="Goldman Sachs" style={{ height: '160px', width: 'auto' }} className="object-contain" />
            <img src="/assets/imgs/company_logos/HSBC_Logo_2018.png" alt="HSBC" style={{ height: '160px', width: 'auto' }} className="object-contain" />
            <img src="/assets/imgs/company_logos/jpm.png" alt="JPMorgan Chase" style={{ height: '160px', width: 'auto' }} className="object-contain" />
            <img src="/assets/imgs/company_logos/Morgan_Stanley_Logo_1.svg" alt="Morgan Stanley" style={{ height: '160px', width: 'auto' }} className="object-contain" />
            <img src="/assets/imgs/company_logos/ubs.png" alt="UBS" style={{ height: '160px', width: 'auto' }} className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
