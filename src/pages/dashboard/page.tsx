import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

export default function Dashboard() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground-50 mb-2">My Dashboard</h1>
            <p className="text-secondary-400 text-sm mb-10">Manage your summit experience, agenda, and connections.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="glass-card p-6 text-center cursor-pointer">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
                  <i className="ri-calendar-check-line text-primary-600 text-xl" style={{ width: '20px', height: '20px' }} />
                </div>
                <h3 className="text-foreground-50 font-semibold">My Agenda</h3>
                <p className="text-secondary-400 text-xs mt-1">0 sessions saved</p>
              </div>
              <div className="glass-card p-6 text-center cursor-pointer">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 mb-4">
                  <i className="ri-user-heart-line text-accent-400 text-xl" style={{ width: '20px', height: '20px' }} />
                </div>
                <h3 className="text-foreground-50 font-semibold">My Network</h3>
                <p className="text-secondary-400 text-xs mt-1">0 connections</p>
              </div>
              <div className="glass-card p-6 text-center cursor-pointer">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-secondary-500/10 border border-secondary-500/20 mb-4">
                  <i className="ri-file-list-3-line text-secondary-400 text-xl" style={{ width: '20px', height: '20px' }} />
                </div>
                <h3 className="text-foreground-50 font-semibold">My Resources</h3>
                <p className="text-secondary-400 text-xs mt-1">Access materials</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}