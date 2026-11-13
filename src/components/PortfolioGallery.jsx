import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import Img from './Img'
import { resize } from '../data/images'

/** Lightbox — tampilan foto penuh dengan navigasi keyboard, tombol & swipe. */
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]
  const closeRef = useRef(null)
  const touchX = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('is-locked')

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('is-locked')
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [onClose, onPrev, onNext])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const delta = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(delta) > 50) (delta > 0 ? onPrev : onNext)()
    touchX.current = null
  }

  const pad = (n) => String(n).padStart(2, '0')

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeri foto: ${item.title}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="lightbox__bar">
        <p className="lightbox__counter" aria-live="polite">
          <span>{pad(index + 1)}</span> / {pad(items.length)}
        </p>
        <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label="Tutup galeri">
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div
        className="lightbox__stage"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <button
          type="button"
          className="icon-btn lightbox__nav lightbox__nav--prev"
          onClick={onPrev}
          aria-label="Foto sebelumnya"
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>

        <figure className="lightbox__figure">
          <img key={item.id} className="lightbox__img" src={resize(item.image.src, 1800)} alt={item.image.alt} />
          <figcaption className="lightbox__caption">
            <small>{item.category}</small>
            <strong>{item.title}</strong>
          </figcaption>
        </figure>

        <button
          type="button"
          className="icon-btn lightbox__nav lightbox__nav--next"
          onClick={onNext}
          aria-label="Foto berikutnya"
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </div>
    </div>,
    document.body,
  )
}

/** PortfolioGallery — grid editorial asimetris + lightbox. */
export default function PortfolioGallery({ items }) {
  const [current, setCurrent] = useState(null)

  const close = useCallback(() => setCurrent(null), [])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + items.length) % items.length), [items.length])
  const next = useCallback(() => setCurrent((i) => (i + 1) % items.length), [items.length])

  return (
    <>
      <div className="gallery">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className="gallery__item"
            onClick={() => setCurrent(i)}
            aria-label={`Lihat foto: ${item.title} (${item.category})`}
          >
            <Img image={item.image} sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 58vw" />
            <span className="gallery__overlay" aria-hidden="true">
              <span className="gallery__category">{item.category}</span>
              <span className="gallery__title">{item.title}</span>
            </span>
            <span className="gallery__zoom" aria-hidden="true">
              <Maximize2 size={16} strokeWidth={1.5} />
            </span>
          </button>
        ))}
      </div>

      {current !== null && (
        <Lightbox items={items} index={current} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  )
}
