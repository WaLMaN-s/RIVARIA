import { buildSrcSet } from '../data/images'

/**
 * Img — wrapper <img> dengan srcSet responsif, lazy-loading & alt text wajib.
 * `image` = { src, alt }
 */
export default function Img({ image, sizes = '100vw', priority = false, className, ...rest }) {
  return (
    <img
      src={image.src}
      srcSet={buildSrcSet(image.src)}
      sizes={sizes}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchpriority={priority ? 'high' : undefined}
      className={className}
      {...rest}
    />
  )
}
