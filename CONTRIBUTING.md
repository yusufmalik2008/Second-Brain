Oke, ini dia dua file CONTRIBUTING.md yang langsung bisa kamu copy-paste ke repo kamu:

### 1. CONTRIBUTING.md (Bahasa Inggris — versi pro & ramah internasional)

```md
# Contributing to Second Brain

Thank you for wanting to contribute!  
This project started as a high school assignment and has turned into a real open-source passion project. Every contribution — big or small — means the world to me!

## How to Contribute

### 1. Fork & Clone
```bash
git clone https://github.com/yusufmalik2008/Second-Brain.git
cd Second-Brain
```

### 2. Create a Branch
```bash
git checkout -b feat/your-cool-feature
# atau
git checkout -b fix/some-bug
```

### 3. Code!
- Ikutin style kode yang sudah ada
- Pakai komponen **shadcn/ui** kalau memungkinkan
- Tetap strict TypeScript
- Tambah/test fitur di local dulu

### 4. Test Locally
```bash
npm run dev
```
Pastikan semua masih jalan normal (desktop + mobile).

### 5. Format & Lint
```bash
npm run format
npm run lint
```

### 6. Commit (pakai Conventional Commits lebih disukai)
```bash
git commit -m "feat: add markdown editor for notes"
git commit -m "fix: sidebar overflow on mobile"
```

### 7. Push & Open Pull Request
- Push ke fork kamu
- Buka PR ke branch `main`
- Isi template PR yang muncul otomatis

## Fitur yang sangat dibutuhkan
- [ ] Tambah autentikasi (NextAuth / Clerk / Lucia)
- [ ] Ganti database ke PostgreSQL (+ PlanetScale/Supabase)
- [ ] Drag & drop task/project pakai dnd-kit
- [ ] Fitur search + tag
- [ ] Editor markdown yang bagus (TipTap/Lexical/MDX)
- [ ] Perbaiki responsivitas mobile
- [ ] Tulis test (Playwright/Jest)
- [ ] Export data (JSON/Markdown)
- [ ] PWA & offline support

## Pertanyaan?
Langsung buka **Issue** dulu kalau bingung atau mau diskusi ide — aku fast response kok!

Terima kasih banyak sudah mau bantu bikin Second Brain jadi lebih keren lagi! Kamu keren banget!

— Yusuf Malik (@yusufmalik2008)
```

### 2. CONTRIBUTING-id.md (Bahasa Indonesia — full lokal)

```md
# Cara Berkontribusi ke Second Brain

Makasih banget udah mau bantu!  
Proyek ini awalnya cuma tugas sekolah kelas XI, tapi sekarang jadi proyek open-source beneran. Setiap kontribusi dari kamu sangat berarti buat aku!

## Cara Kontribusi

### 1. Fork & Clone Repo
```bash
git clone https://github.com/yusufmalik2008/Second-Brain.git
cd Second-Brain
```

### 2. Buat Branch Baru
```bash
git checkout -b feat/fitur-kamu-yang-keren
# atau
git checkout -b fix/bug-yang-kamu-temuin
```

### 3. Coding!
- Ikuti style kode yang sudah ada
- Pakai komponen shadcn/ui kalau bisa
- Tetap pakai TypeScript yang ketat
- Test dulu di local sebelum commit

### 4. Coba Jalankan
```bash
npm run dev
```
Pastikan semuanya masih normal di laptop & HP.

### 5. Format & Cek Error
```bash
npm run format
npm run lint
```

### 6. Commit (lebih bagus pakai Conventional Commits)
```bash
git commit -m "feat: tambah editor markdown buat catatan"
git commit -m "fix: sidebar kepotong di hp"
```

### 7. Push & Buka Pull Request
- Push ke fork kamu
- Buka PR ke branch `main`
- Isi template PR yang muncul

## Yang paling dibutuhkan saat ini
- [ ] Login/auth (NextAuth, Clerk, atau Lucia)
- [ ] Ganti database ke PostgreSQL
- [ ] Bisa drag & drop task pake dnd-kit
- [ ] Fitur cari + tag
- [ ] Editor markdown cakep
- [ ] Benerin tampilan di HP
- [ ] Bikin test otomatis
- [ ] Bisa export data

Kalau ada pertanyaan atau mau ngobrol dulu soal fitur, langsung buka Issue aja ya — aku pasti bales cepet!

Makasih banyak banget udah mau bantu! Kamu luar biasa!

— Yusuf Malik (XI-2)
```

Tinggal pilih salah satu (atau taruh dua-duanya juga boleh: CONTRIBUTING.md sama CONTRIBUTING-id.md).  
Langsung copy-paste ke repo kamu, commit, push — selesai! Repo kamu bakal keliatan jauh lebih profesional dan welcoming buat kontributor lain.

Semangat bro, pasti banyak yang mau bantu & star repo kamu!
