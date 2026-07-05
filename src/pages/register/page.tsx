import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { Link } from 'react-router-dom';
import { currentEdition } from '@/mocks/conferenceData';

const ticketTiers = [
  { name: 'General Admission', price: '$499', earlyPrice: '$349', features: ['All keynote sessions', 'Panel discussions', 'Networking events', 'Digital resource pack', 'On-demand video access'], popular: false },
  { name: 'Corporate', price: '$1,299', earlyPrice: '$899', features: ['All General benefits', 'VIP seating', 'Executive networking lounge', 'Sponsor recognition', '5 delegate passes'], popular: true },
  { name: 'Academic', price: '$299', earlyPrice: '$199', features: ['All General benefits', 'Research poster session', 'Academic networking', 'Publication discount', '1 delegate pass'], popular: false },
  { name: 'Student', price: '$149', earlyPrice: '$99', features: ['All General benefits', 'Student mentorship program', 'Career fair access', 'Student networking', '1 delegate pass'], popular: false },
];

const paymentMethods = [
  { name: 'Credit / Debit Card', icon: 'ri-bank-card-line', desc: 'Visa, Mastercard, AMEX, Discover' },
  { name: 'PayPal', icon: 'ri-paypal-line', desc: 'Express checkout with PayPal' },
  { name: 'Apple Pay', icon: 'ri-apple-line', desc: 'Quick checkout on Apple devices' },
  { name: 'Google Pay', icon: 'ri-google-line', desc: 'Fast checkout on Android' },
  { name: 'Bank Transfer', icon: 'ri-bank-line', desc: 'International wire transfer available' },
];

export default function Register() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-300/40 bg-primary-50 text-primary-700 text-xs font-semibold tracking-widest uppercase mb-5">
                {currentEdition.dates.start} – {currentEdition.dates.end}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Registration
                <span className="block text-gradient-gold">&amp; Ticketing Desk</span>
              </h1>
              <p className="text-foreground-400 text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                Early bird pricing available until January 31, 2027. Multi-currency payment supported. 
                Secure checkout powered by industry-leading payment processors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {ticketTiers.map((tier) => {
                const isSelected = selectedTier === tier.name;
                return (
                  <div
                    key={tier.name}
                    className={`glass-card p-6 flex flex-col cursor-pointer transition-all duration-300 relative ${
                      isSelected
                        ? 'ring-2 ring-primary-500 border-primary-400/60'
                        : 'hover:border-primary-300/40'
                    } ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                    onClick={() => setSelectedTier(tier.name)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedTier(tier.name); }}
                  >
                    {tier.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-foreground-100 font-heading text-lg font-semibold mb-1">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-heading font-bold text-gradient-gold">{tier.earlyPrice}</span>
                      <span className="text-foreground-400 text-sm line-through ml-2">{tier.price}</span>
                      <span className="block text-primary-600 text-xs mt-1 font-medium">Early Bird</span>
                    </div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-foreground-400 text-sm">
                          <i className="ri-check-line text-primary-500 mt-0.5" style={{ width: '14px', height: '14px' }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`text-sm w-full whitespace-nowrap cursor-pointer py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        isSelected
                          ? 'btn-primary golden-shimmer'
                          : 'btn-outline'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Select Ticket'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-6 md:p-8 mb-8">
                <h2 className="text-foreground-100 font-heading text-xl font-semibold mb-6 flex items-center gap-2">
                  <i className="ri-secure-payment-line text-primary-500" style={{ width: '20px', height: '20px' }} />
                  Secure Payment Methods
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.name}
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-background-50 border border-secondary-200 hover:border-primary-300 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 mb-2">
                        <i className={`${method.icon} text-primary-600 text-lg`} style={{ width: '18px', height: '18px' }} />
                      </div>
                      <span className="text-foreground-100 text-xs font-semibold">{method.name}</span>
                      <span className="text-foreground-500 text-[10px] mt-1">{method.desc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-foreground-500 text-xs">
                  <i className="ri-lock-line" style={{ width: '12px', height: '12px' }} />
                  All transactions are encrypted with 256-bit SSL. Your payment information is never stored on our servers.
                </div>
              </div>

              <div className="text-center">
                <p className="text-foreground-400 text-sm">
                  Need a special needs access rate or group booking?{' '}
                  <a href="mailto:registration@isdia2027.org" className="text-primary-600 hover:text-primary-700 underline font-medium">
                    Contact our registration team
                  </a>
                </p>
                <p className="text-foreground-500 text-xs mt-3">
                  For invoice requests, purchase orders, or bank transfer instructions, please email{' '}
                  <a href="mailto:finance@isdia2027.org" className="text-primary-600 hover:text-primary-700 underline">
                    finance@isdia2027.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}