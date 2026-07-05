import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

const pressReleases = [
  { date: 'June 15, 2026', title: 'ISDIA 2027 Announces Inaugural Summit Theme: Disability Inclusion and Accessible Employment for Sustainable Development', summary: 'The co-hosting organizations unveil the official theme and program framework for the first International Summit on Disability Inclusion & Accessibility.' },
  { date: 'May 28, 2026', title: 'Metro Toronto Convention Centre Selected as Venue for ISDIA 2027', summary: 'The fully accessible, world-class venue in downtown Toronto will host the three-day international summit from April 6–8, 2027.' },
  { date: 'April 10, 2026', title: 'Lead Disability Inclusive Society and Hope Inclusive Consultancy Announce Joint Partnership for ISDIA 2027', summary: 'Two leading organizations in disability advocacy and inclusive consultancy join forces to launch the world\'s premier accessibility summit.' },
];

export default function Press() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-5">
                News &amp; Media
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Press Room
                <span className="block text-gradient-gold">&amp; Announcements</span>
              </h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {pressReleases.map((pr, i) => (
                <div key={i} className="glass-card-hover p-6 group cursor-pointer">
                  <span className="text-primary-600 text-xs font-semibold tracking-wider uppercase">{pr.date}</span>
                  <h3 className="text-foreground-50 font-heading text-lg font-semibold mt-2 group-hover:text-primary-600 transition-colors duration-300">
                    {pr.title}
                  </h3>
                  <p className="text-secondary-400 text-sm mt-2 leading-relaxed">{pr.summary}</p>
                  <span className="inline-flex items-center gap-1 text-primary-600 text-xs mt-3 font-medium cursor-pointer">
                    Read Full Release
                    <i className="ri-arrow-right-line" style={{ width: '12px', height: '12px' }} />
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-secondary-500 text-sm">
                Media inquiries:{' '}
                <a href="mailto:press@isdia2027.org" className="text-primary-600 hover:text-primary-300 underline">
                  press@isdia2027.org
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}