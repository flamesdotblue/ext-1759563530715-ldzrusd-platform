import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500" />
            <span className="font-semibold tracking-tight">SplineTech</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href="#get-started"
              className="ml-2 inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-white/90 transition"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 text-sm">
            <a href="#features" className="block py-2 text-white/80 hover:text-white">Features</a>
            <a href="#about" className="block py-2 text-white/80 hover:text-white">About</a>
            <a href="#contact" className="block py-2 text-white/80 hover:text-white">Contact</a>
            <a href="#get-started" className="block py-2 text-neutral-900 bg-white rounded-md text-center font-medium">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
