import { missionPillars } from '@/mocks/homeData';
import { Link } from 'react-router-dom';

export default function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-background-50" aria-labelledby="mission-heading">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="lg:w-5/12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary-300/50 bg-primary-50 text-primary-700 text-xs font-semibold tracking-widest uppercase mb-5">
              Our Mission
            </span>
            <h2 id="mission-heading" className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
              Disability Inclusion
              <span className="block text-gradient-gold">and Accessible Employment</span>
              for Sustainable Development
            </h2>
          </div>

          <div className="lg:w-7/12">
            <p className="text-foreground-400 text-base md:text-lg leading-relaxed mb-8">
              The International Summit on Disability Inclusion &amp; Accessibility 2027 brings together the world&apos;s foremost thinkers, 
              practitioners, and advocates to transform how we approach inclusive employment, accessible technology, and equitable 
              policy frameworks. Co-hosted by Lead Disability Inclusive Society and Hope Inclusive Consultancy Inc., this three-day 
              summit is a catalyst for systemic change.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              {missionPillars.map((pillar) => (
                <div key={pillar.title} className="glass-card-hover p-6 group cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-50 border border-primary-200 mb-4 group-hover:bg-primary-100 transition-all duration-300">
                    <i className={`${pillar.icon} text-primary-600 text-xl`} style={{ width: '20px', height: '20px' }} />
                  </div>
                  <h3 className="text-foreground-50 font-heading text-lg font-semibold mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/mission" className="btn-ghost text-sm group">
                Read the Full Summit Charter
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" style={{ width: '16px', height: '16px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}