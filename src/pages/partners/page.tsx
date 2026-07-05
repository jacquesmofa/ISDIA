import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

interface Partner {
  name: string;
  category: string;
  description: string;
}

const partners: Partner[] = [
  { name: 'Microsoft Accessibility', category: 'Technology', description: 'Global leader in accessible technology and inclusive design, driving innovation in assistive tools and digital accessibility standards worldwide.' },
  { name: 'UN Partnership on Disability Rights', category: 'International Organization', description: 'Collaborative UN initiative advancing the implementation of the Convention on the Rights of Persons with Disabilities across member states.' },
  { name: 'Google Accessibility', category: 'Technology', description: 'Pioneering accessible products and platforms, from Android accessibility features to AI-powered tools for users with diverse abilities.' },
  { name: 'Global Disability Innovation Hub', category: 'Research & Innovation', description: 'World-leading research center dedicated to disability innovation, assistive technology development, and inclusive design education.' },
  { name: 'International Labour Organization', category: 'International Organization', description: 'UN agency promoting rights at work, including the ILO Global Business and Disability Network for inclusive employment practices.' },
  { name: 'Barclays Accessibility', category: 'Financial Services', description: 'Leading financial institution with comprehensive disability inclusion programs, accessible banking solutions, and neurodiversity hiring initiatives.' },
];

export default function Partners() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/5 text-accent-400 text-xs font-semibold tracking-widest uppercase mb-5">
                Our Ecosystem
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Partner Spotlights
                <span className="block text-gradient-gold">&amp; Digital Booths</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {partners.map((p) => (
                <div key={p.name} className="glass-card-hover p-6 group cursor-pointer">
                  <span className="px-2.5 py-1 rounded-full bg-accent-500/10 text-accent-400 text-[10px] font-semibold uppercase border border-accent-500/20 mb-3 inline-block">
                    {p.category}
                  </span>
                  <h3 className="text-foreground-50 font-heading text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {p.name}
                  </h3>
                  <p className="text-secondary-400 text-sm leading-relaxed">{p.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary-600 text-xs mt-4 font-medium cursor-pointer">
                    Visit Digital Booth
                    <i className="ri-arrow-right-line" style={{ width: '12px', height: '12px' }} />
                  </span>
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