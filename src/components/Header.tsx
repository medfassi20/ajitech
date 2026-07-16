import { Zap, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-trust-800 shadow-glow">
            <ShoppingCart className="absolute h-4 w-4 text-white/90" />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            أجي تيك
          </span>
        </a>

        <a
          href="#order"
          className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-400 hover:shadow-glow"
        >
          اطلب الآن
        </a>
      </div>
    </header>
  );
}
