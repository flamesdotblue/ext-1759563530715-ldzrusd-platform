import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[92vh] overflow-hidden">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/20 to-neutral-950" />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Build modern experiences with immersive 3D interfaces
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 text-lg text-white/80"
            >
              Multiple little screens in two configurations — aligned at center and as a grid. A digital, corporate and innovative theme to power your product story.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-white/90 transition"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition"
              >
                Explore Features
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
