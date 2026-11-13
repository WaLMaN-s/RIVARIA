import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Img from './Img'
import { site } from '../data/site'

const AUTOPLAY_MS = 7000

/**
 * Testimonial — carousel sederhana (autoplay, tombol, indikator, swipe).
 * Bila `items` kosong, menampilkan tampilan "siap diisi" tanpa testimoni palsu.
 */
export default function Testimonial({ items = [] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const count = items.length

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count])
  const prev = () => go(index - 1)
  const next = useCallback(() => go(index + 1), [go, index])

  useEffect(() => {
    if (count < 2 || paused) return undefined
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined
    const t = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [count, paused, next])

  if (!count) {
    return (
      <div className="testimonial__empty">
        <Quote className="testimonial__quote-mark" size={40} strokeWidth={1} aria-hidden="true" />
        <p className="testimonial__text">
          Setiap pasangan memiliki cerita. Kami ingin menjadi bagian dari <em>cerita Anda.</em>
        </p>
        <p>
          Kisah dan momen bahagia klien RIVARIA dapat Anda temukan di Instagram resmi kami.
        </p>
        <div>
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line">
            Lihat di Instagram <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div
      className="testimonial"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimoni klien"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Quote className="testimonial__quote-mark" size={40} strokeWidth={1} aria-hidden="true" />

      <div
        className="testimonial__viewport"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const delta = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(delta) > 50) (delta > 0 ? prev : next)()
          touchX.current = null
        }}
      >
        <div className="testimonial__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <figure
              key={item.id}
              className={`testimonial__slide ${item.photo ? '' : 'testimonial__slide--no-photo'}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} dari ${count}`}
              aria-hidden={i !== index}
            >
              {item.photo && (
                <div className="testimonial__photo">
                  <Img image={item.photo} sizes="128px" />
                </div>
              )}
              <div>
                <blockquote className="testimonial__text">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="testimonial__author">
                  — {item.name}
                  {item.event && <span>{item.event}</span>}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="testimonial__controls">
          <div className="testimonial__dots">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`testimonial__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Tampilkan testimoni ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
          <div className="testimonial__arrows">
            <button type="button" className="icon-btn icon-btn--dark" onClick={prev} aria-label="Testimoni sebelumnya">
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button type="button" className="icon-btn icon-btn--dark" onClick={next} aria-label="Testimoni berikutnya">
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
