import { ArrowUpRight } from 'lucide-react'
import Img from './Img'

/** ServiceCard — kartu layanan editorial dengan foto, judul, & deskripsi. */
export default function ServiceCard({ service, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="service-card">
      <a href={service.href} className="service-card__link" aria-label={`${service.title} — ${service.cta}`}>
        <div className="service-card__media">
          <Img image={service.image} sizes="(max-width: 640px) 92vw, (max-width: 1180px) 46vw, 24vw" />
          <span className="service-card__index">{number}</span>
        </div>
        <div className="service-card__body">
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__desc">{service.description}</p>
          <span className="service-card__more">
            {service.cta}
            <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  )
}
