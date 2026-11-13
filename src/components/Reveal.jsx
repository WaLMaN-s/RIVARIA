import { createElement, useEffect, useRef, useState } from 'react'

const VARIANTS = {
  up: 'reveal',
  fade: 'reveal reveal--fade',
  left: 'reveal reveal--left',
  right: 'reveal reveal--right',
  img: 'reveal-img',
}

/**
 * Reveal — menampilkan elemen dengan animasi halus saat masuk viewport.
 * Ringan: hanya memakai IntersectionObserver + transisi CSS.
 */
export default function Reveal({
  as = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const classes = [VARIANTS[variant] || VARIANTS.up, visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ')

  return createElement(
    as,
    {
      ref,
      className: classes,
      style: delay ? { ...style, '--delay': `${delay}ms` } : style,
      ...rest,
    },
    children,
  )
}
