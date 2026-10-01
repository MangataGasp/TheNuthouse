import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Button from './Button'

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight"
        >
          Ready for your next batch?
        </motion.h2>

        <div className="mt-10">
          <Button href="https://wa.me/234XXXXXXXXXX" variant="light" target="_blank" rel="noreferrer" icon={<FaWhatsapp size={18} />}>
            Chat with us on WhatsApp
          </Button>
        </div>

        <ul className="mt-16 grid gap-6 border-t border-cream/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="https://wa.me/234XXXXXXXXXX" className="flex items-center gap-3 transition-colors hover:text-cashew">
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </li>
          <li>
            <a href="https://instagram.com/mock-handle" className="flex items-center gap-3 transition-colors hover:text-cashew">
              <FaInstagram size={20} /> Instagram
            </a>
          </li>
          <li>
            <a href="tel:+234XXXXXXXXXX" className="flex items-center gap-3 transition-colors hover:text-cashew">
              <FaPhoneAlt size={18} /> +234 XXX XXX XXXX
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt size={18} /> Abuja, Nigeria
          </li>
        </ul>
      </div>
    </section>
  )
}
