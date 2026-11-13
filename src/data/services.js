import { unsplash } from './images'

/**
 * Daftar layanan RIVARIA.
 * - `href`  : tujuan tautan pada kartu (anchor di halaman yang sama).
 * - `cta`   : teks tautan pada kartu.
 * Untuk menambah layanan, cukup tambahkan objek baru ke array ini.
 */
export const services = [
  {
    id: 'wedding-organizer',
    title: 'Wedding Organizer',
    description: 'Perencanaan dan koordinasi acara pernikahan.',
    image: {
      src: unsplash('1469371670807-013ccf25f16a', 900),
      alt: 'Lorong upacara pernikahan outdoor dengan rangkaian bunga di kedua sisi',
    },
    href: '#portfolio',
    cta: 'Lihat Portfolio',
  },
  {
    id: 'cinematography',
    title: 'Cinematography',
    description: 'Dokumentasi dan pengambilan video momen istimewa.',
    image: {
      src: unsplash('1502982720700-bfff97f2ecac', 900),
      alt: 'Kamera profesional untuk dokumentasi dan video pernikahan',
    },
    href: '#portfolio',
    cta: 'Lihat Portfolio',
  },
  {
    id: 'make-up',
    title: 'Make Up',
    description: 'Layanan tata rias pengantin dan keluarga.',
    image: {
      src: unsplash('1487412947147-5cebf100ffc2', 900),
      alt: 'Penata rias sedang merias wajah dengan lipstik',
    },
    href: '#portfolio',
    cta: 'Lihat Portfolio',
  },
  {
    id: 'sewa-alat-pesta',
    title: 'Sewa Alat Pesta',
    description: 'Penyewaan berbagai perlengkapan untuk kebutuhan acara.',
    image: {
      src: unsplash('1519167758481-83f550bb49b3', 900),
      alt: 'Ruang perjamuan dengan meja bundar, kursi, dan perlengkapan pesta',
    },
    href: '#portfolio',
    cta: 'Lihat Portfolio',
  },
  {
    id: 'event-organizer',
    title: 'Event Organizer',
    description: 'Pengelolaan dan pelaksanaan berbagai jenis acara.',
    image: {
      src: unsplash('1464047736614-af63643285bf', 900),
      alt: 'Dekorasi lampu gantung yang hangat pada sebuah acara',
    },
    href: '#portfolio',
    cta: 'Lihat Portfolio',
  },
  {
    id: 'wcc',
    title: 'WCC',
    description: 'Layanan WCC dari RIVARIA. Hubungi kami untuk informasi selengkapnya.',
    image: {
      src: unsplash('1606800052052-a08af7148866', 900),
      alt: 'Sepasang cincin pernikahan emas di atas kain putih',
    },
    href: '#contact',
    cta: 'Tanyakan Detail',
  },
]
