```md
# Second Brain — Personal Task & Knowledge Manager

A SaaS (Software as Service) software engineering demo by Yusuf Malik XI-2, with the framework NextJS + Prisma + Shadcn/ui + Typescript stack. 04/12/2025.

A beautiful, modern **Second Brain / Todo + Notes** app inspired by Tiago Forte's PARA method.  
Built from a high-school project into a full-featured open-source SaaS demo.

Live Demo → [https://second-brain-joseph.vercel.app](https://second-brain-joseph.vercel.app)

## Features

- Blazing fast Next.js 14 with App Router & Server Components
- Gorgeous UI built with **shadcn/ui** + **Tailwind CSS**
- Full CRUD for **Tasks, Projects, Areas, Resources, Archives, and Notes**
- SQLite via **Prisma ORM** (dev) — ready to scale to PostgreSQL/PlanetScale
- Light & Dark mode (next-themes)
- Fully typed with **TypeScript**
- Beautiful icons from **lucide-react**
- Accessible components powered by **Radix UI**
- Mobile-responsive sidebar & layout
- Ready for authentication (NextAuth/Clerk/Lucia)

## Tech Stack

| Tech             | Purpose                          |
|------------------|----------------------------------|
| Next.js 14       | App Router + React Server Components |
| TypeScript       | Type safety                      |
| Prisma           | ORM + SQLite → PostgreSQL ready |
| shadcn/ui        | UI components                    |
| Tailwind CSS     | Styling                          |
| lucide-react     | Icons                            |
| Radix UI         | Accessible primitives            |
| Vercel           | Deployment                       |

## Quick Start

```bash
git clone https://github.com/yusufmalik2008/Second-Brain.git
cd Second-Brain
npm install
npx prisma migrate dev --name init
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/          → Pages & layouts (App Router)
├── components/   → shadcn/ui + custom components
├── lib/          → Utils & Prisma client
├── prisma/       → Schema & migrations
└── types/        → Global TypeScript types
```

## What's Next? (Help Wanted!)

- [ ] Authentication
- [ ] Drag & drop (dnd-kit)
- [ ] Markdown notes editor
- [ ] Search & tags
- [ ] Export/Import data
- [ ] PWA + offline support

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details!

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yusufmalik2008/Second-Brain)

## Author

**Yusuf Malik** — High School Student (Grade 11) | Full-Stack Enthusiast  
GitHub: [@yusufmalik2008](https://github.com/yusufmalik2008)

Built with love in December 2025 — started as a school project, now open-source!

---

**Star this repo if you like it!** It really motivates a 16-year-old developer to keep building
```

### 2. README-id.md (Bahasa Indonesia — buat yang mau full lokal vibe)

```md
# Second Brain — Aplikasi Todo + Catatan Pribadi

A SaaS (Software as Service) software engineering demo by Yusuf Malik XI-2, with the framework NextJS + Prisma + Shadcn/ui + Typescript stack. 04/12/2025.

Aplikasi **Second Brain** modern dan cantik, terinspirasi dari metode PARA-nya Tiago Forte.  

Live Demo → [https://second-brain-joseph.vercel.app](https://second-brain-joseph.vercel.app)

## Fitur

- Super cepet pake **Next.js 14** + App Router
- Tampilan cakep banget pake **shadcn/ui** + **Tailwind CSS**
- Bisa CRUD **Tugas, Project, Area, Resource, Arsip, dan Catatan**
- Pakai **SQLite + Prisma** (bisa diganti PostgreSQL kapan aja)
- Mode terang & gelap
- 100% TypeScript
- Icon cantik dari **lucide-react**
- Responsif di HP + laptop
- Siap ditambah login (NextAuth/Clerk)

## Cara Jalanin di Local

```bash
git clone https://github.com/yusufmalik2008/Second-Brain.git
cd Second-Brain
npm install
npx prisma migrate dev --name init
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Mau Bantu Ngembangin?

Kebutuhan terbesar saat ini:
- [ ] Login / autentikasi
- [ ] Bisa drag & drop tugas
- [ ] Editor catatan pake Markdown
- [ ] Fitur cari + tag
- [ ] Export data
- [ ] Jadiin PWA (bisa offline)

Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) buat detailnya ya!

## Author

**Yusuf Malik** 
GitHub: [@yusufmalik2008](https://github.com/yusufmalik2008)

Dibuat Desember 2025 — awalnya cuma tugas sekolah, sekarang jadi proyek serius!

---

**Kasih Star dong kalau suka!** Bikin anak kelas 11 semangat nge-push tiap hari
```

