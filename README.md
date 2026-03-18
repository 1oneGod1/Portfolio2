# Portfolio Andi

Website portfolio satu halaman berbasis React component architecture dengan gaya visual modern untuk profil educator teknologi.

## Cara Menjalankan

1. Buka file `index.html` langsung di browser.
2. Opsional: gunakan Live Server di VS Code agar perubahan terlihat otomatis.

## Struktur Proyek

- `index.html`: kerangka utama halaman.
- `src/data/portfolioData.js`: seluruh data profil, skill, proyek, sertifikasi.
- `src/react/main.jsx`: entrypoint React.
- `src/react/App.jsx`: komposisi halaman utama.
- `src/react/components/*`: komponen reusable (navbar, icon, section title).
- `src/react/sections/*`: section modular (Home, About, Skills, Projects, dst).

## Kustomisasi Cepat

1. Ubah data pribadi di `src/data/portfolioData.js`.
2. Ganti link kontak pada objek `contact`.
3. Tambah proyek/sertifikasi lewat array `projects` dan `certifications`.

## Catatan Lingkungan

Scaffolding Vite tidak bisa dijalankan saat ini karena npm error internal pada mesin lokal. Karena itu React dijalankan melalui browser ESM + Babel standalone. Struktur komponen sudah dipersiapkan agar mudah dipindahkan ke setup React + Vite setelah npm kembali normal.
