import { useState, useEffect } from 'react';
import { currentEdition } from '@/mocks/conferenceData';

export default function StatsBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-10 md:py-14 bg-gradient-to-r from-primary-500 via-primary-500 to-accent-500" aria-label="Summit statistics">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {currentEdition.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="block text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
                {stat.value}
              </span>
              <span className="block text-sm md:text-base text-white/80 mt-2 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}