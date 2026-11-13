import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section bg-white" aria-labelledby="services-title">
      <div className="container services__grid">
        <Reveal className="services__intro">
          <SectionTitle
            id="services-title"
            number="02"
            label="What We Do"
            title="Our Services."
            subtitle="Thoughtfully planned. Beautifully executed."
          />
          <div className="services__actions">
            <a href="#portfolio" className="link-line">
              Lihat Portfolio <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
          <p className="services__note">
            Selain layanan di samping, RIVARIA juga membuka kerja sama <strong>Sponsorship</strong> untuk
            berbagai acara.
          </p>
        </Reveal>

        <div className="services__cards">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 120}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
