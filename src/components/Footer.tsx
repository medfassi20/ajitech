import { Zap, ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-trust-800">
                <ShoppingCart className="absolute h-4 w-4 text-white/90" />
              </span>
              <span className="font-display text-xl font-extrabold text-white">أجي تيك</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              متجر مغربي متخصص في المعدات التقنية والسماعات اللاسلكية. جودة مضمونة ودفع عند
              الاستلام في كل المدن المغربية.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="text-ink-400 transition-colors hover:text-brand-400">
                  المواصفات التقنية
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-ink-400 transition-colors hover:text-brand-400">
                  آراء الزبناء
                </a>
              </li>
              <li>
                <a href="#article" className="text-ink-400 transition-colors hover:text-brand-400">
                  دليل الشراء
                </a>
              </li>
              <li>
                <a href="#order" className="text-ink-400 transition-colors hover:text-brand-400">
                  اطلب الآن
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-ink-500">
          <p>© {new Date().getFullYear()} أجي تيك — AjiTech. جميع الحقوق محفوظة.</p>
          <p className="mt-1.5">
            سماعة KATECHE KA-115 اللاسلكية — أفضل مضخم صوت محمول في المغرب | الدفع عند الاستلام
          </p>
        </div>
      </div>
    </footer>
  );
}
