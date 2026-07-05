import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { Link } from 'react-router-dom';

export default function CallForPapers() {
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
                Academic Submission
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Call for Papers
                <span className="block text-gradient-gold">&amp; Research Submissions</span>
              </h1>
              <p className="text-secondary-400 text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                Submit your research papers, case studies, and presentation proposals for ISDIA 2027. 
                All submissions undergo peer review. Deadline: December 15, 2026.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 mb-8">
                <h2 className="text-xl font-heading font-bold text-foreground-50 mb-4">Submission Guidelines</h2>
                <div className="space-y-4 text-secondary-400 text-sm leading-relaxed">
                  <p>We welcome submissions aligned with our summit tracks: Corporate Leadership &amp; Inclusive Workplaces, Accessible Technology &amp; Digital Inclusion, and Policy, Advocacy &amp; Global Frameworks.</p>
                  <p><strong className="text-foreground-50">Abstracts:</strong> 300–500 words outlining research objectives, methodology, and key findings.</p>
                  <p><strong className="text-foreground-50">Full Papers:</strong> 5,000–8,000 words following APA 7th edition formatting.</p>
                  <p><strong className="text-foreground-50">Workshop Proposals:</strong> 1,000–1,500 words describing format, learning objectives, and target audience.</p>
                </div>
              </div>

              <div className="glass-card p-8 mb-8">
                <h2 className="text-xl font-heading font-bold text-foreground-50 mb-4">Accessibility Requirements</h2>
                <p className="text-secondary-400 text-sm leading-relaxed mb-4">
                  All submitted documents must be screen-reader accessible. Our automated accessibility checker will 
                  verify your PDF and provide suggestions for fixing missing alt-text, heading structures, and reading order.
                </p>
                <p className="text-accent-400 text-sm">
                  Accepted papers will be published in the ISDIA 2027 Proceedings with DOI registration.
                </p>
              </div>

              <div className="text-center">
                <Link to="/register" className="btn-primary golden-shimmer text-sm">
                  Register &amp; Submit Paper
                  <i className="ri-upload-cloud-line" style={{ width: '16px', height: '16px' }} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}