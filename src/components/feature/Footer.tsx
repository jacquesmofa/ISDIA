import { Link } from 'react-router-dom';

const footerLinks = {
  summit: {
    title: 'The Summit',
    links: [
      { label: 'Mission & Charter', path: '/mission' },
      { label: 'Co-Hosts', path: '/co-hosts' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Venue', path: '/venue' },
    ],
  },
  participate: {
    title: 'Participate',
    links: [
      { label: 'Register', path: '/register' },
      { label: 'Call for Papers', path: '/call-for-papers' },
      { label: 'Volunteer', path: '/volunteer' },
      { label: 'Sponsors', path: '/sponsors' },
    ],
  },
  media: {
    title: 'Media',
    links: [
      { label: 'Live Stream', path: '/live' },
      { label: 'Video Archive', path: '/media/archive' },
      { label: 'Press Room', path: '/press' },
      { label: 'Gallery', path: '/gallery' },
    ],
  },
};

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-background-100 border-t border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative py-16 md:py-20">
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary-400/60 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">I</span>
                </div>
                <div>
                  <span className="text-foreground-100 font-heading text-lg font-semibold tracking-wider block leading-tight">
                    ISDIA 2027
                  </span>
                  <span className="text-foreground-400 text-xs tracking-widest uppercase block leading-tight">
                    April 6–8, 2027
                  </span>
                </div>
              </div>
              <p className="text-foreground-400 text-sm leading-relaxed max-w-sm mt-3">
                Building Inclusive Futures Through Accessibility, Employment, and Innovation. Co-hosted by Lead Disability Inclusive Society &amp; Hope Inclusive Consultancy Inc.
              </p>
            </div>

            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-foreground-100 text-xs font-semibold tracking-widest uppercase mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-foreground-400 text-sm hover:text-primary-600 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-500 text-xs">
            &copy; {new Date().getFullYear()} ISDIA. All rights reserved. Lead Disability Inclusive Society &amp; Hope Inclusive Consultancy Inc.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-secondary-300 text-foreground-400 hover:text-primary-600 hover:border-primary-400 transition-all duration-300"
              aria-label="Twitter / X"
              rel="nofollow"
            >
              <i className="ri-twitter-x-line" style={{ width: '16px', height: '16px' }} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-secondary-300 text-foreground-400 hover:text-primary-600 hover:border-primary-400 transition-all duration-300"
              aria-label="LinkedIn"
              rel="nofollow"
            >
              <i className="ri-linkedin-fill" style={{ width: '16px', height: '16px' }} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-secondary-300 text-foreground-400 hover:text-primary-600 hover:border-primary-400 transition-all duration-300"
              aria-label="YouTube"
              rel="nofollow"
            >
              <i className="ri-youtube-fill" style={{ width: '16px', height: '16px' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}