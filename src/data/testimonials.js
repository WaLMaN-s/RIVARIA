/**
 * =========================================================================
 *  DATA TESTIMONI
 * =========================================================================
 *  PENTING: Hanya isi dengan testimoni ASLI dari klien RIVARIA
 *  (dengan izin klien yang bersangkutan).
 *
 *  Selama array `testimonials` masih kosong, section Testimonials akan
 *  menampilkan tampilan "siap diisi" yang elegan, bukan testimoni palsu.
 *  Begitu data ditambahkan, carousel akan tampil secara otomatis.
 *
 *  Format setiap testimoni:
 *  {
 *    id: 'unik',
 *    quote: 'Kutipan testimoni dari klien.',
 *    name: 'Nama klien (mis. "Nama & Nama")',
 *    event: 'Jenis acara, mis. "Wedding — Cinere"',   // opsional
 *    photo: { src: 'url / import gambar', alt: '...' } // opsional
 *  }
 *
 *  Untuk pratinjau tampilan carousel saat pengembangan, ubah
 *  `previewPlaceholders` menjadi `true`. Data contoh di bawah diberi label
 *  jelas sebagai "Contoh" dan JANGAN dipublikasikan sebagai testimoni asli.
 */

export const testimonials = []

export const previewPlaceholders = false

export const placeholderTestimonials = [
  {
    id: 'placeholder-1',
    quote: 'Contoh — Tempatkan kutipan testimoni klien pertama di sini.',
    name: 'Nama Klien',
    event: 'Jenis Acara',
  },
  {
    id: 'placeholder-2',
    quote: 'Contoh — Tempatkan kutipan testimoni klien kedua di sini.',
    name: 'Nama Klien',
    event: 'Jenis Acara',
  },
  {
    id: 'placeholder-3',
    quote: 'Contoh — Tempatkan kutipan testimoni klien ketiga di sini.',
    name: 'Nama Klien',
    event: 'Jenis Acara',
  },
]
