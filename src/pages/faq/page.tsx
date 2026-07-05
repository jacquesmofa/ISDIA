import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';

const faqItems = [
  {
    question: 'When and where is ISDIA 2027 taking place?',
    answer: 'ISDIA 2027 will be held from April 6–8, 2027, in Toronto, Canada. The main venue is the Metro Toronto Convention Centre, with select sessions available via hybrid live-stream for remote delegates worldwide.',
  },
  {
    question: 'What accessibility accommodations are provided at the venue?',
    answer: 'The Metro Toronto Convention Centre is fully wheelchair accessible with step-free access throughout. We provide real-time captioning (CART) for all sessions, sign language interpretation (ASL, BSL, and International Sign), hearing loop systems, braille and large-print materials, quiet sensory rooms, and service animal relief areas. All digital platforms are WCAG 2.2 AAA compliant.',
  },
  {
    question: 'How do I register for the summit?',
    answer: 'Registration is available through our secure online ticketing desk at the Register page. We offer multiple ticket tiers: General Admission, Corporate, Academic, Student, and Special Needs Access rates. Early bird pricing is available until January 31, 2027. Payment is accepted via credit card, PayPal, and international bank transfer.',
  },
  {
    question: 'Are travel and accommodation arrangements provided?',
    answer: 'We have negotiated discounted rates at several accessible hotels within walking distance of the venue. A list of recommended accommodations with detailed accessibility features is provided upon registration. Travel subsidies may be available for delegates from developing countries and disability-led organizations — please contact our delegate support team for details.',
  },
  {
    question: 'Can I attend virtually if I cannot travel to Toronto?',
    answer: 'Absolutely. ISDIA 2027 is a hybrid summit. All keynote sessions, panel discussions, and selected workshops will be live-streamed with real-time captioning and sign language interpretation. Virtual delegates can participate in Q&A sessions, access on-demand recordings, and join online networking rooms.',
  },
  {
    question: 'How can I submit a paper or presentation proposal?',
    answer: 'The Call for Papers (CFP) portal is open on our website. Researchers, practitioners, and advocates are invited to submit abstracts, full papers, or workshop proposals aligned with our summit tracks. All submissions undergo peer review. The submission deadline is December 15, 2026. Accepted papers will be published in the ISDIA 2027 Proceedings.',
  },
  {
    question: 'What language support is available during the summit?',
    answer: 'Simultaneous interpretation is provided in English, French, Arabic, Spanish, and International Sign Language. Our digital platform supports automatic translation across 50+ languages. We also offer a "Plain Language" mode that simplifies complex academic or legal content for broader accessibility.',
  },
  {
    question: 'Is there a code of conduct for the summit?',
    answer: 'Yes. ISDIA 2027 maintains a strict code of conduct that prohibits all forms of discrimination, harassment, and exclusion. We are committed to creating a safe, respectful, and welcoming environment for all delegates. The full code of conduct is available on our website, and trained accessibility stewards are present throughout the venue.',
  },
  {
    question: 'How can organizations become sponsors or exhibitors?',
    answer: 'Sponsorship and exhibitor packages are available at multiple levels — from Global Platinum Partner to Community Supporter. Each package includes branded exhibition space, speaker opportunities, delegate passes, and digital visibility. Please visit our Sponsors page or contact our partnership team for the full prospectus.',
  },
  {
    question: 'Will sessions be recorded and available afterward?',
    answer: 'Yes. All plenary sessions, keynotes, and panel discussions (with speaker consent) are recorded and made available in our on-demand video archive within 48 hours of the session. Recordings include captions, transcripts, and audio descriptions where applicable.',
  },
  {
    question: 'What COVID-19 or health safety measures are in place?',
    answer: 'ISDIA 2027 follows all applicable public health guidelines for large gatherings. The venue features enhanced ventilation, hand sanitizing stations, and spacious layouts that accommodate physical distancing preferences. Mask-wearing is welcomed but not mandatory unless required by prevailing health regulations at the time of the event.',
  },
  {
    question: 'How can I volunteer or apply to be a sign language interpreter?',
    answer: 'We welcome volunteers and qualified sign language interpreters! Please visit our Volunteer page to submit your application. Volunteers receive complimentary access to sessions during their off-duty hours, meals, and a certificate of participation. Sign language interpreters are compensated at professional rates.',
  },
];

export default function FAQ() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-50 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-5">
                Help &amp; Information
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Frequently Asked
                <span className="block text-gradient-gold">Questions</span>
              </h1>
              <p className="text-secondary-400 text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                Everything you need to know about attending, presenting, or sponsoring ISDIA 2027. 
                If you cannot find your answer here, please contact our delegate support team.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="glass-card overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="text-foreground-50 font-semibold text-sm md:text-base pr-4 group-hover:text-primary-600 transition-colors duration-300">
                      {item.question}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
                      openIndex === i
                        ? 'border-primary-500/40 bg-primary-500/10 text-primary-600 rotate-45'
                        : 'border-secondary-200 text-secondary-400'
                    }`}>
                      <i className="ri-add-line" style={{ width: '16px', height: '16px' }} />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={`transition-all duration-400 overflow-hidden ${
                      openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                  >
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-secondary-400 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background-100 border-t border-secondary-200">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-secondary-400 text-base max-w-xl mx-auto leading-relaxed mb-6">
              Our delegate support team is available to assist with registration, accessibility 
              requirements, travel arrangements, and any other inquiries.
            </p>
            <a href="mailto:info@isdia2027.org" className="btn-outline text-sm inline-flex">
              <i className="ri-mail-line" style={{ width: '16px', height: '16px' }} />
              Contact Delegate Support
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}