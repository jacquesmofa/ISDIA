import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { coHosts } from '@/mocks/homeData';

export default function CoHosts() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-50 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-5">
                Co-Hosting Partnership
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                The Organizations Behind
                <span className="block text-gradient-gold">ISDIA 2027</span>
              </h1>
              <p className="text-secondary-400 text-base md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
                A joint collaborative partnership between two leading organizations committed to 
                advancing disability inclusion, accessibility, and equitable employment worldwide.
              </p>
            </div>

            <div className="space-y-16">
              {coHosts.map((coHost, i) => (
                <div key={coHost.name} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl border border-secondary-200">
                      <img
                        src={coHost.image}
                        alt={coHost.name}
                        className="w-full h-80 md:h-96 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-50/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-primary-600 text-sm font-bold tracking-widest uppercase">
                          {coHost.acronym}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="inline-block px-3 py-1 rounded-full border border-primary-500/20 bg-primary-50 text-primary-600 text-xs font-semibold mb-4">
                      Co-Host Organization
                    </div>
                    <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground-50 mb-4">
                      {coHost.name}
                    </h2>
                    <p className="text-secondary-400 text-base leading-relaxed mb-6">
                      {coHost.description}
                    </p>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2 text-secondary-400 text-sm">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-500/10 border border-primary-500/20">
                          <i className="ri-calendar-line text-primary-600" style={{ width: '16px', height: '16px' }} />
                        </div>
                        <div>
                          <span className="block text-secondary-500 text-xs">Founded</span>
                          <span className="text-foreground-50 font-medium">{coHost.founded}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-400 text-sm">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-500/10 border border-primary-500/20">
                          <i className="ri-map-pin-line text-primary-600" style={{ width: '16px', height: '16px' }} />
                        </div>
                        <div>
                          <span className="block text-secondary-500 text-xs">Headquarters</span>
                          <span className="text-foreground-50 font-medium">{coHost.headquarters}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background-100 border-t border-secondary-200">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 mb-4">
              A Shared Commitment to Inclusion
            </h2>
            <p className="text-secondary-400 text-base max-w-2xl mx-auto leading-relaxed">
              Together, LDIS and HIC bring decades of combined expertise in disability advocacy, 
              inclusive design, policy development, and corporate accessibility transformation. 
              Their partnership ensures ISDIA 2027 delivers both visionary leadership and practical, 
              actionable outcomes for the global disability community.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}