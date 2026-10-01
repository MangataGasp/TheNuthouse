import { motion } from 'framer-motion'
import ImageSlot from './ImageSlot'
import ProcessStep from './ProcessStep'

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  return (
    <section id="about" className="bg-white/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm uppercase tracking-[0.2em] text-roast"
            >
              A home of healthy snacks
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight"
            >
              Made locally. Delivered wherever you need it.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-espresso/80"
            >
              Every batch of TheNuthouse cashews is prepared, roasted and packaged locally, then sent to retailers,
              businesses and customers wherever they are. We keep each stage careful and consistent, so what reaches
              you is the same quality every time.
            </motion.p>
          </div>

          {/* image reveals upward as it enters the viewport */}
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true}}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }} 
            className="aspect-square overflow-hidden rounded-4xl md:aspect-4/5"
          >
            <motion.div
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
              className="h-full w-full"
            >
              <ImageSlot tone="gold" alt="Roasting process at TheNuthouse" label="Process image to be supplied" />
            </motion.div>
          </motion.div>
        </div>

        <ol className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <ProcessStep
            number="01"
            title="Prepare"
            text="Raw cashews are carefully sorted and made ready for roasting."
          />
          <ProcessStep
            number="02"
            title="Roast"
            text="Roasted with care for a natural flavour and a clean crunch."
            delay={0.1}
          />
          <ProcessStep
            number="03"
            title="Package"
            text="Packed neatly and sealed, ready for shelves, gifting and everyday snacking."
            delay={0.2}
          />
          <ProcessStep
            number="04"
            title="Deliver"
            text="Sent to retailers, businesses and customers wherever they are."
            delay={0.3}
          />
        </ol>
      </div>
    </section>
  )
}