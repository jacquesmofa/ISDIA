import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

export default function AgendaBuilder() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground-50 mb-6">
              Personalized
              <span className="block text-gradient-gold">Agenda Builder</span>
            </h1>
            <p className="text-secondary-400 text-sm max-w-lg mx-auto mb-10">
              Build your custom schedule, sync with your calendar, and receive real-time updates.
            </p>
            <div className="glass-card p-12 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
                <i className="ri-calendar-todo-line text-primary-600 text-2xl" style={{ width: '24px', height: '24px' }} />
              </div>
              <p className="text-secondary-400 text-sm">Log in to access your personalized agenda builder and sync sessions to your calendar.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}