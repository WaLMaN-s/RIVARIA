import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Base path dapat dikonfigurasi melalui environment variable VITE_BASE_PATH.
// - Default "./"  -> path relatif, aman untuk GitHub Pages (project site),
//                    Netlify, Vercel, atau hosting statis lainnya.
// - Contoh khusus GitHub Pages: VITE_BASE_PATH=/nama-repository/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_BASE_PATH || './',
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  }
})
