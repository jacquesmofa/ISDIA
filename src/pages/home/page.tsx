import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import HeroSection from './components/HeroSection';
import StatsBanner from './components/StatsBanner';
import MissionSection from './components/MissionSection';
import AgendaPreview from './components/AgendaPreview';
import SpeakersPreview from './components/SpeakersPreview';
import TestimonialsSection from './components/TestimonialsSection';
import CoHostsPreview from './components/CoHostsPreview';
import RegistrationCTA from './components/RegistrationCTA';

export default function Home() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <HeroSection />
        <StatsBanner />
        <MissionSection />
        <AgendaPreview />
        <SpeakersPreview />
        <TestimonialsSection />
        <CoHostsPreview />
        <RegistrationCTA />
      </main>

      <Footer />
    </div>
  );
}