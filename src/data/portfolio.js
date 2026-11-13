import { unsplash } from './images'

/**
 * =========================================================================
 *  DATA PORTFOLIO
 * =========================================================================
 *  Gambar saat ini adalah foto ilustrasi dari Unsplash (sementara).
 *  Ganti dengan dokumentasi asli RIVARIA saat sudah tersedia.
 *
 *  Menambah foto baru: tambahkan objek baru dengan format yang sama.
 *  Layout galeri editorial otomatis berulang setiap 8 foto.
 *
 *  {
 *    id: 'unik',
 *    category: 'Kategori',
 *    title: 'Judul singkat',
 *    image: { src: 'url atau import gambar', alt: 'deskripsi gambar' },
 *  }
 */
export const portfolio = [
  {
    id: 'reception-long-table',
    category: 'Wedding Reception',
    title: 'Intimate Reception Table',
    image: {
      src: unsplash('1511795409834-ef04bbd61622', 1400),
      alt: 'Meja panjang resepsi pernikahan dengan rangkaian bunga dan gelas kristal',
    },
  },
  {
    id: 'decoration-floral-arch',
    category: 'Wedding Decoration',
    title: 'Floral Ceremony Arch',
    image: {
      src: unsplash('1529636798458-92182e662485', 1000),
      alt: 'Gapura upacara pernikahan dengan kain putih dan rangkaian bunga',
    },
  },
  {
    id: 'photography-veil',
    category: 'Wedding Photography',
    title: 'Golden Hour Portrait',
    image: {
      src: unsplash('1546032996-6dfacbacbf3f', 1000),
      alt: 'Potret pasangan pengantin berbalut kerudung di padang rumput saat senja',
    },
  },
  {
    id: 'outdoor-gazebo',
    category: 'Outdoor Wedding',
    title: 'Garden Ceremony',
    image: {
      src: unsplash('1523438885200-e635ba2c371e', 1000),
      alt: 'Upacara pernikahan outdoor di taman dengan gazebo dan kursi tamu putih',
    },
  },
  {
    id: 'event-setup-loft',
    category: 'Event Setup',
    title: 'Candlelit Venue Setup',
    image: {
      src: unsplash('1513278974582-3e1b4a4fa21e', 1000),
      alt: 'Penataan venue dengan kelopak bunga dan lampu hangat di sepanjang lorong',
    },
  },
  {
    id: 'decoration-table-candles',
    category: 'Wedding Decoration',
    title: 'Candles & Blooms',
    image: {
      src: unsplash('1525772764200-be829a350797', 1000),
      alt: 'Dekorasi meja pernikahan dengan lilin tinggi dan bunga mawar',
    },
  },
  {
    id: 'stage-first-dance',
    category: 'Wedding Stage',
    title: 'The First Dance',
    image: {
      src: unsplash('1520342868574-5fa3804e551c', 1200),
      alt: 'Pasangan pengantin berdansa di atas panggung dengan tirai klasik',
    },
  },
  {
    id: 'outdoor-autumn-aisle',
    category: 'Outdoor Wedding',
    title: 'Autumn Aisle',
    image: {
      src: unsplash('1507915977619-6ccfe8003ae6', 1400),
      alt: 'Lorong upacara pernikahan outdoor di antara pepohonan musim gugur',
    },
  },
]
