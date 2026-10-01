import { motion } from 'framer-motion'

const styles = {
  solid: 'bg-roast text-cream hover:bg-espresso',
  outline: 'border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream',
  light: 'bg-cream text-espresso hover:bg-cashew',
}

// Reusable button shell: text, link and icon are passed in by the caller.
export default function Button({ href, variant = 'solid', icon, children, ...props }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors duration-300 ${styles[variant]}`}
      {...props}
    >
      {icon}
      {children}
    </motion.a>
  )
}
