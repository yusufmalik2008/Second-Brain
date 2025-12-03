// src/app/page.tsx  ←  NOTION-STYLE DENSE TEXT MASTERPIECE
"use client";

import { useState, useEffect } from "react";
import { format, isToday, startOfWeek, endOfWeek, differenceInDays } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Trash2, Plus, Calendar, Flame, Clock, Target } from "lucide-react";

type Todo = { id: number; title: string; completed: boolean; createdAt: string };

export default function Dashboard() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const refresh = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(Array.isArray(data) ? data.sort((a: any, b: any) => b.id - a.id) : []);
  };

  useEffect(() => { refresh(); }, []);

  const add = async () => {
    if (!input.trim()) return;
    await fetch("/api/todos", { method: "POST", body: JSON.stringify({ title: input }), headers: { "Content-Type": "application/json" } });
    setInput(""); refresh();
  };

  const toggle = async (id: number, completed: boolean) => {
    await fetch("/api/todos", { method: "PUT", body: JSON.stringify({ id, completed: !completed }), headers: { "Content-Type": "application/json" } });
    refresh();
  };

  const del = async (id: number) => {
    await fetch("/api/todos", { method: "DELETE", body: JSON.stringify({ id }), headers: { "Content-Type": "application/json" } });
    refresh();
  };

  const active = todos.filter(t => !t.completed);
  const completed = todos.filter(t => t.completed);
  const todayCount = todos.filter(t => isToday(new Date(t.createdAt))).length;
  const weekStart = startOfWeek(new Date());
  const weekEnd = endOfWeek(new Date());

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto p-4 pt-8">

        {/* Header - Super Compact */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-1">My Workspace</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(), "EEEE, MMMM d, yyyy")} • {active.length} active • {completed.length} completed • {todos.length} total
          </p>
        </div>

        {/* Quick Add - Always Visible */}
        <Card className="mb-4 p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div className="flex gap-2">
            <Input
              placeholder="Add a task..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && add()}
              className="h-9 text-sm border-0 focus-visible:ring-1"
            />
            <Button size="sm" onClick={add} className="h-9 px-3">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        {/* Active Tasks */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-blue-600" />
            <h2 className="text-lg font-semibold">Active Tasks ({active.length})</h2>
          </div>
          <div className="space-y-2">
            {active.length === 0 ? (
              <p className="text-sm text-gray-500 italic pl-6">No active tasks — all clear!</p>
            ) : (
              active.map(todo => (
                <Card key={todo.id} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <div className="flex items-start gap-3">
                    <button onClick={() => toggle(todo.id, todo.completed)} className="mt-0.5">
                      <Circle className="h-4 w-4 text-gray-400 hover:text-blue-600" />
                    </button>
                    <div className="flex-1 text-sm">
                      <div className="font-medium">{todo.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Added {isToday(new Date(todo.createdAt)) ? "today" : format(new Date(todo.createdAt), "MMM d")}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => del(todo.id)}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Completed Today */}
        {completed.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <h2 className="text-lg font-semibold">Completed Today ({completed.filter(t => isToday(new Date(t.createdAt))).length})</h2>
            </div>
            <div className="space-y-2 pl-6 text-sm">
              {completed
                .filter(t => isToday(new Date(t.createdAt)))
                .map(todo => (
                  <div key={todo.id} className="flex items-center gap-3 text-gray-500">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="line-through">{todo.title}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border border-blue-200 dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-bold text-2xl text-blue-600">{todayCount}</div>
              <div className="text-gray-600 dark:text-gray-400">Tasks Today</div>
            </div>
            <div>
              <div className="font-bold text-2xl text-green-600 flex items-center justify-center gap-1">
                {completed.length} <Flame className="h-5 w-5" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">Completed</div>
            </div>
            <div>
              <div className="font-bold text-2xl text-purple-600">{differenceInDays(weekEnd, weekStart) + 1}</div>
              <div className="text-gray-600 dark:text-gray-400">Days This Week</div>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Built with Next.js 16 • Prisma 7 • shadcn/ui • You're doing great.
        </div>
      </div>
    </div>
  );
}
