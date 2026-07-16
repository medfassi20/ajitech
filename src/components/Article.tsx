import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function Article() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="article" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <article>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-400">
              دليل شراء
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
              أفضل مضخم صوت محمول في المغرب: لماذا أصبح ضرورة لكل بيت ورحلة؟
            </h2>

            <div className="mt-6 space-y-5 text-base leading-loose text-ink-300">
              <p>
                في السنوات الأخيرة، أصبحت <strong className="text-ink-100">السماعة اللاسلكية
                المحمولة</strong> رفيقاً لا غنى عنه في حياة المغاربة. سواء كنت في نزهة عائلية
                في جبال الأطلس، أو في جلسة شواء مع الأصدقاء على شاطئ أكادير، أو حتى في منزلك
                أثناء تحضير العشاء، فإن جودة الصوت الذي تستمع إليه تصنع الفارق. سماعة{' '}
                <strong className="text-brand-300">KATECHE KA-115</strong> جاءت لتجيب على هذا
                الاحتياج المتنامي، حيث تجمع بين قوة الصوت، تصميمها المحمول، وسعرها في المتناول،
                مع إمكانية <strong className="text-ink-100">الدفع عند الاستلام</strong> التي
                تطمئن الزبون المغربي.
              </p>

              <h3 className="font-display text-xl font-bold text-white">
                رفيق مثالي للرحلات والنزهات في الهواء الطلق
              </h3>

              <p>
                ما يميز <strong className="text-ink-100">أفضل مضخم صوت محمول في المغرب</strong>{' '}
                مثل KA-115 هو تعدد مداخله. فإلى جانب الاتصال عبر بلوتوث 5.0 السريع والمستقر،
                توفر السماعة مداخل TF و USB و AUX، مما يعني أنه يمكنك تشغيل الموسيقى من بطاقة
                الذاكرة أو من الفلاش USB أو حتى ربطها بالتلفاز مباشرة. كما يتيح راديو FM
                المدمج الاستماع للمحطات الإذاعية الوطنية دون الحاجة لاتصال بالإنترنت — ميزة
                عملية جداً في المناطق الجبلية أو أثناء الرحلات البرية.
              </p>

              <h3 className="font-display text-xl font-bold text-white">
                تجربة ترفيهية متكاملة للتجمعات العائلية
              </h3>

              <p>
                على المستوى العملي، تأتي السماعة بـ<strong className="text-ink-100">بطارية قابلة
                للشحن</strong> تدوم حتى ثماني ساعات من التشغيل المتواصل، وهو ما يكفي ليوم كامل
                من الترفيه. وزنها الخفيف ومقبضها العملي يجعلان نقلها بين الغرفة والحديقة أمراً
                سهلاً. أما <strong className="text-ink-100">إضاءة LED الديناميكية</strong> التي
                تتفاعل مع إيقاع الموسيقى، فتضفي لمسة احتفالية مميزة، خصوصاً في الأمسيات
                الصيفية وحفلات الأعراس العائلية. وبفضل دعم تقنية TWS، يمكنك ربط سماعتين معاً
                لاسلكياً للحصول على صوت ستيريو محيطي يملأ المكان.
              </p>

              <h3 className="font-display text-xl font-bold text-white">
                سماعة بلوتوث مع ميكروفون للعمل والمنزل
              </h3>

              <p>
                تظل التجربة غير مكتملة بدون <strong className="text-ink-100">سماعة بلوتوث مع
                ميكروفون</strong>، وهنا تتفوق KA-115 بفضل ميكروفونها المدمج عازل الضوضاء، الذي
                يسمح بالرد على المكالمات دون لمس الهاتف — ميزة لا غنى عنها أثناء القيادة أو
                الطبخ أو الاجتماعات العائلية. وفي النهاية، يبقى القرار سهلاً بفضل سياسة{' '}
                <strong className="text-brand-300">الدفع عند الاستلام</strong> والشحن المجاني
                في كل المدن المغربية، مما يجعل اقتناء سماعة KATECHE KA-115 من متجر أجي تيك
                خياراً مضموناً وآمناً لكل أسرة مغربية.
              </p>
            </div>

            <h3 className="mt-10 font-display text-2xl font-bold text-white">
              الأسئلة الشائعة حول سماعة KATECHE KA-115
            </h3>

            <div className="mt-5 space-y-3">
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen ? 'border-brand-500/40 bg-ink-900/60' : 'border-white/10 bg-ink-900/40'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-right"
                    >
                      <span className="font-semibold text-white">{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-brand-400 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 text-sm leading-relaxed text-ink-300">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
