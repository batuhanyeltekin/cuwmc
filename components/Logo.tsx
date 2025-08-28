'use client'

import React from 'react'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function Logo({ size = 'medium', className = '' }: LogoProps) {
  const sizeMap = {
    small: { width: 60, height: 30, displayHeight: '30px' },
    medium: { width: 80, height: 40, displayHeight: '40px' },
    large: { width: 120, height: 60, displayHeight: '60px' }
  }

  const { width, height, displayHeight } = sizeMap[size]

  return (
    <a href="/" className={`flex-shrink-0 ${className}`}>
      <img
        src="/assets/imgs/logos/crop-cuwmc-pen-white-copy.png"
        alt="CUWMC Logo"
        width={width}
        height={height}
        className="object-contain"
        style={{
          maxWidth: 'none',
          height: displayHeight,
          width: 'auto'
        }}
      />
    </a>
  )
}
