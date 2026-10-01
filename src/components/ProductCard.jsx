import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import ImageSlot from './ImageSlot'
import Button from './Button'

// Reusable card shell: image, title, text and order link come from the caller.
export default function ProductCard({ image, tone, alt, title, text, href, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className="group"
    >
      <div className="aspect-square overflow-hidden rounded-3xl">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          <ImageSlot src={image} tone={tone} alt={alt} label="Product image to be supplied" />
        </div>
      </div>

      <h3 className="mt-6 font-display text-2xl font-medium">{title}</h3>
      <p className="mt-2 max-w-sm leading-relaxed text-espresso/75">{text}</p>

      <div className="mt-5">
        <Button href={href} target="_blank" rel="noreferrer" icon={<FaWhatsapp size={18} />}>
          Order on WhatsApp
        </Button>
      </div>
    </motion.article>
  )
}