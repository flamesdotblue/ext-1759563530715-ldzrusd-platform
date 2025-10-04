import { Rocket, Shield, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast Integration',
    desc: 'Drop-in Spline 3D scenes with minimal code and strong performance out of the box.',
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    desc: 'Built on modern tooling with best practices for stability in production.',
  },
  {
    icon: Layers,
    title: 'Composable UI',
    desc: 'Layer your content with gradients and components without blocking interactions.',
  },
  {
    icon: Sparkles,
    title: 'Polished Animations',
    desc: 'Subtle motion and tasteful UI to elevate your brand and storytelling.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to launch</h2>
          <p className="mt-3 text-white/70">A clean, modern foundation powered by Vite + React + Tailwind. Extend with your data and ship quickly.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 hover:bg-white/[0.07] transition">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-neutral-950" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
