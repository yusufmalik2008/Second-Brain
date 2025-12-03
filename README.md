
```md
# 🧠 Second Brain — Personal Task & Knowledge Manager

A beautiful, modern **Second Brain / Todo + Notes** SaaS demo built with the latest Next.js ecosystem. Inspired by Tiago Forte's PARA method and productivity systems.

Live demo → [https://second-brain-joseph.vercel.app](https://second-brain-joseph.vercel.app)  
(Replace with your actual Vercel URL)

![Preview](public/preview.png)  
*Screenshot · December 2025*

## ✨ Features

- ⚡ Blazing fast Next.js 14 + App Router
- 🎨 Beautiful UI with **shadcn/ui** + **Tailwind CSS**
- 🗃️ Full CRUD for tasks, projects, areas, and notes
- 💾 SQLite via **Prisma ORM** (dev) — ready to scale to PostgreSQL
- 🔐 Authentication ready (easy to add NextAuth/Clerk)
- 🌓 Light/Dark mode with next-themes
- ⚛️ Fully typed with TypeScript
- 🎯 Icons from **lucide-react**
- Accessible components powered by **Radix UI**

## 🛠️ Tech Stack

| Technology         | Purpose                          |
|--------------------|----------------------------------|
| Next.js 14         | App Router + Server Components   |
| TypeScript         | Type safety                      |
| Prisma             | ORM + SQLite (dev)               |
| shadcn/ui          | Beautiful accessible components  |
| Tailwind CSS       | Styling                          |
| lucide-react       | Icon library                     |
| Radix UI           | Unstyled accessible primitives   |
| Vercel             | Deployment & preview             |

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/yusufmalik2008/Second-Brain.git
cd Second-Brain
npm install
```

### 2. Set up database

```bash
npx prisma migrate dev --name init
# or just run dev, it will auto-migrate
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
src/
├── app/              → App Router pages & layouts
├── components/       → shadcn/ui & custom components
├── lib/              → utils, prisma client
├── prisma/           → schema & migrations
└── types/            → global types
```

## 🌍 Deployed With

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

One-click deploy coming soon!

## 🤝 Contributing

Contributions are very welcome! See [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to get started.

## 👨‍💻 Author

**Yusuf Malik** – XI-2 Student | Full-Stack Enthusiast  
GitHub: [@yusufmalik2008](https://github.com/yusufmalik2008)

Built with ❤️ in December 2025 as a software engineering class project turned passion project.

---

**Star this repo if you like it!** It really motivates me to keep building ⭐
```

### CONTRIBUTING.md (copy-paste ready)

```md
# 🤝 Contributing to Second Brain

Thank you for your interest in contributing! This project is a school demo turned open-source passion project, and any help is highly appreciated.

## How to Contribute

### 1. Fork & Clone
```bash
git clone https://github.com/yusufmalik2008/Second-Brain.git
cd Second-Brain
```

### 2. Create a Branch
```bash
git checkout -b feature/your-amazing-feature
# or
git checkout -b fix/some-bug
```

### 3. Make Your Changes
- Follow the existing code style (Prettier + ESLint already configured)
- Use shadcn/ui components when possible
- Keep TypeScript strict

### 4. Test Locally
```bash
npm run dev
# make sure everything still works!
```

### 5. Commit (conventional commits preferred)
```bash
git commit -m "feat: add dark mode toggle"
# or "fix: mobile sidebar overflow"
```

### 6. Push & Open Pull Request
- Push to your fork
- Open a PR against `main`
- Fill the PR template (it will appear automatically)

## Areas You Can Help With

- [ ] Add authentication (NextAuth.js / Clerk)
- [ ] Switch to PostgreSQL + Prisma accelerate
- [ ] Add drag & drop with @dnd-kit
- [ ] Implement search & tags
- [ ] Add markdown notes editor
- [ ] Mobile responsiveness improvements
- [ ] Write tests (Playwright / Jest)
- [ ] Improve accessibility

## Code Style

This project uses:
- Prettier
- ESLint (with Next.js + TypeScript config)
- shadcn/ui component patterns

Just run `npm run lint` and `npm run format` before committing.

## Questions?

Feel free to open an issue first if you're unsure about anything!

Thanks again for contributing — you're helping make this demo even better! 🚀

— Yusuf
```

### Bonus Tips to Make Your Repo Look Pro

1. Add a screenshot at `public/preview.png` (or `.jpg`) and it will show up beautifully in the README.
2. Add these GitHub topics:
   ```
   nextjs, typescript, prisma, shadcn-ui, tailwindcss, vercel, saas, second-brain, productivity
   ```
3. Add a license (MIT is perfect for demos):
   Create `LICENSE` file with MIT license (you can copy from GitHub template).

Your repo will instantly go from "school project" to "this kid is hireable" vibe. Trust me — recruiters and teachers notice this stuff.

Let me know when you push it live, I’d love to star it! 🚀
