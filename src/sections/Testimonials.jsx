import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Testimonial from '../components/Testimonial'
import { placeholderTestimonials, previewPlaceholders, testimonials } from '../data/testimonials'
import { site } from '../data/site'

export default function Testimonials() {
  const items = testimonials.length ? testimonials : previewPlaceholders ? placeholderTestimonials : []

  return (
    <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container testimonials__grid">
        <Reveal className="testimonials__intro">
          <SectionTitle
            id="testimonials-title"
            number="05"
            label="Testimonials"
            title={
              <>
                What Our <em>Clients</em> Say.
              </>
            }
            subtitle="Kepuasan Anda adalah prioritas kami."
          />
          <div>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line">
              @{site.instagram.username} <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Testimonial items={items} />
        </Reveal>
      </div>
    </section>
  )
}
