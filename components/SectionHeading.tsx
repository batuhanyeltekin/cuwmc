import React from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  as?: 'h1' | 'h2'
  className?: string
}

// Centered heading + gold underline used across the site.
export default function SectionHeading({
  title,
  subtitle,
  as = 'h2',
  className = '',
}: SectionHeadingProps) {
  const Tag = as

  return (
    <div className={`text-center ${className}`}>
      <Tag className="mb-4 font-garamond text-4xl font-bold text-cuwmc-primary md:text-5xl">
        {title}
      </Tag>
      <div className="mx-auto h-1 w-20 bg-cuwmc-secondary" />
      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl font-garamond text-lg leading-relaxed text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  )
}
