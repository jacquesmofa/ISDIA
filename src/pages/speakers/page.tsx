import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { allSpeakers } from '@/mocks/speakersData';
import { Link } from 'react-router-dom';

export default function Speakers() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const tracks = ['All', 'Track A', 'Track B', 'Track C'];
  const days = [
    { value: 0, label: 'All Days' },
    { value: 1, label: 'Day 1 — Apr 6' },
    { value: 2, label: 'Day 2 — Apr 7' },
    { value: 3, label: 'Day 3 — Apr 8' },
  ];

  const filtered = allSpeakers.filter((s) => {
    const trackMatch = selectedTrack === 'All' || s.track === selectedTrack;
    const dayMatch = selectedDay === 0 || s.day === selectedDay;
    return trackMatch && dayMatch;
  });

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-50 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-5">
                Distinguished Voices
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Keynote Speakers
                <span className="block text-gradient-gold">&amp; Panelists</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {tracks.map((track) => (
                <button
                  key={track}
                  onClick={() => setSelectedTrack(track)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedTrack === track
                      ? 'bg-primary-100 text-primary-700 border border-primary-300/60'
                      : 'border border-secondary-200 text-secondary-500 hover:text-secondary-400'
                  }`}
                  aria-pressed={selectedTrack === track}
                >
                  {track}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {days.map((d) => (
                <button
                  key={d.value}
                  onClick={() => setSelectedDay(d.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    selectedDay === d.value
                      ? 'bg-accent-100 text-accent-700 border border-accent-300/60'
                      : 'border border-secondary-200 text-secondary-500 hover:text-secondary-400'
                  }`}
                  aria-pressed={selectedDay === d.value}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((speaker) => (
                <div key={speaker.id} className="glass-card-hover overflow-hidden group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={`${speaker.name}, ${speaker.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-transparent to-transparent" />
                    {speaker.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-primary-500/80 text-white text-[10px] font-bold uppercase backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-secondary-100 text-secondary-500 text-[10px] font-semibold uppercase border border-secondary-200">
                        {speaker.track}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-100 text-secondary-500 text-[10px] font-semibold uppercase border border-secondary-200">
                        Day {speaker.day}
                      </span>
                    </div>
                    <h3 className="text-foreground-50 font-heading text-lg font-semibold">{speaker.name}</h3>
                    <p className="text-primary-400 font-heading text-sm mt-1 font-medium">{speaker.title}</p>
                    <p className="text-secondary-500 text-xs mt-0.5">{speaker.organization}</p>
                    <p className="text-secondary-400 text-xs mt-3 leading-relaxed line-clamp-2">{speaker.bio}</p>
                    <div className="mt-3 pt-3 border-t border-secondary-200">
                      <p className="text-secondary-400 text-xs flex items-center gap-1">
                        <i className="ri-mic-line text-primary-400" style={{ width: '12px', height: '12px' }} />
                        {speaker.sessionTitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background-100 border-t border-secondary-200">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 mb-4">
              Want to Speak at ISDIA?
            </h2>
            <p className="text-secondary-400 text-base max-w-xl mx-auto leading-relaxed mb-6">
              Submit your paper or presentation proposal through our Call for Papers portal. 
              We welcome contributions from researchers, practitioners, and advocates worldwide.
            </p>
            <Link to="/call-for-papers" className="btn-primary golden-shimmer text-sm">
              Submit a Proposal
              <i className="ri-article-line" style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}