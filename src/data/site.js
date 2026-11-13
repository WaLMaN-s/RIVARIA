/**
 * =========================================================================
 *  KONFIGURASI SITUS — RIVARIA Wedding Organizer
 * =========================================================================
 *  Ubah informasi bisnis di satu tempat ini saja.
 *  Semua komponen (Navbar, Contact, Footer, dll.) membaca data dari sini.
 */

export const site = {
  brand: 'RIVARIA',
  fullName: 'RIVARIA Wedding Organizer',
  tagline: 'Wedding & Event Organizer',
  description:
    'RIVARIA Wedding Organizer melayani perencanaan pernikahan dan berbagai acara dengan tim profesional serta sentuhan estetika terbaik.',

  // Area pelayanan
  serviceArea: 'Cinere & Jabodetabek',

  // Bidang usaha (dipakai pada marquee & footer)
  businessLines: [
    'Wedding Organizer',
    'Event Organizer',
    'Cinematography',
    'WCC',
    'Make Up Artist',
    'Sewa Alat Pesta',
    'Sponsorship',
  ],

  instagram: {
    username: 'rivaria_weddingorganizer',
    url: 'https://www.instagram.com/rivaria_weddingorganizer/',
  },

  tiktok: {
    username: 'rivariadecoration',
    url: 'https://www.tiktok.com/@rivariadecoration',
  },

  /**
   * WhatsApp
   * -----------------------------------------------------------------------
   * Format internasional tanpa "+", spasi, atau tanda hubung.
   */
  whatsapp: {
    number: '6287884075124',
    message: 'Halo RIVARIA, saya ingin berkonsultasi mengenai acara saya.',
  },
}

/** Mengembalikan URL WhatsApp (wa.me) atau null bila nomor belum diisi. */
export function getWhatsAppUrl() {
  const number = String(site.whatsapp.number || '').replace(/\D/g, '')
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(site.whatsapp.message)}`
}

/** Menampilkan nomor WhatsApp dalam format yang mudah dibaca. */
export function formatWhatsAppNumber() {
  const number = String(site.whatsapp.number || '').replace(/\D/g, '')
  if (!number) return ''
  const local = number.startsWith('62') ? `0${number.slice(2)}` : number
  return local.replace(/(\d{4})(\d{4})(\d+)/, '$1 $2 $3')
}

/** Menu navigasi utama (single page). */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]
