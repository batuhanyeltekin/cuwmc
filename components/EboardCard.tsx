'use client'

import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import type { EBoardMember } from '../data/eboard'

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function EboardCard({ member }: { member: EBoardMember }) {
  const isPlaceholder = !member.imagePath || member.needsPhoto
  const hasLink = Boolean(member.linkedinUrl)

  const openLinkedIn = () => {
    if (member.linkedinUrl) {
      window.open(member.linkedinUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      onClick={hasLink ? openLinkedIn : undefined}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_28px_rgba(31,38,71,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(31,38,71,0.22)] ${
        hasLink ? 'cursor-pointer' : ''
      }`}
    >
      {/* Portrait with layered name/role, matching the design-system card */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cuwmc-primary">
        {isPlaceholder ? (
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_20%,#2c355e_0%,#1f2647_55%,#171d38_100%)] flex items-center justify-center">
            <span className="font-garamond text-5xl font-semibold tracking-wide text-[#f2cd4e]">
              {initials(member.name)}
            </span>
          </div>
        ) : (
          <img
            src={member.imagePath as string}
            alt={member.name}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover saturate-[0.88] contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.04] ${
              member.imagePosition ?? 'object-top'
            } ${member.imageScale ?? ''}`}
          />
        )}

        {/* Uniform navy scrim */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(31,38,71,0.08)_0%,rgba(31,38,71,0)_30%,rgba(31,38,71,0)_52%,rgba(20,25,50,0.62)_78%,rgba(15,19,40,0.95)_100%)]" />

        {/* Layered name + role */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-garamond text-lg font-bold leading-tight text-white">
            {member.name}
          </h3>
          <p className="mt-0.5 font-garamond text-[12px] font-semibold tracking-wide text-[#f2cd4e]">
            {member.role}
          </p>
        </div>

        {hasLink && (
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-cuwmc-primary opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
            <FaLinkedinIn className="h-4 w-4" />
          </span>
        )}
      </div>

      {/* Bio */}
      <div className="flex-1 p-4">
        <p className="font-garamond text-[13px] leading-relaxed text-gray-600">
          {member.description}
        </p>
      </div>
    </div>
  )
}
