// Firm logos shown in the homepage credibility marquee.
// Add or remove entries here; the marquee sizes and loops automatically.

export interface FirmLogo {
  name: string
  src: string
  // Optional per-logo height override (px) — some wordmarks read larger/smaller.
  height?: number
}

export const firmLogos: FirmLogo[] = [
  { name: 'Goldman Sachs', src: '/assets/imgs/company_logos/gs.png' },
  { name: 'Morgan Stanley', src: '/assets/imgs/company_logos/Morgan_Stanley_Logo_1.svg' },
  { name: 'J.P. Morgan', src: '/assets/imgs/company_logos/jpm.png' },
  { name: 'UBS', src: '/assets/imgs/company_logos/ubs.png' },
  { name: 'Citi', src: '/assets/imgs/company_logos/Citi.svg.png', height: 28 },
  { name: 'Barclays', src: '/assets/imgs/company_logos/barclays-3-e1748366367942.png' },
  { name: 'BlackRock', src: '/assets/imgs/company_logos/BlackRock_wordmark.svg.png' },
  { name: 'HSBC', src: '/assets/imgs/company_logos/HSBC_Logo_2018.png' },
  { name: 'StepStone Group', src: '/assets/imgs/company_logos/stepstone.png', height: 34 },
]
