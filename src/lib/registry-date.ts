/* ---------------------------------------------------------------------------
   Registry dates

   The site writes dates the way a specimen registry does -- `OCT-2025` for a
   month entry, `18 AUG 2026` for a dated dispatch. Those read well on the page
   but say nothing to a machine, so every rendered date is paired with an ISO
   value via `<time dateTime>`.

   `toIsoDate` accepts either registry form and returns the ISO 8601 string:
   a month entry yields `YYYY-MM`, a dated entry yields `YYYY-MM-DD`. Anything
   it cannot parse returns undefined, so the caller simply omits the attribute
   rather than emitting a wrong one.
   --------------------------------------------------------------------------- */

const MONTHS: Record<string, string> = {
  JAN: '01',
  FEB: '02',
  MAR: '03',
  APR: '04',
  MAY: '05',
  JUN: '06',
  JUL: '07',
  AUG: '08',
  SEP: '09',
  OCT: '10',
  NOV: '11',
  DEC: '12',
};

/** `OCT-2025` or `OCT 2025` -> `2025-10`. */
const MONTH_ENTRY = /^([A-Z]{3})[\s-](\d{4})$/;

/** `18 AUG 2026` -> `2026-08-18`. */
const DATED_ENTRY = /^(\d{1,2})\s+([A-Z]{3})\s+(\d{4})$/;

export function toIsoDate(value: string): string | undefined {
  const input = value.trim().toUpperCase();

  const dated = DATED_ENTRY.exec(input);
  if (dated) {
    const [, day, mon, year] = dated;
    const month = MONTHS[mon];
    if (!month) return undefined;
    return `${year}-${month}-${day.padStart(2, '0')}`;
  }

  const monthly = MONTH_ENTRY.exec(input);
  if (monthly) {
    const [, mon, year] = monthly;
    const month = MONTHS[mon];
    if (!month) return undefined;
    return `${year}-${month}`;
  }

  return undefined;
}
