import { ArrowUpRight, MapPin } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { images } from '../data/images'
import { formatWhatsAppNumber, getWhatsAppUrl, site } from '../data/site'
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from '../assets/icons/SocialIcons'

export default function Contact() {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact__bg" aria-hidden="true">
        <Img image={images.contact} sizes="100vw" alt="" />
      </div>

      <div className="container contact__inner">
        <div className="contact__head">
          <Reveal>
            <SectionTitle
              id="contact-title"
              number="06"
              label="Contact Us"
              className="contact__title-wrap"
              title={
                <span className="contact__title">
                  Let&rsquo;s Create Something <em>Beautiful</em> Together.
                </span>
              }
            />
          </Reveal>

          <Reveal className="contact__aside" delay={150}>
            <p>
              Ceritakan rencana acara Anda kepada kami. Tim RIVARIA siap membantu mewujudkan momen istimewa
              Anda di {site.serviceArea}.
            </p>
            {whatsappUrl ? (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <WhatsAppIcon size={18} />
                Hubungi Kami via WhatsApp
              </a>
            ) : (
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <InstagramIcon size={18} />
                Hubungi Kami via Instagram
              </a>
            )}
          </Reveal>
        </div>

        <div className="contact__cards">
          <Reveal className="contact-card" delay={0}>
            <span className="contact-card__label">
              <WhatsAppIcon size={18} /> WhatsApp
            </span>
            {whatsappUrl ? (
              <>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-card__value">
                  {formatWhatsAppNumber()}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-line">
                  Kirim Pesan <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </>
            ) : (
              <>
                <span className="contact-card__value">Segera Tersedia</span>
                <p className="contact-card__hint">
                  Sementara ini, silakan hubungi kami melalui Direct Message Instagram.
                </p>
              </>
            )}
          </Reveal>

          <Reveal className="contact-card" delay={100}>
            <span className="contact-card__label">
              <InstagramIcon size={18} /> Instagram
            </span>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="contact-card__value">
              @{site.instagram.username}
            </a>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line">
              Kunjungi Profil <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="contact-card" delay={180}>
            <span className="contact-card__label">
              <TikTokIcon size={18} /> TikTok
            </span>
            <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer" className="contact-card__value">
              @{site.tiktok.username}
            </a>
            <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer" className="link-line">
              Kunjungi TikTok <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="contact-card" delay={240}>
            <span className="contact-card__label">
              <MapPin size={18} strokeWidth={1.5} aria-hidden="true" /> Area Pelayanan
            </span>
            <span className="contact-card__value">{site.serviceArea}</span>
            <p className="contact-card__hint">Siap hadir untuk acara Anda di wilayah Cinere dan Jabodetabek.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
