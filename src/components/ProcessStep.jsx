import { motion } from 'framer-motion'

// Reusable step shell: number, title and text come from the caller.
export default function ProcessStep({ number, title, text, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {/* line draws in from the left as the step enters */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay }}
        className="h-px origin-left bg-espresso/25"
      />
      <span className="mt-5 block font-display text-sm text-roast">{number}</span>
      <h3 className="mt-2 font-display text-3xl font-medium">{title}</h3>
      <p className="mt-3 leading-relaxed text-espresso/75">{text}</p>
    </motion.li>
  )
}