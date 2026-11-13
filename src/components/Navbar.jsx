import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X, MapPin } from 'lucide-react'
import { navLinks, site, getWhatsAppUrl, formatWhatsAppNumber } from '../data/site'
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from '../assets/icons/SocialIcons'
import logoIvory from '../assets/images/logo-ivory.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Navbar berubah warna saat halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: menandai menu aktif sesuai section yang terlihat
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Kunci scroll body saat menu mobile terbuka + tutup dengan Esc
  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    if (open) window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('is-locked')
    }
  }, [open])

  // Tutup menu mobile bila layar diperbesar ke ukuran desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#home" className="logo" aria-label="RIVARIA Wedding Organizer — kembali ke atas">
            <img src={logoIvory} alt="RIVARIA Wedding Organizer" className="logo__img" />
          </a>

          <nav aria-label="Navigasi utama">
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`navbar__link ${active === link.id ? 'is-active' : ''}`}
                    aria-current={active === link.id ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <a href="#about" className="btn btn--small navbar__cta">
              Get to Know Us
              <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="navbar__toggle"
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        aria-hidden={!open}
      >
        <div className="mobile-menu__top">
          <a
            href="#home"
            className="logo"
            onClick={close}
            tabIndex={open ? 0 : -1}
            aria-label="RIVARIA Wedding Organizer — kembali ke atas"
          >
            <img src={logoIvory} alt="RIVARIA Wedding Organizer" className="logo__img" />
          </a>
          <button
            type="button"
            className="navbar__toggle"
            onClick={close}
            aria-label="Tutup menu"
            tabIndex={open ? 0 : -1}
            style={{ display: 'inline-flex' }}
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Navigasi mobile">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={close}
              className={`mobile-menu__link ${active === link.id ? 'is-active' : ''}`}
              style={{ '--i': i }}
              tabIndex={open ? 0 : -1}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            <InstagramIcon size={18} /> @{site.instagram.username}
          </a>
          <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            <TikTokIcon size={18} /> @{site.tiktok.username}
          </a>
          {getWhatsAppUrl() && (
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              <WhatsAppIcon size={18} /> {formatWhatsAppNumber()}
            </a>
          )}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <MapPin size={18} strokeWidth={1.5} aria-hidden="true" /> {site.serviceArea}
          </span>
        </div>
      </div>
    </>
  )
}
