import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

export default function Volunteer() {
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
                Join Our Team
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Volunteer &amp; Sign Language
                <span className="block text-gradient-gold">Interpreter Sign-Up</span>
              </h1>
              <p className="text-secondary-400 text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                Be part of the team that makes ISDIA 2027 accessible and welcoming for all delegates. 
                Volunteers receive complimentary session access, meals, and a certificate of participation.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 mb-6">
                <h2 className="text-xl font-heading font-bold text-foreground-50 mb-4">Volunteer Roles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { role: 'Accessibility Steward', desc: 'Assist delegates with navigation and accessibility needs' },
                    { role: 'Registration Desk', desc: 'Welcome delegates and manage check-in process' },
                    { role: 'Session Support', desc: 'Assist speakers and manage session logistics' },
                    { role: 'Sign Language Interpreter', desc: 'Provide ASL, BSL, or International Sign interpretation' },
                    { role: 'Tech Support', desc: 'Manage live-stream and AV equipment' },
                    { role: 'Networking Facilitator', desc: 'Help delegates connect during networking events' },
                  ].map((role) => (
                    <div key={role.role} className="p-4 rounded-xl border border-secondary-200/20 bg-background-100/50">
                      <h3 className="text-foreground-50 font-semibold text-sm mb-1">{role.role}</h3>
                      <p className="text-secondary-400 text-xs">{role.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button className="btn-primary golden-shimmer text-sm cursor-pointer">
                  Apply to Volunteer
                  <i className="ri-heart-line" style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}