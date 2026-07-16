import { useState } from 'react';
import { Check, Star, Zap, BatteryCharging, Lightbulb, Link2, Music, ChevronLeft, ChevronRight } from 'lucide-react';
// On importe le tableau complet de tes images locales SEO-friendly
import { PRODUCT_IMAGES } from '../data'; 

const benefits = [
  { icon: Lightbulb, text: 'إضاءة LED ديناميكية تتفاعل مع الموسيقى' },
  { icon: Link2, text: 'دعم TWS لربط سماعتين بصوت ستيريو' },
  { icon: BatteryCharging, text: 'بطارية قابلة للشحن تدوم حتى 8 ساعات' },
  { icon: Music, text: 'مداخل TF / USB / AUX متعددة' },
];

export default function Hero() {
  // État pour gérer l'image active du carrousel
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-trust-800/30 blur-[120px]" />
      </div>

      {/* Changement max-w-6xl à max-w-7xl pour donner plus d'espace à l'encadré */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-20">
        
        {/* Partie Texte : Prend 5 colonnes sur 12 pour laisser de la place à l'image */}
        <div className="animate-fade-up text-center lg:col-span-5 lg:text-right">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-300">
            <Zap className="h-4 w-4" />
            الأكثر مبيعاً في المغرب
          </div>

          <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            استمتع بصوت قوي وأجواء خيالية أينما كنت مع سماعة{' '}
            <span className="bg-gradient-to-l from-brand-300 to-brand-500 bg-clip-text text-transparent">
              KATECHE KA-115
            </span>{' '}
            اللاسلكية!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300 lg:mx-0 lg:text-lg">
            أفضل مضخم صوت محمول في المغرب يجمع بين قوة الصوت، إضاءة LED الساحرة، والبطارية
            الطويلة العمر. سماعة بلوتوث مع ميكروفون مثالية لكل لحظاتك — مع{' '}
            <strong className="text-brand-300">الدفع عند الاستلام</strong> وشحن مجاني.
          </p>

          <ul className="mx-auto mt-7 grid max-w-md gap-3 text-right lg:mx-0">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-center gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-400">
                  <b.icon className="h-4 w-4" />
                </span>
                <span className="text-ink-200">{b.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#order"
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-glow transition-all hover:bg-brand-400 hover:shadow-glow-lg animate-pulse-glow sm:w-auto"
            >
              اضغط هنا للطلب الآن
              <span className="transition-transform group-hover:-translate-x-1">←</span>
            </a>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-400 text-accent-400" />
              ))}
              <span className="mr-2 text-sm text-ink-400">4.9/5 — أكثر من 1200 زبون</span>
            </div>
          </div>
        </div>

        {/* Partie Image / Carrousel : Prend désormais 7 colonnes sur 12 (Encadré plus grand) */}
        <div className="relative animate-scale-in lg:col-span-7">
          {/* max-w-md augmenté à max-w-xl pour élargir visiblement le conteneur */}
          <div className="relative mx-auto max-w-xl">
            
            {/* Effet lumineux arrière-plan agrandi */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/30 via-transparent to-trust-800/30 blur-2xl" />
            
            {/* Cadre principal */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/60 p-2 shadow-card backdrop-blur">
              <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-black">
                <img
                  src={PRODUCT_IMAGES[activeIndex]}
                  alt={`سماعة KATECHE KA-115 - صورة ${activeIndex + 1}`}
                  width={900}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full object-contain transition-all duration-300" 
                  // object-contain permet de ne pas couper/étirer l'affiche publicitaire ou la boîte
                />

                {/* Flèches de navigation sur l'image */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 backdrop-blur-sm transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 backdrop-blur-sm transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Miniatures interactives sous l'image principale */}
              <div className="mt-3 flex justify-center gap-2 px-2 pb-1">
                {PRODUCT_IMAGES.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 bg-ink-950 transition-all ${
                      activeIndex === index ? 'border-brand-500 scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt="Miniature" 
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Badge Prix ajusté pour le nouveau conteneur */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/90 px-5 py-3 shadow-card backdrop-blur sm:-left-4">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-extrabold text-brand-400">185 درهم</span>
              </div>
            </div>

            {/* Badge Confiance */}
            <div className="absolute -top-4 -right-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-2.5 shadow-card backdrop-blur sm:-right-4">
              <Check className="h-5 w-5 text-brand-400" />
              <span className="text-sm font-semibold text-white">الدفع عند الاستلام</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}