import { useState, type FormEvent } from 'react';
import { User, Phone, MapPin, Home, Loader2, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { useOrderSubmit, type OrderForm } from '../hooks/useOrderSubmit';
import SuccessModal from './SuccessModal';

const CITIES = [
  'الدار البيضاء',
  'الرباط',
  'مراكش',
  'فاس',
  'طنجة',
  'أكادير',
  'مكناس',
  'وجدة',
  'القنيطرة',
  'تطوان',
  'آسفي',
  'المحمدية',
  'الجديدة',
  'بني ملال',
  'الناظور',
  'خريبكة',
  'سطات',
  'أخرى',
];

const EMPTY: OrderForm = { name: '', phone: '', city: '', address: '' };

export default function OrderFormSection() {
  const { state, submit, reset } = useOrderSubmit();
  const [form, setForm] = useState<OrderForm>(EMPTY);
  const [touched, setTouched] = useState(false);

  const isValid =
    form.name.trim().length >= 3 &&
    /^(?:\+212|0)([5-7])\d{8}$/.test(form.phone.replace(/[\s-]/g, '')) &&
    form.city.trim() !== '' &&
    form.address.trim().length >= 5;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValid || state === 'submitting') return;
    submit(form);
  }

  return (
    <section id="order" className="relative scroll-mt-20 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-400">
            أكمل طلبك الآن
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            اطلب سماعة KATECHE KA-115 — الدفع عند الاستلام
          </h2>
          <p className="mt-3 text-ink-300">
            املأ المعلومات التالية وسيتصل بك فريقنا في أقرب وقت لتأكيد الطلب. لا دفع مسبق.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-ink-900/60 p-6 shadow-card backdrop-blur sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              name="name"
              label="الاسم الكامل"
              icon={User}
              placeholder="الاسم العائلي والشخصي"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              error={touched && form.name.trim().length < 3 ? 'يرجى إدخال الاسم الكامل' : ''}
            />

            <Field
              id="phone"
              name="phone"
              label="رقم الهاتف"
              icon={Phone}
              type="tel"
              dir="ltr"
              placeholder="06 12 34 56 78"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              error={
                touched &&
                !/^(?:\+212|0)([5-7])\d{8}$/.test(form.phone.replace(/[\s-]/g, ''))
                  ? 'رقم هاتف مغربي غير صحيح'
                  : ''
              }
            />

            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-ink-200"
              >
                <MapPin className="h-4 w-4 text-brand-400" />
                المدينة
              </label>
              <select
                id="city"
                name="city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className={`w-full rounded-xl border bg-ink-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 ${
                  touched && !form.city ? 'border-red-500/60' : 'border-white/10'
                }`}
              >
                <option value="" disabled>
                  اختر مدينتك
                </option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {touched && !form.city && (
                <p className="mt-1.5 text-xs text-red-400">يرجى اختيار المدينة</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-ink-200"
              >
                <Home className="h-4 w-4 text-brand-400" />
                العنوان السكني
              </label>
              <textarea
                id="address"
                name="address"
                rows={2}
                placeholder="الحي، الزنقة، رقم المنزل، أقرب نقطة دالة..."
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className={`w-full resize-none rounded-xl border bg-ink-950/60 px-4 py-3 text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 ${
                  touched && form.address.trim().length < 5 ? 'border-red-500/60' : 'border-white/10'
                }`}
              />
              {touched && form.address.trim().length < 5 && (
                <p className="mt-1.5 text-xs text-red-400">يرجى إدخال عنوان واضح للتوصيل</p>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-ink-950/40 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-4 text-xs text-ink-300">
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-brand-400" /> شحن مجاني
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-400" /> الدفع عند الاستلام
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={state === 'submitting'}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-lg font-bold text-white shadow-glow transition-all hover:bg-brand-400 hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {state === 'submitting' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                جارٍ إرسال الطلب...
              </>
            ) : (
              <>
                <CheckCircle2 className="h-5 w-5" />
                تأكيد الطلب - الدفع عند الاستلام
              </>
            )}
          </button>

          <p className="mt-3 text-center text-xs text-ink-500">
            بالضغط على "تأكيد الطلب" أنت توافق على أن يتصل بك فريقنا لتأكيد الطلب. لا دفع مسبق.
          </p>
        </form>
      </div>

      <SuccessModal
        open={state === 'success'}
        onClose={() => {
          reset();
          setForm(EMPTY);
          setTouched(false);
        }}
      />
    </section>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  dir?: 'ltr' | 'rtl';
  error?: string;
};

function Field({
  id,
  name,
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = 'text',
  dir,
  error,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-ink-200"
      >
        <Icon className="h-4 w-4 text-brand-400" />
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        dir={dir}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-ink-950/60 px-4 py-3 text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 ${
          error ? 'border-red-500/60' : 'border-white/10'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
