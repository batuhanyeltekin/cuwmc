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
    name: "Anghelo Chavira-Barrera",
    role: "Co-President",
    description: "Class of '28, Math. Experience: Incoming IB Intern @ UBS, Prev. Credit Risk Intern @ El Puerto de Liverpool & Corp. Fin. Intern @ ENAV Offshore",
    imagePath: "/assets/imgs/portraits/anghelo_chavira-barrera.jpg",
    linkedinUrl: "https://www.linkedin.com/in/anghelo-chavira-barrera/"
  },
  {
    name: "Leen Alshorafa",
    role: "Co-President",
    description: "Class of '27, Comp. Eng., Poli. Sci. & Econ. Experience: Investment Analyst @ Tenami Capital, IB Intern @ HSBC",
    imagePath: "/assets/imgs/portraits/leen_alshorafa.jpg",
    linkedinUrl: "https://www.linkedin.com/in/leenalshorafa/"
  },
  {
    name: "Sofia Torrecillas",
    role: "Internal Vice President",
    description: "Class of '28. Financial Economics. Former Investment Advisory Intern at Boa Vista Investimentos. Incoming Goldman Sachs PWM Summer Analyst.",
    imagePath: "/assets/imgs/portraits/sofia_torecillas.png",
    linkedinUrl: "https://www.linkedin.com/in/sofia-torrecillas-4b1834328/"
  },
  {
    name: "Roman Annan",
    role: "External Vice President",
    description: "Class of '28, Financial Economics, Chemistry & Special Concentration in Business Management. Former Intern at SkyBridge Capital & SilverMile Capital.",
    imagePath: "/assets/imgs/portraits/roman_annan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/roman-annan/"
  },
  {
    name: "Santiago Quintero",
    role: "Head of Investment Management Division",
    description: "Class of '29. Economics and Mathematics. Experience: Incoming Wealth Intern at Morgan Stanley",
    imagePath: "/assets/imgs/portraits/santiago_quintero.png"
  },
  {
    name: "Christopher O'Connell",
    role: "Head of Financial Planning Division",
    description: "Class of '28, Philosophy-Economics. Experience: Sales Executive at Mankind Marketing, Treasurer at Columbia Emerging Markets Society and Columbia Corporate Law and Business Association.",
    imagePath: "/assets/imgs/portraits/christopher_oconnell.jpeg"
  },
  {
    name: "Martin Bravo",
    role: "Head of Financial Planning Division",
    description: "Class of '27, OR: Financial Engineering, CS Minor. Prior Experience: Venture Partner @ Bullmont Capital, Operations Intern @ Newlab",
    imagePath: "/assets/imgs/portraits/martin_bravo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/martin-a-bravo/"
  },
  {
    name: "Dillon Ring",
    role: "Director of Education",
    description: "Class of '28, Financial Econ & Jazz. Prior Experience: WM Research at D. A. Davidson",
    imagePath: "/assets/imgs/portraits/dillon_ring.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/dillonring/"
  },
  {
    name: "Batuhan Yeltekin",
    role: "Director of Technology",
    description: "Class of '27, Computer Science & Economics. Prior Experience: IT Consulting Volunteer at EY, Project Assistant at KoçDigital",
    imagePath: "/assets/imgs/portraits/batuhan_yeltekin.jpg",
    linkedinUrl: "https://www.linkedin.com/in/batuhanyeltekin/"
  },
  {
    name: "Amelie Brenninkmeijer",
    role: "Director of Partnerships",
    description: "Class of '28, Economics & Mathematics. Incoming Analyst at Bregal Investments. Former Private Equity Intern at Jerikho Investment Management.",
    imagePath: "/assets/imgs/portraits/amelie_brenninkmeijer_v2.png"
  },
  {
    name: "Jade Keogh",
    role: "Secretary",
    description: "Class of '26, Financial Economics. I coordinate and manage logistics for CUWMC, ensuring meetings and events run smoothly.",
    imagePath: "/assets/imgs/portraits/jade_keogh.png"
  },
  {
    name: "Charlotte Lorraine",
    role: "Head of Marketing",
    description: "Class of '29, Psychology and Economics. Experience: Intern for Blue Owl's GP Strategic Capital Group",
    imagePath: "/assets/imgs/portraits/charlotte_lorraine_v2.png"
  },
  {
    name: "Angelina Chen",
    role: "Head of Bonding",
    description: "Class of '29, Economics and Psychology; former Project Management and Sales Intern at Greenworks North America and China.",
    imagePath: "/assets/imgs/portraits/angelina_chen_v2.png"
  },
  {
    name: "Alia Kafil",
    role: "Director of Logistics",
    description: "Class of '27, Financial Economics and Political Science, Corporate Legal Intern @ Dean Street Law, Incoming S&T Intern @ Barclays",
    imagePath: "/assets/imgs/portraits/alia_kafil.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alia-kafil-090a8031b/"
  },
  {
    name: "Richard Li",
    role: "Treasurer",
    description: "Class of '28, Computer Science & Economics. Prior Experience: Data Scientist/Researcher at University of Washington and Caltech.",
    imagePath: "/assets/imgs/portraits/richard_li.jpg",
    linkedinUrl: "https://www.linkedin.com/in/richardjdli/"
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
                      member.name === "Christopher O'Connell" || member.name === "Santiago Quintero" || member.name === "Charlotte Lorraine" ? 'object-top scale-110' : ''
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
