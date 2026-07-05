import { useState, useEffect, useRef, useCallback } from 'react';
import CountdownTimer from '@/components/feature/CountdownTimer';
import { currentEdition } from '@/mocks/conferenceData';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVideoClick = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-background-50"
      role="banner"
      aria-label="ISDIA 2027 Summit Hero"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onClick={handleVideoClick}
          style={{ cursor: 'pointer' }}
        >
          <source src="https://storage.readdy-site.link/project_files/89d4d3db-0053-49f7-b4ef-6d82630ecc38/9a34beba-0453-4ae6-baef-80260edbfe06_Global-Conference-Master-Prompt.docx" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/80 to-white/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-transparent to-white/20" />
      </div>

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Warm%20golden%20sunset%20light%20streaming%20through%20modern%20conference%20hall%20with%20diverse%20professionals%20including%20wheelchair%20users%20and%20sign%20language%20interpreters%20networking%2C%20cinematic%20atmosphere%2C%20soft%20bokeh%20effect%2C%20warm%20amber%20and%20gold%20tones%2C%20professional%20yet%20inclusive%20environment&width=1920&height=1080&seq=hero-fallback-light-01&orientation=landscape')`,
          }}
          role="img"
          aria-label="Diverse professionals collaborating at an inclusive conference"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <div className="flex-1 w-full space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-400/40 bg-primary-50 text-primary-700 text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                {currentEdition.dates.start} – {currentEdition.dates.end}
              </span>
            </div>

            <h1 className={`transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground-50 leading-tight">
                International Summit
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mt-2">
                <span className="text-gradient-gold">on Disability Inclusion</span>
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-100 leading-tight mt-2">
                &amp; Accessibility 2027
              </span>
            </h1>

            <p className={`text-base md:text-lg text-foreground-400 max-w-xl leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {currentEdition.tagline}. Join global leaders, policymakers, and advocates for three transformative days of dialogue and action.
            </p>

            <div className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a href="/register" className="btn-primary golden-shimmer text-base">
                Register Now
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 ml-1">
                  <i className="ri-arrow-right-line text-sm" style={{ width: '14px', height: '14px' }} />
                </span>
              </a>
              <a href="/agenda" className="btn-outline text-base">
                View Agenda
                <i className="ri-calendar-line" style={{ width: '16px', height: '16px' }} />
              </a>
            </div>

            <div className={`pt-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-foreground-400 text-xs uppercase tracking-widest mb-3">Countdown to Summit</p>
              <CountdownTimer />
            </div>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div
              className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              aria-hidden="true"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary-100/80 to-accent-100/60 backdrop-blur-3xl flex items-center justify-center border border-primary-200/40">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary-200/80 to-accent-200/60 backdrop-blur-2xl flex items-center justify-center border border-primary-300/30">
                  <div className="text-center px-8">
                    <span className="block text-5xl md:text-6xl font-heading font-bold text-foreground-100">ISDIA</span>
                    <span className="block text-7xl md:text-8xl font-heading font-bold text-gradient-gold mt-1">2027</span>
                    <span className="block text-foreground-400 text-xs tracking-widest uppercase mt-3">
                      {currentEdition.venue.city}, {currentEdition.venue.country}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}