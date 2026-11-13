import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import PortfolioGallery from '../components/PortfolioGallery'
import { images } from '../data/images'
import { portfolio } from '../data/portfolio'
import { site } from '../data/site'

export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title">
      <div className="works-banner">
        <div className="works-banner__media">
          <Img image={images.worksBanner} sizes="100vw" />
        </div>
        <div className="container">
          <Reveal className="works-banner__content">
            <SectionTitle
              id="portfolio-title"
              number="03"
              label="Selected Works"
              title={
                <>
                  Stories We&rsquo;ve <em>Created.</em>
                </>
              }
              subtitle="A collection of beautiful celebrations."
              light
            />
            <a href="#gallery" className="link-line link-line--light">
              Lihat Galeri <ArrowDown size={14} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>

      <div id="gallery" className="works" style={{ scrollMarginTop: 'var(--nav-h)' }}>
        <div className="container">
          <Reveal className="works__head">
            <p>
              Dekorasi, resepsi, pelaminan, hingga pernikahan outdoor — setiap acara kami rancang dengan
              perhatian pada detail. Klik foto untuk melihat lebih dekat.
            </p>
            <span className="works__count">{String(portfolio.length).padStart(2, '0')} moments</span>
          </Reveal>

          <Reveal variant="fade">
            <PortfolioGallery items={portfolio} />
          </Reveal>

          <Reveal className="works__footer">
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              View All Portfolio on Instagram
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
