// ─────────────────────────────────────────────────────────────────────────────
// CUWMC Fall '26 Analyst Recruitment — single source of truth for the
// /recruitment page. Edit THIS file; the page renders whatever is here.
//
// Dates ruled at the E-Board meeting of 2026-09-03 (apps open day 1 of classes;
// close Sat the 19th; interviews start Tuesday). Coffee-chat window 9/11–9/19.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * PUBLIC application form URL (the Send → 🔗 link from Google Forms).
 * Never put the /edit URL here — that is the owner's editing link.
 *
 * Set to null to force the disabled state regardless of the clock.
 */
export const APPLICATION_URL: string | null = 'https://forms.gle/Q6WHy2Q4PnA8d3eh8'

/**
 * The button stays disabled until this instant, then unlocks on its own —
 * no redeploy needed. Midnight ET on the first day of classes.
 *
 * ⚠️  This is a COURTESY gate, not a lock. The URL ships inside the page bundle,
 *     so anyone reading dev tools can find it early. The only real gate is the
 *     form's own "Accepting responses" toggle in Google Forms — leave that OFF
 *     until Tuesday if it matters that nobody submits early.
 */
export const APPLICATION_OPENS_AT = '2026-09-08T00:00:00-04:00'

/** Shown under the application button while it is still locked. */
export const APPLICATION_PENDING_LABEL = 'Opens Tuesday, September 8'

export interface TimelineEvent {
  label: string
  date: string
  detail?: string
}

export const recruitmentTimeline: TimelineEvent[] = [
  {
    label: 'Applications Open',
    date: 'Tuesday, September 8',
    detail: 'We encourage you to attend our information session before submitting.',
  },
  {
    label: 'Activities Fair',
    date: 'Friday, September 11 · 12:00–4:00 PM',
    detail: 'Come find our table and meet the board.',
  },
  {
    label: 'Coffee Chats',
    date: 'Friday, September 11 – Saturday, September 19',
    detail:
      'Optional 15-minute chats with the Executive Board. Booking has now closed — applications are still open until Saturday.',
  },
  {
    label: 'Information Session',
    date: 'Monday, September 14',
    detail: 'Our full overview of the club, the divisions, and the analyst experience.',
  },
  {
    label: 'Lawn Social',
    date: 'Wednesday, September 16',
    detail: 'An informal social with the board, midway through the application window.',
  },
  {
    label: 'Applications Close',
    date: 'Saturday, September 19',
    detail: 'Submissions close at 11:59 PM.',
  },
  {
    label: 'Application Review',
    date: 'Sunday, September 20',
  },
  {
    label: 'Interviews',
    date: 'Tuesday–Friday, September 22–25',
    detail: 'A behavioral round and a technical round, held in person.',
  },
  {
    label: 'IMD Stock Pitch Day',
    date: 'Week of September 22',
    detail: 'Investment Management applicants only.',
  },
  {
    label: 'Deliberations + Offers Sent',
    date: 'Saturday, September 26',
  },
  {
    label: 'New Analyst Onboarding',
    date: 'Sunday, September 27',
    detail: 'First All-Hands of the semester.',
  },
]

// ─── Coffee chats ────────────────────────────────────────────────────────────

/** How many chats one applicant may book, total, across all board members. */
export const COFFEE_CHAT_MAX_PER_APPLICANT = 2

export const COFFEE_CHAT_WINDOW = 'September 11 – 19'

/**
 * The master switch for coffee-chat booking.
 *
 * `false` → every card renders a plain "Booking closed" state and the section says so at
 * the top. No `<a href>` is emitted anywhere in the grid.
 *
 * ⚠️  Flipping this back to `true` is NOT enough to reopen booking — `coffeeChatLinks`
 *     below was emptied at the same time (see the note there). Both have to come back.
 */
export const COFFEE_CHATS_OPEN = false

/** Shown in place of the booking cap once booking has closed. */
export const COFFEE_CHAT_CLOSED_NOTICE =
  'Coffee chats for Fall ’26 recruitment have closed. Thank you to everyone who came out to meet the board.'

/**
 * Booking links, keyed by the member's `name` in data/eboard.ts (exact match).
 *
 * Each board member creates their own Google Calendar appointment schedule and pastes their
 * booking-page URL here. A member with no entry renders as "Booking link coming soon" while
 * `COFFEE_CHATS_OPEN` is true — so the page is safe to ship before everyone has submitted.
 *
 * ── EMPTIED 2026-09-17, on Roman's ruling: all booking links off, immediately. ──────────
 * The twelve live URLs were DELETED rather than left here behind a `false` flag, because
 * this entire map ships inside the client JS bundle — a hidden button is cosmetic, a deleted
 * URL is not. Same treatment Marsi's link got on 09-16.
 *
 * Recovery, if a future cycle needs them:
 *   • the vault runbook, `04_Extracurricular/CUWMC/coffee-chat-setup-fall-2026.md`
 *     ("ARCHIVED — the twelve live booking links"), which is the readable copy; or
 *   • `git show 9ac6705:data/recruitment.ts` (Marsi's, one further back at dc6629d).
 * Re-collect from the board rather than re-pasting: these are personal scheduling pages and
 * any member may have repointed or deleted theirs since.
 *
 * Note what this does and does not do. It stops NEW bookings from the website. It does not
 * cancel chats already booked, and it does not close each member's own appointment-schedule
 * window — a link from a DM or from git history still books a slot.
 */
export const coffeeChatLinks: Record<string, string> = {}

/** Board members who are NOT taking coffee chats this cycle. */
export const coffeeChatExcluded: string[] = [
  // Asked to be taken off the booking page, 2026-09-16.
  'Marsi Hadjieva',
]
