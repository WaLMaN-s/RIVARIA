import { ArrowRight, MapPin } from 'lucide-react'
import Img from '../components/Img'
import { images } from '../data/images'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Img image={images.hero} priority sizes="(max-width: 960px) 100vw, 64vw" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow intro" style={{ '--delay': '150ms' }}>
            <span className="eyebrow__num">RIVARIA</span> Wedding Organizer
          </span>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line intro" style={{ '--delay': '280ms' }}>
              We Create
            </span>
            <span className="hero__title-line intro" style={{ '--delay': '400ms' }}>
              Moments.
            </span>
            <em className="intro" style={{ '--delay': '560ms' }}>
              You Remember Forever.
            </em>
          </h1>

          <p className="hero__desc intro" style={{ '--delay': '720ms' }}>
            Wujudkan pernikahan impian Anda bersama RIVARIA, dengan pelayanan profesional dan dekorasi yang
            memukau.
          </p>

          <div className="hero__actions intro" style={{ '--delay': '860ms' }}>
            <a href="#about" className="btn btn--primary">
              Discover More
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <a href="#portfolio" className="link-line">
              Explore Portfolio
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll intro" style={{ '--delay': '1100ms' }}>
        <span className="hero__scroll-line" aria-hidden="true" />
        Scroll Down
      </a>

      <p className="hero__badge intro" style={{ '--delay': '1200ms' }}>
        <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
        {site.serviceArea}
      </p>
    </section>
  )
}
