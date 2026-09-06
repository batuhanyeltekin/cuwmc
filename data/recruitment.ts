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
    date: 'Thursday–Friday, September 10–11',
    detail: 'Come find our table and meet the board.',
  },
  {
    label: 'Coffee Chats',
    date: 'Friday, September 11 – Saturday, September 19',
    detail: 'Optional 15-minute chats with the Executive Board. Maximum of two per applicant.',
  },
  {
    label: 'Information Session',
    date: 'Monday, September 14',
    detail: 'Our full overview of the club, the divisions, and the analyst experience.',
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
 * Booking links, keyed by the member's `name` in data/eboard.ts (exact match).
 *
 * Each board member creates their own Google Calendar appointment schedule and
 * pastes their booking-page URL here. A member with no entry (or an empty string)
 * renders as "Booking link coming soon" — so the page is safe to ship before
 * everyone has submitted theirs.
 */
export const coffeeChatLinks: Record<string, string> = {
  // 'Roman Annan': 'https://calendar.app.google/xxxxxxxx',
  // 'Sofia Torrecillas': 'https://calendar.app.google/xxxxxxxx',
}

/** Board members who are NOT taking coffee chats this cycle. */
export const coffeeChatExcluded: string[] = []
