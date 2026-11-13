import { ArrowRight, MapPin } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { images } from '../data/images'
import { site } from '../data/site'

const values = [
  {
    title: 'Profesional',
    text: 'Perencanaan yang matang dan koordinasi tim yang rapi di setiap tahap acara.',
  },
  {
    title: 'Kreatif',
    text: 'Sentuhan estetika yang personal untuk menghadirkan momen yang berkesan.',
  },
]

export default function About() {
  return (
    <>
      <section id="about" className="section about" aria-labelledby="about-title">
        <div className="about__grid">
          <div className="about__media">
            <Reveal variant="img" className="about__main">
              <Img image={images.aboutMain} sizes="(max-width: 960px) 100vw, 54vw" />
            </Reveal>
            <Reveal variant="img" className="about__inset" delay={200}>
              <Img image={images.aboutInset} sizes="(max-width: 960px) 46vw, 22vw" />
            </Reveal>
            <p className="about__caption" aria-hidden="true">
              Every detail, thoughtfully crafted.
            </p>
          </div>

          <div className="about__content">
            <Reveal>
              <SectionTitle
                id="about-title"
                number="01"
                label="About RIVARIA"
                title={
                  <>
                    More than just an event.
                    <br />
                    <em>It&rsquo;s your story.</em>
                  </>
                }
              />
            </Reveal>

            <Reveal className="about__text" delay={120}>
              <p>
                RIVARIA hadir untuk mewujudkan momen istimewa Anda dengan perencanaan yang matang, tim
                profesional, dan sentuhan estetika terbaik.
              </p>
              <p>
                Sebagai wedding &amp; event organizer, RIVARIA menghadirkan layanan yang saling melengkapi —
                mulai dari Wedding Organizer, Event Organizer, Cinematography, WCC, Make Up Artist, penyewaan
                alat pesta, hingga Sponsorship — agar setiap kebutuhan acara Anda tertangani dalam satu tim.
              </p>
            </Reveal>

            <Reveal className="about__values" delay={200}>
              {values.map((v, i) => (
                <div key={v.title}>
                  <h3 className="value__title">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {v.title}
                  </h3>
                  <p className="value__text">{v.text}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="about__area" delay={260}>
              <MapPin size={26} strokeWidth={1.25} aria-hidden="true" />
              <div>
                <small>Area Pelayanan</small>
                <strong>{site.serviceArea}</strong>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <a href="#services" className="link-line">
                Lihat Layanan Kami <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Bidang usaha RIVARIA">
        <div className="marquee__track">
          {[0, 1].map((group) => (
            <ul key={group} className="marquee__group" aria-hidden={group === 1}>
              {[...site.businessLines, ...site.businessLines].map((line, i) => (
                <li key={`${line}-${i}`} className="marquee__item">
                  {line}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}
