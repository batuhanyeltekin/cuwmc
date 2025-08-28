import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Columbia Undergraduate Wealth Management Club',
  description: 'Empowering the next generation of financial leaders through education, networking, and hands-on experience in wealth management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-garamond antialiased">{children}</body>
    </html>
  )
}
