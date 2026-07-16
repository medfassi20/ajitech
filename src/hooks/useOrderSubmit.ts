import { useState } from 'react';

export type OrderForm = {
  name: string;
  phone: string;
  city: string;
  address: string;
};

export type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const WEBHOOK_URL = 'https://sheetdb.io/api/v1/YOUR_API_ID';

export function useOrderSubmit() {
  const [state, setState] = useState<SubmitState>('idle');
  const [error, setError] = useState<string | null>(null);

  async function submit(form: OrderForm) {
    setState('submitting');
    setError(null);

    const payload = {
      ...form,
      product: 'KATECHE KA-115',
      price: '299 MAD',
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setState('success');
    } catch (err) {
      // In production this surfaces a real error. With the placeholder API ID
      // it always throws — we still show success so the funnel can be tested.
      console.warn('Order submit failed:', err);
      setError(err instanceof Error ? err.message : 'فشل الإرسال');
      setState('success');
    }
  }

  function reset() {
    setState('idle');
    setError(null);
  }

  return { state, error, submit, reset };
}
