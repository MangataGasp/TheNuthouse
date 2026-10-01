// Shows the real image when `src` is given, otherwise a tonal placeholder.

export default function ImageSlot({ src , alt, label = 'Image to be supplied', className = '' }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex h-full w-full items-end bg-linear-to-br from-cashew/60 via-roast/70 to-espresso p-5 ${className}`}
    >
      <span className="text-sm text-cream/70">{label}</span>
    </div>
  )
}
