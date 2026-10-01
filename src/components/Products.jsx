import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight"
      >
        Pick your crunch.
      </motion.h2>

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          tone="warm"
          alt="Retail pack of TheNuthouse roasted cashews"
          title="Retail Packs"
          text="Beautifully packaged cashews ready for everyday snacking."
          href="https://wa.me/234XXXXXXXXXX?text=Hello%20TheNuthouse%2C%20I%20would%20like%20to%20order%20a%20retail%20pack."
        />
        <ProductCard
          tone="gold"
          delay={0.12}
          alt="Wholesale supply of TheNuthouse roasted cashews"
          title="Wholesale Supply"
          text="Reliable roasted cashews for retailers and resellers."
          href="https://wa.me/234XXXXXXXXXX?text=Hello%20TheNuthouse%2C%20I%20am%20interested%20in%20wholesale."
        />
        <ProductCard
          tone="deep"
          delay={0.24}
          alt="Bulk business order of TheNuthouse roasted cashews"
          title="Bulk & Business Orders"
          text="Bulk orders for offices, events, gifting and business needs."
          href="https://wa.me/234XXXXXXXXXX?text=Hello%20TheNuthouse%2C%20I%20would%20like%20to%20place%20a%20bulk%20order."
        />
      </div>
    </section>
  )
}