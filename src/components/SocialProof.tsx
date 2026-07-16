import { Star, Quote, BadgeCheck } from 'lucide-react';
import { REVIEWS } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function SocialProof() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-trust-800/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-400">
              آراء الزبناء
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
              أكثر من 1200 مغربي اختاروا KATECHE KA-115
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-white">4.9</span>
              <span className="text-ink-400">/ 5</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r, i) => (
              <article
                key={r.name}
                className="relative flex flex-col rounded-2xl border border-white/10 bg-ink-900/60 p-6 shadow-card backdrop-blur transition-all hover:border-brand-500/30 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Quote className="absolute left-5 top-5 h-8 w-8 text-brand-500/20" />

                <div className="mb-3 flex">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-200">{r.comment}</p>

                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="flex items-center gap-1 font-bold text-white">
                      {r.name}
                      <BadgeCheck className="h-4 w-4 text-brand-400" />
                    </p>
                    <p className="text-xs text-ink-400">{r.city} — زبون موثّق</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
