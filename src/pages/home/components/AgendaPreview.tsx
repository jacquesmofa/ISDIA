import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { currentEdition } from '@/mocks/conferenceData';

const trackImages: Record<string, string> = {
  A: 'https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20with%20diverse%20professionals%20including%20wheelchair%20users%20collaborating%20in%20a%20bright%20open%20space%20with%20glass%20walls%20and%20warm%20natural%20lighting%2C%20professional%20atmosphere%2C%20clean%20minimalist%20aesthetic%2C%20inclusive%20workplace%20environment%2C%20cream%20and%20gold%20accents&width=800&height=600&seq=track-corporate-light-01&orientation=landscape',
  B: 'https://readdy.ai/api/search-image?query=Person%20using%20assistive%20technology%20on%20a%20laptop%20with%20braille%20display%20and%20screen%20reader%20software%20in%20a%20bright%20modern%20tech%20workspace%2C%20warm%20natural%20lighting%2C%20professional%20setting%2C%20clean%20composition%2C%20cream%20and%20gold%20accents&width=800&height=600&seq=track-tech-light-02&orientation=landscape',
  C: 'https://readdy.ai/api/search-image?query=International%20conference%20panel%20with%20diverse%20speakers%20discussing%20policy%20documents%20in%20a%20bright%20formal%20setting%20with%20flags%20and%20projection%20screens%2C%20warm%20professional%20lighting%2C%20diplomatic%20atmosphere%2C%20cream%20and%20gold%20accents&width=800&height=600&seq=track-policy-light-03&orientation=landscape',
  D: 'https://readdy.ai/api/search-image?query=University%20lecture%20hall%20with%20diverse%20students%20including%20those%20using%20mobility%20aids%20and%20assistive%20devices%2C%20bright%20modern%20classroom%2C%20warm%20natural%20light%20streaming%20through%20large%20windows%2C%20accessible%20design%2C%20cream%20and%20gold%20accents&width=800&height=600&seq=track-education-light-04&orientation=landscape',
  E: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20facility%20with%20accessible%20design%20features%2C%20wide%20corridors%2C%20clear%20signage%2C%20diverse%20medical%20professionals%20consulting%2C%20bright%20airy%20interior%2C%20warm%20natural%20lighting%2C%20cream%20and%20gold%20accents&width=800&height=600&seq=track-health-light-05&orientation=landscape',
};

export default function AgendaPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const tracks = currentEdition.tracks;

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('div')?.offsetWidth || 340;
    const scrollAmount = direction === 'left' ? -cardWidth - 24 : cardWidth + 24;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScroll, 400);
  };

  const handleScroll = () => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = (el.querySelector('div')?.offsetWidth || 340) + 24;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, tracks.length - 1));
  };

  return (
    <section className="py-20 md:py-28 bg-background-100" aria-labelledby="agenda-preview-heading">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-300/40 bg-primary-50 text-primary-700 text-xs font-semibold tracking-widest uppercase mb-5">
            Multi-Track Program
          </span>
          <h2 id="agenda-preview-heading" className="text-3xl md:text-5xl font-heading font-bold text-foreground-50">
            Three Days of
            <span className="text-gradient-gold"> Transformative Dialogue</span>
          </h2>
          <p className="text-foreground-400 text-base mt-4 max-w-2xl mx-auto">
            Explore our comprehensive multi-track agenda featuring keynote addresses, interactive workshops, panel discussions, and hands-on accessibility labs.
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-secondary-200 text-foreground-300 hover:text-foreground-50 hover:border-primary-300 transition-all duration-300 cursor-pointer"
              aria-label="Scroll tracks left"
            >
              <i className="ri-arrow-left-s-line text-xl" style={{ width: '20px', height: '20px' }} />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-secondary-200 text-foreground-300 hover:text-foreground-50 hover:border-primary-300 transition-all duration-300 cursor-pointer"
              aria-label="Scroll tracks right"
            >
              <i className="ri-arrow-right-s-line text-xl" style={{ width: '20px', height: '20px' }} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {tracks.map((track, i) => (
              <div
                key={track.id}
                className="flex-shrink-0 w-[300px] md:w-[340px] snap-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="glass-card-hover overflow-hidden group cursor-pointer h-full">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={trackImages[track.id] || trackImages.A}
                      alt={`Track ${track.id}: ${track.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-secondary-200/50 text-primary-700 text-xs font-semibold">
                        Track {track.id}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-foreground-500 text-xs">
                        {track.sessions} Sessions
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground-50 font-heading text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {track.title}
                    </h3>
                    <p className="text-foreground-400 text-sm leading-relaxed line-clamp-3">
                      {track.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {tracks.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = 340 + 24;
                el.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                setActiveIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? 'bg-primary-500 w-6' : 'bg-secondary-300 hover:bg-secondary-400'
              }`}
              aria-label={`Go to track ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/agenda" className="btn-outline text-sm">
            Explore Full Agenda
            <i className="ri-arrow-right-line" style={{ width: '16px', height: '16px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}