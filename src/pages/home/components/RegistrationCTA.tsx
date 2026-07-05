import { Link } from 'react-router-dom';

export default function RegistrationCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background-50 to-accent-50" />
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Wide%20panoramic%20view%20of%20a%20grand%20modern%20auditorium%20with%20warm%20golden%20stage%20lighting%2C%20empty%20seats%20ready%20for%20a%20conference%2C%20dramatic%20architectural%20design%2C%20professional%20conference%20venue%2C%20warm%20cream%20and%20gold%20tones%2C%20cinematic%20composition%2C%20bright%20airy%20atmosphere&width=1920&height=800&seq=cta-auditorium-light-01&orientation=landscape"
          alt="Grand conference auditorium"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative z-10 section-container">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="lg:max-w-xl">
            <h2 id="cta-heading" className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
              Ready to Join the
              <span className="block text-gradient-gold">Global Movement?</span>
            </h2>
          </div>

          <div className="lg:text-right lg:max-w-md">
            <p className="text-foreground-400 text-base md:text-lg leading-relaxed mb-8">
              Secure your place at the world&apos;s premier disability inclusion summit. 
              Early bird registration includes exclusive access to all sessions, networking events, and digital resources.
            </p>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/register" className="btn-primary golden-shimmer text-base">
                Register Now
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 ml-1">
                  <i className="ri-arrow-right-line text-sm" style={{ width: '14px', height: '14px' }} />
                </span>
              </Link>
              <Link to="/call-for-papers" className="btn-outline text-base">
                Submit a Paper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}