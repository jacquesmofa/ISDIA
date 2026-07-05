import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { agendaSessions, days, tracks, AgendaSession } from '@/mocks/agendaData';
import { Link } from 'react-router-dom';

const typeStyles: Record<AgendaSession['type'], string> = {
  keynote: 'bg-primary-500/15 text-primary-600 border-primary-300/40',
  panel: 'bg-accent-100 text-accent-700 border-accent-300/50',
  workshop: 'bg-secondary-100 text-secondary-600 border-secondary-300/40',
  breakout: 'bg-secondary-400/10 text-secondary-400 border-secondary-300/20',
};

export default function Agenda() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState<string>('All Tracks');

  const filtered = agendaSessions.filter(
    (s) => s.day === selectedDay && (selectedTrack === 'All Tracks' || s.track === selectedTrack)
  );

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-background-50">
          <div className="section-container">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-50 text-primary-600 text-xs font-semibold tracking-widest uppercase mb-5">
                Three-Day Program
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
                Master Multi-Track
                <span className="block text-gradient-gold">Agenda Grid</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {days.map((d) => (
                <button
                  key={d.day}
                  onClick={() => setSelectedDay(d.day)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedDay === d.day
                      ? 'bg-primary-500 text-white'
                      : 'border border-secondary-200 text-secondary-500 hover:text-foreground-100 hover:border-secondary-300'
                  }`}
                  aria-pressed={selectedDay === d.day}
                >
                  <span className="block">{d.label}</span>
                  <span className="block text-xs opacity-70 mt-0.5">{d.date}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {tracks.map((track) => (
                <button
                  key={track}
                  onClick={() => setSelectedTrack(track)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedTrack === track
                      ? 'bg-accent-100 text-accent-700 border border-accent-300/60'
                      : 'border border-secondary-200 text-secondary-500 hover:text-secondary-400'
                  }`}
                  aria-pressed={selectedTrack === track}
                >
                  {track}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28 bg-background-50">
          <div className="section-container">
            <div className="space-y-4">
              {filtered.map((session) => (
                <div key={session.id} className="glass-card-hover p-5 md:p-6 group cursor-pointer">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-shrink-0 flex items-center gap-3 lg:w-36">
                      <span className="text-primary-400 font-heading font-bold text-lg tabular-nums">
                        {session.startTime}
                      </span>
                      <span className="text-secondary-500 text-sm">–</span>
                      <span className="text-secondary-400 font-heading text-sm tabular-nums">
                        {session.endTime}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase border ${typeStyles[session.type]}`}>
                          {session.type}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-100 text-secondary-500 text-[10px] font-semibold uppercase border border-secondary-200">
                          {session.track}
                        </span>
                        {session.accessible && (
                          <span className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-600 text-[10px] font-semibold uppercase border border-primary-500/20" title="Fully accessible session">
                            <i className="ri-contrast-2-line mr-1" style={{ width: '10px', height: '10px' }} />
                            Accessible
                          </span>
                        )}
                      </div>
                      <h3 className="text-foreground-50 font-heading text-lg font-semibold group-hover:text-primary-400 transition-colors duration-300">
                        {session.title}
                      </h3>
                      <p className="text-secondary-400 text-sm mt-1 line-clamp-2">{session.description}</p>
                    </div>

                    <div className="flex-shrink-0 text-right lg:w-48">
                      <p className="text-foreground-50 font-medium text-sm">{session.speaker}</p>
                      {session.speakerRole && (
                        <p className="text-secondary-500 text-xs mt-0.5">{session.speakerRole}</p>
                      )}
                      <p className="text-secondary-400 text-xs mt-1.5 flex items-center justify-end gap-1">
                        <i className="ri-map-pin-line" style={{ width: '12px', height: '12px' }} />
                        {session.venue}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-secondary-500 text-lg">No sessions match the selected filters.</p>
                  <p className="text-secondary-600 text-sm mt-2">Try selecting a different day or track.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background-100 border-t border-secondary-200">
          <div className="section-container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50 mb-2">
                  Build Your Personal Agenda
                </h2>
                <p className="text-secondary-400 text-sm max-w-lg">
                  Use the Personalized Agenda Builder to select sessions, sync with your calendar, and receive real-time updates on schedule changes.
                </p>
              </div>
              <Link to="/agenda/builder" className="btn-primary golden-shimmer text-sm whitespace-nowrap">
                Open Agenda Builder
                <i className="ri-calendar-check-line" style={{ width: '16px', height: '16px' }} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}