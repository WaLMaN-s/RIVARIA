import { ArrowUp, MapPin } from 'lucide-react'
import { formatWhatsAppNumber, getWhatsAppUrl, navLinks, site } from '../data/site'
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from '../assets/icons/SocialIcons'
import logoCharcoal from '../assets/images/logo-charcoal.png'

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="logo" aria-label="RIVARIA Wedding Organizer — kembali ke atas">
              <img src={logoCharcoal} alt="RIVARIA Wedding Organizer" className="logo__img logo__img--footer" />
            </a>
            <p className="footer__tagline">{site.tagline}</p>
            <p className="footer__desc">{site.description}</p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="footer__heading">Navigasi</h2>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer__heading">Ikuti Kami</h2>
            <ul className="footer__list">
              {whatsappUrl && (
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={16} /> {formatWhatsAppNumber()}
                  </a>
                </li>
              )}
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon size={16} /> @{site.instagram.username}
                </a>
              </li>
              <li>
                <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer">
                  <TikTokIcon size={16} /> @{site.tiktok.username}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Area Layanan</h2>
            <ul className="footer__list">
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <MapPin size={16} strokeWidth={1.5} aria-hidden="true" /> {site.serviceArea}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        RIVARIA
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} {site.fullName}. All rights reserved.
          </p>
          <a href="#home" className="footer__top-btn">
            Back to top <ArrowUp size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
