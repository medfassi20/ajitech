import {
  Bluetooth,
  Mic,
  Radio,
  BatteryCharging,
  Lightbulb,
  Plug,
  type LucideIcon,
} from 'lucide-react';
import { FEATURES, SPECS } from '../data';
import { useReveal } from '../hooks/useReveal';

const ICONS: Record<string, LucideIcon> = {
  Bluetooth,
  Mic,
  Radio,
  BatteryCharging,
  Lightbulb,
  Plug,
};

export default function Features() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-400">
              المواصفات التقنية
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
              أفضل مضخم صوت محمول في المغرب بمواصفات احترافية
            </h2>
            <p className="mt-4 text-ink-300">
              صُممت سماعة KATECHE KA-115 لتقدم لك تجربة صوتية متكاملة، تجمع بين القوة، النقاء،
              والذكاء العملي.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <article
                  key={f.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/50 p-6 transition-all hover:border-brand-500/40 hover:bg-ink-900/80 hover:shadow-card"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-trust-800/10 text-brand-400 transition-transform group-hover:scale-110">
                      {Icon && <Icon className="h-6 w-6" />}
                    </span>
                    <h3 className="mb-2 font-display text-lg font-bold text-white">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-400">{f.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/40">
            <h3 className="border-b border-white/5 px-6 py-4 font-display text-lg font-bold text-white">
              جدول المواصفات الكامل
            </h3>
            <dl className="grid sm:grid-cols-2">
              {SPECS.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between gap-4 px-6 py-3.5 ${
                    i % 2 === 0 ? 'sm:border-l' : ''
                  } border-b border-white/5`}
                >
                  <dt className="text-sm text-ink-400">{s.label}</dt>
                  <dd className="text-sm font-semibold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
