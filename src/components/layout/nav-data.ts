/* ---------------------------------------------------------------------------
   Primary navigation, and the contents of each mega-menu drawer.
   Everything here points at real pages and real projects.
   --------------------------------------------------------------------------- */

import { PROJECTS } from '@/lib/work';

export type MenuLink = {
  label: string;
  href: string;
  /** One line of supporting copy, shown only in the feature column. */
  detail?: string;
  /** Product swatch class; a flat square, never a background. */
  swatch?: string;
  /** Registry code, e.g. MOD_01. */
  code?: string;
};

export type MenuColumn = {
  eyebrow: string;
  /** The wide first column carries detail copy and swatches. */
  feature?: boolean;
  links: MenuLink[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: MenuColumn[];
};

const own = PROJECTS.filter((p) => p.kind !== 'Client');

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  {
    label: 'Products',
    href: '/products',
    columns: [
      {
        eyebrow: '01 / OUR PRODUCTS',
        feature: true,
        links: own
          .filter((p) => p.featured)
          .map((p) => ({ label: p.name, href: `/products#${p.slug}`, detail: `${p.sector}.` })),
      },
      {
        eyebrow: '02 / MORE',
        links: own.filter((p) => !p.featured).map((p) => ({ label: p.name, href: `/products#${p.slug}` })),
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    columns: [
      {
        eyebrow: '01 / BY ORGANISATION',
        feature: true,
        links: [
          { label: 'Hospitality', href: '/solutions', detail: 'Hotels, restaurants and cafes.' },
          { label: 'Shops and brands', href: '/solutions', detail: 'Stores, catalogues and content.' },
          { label: 'Heritage and tourism', href: '/solutions', detail: 'Guide apps, 3D and 360°.' },
        ],
      },
      {
        eyebrow: '02 / ALSO',
        links: [
          { label: 'Education', href: '/solutions' },
          { label: 'Clubs and events', href: '/solutions' },
          { label: 'Research partners', href: '/solutions' },
        ],
      },
    ],
  },
  { label: 'Research', href: '/research' },
  { label: 'Company', href: '/company' },
];
