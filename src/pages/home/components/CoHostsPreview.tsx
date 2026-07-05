import { coHosts } from '@/mocks/homeData';
import { Link } from 'react-router-dom';

export default function CoHostsPreview() {
  return (
    <section className="py-20 md:py-28 bg-background-100" aria-labelledby="cohosts-heading">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-300/40 bg-primary-50 text-primary-700 text-xs font-semibold tracking-widest uppercase mb-5">
            Co-Hosting Organizations
          </span>
          <h2 id="cohosts-heading" className="text-3xl md:text-5xl font-heading font-bold text-foreground-50">
            A Joint Collaborative
            <span className="block text-gradient-gold">Partnership</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coHosts.map((coHost) => (
            <div key={coHost.name} className="glass-card overflow-hidden group cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={coHost.image}
                    alt={coHost.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/60 md:bg-gradient-to-t md:from-white/80 md:to-transparent" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-2">
                    {coHost.acronym}
                  </span>
                  <h3 className="text-foreground-50 font-heading text-xl font-semibold mb-3">
                    {coHost.name}
                  </h3>
                  <p className="text-foreground-400 text-sm leading-relaxed mb-4">
                    {coHost.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-foreground-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line" style={{ width: '12px', height: '12px' }} />
                      Est. {coHost.founded}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line" style={{ width: '12px', height: '12px' }} />
                      {coHost.headquarters}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/co-hosts" className="btn-outline text-sm">
            Learn About Our Co-Hosts
            <i className="ri-arrow-right-line" style={{ width: '16px', height: '16px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}