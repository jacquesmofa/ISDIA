import { testimonials } from '@/mocks/homeData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background-50" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-300/40 bg-primary-50 text-primary-700 text-xs font-semibold tracking-widest uppercase mb-5">
            Global Voices
          </span>
          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-heading font-bold text-foreground-50">
            What Past Attendees
            <span className="block text-gradient-gold">Are Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card-hover p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-foreground-50 font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-foreground-400 text-xs">
                    {testimonial.role} <span className="text-primary-600">{testimonial.org}</span>
                  </p>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-2 -left-1 text-4xl font-heading text-primary-300/40 select-none" aria-hidden="true">&ldquo;</span>
                <p className="text-foreground-400 text-sm leading-relaxed relative z-10 pl-3">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}