import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
    >
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md animate-scale-in overflow-hidden rounded-3xl border border-brand-500/30 bg-ink-900 shadow-glow-lg">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />

        <button
          onClick={onClose}
          aria-label="إغلاق"
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ink-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative px-6 py-10 text-center sm:px-8">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-500/15">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 id="success-title" className="font-display text-2xl font-extrabold text-white">
            شكراً لك!
          </h3>
          <p className="mt-3 leading-relaxed text-ink-300">
            تم تسجيل طلبك بنجاح. سيتصل بك فريقنا في أقرب وقت لتأكيد العنوان وإرسال طلبيتك.
          </p>

          <div className="mt-6 rounded-2xl bg-ink-950/50 p-4 text-sm text-ink-300">
            <p className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              الدفع عند الاستلام — لا دفع مسبق
            </p>
            <p className="mt-1 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              توصيل مجاني خلال 24-72 ساعة
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-full bg-brand-500 px-6 py-3 font-bold text-white transition-all hover:bg-brand-400"
          >
            حسناً، فهمت
          </button>
        </div>
      </div>
    </div>
  );
}
