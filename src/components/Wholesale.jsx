import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Button from './Button'

const ease = [0.22, 1, 0.36, 1]

export default function Wholesale() {
  return (
    <section id="wholesale" className="bg-roast text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-tight"
          >
            Stock up. Sell more.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-cream/80"
          >
            Tell us what you need and we'll take it from there. Wholesale and bulk enquiries are handled directly
            on WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-9"
          >
            <Button
              href="https://wa.me/234XXXXXXXXXX?text=Hello%20TheNuthouse%2C%20I%20would%20like%20to%20talk%20about%20wholesale."
              variant="light"
              target="_blank"
              rel="noreferrer"
              icon={<FaWhatsapp size={18} />}
            >
              Talk to us on WhatsApp
            </Button>
          </motion.div>
        </div>

        <ul className="flex flex-col justify-center gap-10">
          <motion.li
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease }}
            className="border-t border-cream/20 pt-6"
          >
            <h3 className="font-display text-2xl font-medium">Retailers & resellers</h3>
            <p className="mt-2 leading-relaxed text-cream/75">Reliable roasted cashews for retailers and resellers.</p>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
            className="border-t border-cream/20 pt-6"
          >
            <h3 className="font-display text-2xl font-medium">Businesses</h3>
            <p className="mt-2 leading-relaxed text-cream/75">Bulk orders for offices, events, gifting and business needs.</p>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease, delay: 0.24 }}
            className="border-t border-cream/20 pt-6"
          >
            <h3 className="font-display text-2xl font-medium">Delivered to you</h3>
            <p className="mt-2 leading-relaxed text-cream/75">Made locally and delivered wherever you need it.</p>
          </motion.li>
        </ul>
      </div>
    </section>
  )
}