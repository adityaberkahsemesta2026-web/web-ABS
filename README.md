# Website Aditya Berkah Semesta (ABS)

Website profil perusahaan statis (HTML/CSS/JS murni, tanpa perlu instalasi/build tool) untuk **PT Aditya Berkah Semesta (ABS)**.

## Struktur Folder

```
web-ABS/
├── index.html            # Beranda
├── tentang-kami.html     # Tentang Kami (visi, misi, nilai perusahaan)
├── layanan.html          # Daftar layanan
├── portofolio.html       # Contoh proyek yang sudah dikerjakan
├── karir.html            # Info karir/lowongan
├── kontak.html           # Alamat, telepon, form kontak, peta lokasi
├── css/
│   └── style.css         # Semua styling (warna, font, layout, responsive)
├── js/
│   └── script.js         # Menu mobile, animasi scroll, filter portofolio, form
├── assets/
│   └── images/
│       └── logo-abs.png  # Logo perusahaan (dipakai di navbar & footer)
└── README.md
```

## Cara Membuka

Cukup buka file `index.html` langsung di browser (double click), atau jalankan server lokal sederhana, contoh:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000` di browser.

## Desain

- **Warna**: Diambil dari gradasi logo ABS — merah tegas (`#c1272d`) ke navy gelap (`#17102e`), dengan aksen emas (`#d4af37`) supaya terkesan gagah dan premium.
- **Font**: `Poppins` (tebal, kuat) untuk judul/heading, `Inter` untuk teks isi — kombinasi modern dan mudah dibaca, dimuat otomatis dari Google Fonts.
- **Komponen**: Navbar sticky + menu mobile, hero dengan animasi angka statistik, kartu layanan, filter portofolio, timeline karir, form kontak, dan peta lokasi (Google Maps embed berdasarkan alamat perusahaan).

## Bagian yang Perlu Anda Sesuaikan

Beberapa konten dibuat sebagai **placeholder wajar** dan sangat disarankan untuk diperbarui dengan data asli perusahaan:

1. **Layanan** (`layanan.html`) — daftar layanan saat ini adalah asumsi berdasarkan logo (konstruksi & pengadaan). Sesuaikan dengan layanan riil ABS.
2. **Portofolio** (`portofolio.html`) — proyek yang ditampilkan masih contoh. Ganti dengan foto & detail proyek nyata (ganti ikon di `.portfolio-thumb` dengan `<img>` foto proyek).
3. **Email** — saat ini memakai `info@adityaberkahsemesta.co.id` sebagai placeholder. Ganti ke email resmi perusahaan (cari-ganti di semua file HTML).
4. **Media sosial** — tautan Instagram/Facebook/LinkedIn di topbar & footer masih `#`. Ganti dengan URL akun resmi perusahaan.
5. **Statistik** (angka tahun pengalaman, jumlah proyek, dll di Beranda) — sesuaikan dengan data riil.
6. **Lowongan Karir** (`karir.html`) — saat ini menampilkan "belum ada lowongan". Contoh format kartu lowongan sudah disiapkan dalam komentar HTML di file tersebut, tinggal diaktifkan saat ada posisi terbuka.

## Kontak yang Sudah Ditambahkan

- **Alamat**: Jl. Kp. Cirewed, RT.003/RW.001 Ds. Sukadamai, Kec. Cikupa, Kabupaten Tangerang, Banten 15710
- **Telepon**: 08128454929

Kedua data ini sudah tertanam di topbar, footer setiap halaman, halaman Kontak, serta peta lokasi (Google Maps embed).

## Menghosting Website

Karena ini website statis, Anda bisa langsung deploy ke layanan gratis seperti **Netlify**, **Vercel**, **GitHub Pages**, atau **cPanel hosting** biasa — cukup upload seluruh isi folder ini.
