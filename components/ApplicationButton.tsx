'use client'
import React, { useEffect, useState } from 'react'

import {
  APPLICATION_URL,
  APPLICATION_OPENS_AT,
  APPLICATION_PENDING_LABEL,
} from '../data/recruitment'

/**
 * Renders the Fall '26 application CTA. Locked until APPLICATION_OPENS_AT, then
 * unlocks by itself — a page left open overnight flips at midnight without a reload.
 *
 * Starts locked on the server so the static HTML never ships the live href; the
 * clock check runs after mount.
 */
export default function ApplicationButton() {
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    if (!APPLICATION_URL) return
    const opensAt = new Date(APPLICATION_OPENS_AT).getTime()
    const check = () => setUnlocked(Date.now() >= opensAt)
    check()
    const id = setInterval(check, 30_000)
    return () => clearInterval(id)
  }, [])

  if (APPLICATION_URL && unlocked) {
    return (
      <a
        href={APPLICATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 inline-block rounded-lg border-2 border-cuwmc-primary bg-cuwmc-primary px-8 py-4 font-garamond text-lg font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-cuwmc-primary hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cuwmc-primary"
      >
        Submit Your Application
      </a>
    )
  }

  return (
    <div className="mb-8">
      <span
        aria-disabled="true"
        className="inline-block cursor-not-allowed rounded-lg border-2 border-cuwmc-primary/30 bg-cuwmc-primary/10 px-8 py-4 font-garamond text-lg font-semibold text-cuwmc-primary/50"
      >
        Application Link
      </span>
      <p className="mt-3 font-garamond text-sm text-gray-500">
        {APPLICATION_PENDING_LABEL}
      </p>
    </div>
  )
}
