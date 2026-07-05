import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { missionPillars } from '@/mocks/homeData';

const charterPrinciples = [
  {
    title: 'Universal Design as Standard',
    description: 'Every space, product, and service designed for this summit follows universal design principles — ensuring equal access and participation for all delegates regardless of ability.',
    icon: 'ri-building-line',
  },
  {
    title: 'Nothing About Us Without Us',
    description: 'Persons with disabilities are central to every decision-making process, from agenda setting and speaker selection to venue design and digital platform development.',
    icon: 'ri-group-line',
  },
  {
    title: 'Intersectional Inclusion',
    description: 'We recognize that disability intersects with race, gender, age, and socioeconomic status. Our programming actively addresses these compounded experiences.',
    icon: 'ri-community-line',
  },
  {
    title: 'Measurable Impact',
    description: 'Every session, workshop, and networking event is designed with concrete, measurable outcomes — ensuring the summit translates dialogue into demonstrable action.',
    icon: 'ri-line-chart-line',
  },
  {
    title: 'Global Solidarity',
    description: 'We commit to amplifying voices from the Global South and underrepresented regions, ensuring disability inclusion frameworks reflect diverse cultural contexts.',
    icon: 'ri-global-line',
  },
  {
    title: 'Sustainable Legacy',
    description: 'ISDIA is designed as a recurring annual platform. Each edition builds upon the last, creating a growing repository of knowledge, research, and best practices.',
    icon: 'ri-recycle-line',
  },
];

export default function Mission() {
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
                Summit Charter
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Our Mission
                <span className="block text-gradient-gold">&amp; Founding Charter</span>
              </h1>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <div className="glass-card p-8 md:p-10">
                <p className="text-secondary-400 text-base md:text-lg leading-relaxed mb-6">
                  The International Summit on Disability Inclusion &amp; Accessibility (ISDIA) was founded on a singular, 
                  urgent belief: that disability inclusion must move from aspiration to action. In a world where over 
                  one billion people live with some form of disability, the gap between policy commitments and lived 
                  reality remains vast and unacceptable.
                </p>
                <p className="text-secondary-400 text-base md:text-lg leading-relaxed mb-6">
                  ISDIA 2027 convenes under the inaugural theme <strong className="text-primary-600 font-semibold">
                  &ldquo;Disability Inclusion and Accessible Employment for Sustainable Development&rdquo;</strong> — 
                  recognizing that meaningful employment is not merely an economic imperative, but a fundamental human 
                  right and the cornerstone of dignity, independence, and full societal participation.
                </p>
                <p className="text-secondary-400 text-base md:text-lg leading-relaxed">
                  Our mission is to create the world&apos;s most accessible, inclusive, and impactful conference platform — 
                  one that sets a new global standard for how international summits are designed, delivered, and sustained 
                  across annual editions. We are building not just an event, but a movement.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 text-center mb-10">
                The Three Pillars of ISDIA 2027
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {missionPillars.map((pillar) => (
                  <div key={pillar.title} className="glass-card-hover p-6 text-center group cursor-pointer">
                    <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary-500/10 border border-primary-500/20 mb-5 group-hover:bg-primary-500/20 transition-all duration-300">
                      <i className={`${pillar.icon} text-primary-600 text-2xl`} style={{ width: '24px', height: '24px' }} />
                    </div>
                    <h3 className="text-foreground-50 font-heading text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-secondary-400 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background-100 border-t border-secondary-200">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 text-center mb-12">
              Our Founding Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {charterPrinciples.map((principle) => (
                <div key={principle.title} className="glass-card p-5 group cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500/10 border border-primary-500/20 flex-shrink-0">
                      <i className={`${principle.icon} text-primary-600`} style={{ width: '18px', height: '18px' }} />
                    </div>
                    <h3 className="text-foreground-50 font-heading font-semibold text-sm">{principle.title}</h3>
                  </div>
                  <p className="text-secondary-400 text-xs leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}