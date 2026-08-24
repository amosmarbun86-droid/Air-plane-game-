# ✈️ WAR PLANE — Infinite Missions

Game aksi tempur udara berbasis browser (HTML5 Canvas), dibuat untuk dimainkan langsung dari HP tanpa install dari Play Store — bisa dipasang sebagai **PWA (Progressive Web App)** dan dimainkan offline.

🔗 **Main sekarang:** `https://<username-github-kamu>.github.io/air-plane-game/`
> Ganti `<username-github-kamu>` sesuai akun GitHub kamu setelah GitHub Pages aktif.

---

## 🎮 Fitur

- **Misi tak terbatas** — 7 tipe misi (Hancurkan Target, Bertahan, Buru Bomber, Boss War, dst) yang berulang dengan tingkat kesulitan makin naik.
- **Raja (King)** — musuh elite emas muncul setiap misi, HP & hadiah lebih besar dari musuh biasa.
- **Musuh menembak balik** — fighter, bomber, king, dan boss menembakkan peluru terarah ke pemain.
- **Hadiah killstreak** — setiap 10 musuh mati, dapat power-up acak selama 20 detik: ⚡Laser (damage 3x + tembus), ⚡Rapid Fire, atau ⚡Shield (kebal sementara).
- **Hangar** — beli & pakai pesawat baru, serta upgrade senjata dan pesawat aktif **tanpa batas level** menggunakan koin hasil misi.
- **Sistem akun lokal** — daftar/masuk pakai email + password (disimpan lokal di HP via `localStorage`, password di-hash SHA-256). Cocok untuk multi-profil di satu HP.
- **PWA installable** — bisa dipasang ke home screen dan dimainkan **offline** setelah pertama kali dibuka, lengkap dengan ikon & splash tema sendiri.
- Kontrol sentuh sederhana: geser jari untuk gerak, tembakan otomatis.

---

## 🗂️ Struktur File

```
air-plane-game/
├── index.html              # game utama (HTML + CSS + JS jadi satu file)
├── manifest.json            # konfigurasi PWA (nama, ikon, warna tema)
├── sw.js                     # service worker — cache offline
├── icon-192.png              # ikon app 192x192
├── icon-512.png               # ikon app 512x512
└── icon-512-maskable.png       # ikon adaptif Android (maskable)
```

Semua file di atas **wajib ada di folder yang sama** — `manifest.json` dan `sw.js` memakai path relatif (`./`) mengikuti lokasi `index.html`.

---

## 🚀 Cara Deploy ke GitHub Pages

1. Upload keenam file di atas ke repo ini (root folder, atau subfolder kalau repo dipakai untuk beberapa project sekaligus).
2. Buka **Settings → Pages** di repo GitHub.
3. Pada **Source**, pilih branch (biasanya `main`) dan folder (`/root` atau `/docs` sesuai tempat file diupload).
4. Simpan — GitHub akan memberi URL `https://<username>.github.io/air-plane-game/` dalam beberapa menit.
5. Buka URL tersebut lewat HP → tombol **📲 Install App** akan muncul otomatis di Chrome Android untuk memasang ke home screen. Untuk iPhone, gunakan Share → **Add to Home Screen** secara manual.

> **Wajib HTTPS** — service worker (fitur offline) hanya berjalan di koneksi HTTPS. GitHub Pages sudah otomatis HTTPS, jadi tidak perlu setting tambahan.

---

## ⚠️ Catatan Keamanan

Sistem login di game ini **bukan autentikasi server sungguhan** — tidak ada verifikasi email, dan semua data (termasuk password yang sudah di-hash) hanya tersimpan di browser HP masing-masing pemain. Cocok untuk multi-profil lokal, bukan pengganti sistem akun yang aman untuk aplikasi publik/serius.

---

## 🛠️ Teknologi

- HTML5 Canvas + Vanilla JavaScript (tanpa framework/library eksternal)
- `localStorage` untuk penyimpanan progres & akun
- Service Worker API untuk caching offline
- Web App Manifest untuk instalasi PWA

---

## 👤 Credits

Dibuat dan dikembangkan oleh **Amos** ([@Rcpdroid86](https://github.com/Rcpdroid86) / [@amosmarbun86-droid](https://github.com/amosmarbun86-droid))

*Powered by Amos'rcpdroid86 🤖*
