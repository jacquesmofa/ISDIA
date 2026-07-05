import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

export default function Chat() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground-50 mb-6">
              Peer-to-Peer
              <span className="block text-gradient-gold">Accessible Chat</span>
            </h1>
            <p className="text-secondary-400 text-sm max-w-lg mx-auto mb-10">
              Connect directly with fellow delegates in real-time. The chat platform will be available during the summit.
            </p>
            <div className="glass-card p-12 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
                <i className="ri-chat-3-line text-primary-600 text-2xl" style={{ width: '24px', height: '24px' }} />
              </div>
              <p className="text-secondary-400 text-sm">Chat will be available during ISDIA 2027</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}