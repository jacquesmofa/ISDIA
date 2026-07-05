import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenAccessibility?: () => void;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Agenda', path: '/agenda' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Register', path: '/register' },
  { label: 'About', path: '/co-hosts' },
];

export default function Navbar({ onOpenAccessibility }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-secondary-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="ISDIA 2027 Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-heading font-bold text-lg">I</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-foreground-100 font-heading text-sm font-semibold tracking-wider uppercase leading-tight block">
                ISDIA
              </span>
              <span className="text-foreground-400 text-[10px] tracking-widest uppercase leading-tight block">
                2027
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 whitespace-nowrap py-1 ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-foreground-400 hover:text-foreground-100'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
                )}
              </Link>
            ))}

            <button
              onClick={onOpenAccessibility}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-secondary-300 text-foreground-400 hover:text-primary-600 hover:border-primary-400 transition-all duration-300 cursor-pointer"
              aria-label="Open accessibility controls"
              title="Accessibility Controls"
            >
              <i className="ri-contrast-2-line text-lg" style={{ width: '18px', height: '18px' }} />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenAccessibility}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-secondary-300 text-foreground-400 hover:text-primary-600 transition-all duration-300 cursor-pointer"
              aria-label="Open accessibility controls"
            >
              <i className="ri-contrast-2-line text-lg" style={{ width: '18px', height: '18px' }} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-secondary-300 text-foreground-400 hover:text-foreground-100 transition-all duration-300 cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <i className={mobileOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-secondary-200 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-primary-50 text-primary-700 border-l-2 border-primary-500'
                  : 'text-foreground-400 hover:text-foreground-100 hover:bg-background-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}