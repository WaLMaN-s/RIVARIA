# RIVARIA Wedding Organizer — Company Profile & Landing Page

Website company profile dan landing page resmi untuk **RIVARIA Wedding Organizer** dengan pendekatan desain *Editorial Luxury — Modern Minimalist*.

Melayani area **Cinere dan Jabodetabek** untuk layanan Wedding Organizer, Event Organizer (EO), Cinematography, WCC, Make Up Artist, penyewaan berbagai jenis alat pesta, dan Sponsorship.

---

## Teknologi yang Digunakan

- **React 18** (JSX)
- **Vite 6**
- **CSS Terstruktur** (`src/styles/global.css`) dengan CSS Custom Properties
- **Lucide React** untuk ikon outline minimalis
- **Google Fonts** (`Cormorant Garamond` & `Manrope`)

---

## Struktur Folder

```text
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions untuk auto-deploy ke GitHub Pages
├── public/
│   └── favicon.svg         # Favicon brand RIVARIA
├── src/
│   ├── assets/
│   │   ├── icons/          # Ikon sosial (Instagram & WhatsApp)
│   │   └── images/         # Folder untuk foto dokumentasi lokal RIVARIA
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Img.jsx
│   │   ├── Navbar.jsx
│   │   ├── PortfolioGallery.jsx
│   │   ├── Reveal.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── ServiceCard.jsx
│   │   └── Testimonial.jsx
│   ├── data/
│   │   ├── images.js       # Konfigurasi URL/aset gambar per section
│   │   ├── portfolio.js    # Data galeri portfolio
│   │   ├── services.js     # Daftar 6 layanan utama
│   │   ├── site.js         # Info brand, area layanan, Instagram & WhatsApp
│   │   └── testimonials.js # Data testimoni klien
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## Menjalankan Proyek Secara Lokal

Pastikan **Node.js** (disarankan v18+) dan **npm** sudah terpasang.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka URL lokal yang tampil di terminal (umumnya `http://localhost:5173`).

3. **Build untuk produksi:**
   ```bash
   npm run build
   ```
   Hasil file statis siap deploy akan berada di folder `dist/`.

4. **Pratinjau hasil build (opsional):**
   ```bash
   npm run preview
   ```

---

## Kustomisasi Konten & Gambar

- **Nomor WhatsApp & Info Brand:** Edit `src/data/site.js`. Isi `whatsapp.number` dengan format internasional tanpa `+` atau spasi (contoh: `'6281234567890'`). Selama kosong, tautan WhatsApp otomatis disembunyikan dan menampilkan keterangan *"Segera Tersedia"*.
- **Foto Dokumentasi Asli:** Simpan gambar ke `src/assets/images/`, lalu import dan ganti URL pada `src/data/images.js`, `src/data/services.js`, dan `src/data/portfolio.js`.
- **Testimoni Klien:** Tambahkan kutipan testimoni asli klien ke array `testimonials` di `src/data/testimonials.js`. Selama kosong, section testimoni menampilkan tampilan editorial siap diisi.

---

## Panduan Deployment ke GitHub Pages

Proyek ini sudah dikonfigurasi agar siap di-deploy ke **GitHub Pages** secara otomatis maupun manual.

### 1. Membuat Repository GitHub
1. Login ke [GitHub](https://github.com) dan buat repository baru (misalnya `rivaria-wedding-organizer`).
2. Jangan centang opsi inisialisasi README jika ingin langsung push dari proyek lokal.

### 2. Push Proyek ke GitHub
Jalankan perintah berikut di folder root proyek:
```bash
git init
git add .
git commit -m "Initial commit: RIVARIA Wedding Organizer landing page"
git branch -M main
git remote add origin https://github.com/WaLMaN-s/RIVARIA-WEDDING-ORGANIZER.git
git push -u origin main
```

### 3. Pengaturan Base Path (`vite.config.js`)
Secara default, `vite.config.js` menggunakan `base: './'` (path relatif) yang aman untuk GitHub Pages project site (`https://<username>.github.io/<nama-repository>/`) maupun custom domain.

Jika ingin menggunakan base path absolut secara eksplisit:
```bash
VITE_BASE_PATH=/<nama-repository>/ npm run build
```
Atau ubah `VITE_BASE_PATH` pada `.github/workflows/deploy.yml` sesuai nama repository Anda.

### 4. Build Lokal (Verifikasi)
Pastikan proses build berjalan tanpa error sebelum atau sesudah push:
```bash
npm run build
```

### 5. Mengaktifkan GitHub Pages dengan GitHub Actions
Workflow otomatis sudah tersedia di `.github/workflows/deploy.yml` dan akan berjalan setiap kali ada push ke branch `main`.

Untuk mengaktifkannya di GitHub:
1. Buka repository Anda di GitHub.
2. Masuk ke **Settings** → **Pages**.
3. Pada bagian **Build and deployment** → **Source**, pilih **GitHub Actions**.
4. Cek tab **Actions** pada repository untuk memantau proses build dan deploy hingga selesai.

### 6. Mengakses Website Setelah Deployment
Setelah workflow berstatus selesai (centang hijau), website dapat diakses melalui URL yang tampil di halaman **Settings → Pages** atau tab **Actions**, umumnya:
```text
https://walman-s.github.io/RIVARIA-WEDDING-ORGANIZER/
```
