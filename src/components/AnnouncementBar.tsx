import { Truck, Phone } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-l from-brand-600 via-brand-500 to-brand-600 text-white">
      <div className="flex whitespace-nowrap py-2.5 text-sm font-medium">
        <div className="flex animate-marquee items-center gap-12 pl-12">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-2">
              <Truck className="h-4 w-4 flex-shrink-0" />
              شحن مجاني والدفع عند الاستلام في كل المدن المغربية 🇲🇦
              <span className="mx-3 text-brand-200">•</span>
              <Phone className="h-4 w-4 flex-shrink-0" />
              توصيل سريع خلال 24-72 ساعة
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
