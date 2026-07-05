import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { Link } from 'react-router-dom';

const venueFeatures = [
  { icon: 'ri-wheelchair-line', label: 'Step-free access throughout all floors and halls' },
  { icon: 'ri-contrast-2-line', label: 'Hearing loop systems in all session rooms' },
  { icon: 'ri-guide-line', label: 'Tactile floor indicators and braille signage' },
  { icon: 'ri-emotion-happy-line', label: 'Quiet sensory rooms on every floor' },
  { icon: 'ri-service-line', label: 'Service animal relief areas' },
  { icon: 'ri-mic-line', label: 'Real-time captioning (CART) at every session' },
  { icon: 'ri-translate-2', label: 'Simultaneous interpretation booths' },
  { icon: 'ri-wifi-line', label: 'High-speed accessible WiFi throughout' },
];

export default function Venue() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-background-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-5">
                Summit Location
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Interactive
                <span className="block text-gradient-gold">Venue Map</span>
              </h1>
              <p className="text-secondary-400 text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                Metro Toronto Convention Centre — a fully accessible, world-class venue in the heart of downtown Toronto.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="section-container">
            <div className="glass-card overflow-hidden mb-10">
              <iframe
                title="Metro Toronto Convention Centre Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2691000000003!2d-79.3875!3d43.644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15c8e5f8e5f8e5f8!2sMetro%20Toronto%20Convention%20Centre!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                aria-label="Google Maps showing Metro Toronto Convention Centre location"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="glass-card p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground-50 mb-2">
                    Metro Toronto Convention Centre
                  </h2>
                  <p className="text-primary-600 font-heading text-sm mb-4">North Building</p>
                  <div className="space-y-3 text-secondary-400 text-sm leading-relaxed mb-6">
                    <p className="flex items-start gap-2">
                      <i className="ri-map-pin-line text-primary-600 mt-0.5" style={{ width: '14px', height: '14px' }} />
                      255 Front Street West, Toronto, ON M5V 2W6, Canada
                    </p>
                    <p>
                      Located in the heart of downtown Toronto, the MTCC North Building offers 70+ meeting rooms, 
                      a 1,330-seat theatre, and over 50,000 square feet of exhibition space — all fully accessible 
                      with step-free access, accessible washrooms on every floor, and integrated assistive listening systems.
                    </p>
                    <p>
                      The venue is directly connected to Union Station (Toronto&apos;s main transit hub) via the PATH 
                      underground walkway system, providing weather-protected, wheelchair-accessible access from regional 
                      trains, subways, and streetcars.
                    </p>
                  </div>

                  <div className="border-t border-secondary-200/10 pt-6">
                    <h3 className="text-foreground-50 font-heading text-lg font-semibold mb-4">Nearby Accessible Hotels</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { name: 'InterContinental Toronto Centre', distance: 'Connected via PATH' },
                        { name: 'Fairmont Royal York', distance: '350m — via PATH' },
                        { name: 'Delta Hotels by Marriott', distance: '200m — step-free access' },
                        { name: 'Le Germain Hotel Toronto', distance: '500m — accessible route' },
                      ].map((hotel) => (
                        <div key={hotel.name} className="flex items-center gap-2 text-sm">
                          <i className="ri-hotel-line text-primary-600" style={{ width: '14px', height: '14px' }} />
                          <span className="text-foreground-400">{hotel.name}</span>
                          <span className="text-secondary-500 text-xs">({hotel.distance})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="glass-card p-6">
                  <h3 className="text-foreground-50 font-heading text-lg font-semibold mb-4">Accessibility Features</h3>
                  <ul className="space-y-3">
                    {venueFeatures.map((feature) => (
                      <li key={feature.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500/10 border border-primary-500/20 flex-shrink-0 mt-0.5">
                          <i className={`${feature.icon} text-primary-600 text-sm`} style={{ width: '14px', height: '14px' }} />
                        </div>
                        <span className="text-foreground-400 text-sm">{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-6 mt-4">
                  <h3 className="text-foreground-50 font-heading text-lg font-semibold mb-3">Getting Here</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-primary-600 font-semibold block mb-1">By Air</span>
                      <p className="text-secondary-400">Toronto Pearson International Airport (YYZ) — 25 min by UP Express train to Union Station</p>
                    </div>
                    <div>
                      <span className="text-primary-600 font-semibold block mb-1">By Train</span>
                      <p className="text-secondary-400">Union Station — connected directly to MTCC via PATH underground walkway</p>
                    </div>
                    <div>
                      <span className="text-primary-600 font-semibold block mb-1">Accessible Transit</span>
                      <p className="text-secondary-400">Wheel-Trans accessible taxi and ride-share drop-off zone at Front Street entrance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background-100 border-t border-secondary-200/10">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 mb-4">
              Ready to Plan Your Visit?
            </h2>
            <p className="text-secondary-400 text-base max-w-xl mx-auto leading-relaxed mb-6">
              Check our FAQ for detailed travel and accommodation information, or register now to receive your personalized delegate welcome package.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/register" className="btn-primary golden-shimmer text-sm">
                Register Now
              </Link>
              <Link to="/faq" className="btn-outline text-sm">
                Travel FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}