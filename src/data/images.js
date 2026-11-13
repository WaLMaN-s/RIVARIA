/**
 * =========================================================================
 *  SUMBER GAMBAR — RIVARIA Wedding Organizer
 * =========================================================================
 *  Seluruh gambar sementara diambil dari Unsplash (lisensi Unsplash —
 *  bebas digunakan untuk keperluan komersial maupun non-komersial).
 *
 *  CARA MENGGANTI DENGAN DOKUMENTASI ASLI RIVARIA
 *  -----------------------------------------------------------------------
 *  1. Simpan foto ke folder `src/assets/images/`, misalnya `hero.jpg`.
 *  2. Import di bagian atas file ini:
 *        import heroPhoto from '../assets/images/hero.jpg'
 *  3. Ganti nilai `src` yang sesuai:
 *        hero: { src: heroPhoto, alt: '...' }
 *  Vite akan mengoptimalkan & memberi path yang benar secara otomatis,
 *  sehingga gambar tetap tampil saat di-deploy ke GitHub Pages.
 */

/** Membuat URL Unsplash dengan ukuran tertentu. */
export const unsplash = (id, width = 1600, quality = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`

const isUnsplash = (src) => typeof src === 'string' && src.includes('images.unsplash.com')

/**
 * Menghasilkan atribut `srcSet` responsif untuk gambar Unsplash.
 * Untuk gambar lokal, srcSet dikosongkan (browser memakai `src`).
 */
export function buildSrcSet(src, widths = [480, 800, 1200, 1600, 2000]) {
  if (!isUnsplash(src)) return undefined
  return widths.map((w) => `${src.replace(/w=\d+/, `w=${w}`)} ${w}w`).join(', ')
}

/** Mengubah lebar gambar Unsplash (dipakai untuk lightbox resolusi tinggi). */
export function resize(src, width) {
  if (!isUnsplash(src)) return src
  return src.replace(/w=\d+/, `w=${width}`)
}

export const images = {
  hero: {
    src: unsplash('1606490194859-07c18c9f0968', 1800),
    alt: 'Pasangan pengantin berpelukan saat matahari terbenam dengan kerudung pengantin yang terurai panjang',
  },
  aboutMain: {
    src: unsplash('1510076857177-7470076d4098', 1400),
    alt: 'Ruang resepsi pernikahan megah dengan tirai putih dan lampu gantung yang hangat',
  },
  aboutInset: {
    src: unsplash('1465495976277-4387d4b0b4c6', 800),
    alt: 'Tangan pasangan pengantin dengan cincin pernikahan dan buket bunga',
  },
  worksBanner: {
    src: unsplash('1587271407850-8d438ca9fdf2', 2000),
    alt: 'Ballroom pernikahan dengan pelaminan mewah dan lampu kristal',
  },
  why: {
    src: unsplash('1550005809-91ad75fb315f', 1400),
    alt: 'Pengantin wanita menggenggam buket bunga di samping pengantin pria',
  },
  contact: {
    src: unsplash('1594552072238-b8a33785b261', 1800),
    alt: 'Gaun pengantin putih di ruangan yang terang dan lembut',
  },
}
