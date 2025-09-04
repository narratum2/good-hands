import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-porcelain py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-semibold mb-4"
        >
          You’re in good hands.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-ink/70"
        >
          Experience the confidence that comes from curated beauty services in Lisbon.
        </motion.p>
        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="inline-block mt-8 px-6 py-3 bg-gold text-ink font-medium rounded-md hover:bg-gold/90 transition-colors"
        >
          Book now
        </motion.a>
      </div>
    </section>
  );
}