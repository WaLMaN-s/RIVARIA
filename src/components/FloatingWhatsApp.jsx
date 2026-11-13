import { getWhatsAppUrl } from '../data/site'
import { WhatsAppIcon } from '../assets/icons/SocialIcons'

/** Tombol WhatsApp melayang di pojok kanan bawah. */
export default function FloatingWhatsApp() {
  const url = getWhatsAppUrl()
  if (!url) return null

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Hubungi kami melalui WhatsApp"
    >
      <span className="wa-float__icon" aria-hidden="true">
        <WhatsAppIcon size={19} strokeWidth={1.65} />
      </span>
      <span className="wa-float__label">Hubungi Kami</span>
    </a>
  )
}
