import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

export default function MediaArchive() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-5">
              On-Demand Library
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight mb-6">
              Video
              <span className="block text-gradient-gold">Archive</span>
            </h1>
            <p className="text-secondary-400 text-base max-w-2xl mx-auto leading-relaxed mb-10">
              Session recordings will be available here within 48 hours of each session. 
              All videos include captions, transcripts, and audio descriptions.
            </p>

            <div className="glass-card p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                <i className="ri-film-line text-primary-600 text-3xl" style={{ width: '32px', height: '32px' }} />
              </div>
              <h2 className="text-xl font-heading font-bold text-foreground-50 mb-3">Archive Coming Soon</h2>
              <p className="text-secondary-400 text-sm">
                Session recordings from ISDIA 2027 will be uploaded to this archive following the summit. 
                Registered delegates receive lifetime access to all recordings and materials.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}