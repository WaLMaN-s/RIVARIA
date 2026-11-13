import { CalendarCheck, Layers, MapPin, Users } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { images } from '../data/images'

const features = [
  {
    icon: Users,
    title: 'Professional Team',
    text: 'Tim profesional dan berpengalaman.',
  },
  {
    icon: CalendarCheck,
    title: 'Well Planned',
    text: 'Setiap detail acara direncanakan dengan matang.',
  },
  {
    icon: Layers,
    title: 'Complete Services',
    text: 'Pilihan layanan yang lengkap untuk berbagai kebutuhan acara.',
  },
  {
    icon: MapPin,
    title: 'Wide Coverage',
    text: 'Melayani wilayah Cinere dan Jabodetabek.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="section why" aria-labelledby="why-title">
      <div className="why__grid">
        <Reveal variant="img" className="why__media">
          <Img image={images.why} sizes="(max-width: 960px) 100vw, 42vw" />
        </Reveal>

        <div className="why__content">
          <Reveal>
            <SectionTitle
              id="why-title"
              number="04"
              label="Why Choose RIVARIA?"
              title={
                <>
                  Because your special day <em>deserves the best.</em>
                </>
              }
            />
          </Reveal>

          <ul className="features">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} className="feature" delay={i * 110}>
                <Icon className="feature__icon" size={30} strokeWidth={1.1} aria-hidden="true" />
                <div>
                  <h3 className="feature__title">{title}</h3>
                  <p className="feature__text">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
