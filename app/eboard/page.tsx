'use client'
import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

interface EBoardMember {
  name: string
  role: string
  description: string
  imagePath: string
  linkedinUrl?: string
}

const eboardMembers: EBoardMember[] = [
  {
    name: "Anghelo Adrian Chavira-Barrera",
    role: "Co-President",
    description: "Class of '28, Applied Math. Prior Experience: Credit Risk Management @ El Puerto de Liverpool & Finance Intern @ ENAV Offshore",
    imagePath: "/assets/imgs/portraits/anghelo_chavira-barrera.jpg",
    linkedinUrl: "https://www.linkedin.com/in/anghelo-chavira-barrera/"
  },
  {
    name: "Leen Alshorafa",
    role: "Co-President",
    description: "Class of '27, Comp. Eng., Poli. Sci. & Econ. Experience: Investment Analyst @ Tenami Capital, IB Intern @ HSBC",
    imagePath: "/assets/imgs/portraits/leen_alshorafa.jpg"
  },
  {
    name: "Alexandra Paiz",
    role: "Vice President",
    description: "Class of '27, OR: Financial Engi. M&A Intern and Organizational Engineering at Grupo PDC, Family Office at Stonehage Fleming",
    imagePath: "/assets/imgs/portraits/alexandra_paiz_delgado.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alexandra-paiz-delgado-5b28b6241/"
  },
  {
    name: "Richard Li",
    role: "Treasurer",
    description: "Class of '28, Computer Science & Economics. Prior Experience: Data Scientist/Researcher at University of Washington and Caltech.",
    imagePath: "/assets/imgs/portraits/richard_li.jpg",
    linkedinUrl: "https://www.linkedin.com/in/richardjdli/"
  },
  {
    name: "Dillon Ring",
    role: "Director of Education",
    description: "Class of '28, Financial Econ & Jazz. Prior Experience: WM Research at D. A. Davidson",
    imagePath: "/assets/imgs/portraits/dillon_ring.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/dillonring/"
  },
  {
    name: "Martin Bravo",
    role: "Head of Private Banking Division",
    description: "Class of '27, OR: Financial Engineering, CS Minor. Prior Experience: Venture Partner @ Bullmont Capital, Operations Intern @ Newlab",
    imagePath: "/assets/imgs/portraits/martin_bravo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/martin-a-bravo/"
  },
  {
    name: "Christopher O'Connell",
    role: "Head of Financial Planning Division",
    description: "Class of '28, Philosophy-Economics. Experience: Sales Executive at Mankind Marketing, Treasurer at Columbia Emerging Markets Society and Columbia Corporate Law and Business Association.",
    imagePath: "/assets/imgs/portraits/christopher_oconnell.jpeg"
  },
  {
    name: "Sofia Torrecillas",
    role: "Head of Investment Management Division",
    description: "Class of '28, Financial Economics. Experience: Intern at LarrainVial, Chile, Research Assistant at Columbia University Economics Department",
    imagePath: "/assets/imgs/portraits/sofia_torecillas.png",
    linkedinUrl: "https://www.linkedin.com/in/sofia-torrecillas-4b1834328/"
  },
  {
    name: "Batuhan Yeltekin",
    role: "Director of Technology",
    description: "Class of '27, Computer Science & Economics. Prior Experience: IT Consulting Volunteer at EY, Project Assistant at KoçDigital",
    imagePath: "/assets/imgs/portraits/batuhan_yeltekin.jpg",
    linkedinUrl: "https://www.linkedin.com/in/batuhanyeltekin/"
  },
  {
    name: "Alia Kafil",
    role: "Director of Internal Affairs",
    description: "Class of '27, Financial Economics and Political Science, Corporate Legal Intern @ Dean Street Law, Incoming S&T Intern @ Barclays",
    imagePath: "/assets/imgs/portraits/alia_kafil.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alia-kafil-090a8031b/"
  },
  {
    name: "Roman Annan",
    role: "Director of Partnerships",
    description: "Class of '28, Financial Economics, Chemistry. Investment Analyst @ SkyBridge Capital, Program Manager at Young Entrepreneurship Program (YEP!)",
    imagePath: "/assets/imgs/portraits/roman_annan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/roman-annan/"
  },
  {
    name: "Constance Daudebourg",
    role: "Head of Digital Strategy",
    description: "Class of '27, Political Economy. Prior Experience: Financial Law Intern @ EY",
    imagePath: "/assets/imgs/portraits/constance_daudebourg.jpg",
    linkedinUrl: "https://www.linkedin.com/in/constance-daudebourg-8b98671bb/"
  }
]

export default function EBoardPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cuwmc-primary mb-4 font-garamond">
              Executive Board
            </h1>
            <div className="w-20 h-1 bg-cuwmc-secondary mx-auto"></div>
            {/* <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto font-garamond">
              Meet the dedicated leaders driving CUWMC's mission to empower the next generation of financial professionals.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eboardMembers.map((member, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                  member.linkedinUrl ? 'cursor-pointer hover:shadow-2xl' : ''
                }`}
                onClick={() => member.linkedinUrl && window.open(member.linkedinUrl, '_blank')}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.imagePath}
                    alt={member.name}
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                      member.name === "Christopher O'Connell" ? 'object-top scale-110' : ''
                    }`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-cuwmc-primary mb-2 font-garamond">
                      {member.name}
                    </h3>
                    {member.linkedinUrl && (
                      <div className="text-cuwmc-primary text-sm font-semibold">
                        LinkedIn →
                      </div>
                    )}
                  </div>
                  <p className="text-cuwmc-primary font-semibold mb-3 font-garamond">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-garamond">
                    {member.description}
                  </p>
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
