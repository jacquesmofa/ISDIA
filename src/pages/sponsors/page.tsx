import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { Link } from 'react-router-dom';

const sponsorTiers = [
  { name: 'Global Platinum Partner', price: '$50,000', benefits: ['Keynote introduction opportunity', 'Premium exhibition booth (200 sq ft)', '10 delegate passes', 'Full-page ad in program', 'Logo on all summit materials', 'Dedicated networking session'] },
  { name: 'Gold Sponsor', price: '$25,000', benefits: ['Panel moderator opportunity', 'Standard exhibition booth (100 sq ft)', '5 delegate passes', 'Half-page ad in program', 'Logo on website and signage'] },
  { name: 'Silver Sponsor', price: '$10,000', benefits: ['Exhibition table', '3 delegate passes', 'Quarter-page ad', 'Logo on website', 'Social media feature'] },
  { name: 'Community Supporter', price: '$5,000', benefits: ['2 delegate passes', 'Logo on website', 'Name in program', 'Social media mention'] },
];

export default function Sponsors() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-5">
                Partnership Opportunities
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Sponsors
                <span className="block text-gradient-gold">&amp; Exhibitors</span>
              </h1>
              <p className="text-secondary-400 text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                Align your organization with the world&apos;s premier disability inclusion summit. 
                Reach 5,000+ global delegates and demonstrate your commitment to accessible and inclusive business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sponsorTiers.map((tier) => (
                <div key={tier.name} className="glass-card p-6 flex flex-col group cursor-pointer">
                  <h3 className="text-foreground-50 font-heading text-base font-semibold mb-1">{tier.name}</h3>
                  <span className="text-2xl font-heading font-bold text-gradient-gold mb-4">{tier.price}</span>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-secondary-400 text-sm">
                        <i className="ri-check-line text-primary-600 mt-0.5" style={{ width: '14px', height: '14px' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-outline text-sm w-full cursor-pointer">
                    Become a Sponsor
                  </button>
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