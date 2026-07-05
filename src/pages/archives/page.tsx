import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

const editions = [
  { year: 2027, theme: 'Disability Inclusion and Accessible Employment for Sustainable Development', status: 'Upcoming — April 6–8' },
  { year: 2028, theme: 'Coming Soon', status: 'Planned' },
  { year: 2029, theme: 'Coming Soon', status: 'Planned' },
];

export default function Archives() {
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
                Year-Over-Year
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Previous Summits
                <span className="block text-gradient-gold">Archive Portal</span>
              </h1>
              <p className="text-secondary-400 text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                ISDIA is designed as a recurring annual summit. Each edition builds upon the last, 
                creating a growing repository of knowledge, research, and best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {editions.map((ed) => (
                <div key={ed.year} className={`glass-card p-6 text-center ${ed.status.includes('Upcoming') ? 'border-primary-500/20' : 'opacity-60'}`}>
                  <span className="text-4xl font-heading font-bold text-gradient-gold">{ed.year}</span>
                  <p className="text-secondary-400 text-sm mt-2">{ed.theme}</p>
                  <p className={`text-xs mt-3 font-semibold ${ed.status.includes('Upcoming') ? 'text-primary-600' : 'text-secondary-500'}`}>
                    {ed.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}