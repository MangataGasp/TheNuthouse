import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import nut from '../../public/nut.jpg'
import ImageSlot from './ImageSlot'
import Button from './Button'

const ease = [0.22, 1, 0.36, 1]

// Reusable: lets a line of text rise out of its own mask.
const Line = ({ children, delay }) => (
  <span className="block overflow-hidden pb-[0.12em]">
    <motion.span
      className="block"
      initial={{ y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.span>
  </span>
)

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-18">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-10 px-5 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-10">
        <div>
          <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-medium leading-[1.02] tracking-tight">
            <Line delay={0.15}>Roasted with care.</Line>
            <Line delay={0.27}>Made to be enjoyed.</Line>
          </h1>

          <motion.p {...fade(0.6)} className="mt-6 max-w-md text-lg leading-relaxed text-espresso/80">
            Naturally roasted cashew nuts, made with care and ready for retailers, businesses and everyday snacking.
          </motion.p>

          <motion.div {...fade(0.75)} className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact">Make an Inquiry</Button>
            <Button href="https://wa.me/234XXXXXXXXXX" variant="outline" target="_blank" rel="noreferrer" icon={<FaWhatsapp size={18} />}>
              WhatsApp Us
            </Button>
          </motion.div>

          <motion.ul {...fade(0.95)} className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-roast">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-leaf" />100% Natural</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-leaf" />Locally Made</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-leaf" />Wholesale Available</li>
          </motion.ul>
        </div>

        {/* Image reveals upward, then drifts slightly on scroll */}
        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          className="relative aspect-4/5 w-full overflow-hidden rounded-4xl md:aspect-auto md:h-[72vh]"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-x-0 -top-[6%] h-[112%] will-change-transform">
            <ImageSlot src={nut} alt="TheNuthouse roasted cashew packaging" label="Hero packaging image to be supplied" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
