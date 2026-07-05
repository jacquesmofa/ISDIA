import { featuredSpeakers } from '@/mocks/homeData';
import { Link } from 'react-router-dom';

export default function SpeakersPreview() {
  return (
    <section className="py-20 md:py-28 bg-background-100" aria-labelledby="speakers-heading">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-start gap-10 mb-14">
          <div className="lg:w-1/3">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-300/40 bg-primary-50 text-primary-700 text-xs font-semibold tracking-widest uppercase mb-5">
              Distinguished Voices
            </span>
            <h2 id="speakers-heading" className="text-3xl md:text-5xl font-heading font-bold text-foreground-50 leading-tight">
              Featured
              <span className="block text-gradient-gold">Keynote Speakers</span>
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-foreground-400 text-base leading-relaxed">
              Our speakers represent the vanguard of disability inclusion — from UN policymakers and Fortune 500 executives 
              to groundbreaking researchers and disability rights advocates. Each brings a unique perspective on building a 
              more accessible and equitable world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSpeakers.map((speaker) => (
            <div key={speaker.name} className="glass-card-hover overflow-hidden group cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={`${speaker.name}, ${speaker.role}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-foreground-50 font-heading text-lg font-semibold">
                  {speaker.name}
                </h3>
                <p className="text-primary-600 font-heading text-sm mt-1 font-medium">
                  {speaker.role}
                </p>
                <p className="text-foreground-400 text-xs mt-1">
                  {speaker.organization}
                </p>
                {speaker.featured ? (
                  <div className="mt-4">
                    <Link to="/speakers" className="btn-primary golden-shimmer text-sm py-2.5 px-6 w-full inline-flex justify-center">
                      View Profile
                    </Link>
                  </div>
                ) : (
                  <div className="mt-4">
                    <Link to="/speakers" className="btn-outline text-sm py-2.5 px-6 w-full inline-flex justify-center">
                      View Profile
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/speakers" className="btn-ghost text-sm group">
            Meet All Speakers
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" style={{ width: '16px', height: '16px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}