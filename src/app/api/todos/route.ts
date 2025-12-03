// src/app/api/todos/route.ts
import { PrismaClient } from '@/generated/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { join } from 'path'
import { NextRequest } from 'next/server'

const dbPath = join(process.cwd(), 'prisma/dev.db')

let prisma: PrismaClient | null = null

// Lazy init — creates the DB + connection ONLY when first needed
async function getPrisma() {
  if (prisma) return prisma

  const adapter = new PrismaBetterSqlite3({
    url: `file:${dbPath}`,
  })
  prisma = new PrismaClient({ adapter })
  return prisma
}

export async function GET() {
  try {
    const p = await getPrisma()
    const todos = await p.todo.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return Response.json(todos)
  } catch (e) {
    console.error("GET error:", e)
    return Response.json([])
  }
}

export async function POST(req: NextRequest) {
  try {
    const p = await getPrisma()
    const { title } = await req.json()
    const todo = await p.todo.create({
      data: { title: title?.trim() || "New Todo" },
    })
    return Response.json(todo)
  } catch (e: any) {
    console.error("POST error:", e?.message || e)
    return new Response(JSON.stringify({ error: "Failed to create todo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const p = await getPrisma()
    const { id, completed } = await req.json()
    const todo = await p.todo.update({
      where: { id },
      data: { completed: !completed },
    })
    return Response.json(todo)
  } catch {
    return new Response(null, { status: 404 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const p = await getPrisma()
    const { id } = await req.json()
    await p.todo.delete({ where: { id } })
    return new Response(null, { status: 204 })
  } catch {
    return new Response(null, { status: 404 })
  }
}
