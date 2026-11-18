import Link from 'next/link';
import { SITE, START_PROJECT_HREF } from '@/lib/site';
import { ColourRegister } from '@/components/layout/ColourRegister';

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  eyebrow: string;
  links: FooterLink[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    eyebrow: '01 / Work',
    links: [
      { label: 'All work', href: '/work' },
      { label: 'Client work', href: '/work#mileplus' },
      { label: 'Services', href: '/#services' },
      { label: 'Solutions', href: '/solutions' },
    ],
  },
  {
    eyebrow: '02 / Products',
    links: [
      { label: 'Sākṣī', href: '/products#saksi' },
      { label: 'KKKhane', href: '/products#kkkhane' },
      { label: 'UNSAID', href: '/products#unsaid' },
      { label: 'NOTEacher', href: '/products#noteacher' },
      { label: 'All products', href: '/products' },
    ],
  },
  {
    eyebrow: '03 / Research',
    links: [
      { label: 'HumanSign', href: '/research#humansign' },
      { label: 'Sign language AI', href: '/research#nsl' },
      { label: 'Heritage evidence', href: '/research#saksi-evidence' },
      { label: 'All research', href: '/research' },
    ],
  },
  {
    eyebrow: '04 / Company',
    links: [
      { label: 'About OMX Lab', href: '/company' },
      { label: 'How we work', href: '/company' },
      { label: 'Company details', href: '/company' },
      { label: 'Start a project', href: START_PROJECT_HREF },
      { label: 'GitHub', href: SITE.github },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: SITE.email.toUpperCase(), href: `mailto:${SITE.email}` },
];

export function Footer() {
  return (
    <footer className="w-full bg-studio-grey border-t border-grid-hairline">
      <div className="w-full px-space-md lg:px-margin py-space-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-grid-hairline">
          {FOOTER_COLUMNS.map((column) => (
            <nav
              key={column.eyebrow}
              aria-label={column.eyebrow}
              className="flex flex-col gap-space-sm p-space-md border-b border-r border-grid-hairline"
            >
              <span className="text-micro-eyebrow text-on-surface-variant uppercase tracking-wider">
                {column.eyebrow}
              </span>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  className="link-underline-grow text-body-compact text-on-surface-variant hover:text-on-surface py-1 min-h-[24px] flex items-center"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="pt-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="text-label-code text-on-surface font-medium">
              OMX LAB
            </span>
            <span className="text-label-code text-on-surface-variant">
              © {SITE.founded} {SITE.legalName.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                className="text-label-code text-on-surface-variant hover:text-on-surface inline-flex items-center min-h-[24px]"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <span className="text-label-code text-primary font-semibold">
              BHARATPUR, CHITWAN · EST. {SITE.founded}
            </span>
          </div>
        </div>
      </div>
      <ColourRegister />
    </footer>
  );
}

export default Footer;
