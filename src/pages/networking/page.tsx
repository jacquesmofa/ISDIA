import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

const interests = [
  'Accessible Employment', 'Assistive Technology', 'Policy & Legislation',
  'Universal Design', 'Digital Accessibility', 'Inclusive Education',
  'Healthcare Access', 'Transportation', 'Sign Language & Deaf Culture',
  'Neurodiversity', 'Mental Health', 'Independent Living',
];

export default function Networking() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (interest: string) => {
    setSelected((prev) => prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]);
  };

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/5 text-accent-400 text-xs font-semibold tracking-widest uppercase mb-5">
                Matchmaking
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Interest Profile
                <span className="block text-gradient-gold">Selector</span>
              </h1>
              <p className="text-secondary-400 text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                Select your interests to connect with like-minded delegates, speakers, and organizations.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-8">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggle(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      selected.includes(interest)
                        ? 'bg-accent-500/20 text-accent-400 border border-accent-500/40'
                        : 'border border-secondary-200/20 text-secondary-400 hover:text-foreground-50 hover:border-secondary-200/40'
                    }`}
                    aria-pressed={selected.includes(interest)}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <p className="text-secondary-500 text-sm mb-4">{selected.length} interests selected</p>
                <button className="btn-primary golden-shimmer text-sm cursor-pointer">
                  Find Matches
                  <i className="ri-user-search-line" style={{ width: '16px', height: '16px' }} />
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