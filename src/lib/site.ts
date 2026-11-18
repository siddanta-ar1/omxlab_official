/* ---------------------------------------------------------------------------
   Company facts, in one place. Taken from O.M.X Lab's registration as shown
   in the Sākṣī app (constants/owner.ts). Change them here only.
   --------------------------------------------------------------------------- */

export const SITE = {
  name: 'OMX Lab',
  legalName: 'O.M.X Lab Private Limited',
  tagline: 'Technology & Research',
  address: 'Bharatpur-2, Chitwan, Nepal',
  registrationNo: '403018/83/84',
  pan: '624715616',
  founded: 2026,
  email: 'omxdigitals@gmail.com',
  github: 'https://github.com/siddanta-ar1',
  url: 'https://omxlab.site',
} as const;

/** A mailto link that opens a new project brief. */
export const START_PROJECT_HREF = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'New project for OMX Lab',
)}&body=${encodeURIComponent(
  'Hello OMX Lab,\n\nWhat we want to build:\n\nWho it is for:\n\nWhen we need it:\n\nBudget range:\n',
)}`;
