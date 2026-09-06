// CUWMC 2026-2027 Executive Board roster.
// To update: edit the entries below. Headshots live in public/assets/imgs/portraits/
// (use the *_web.jpg optimized versions). A member with imagePath: null renders an
// initials placeholder.

export type EBoardTier =
  | 'Executive Leadership'
  | 'Division Leadership'
  | 'Directors'

export interface EBoardMember {
  name: string
  role: string
  tier: EBoardTier
  description: string
  imagePath: string | null
  linkedinUrl?: string
  needsPhoto?: boolean
  // Optional per-photo crop tuning (Tailwind object-position / scale utilities).
  imagePosition?: string
  imageScale?: string
}

export const eboardMembers: EBoardMember[] = [
  // ─── Executive Leadership ───────────────────────────────────────────────
  {
    name: 'Roman Annan',
    role: 'Co-President',
    tier: 'Executive Leadership',
    description:
      "Class of '28, Financial Economics and Special Concentration in Business Management. Former Intern at Ascension & SkyBridge Capital. Incoming Private Equity Summer Analyst at StepStone Group.",
    imagePath: '/assets/imgs/portraits/roman_annan_web.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/roman-annan/',
  },
  {
    name: 'Sofia Torrecillas',
    role: 'Co-President',
    tier: 'Executive Leadership',
    description:
      "Class of '28, Financial Economics. Former Investment Advisory Intern at Boa Vista Investimentos. Incoming Goldman Sachs PWM Summer Analyst.",
    imagePath: '/assets/imgs/portraits/sofia_torrecillas_web.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/sofia-torrecillas-4b1834328/',
  },
  {
    name: 'Amelie Brenninkmeijer',
    role: 'External Vice President',
    tier: 'Executive Leadership',
    description:
      "Class of '28, Economics & Mathematics. Incoming Analyst at Bregal Investments. Former Private Equity Intern at Jerikho Investment Management.",
    imagePath: '/assets/imgs/portraits/amelie_brenninkmeijer_web.jpg',
  },
  {
    name: 'Santiago Quintero',
    role: 'Internal Vice President',
    tier: 'Executive Leadership',
    description:
      "Class of '29, Economics and Mathematics. Incoming Wealth Intern at Morgan Stanley.",
    imagePath: '/assets/imgs/portraits/santiago_quintero_web.jpg',
  },
  {
    name: 'Tanay Nandan',
    role: 'Treasurer',
    tier: 'Executive Leadership',
    description:
      "Class of '29, Financial Economics. Incoming Research Analyst at Verdus Capital.",
    imagePath: '/assets/imgs/portraits/tanay_nandan_web.jpg',
  },
  {
    name: 'Delfina Diotti',
    role: 'Secretary',
    tier: 'Executive Leadership',
    description:
      "Class of '28, Financial Economics. Incoming Asset & Wealth Management Intern at The Rockwell Financial Group. Incoming Asset and Wealth Management Summer Analyst at J.P. Morgan.",
    imagePath: '/assets/imgs/portraits/delfina_diotti_web.jpg',
  },

  // ─── Division Leadership ────────────────────────────────────────────────
  {
    name: 'Eli Dubin-Ramos',
    role: 'Private Banking Division Co-Head',
    tier: 'Division Leadership',
    description:
      "Class of '28, Columbia College. Visitor Services Assistant at The Frick Collection and former Impressionist and Modern Art Intern at Christie's.",
    imagePath: '/assets/imgs/portraits/eli_dubin-ramos_web.jpg',
  },
  {
    name: 'Marco Sit',
    role: 'Private Banking Division Co-Head',
    tier: 'Division Leadership',
    description:
      "Class of '29, Architecture and Economics. Incoming Investment Banking Analyst Intern at Worldwide Capital Corporation.",
    imagePath: '/assets/imgs/portraits/marco_sit_web.jpg',
  },
  {
    name: 'Akansha Gupta',
    role: 'Investment Management Division Co-Head',
    tier: 'Division Leadership',
    description:
      "Class of '28, Barnard College, Economics–Statistics. Former Technology Private Equity Analyst at Zeus Global and Asset Management Analyst at Kotak Alternate Asset Managers.",
    imagePath: '/assets/imgs/portraits/akansha_gupta_web.jpg',
  },
  {
    name: 'Charlotte Lorraine',
    role: 'Investment Management Division Co-Head',
    tier: 'Division Leadership',
    description:
      "Class of '29, Psychology and Economics. Former Intern for Blue Owl's GP Strategic Capital Group.",
    imagePath: '/assets/imgs/portraits/charlotte_lorraine_web.jpg',
  },
  {
    name: 'Marsi Hadjieva',
    role: 'Financial Planning Division Co-Head',
    tier: 'Division Leadership',
    description:
      "Class of '28, Financial Economics Major and Minor in Political Science. Prior Private Equity Intern at BValue and incoming Columbus Private Wealth Management Intern.",
    imagePath: '/assets/imgs/portraits/marsi_hadjieva_web.jpg',
  },
  {
    name: 'Angelina Chen',
    role: 'Financial Planning Division Co-Head',
    tier: 'Division Leadership',
    description:
      "Class of '29, Economics and Psychology. Former Project Management and Sales Intern at Greenworks North America and China.",
    imagePath: '/assets/imgs/portraits/angelina_chen_web.jpg',
  },

  // ─── Directors ──────────────────────────────────────────────────────────
  {
    name: 'Luciana Piro',
    role: 'Director of Digital Strategy & Growth',
    tier: 'Directors',
    description:
      "Class of '29, Cognitive Science. Researcher at Caltech and Intern at FWD, a social app startup.",
    imagePath: '/assets/imgs/portraits/luciana_piro_web.jpg',
  },
]

export const eboardTiers: EBoardTier[] = [
  'Executive Leadership',
  'Division Leadership',
  'Directors',
]
