import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi'
import Button from './Button'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Wholesale', href: '#wholesale' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 160 && !open)
    setSolid(y > 24)
  })

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? 'bg-cream/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-10" aria-label="Main">
          <a href="#home" className="font-display text-2xl font-medium tracking-tight">TheNuthouse</a>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative py-2 text-[15px]">
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-roast transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noreferrer" icon={<FaWhatsapp size={18} />}>
              WhatsApp Us
            </Button>
          </div>

          <button
            className="-mr-2 grid h-12 w-12 place-items-center md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <HiX size={26} /> : <HiOutlineMenuAlt4 size={26} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-espresso px-5 pb-10 pt-28 text-cream md:hidden"
          >
            <ul>
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06 } }}
                >
                  <a href={link.href} onClick={() => setOpen(false)} className="block py-3 font-display text-5xl">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <Button href="https://wa.me/234XXXXXXXXXX" variant="light" target="_blank" rel="noreferrer" icon={<FaWhatsapp size={18} />}>
              WhatsApp Us
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
