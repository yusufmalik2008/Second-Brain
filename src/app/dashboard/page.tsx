// src/app/page.tsx — PIXEL-PERFECT NOTION WORK TEMPLATE
"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Trash2, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Todo = { id: number; title: string; completed: boolean; createdAt: string };

export default function WorkTemplate() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const refresh = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(Array.isArray(data) ? data.sort((a, b) => b.id - a.id) : []);
  };

  useEffect(() => { refresh(); }, []);

  const add = async () => {
    if (!input.trim()) return;
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: input }),
      headers: { "Content-Type": "application/json" },
    });
    setInput("");
    refresh();
  };

  const toggle = async (id: number, completed: boolean) => {
    await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify({ id, completed: !completed }),
      headers: { "Content-Type": "application/json" },
    });
    refresh();
  };

  const del = async (id: number) => {
    await fetch("/api/todos", { method: "DELETE", body: JSON.stringify({ id }), headers: { "Content-Type": "application/json" } });
    refresh();
  };

  const active = todos.filter(t => !t.completed);
  const completedToday = todos.filter(t => t.completed && new Date(t.createdAt).toDateString() === new Date().toDateString());

  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101922] text-gray-800 dark:text-gray-200 font-['Inter']">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200/80 dark:border-white/10 bg-[#f6f7f8]/80 dark:bg-[#101922]/80 px-6 lg:px-20 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="size-6 text-[#137fec]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Tasks</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex size-10 items-center justify-center rounded-lg bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20">
            <span className="material-symbols-outlined text-xl">notifications</span>
          </button>
          <div 
            className="size-10 rounded-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1H6OHR_iadG9d_qq3RI1gbWG8CdQRdj9P-MdYGwTq5x8bekFG9mdBePJLKO-m_dCqoeW15DmxunHd4zyhbew5GGizkYfNPGhdv8mow0J_YQOKjJhvFeqB0_nhsyYOQQxujdUJy3cXRKDMcaXAUd1WjBhlvpdGrRk1L_vIFsec_944BBZguzh8nJehp26tOegstW1vJfn0QQDetW0ZGI_JedA6UtxYjZu_F1KQgPH5aq8kZugi6ztaoTJNCLIiMXpEvM595OLHMG8')" }}
          />
        </div>
      </header>

      <main className="px-6 lg:px-20 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Hero Text */}
          <div className="flex flex-col gap-3 mb-8">
            <p className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">What do you need to get done?</p>
            <p className="text-base text-gray-500 dark:text-gray-400">Add your tasks below to stay organized.</p>
          </div>

          {/* Quick Add */}
          <div className="mb-8 p-4 bg-white dark:bg-gray-900/40 rounded-xl border border-gray-200/80 dark:border-white/10 shadow-sm">
            <div className="flex flex-wrap items-end gap-4">
              <label className="flex flex-col flex-1 min-w-64">
                <p className="text-sm font-medium pb-2 text-gray-700 dark:text-gray-300">Quick Add</p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <Input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border border-gray-300 dark:border-gray-700 bg-[#f6f7f8] dark:bg-gray-800 focus:border-[#137fec] h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base"
                    placeholder="e.g., Design the new landing page"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && add()}
                  />
                </div>
              </label>
              <Button
                onClick={add}
                className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-[#137fec] text-white text-sm font-bold hover:bg-[#137fec]/90 focus:outline-none focus:ring-2 focus:ring-[#137fec] focus:ring-offset-2 focus:ring-offset-[#f6f7f8] dark:focus:ring-offset-[#101922]"
              >
                <span className="material-symbols-outlined">add_circle</span>
                <span>Add Task</span>
              </Button>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Tasks */}
            <div className="lg:col-span-2">
              <Card className="bg-white dark:bg-gray-900/40 rounded-xl border border-gray-200/80 dark:border-white/10 shadow-sm overflow-hidden">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-6 border-b border-gray-200/80 dark:border-white/10">
                  Active Tasks ({active.length})
                </h2>
                <div className="flex flex-col divide-y divide-gray-200/80 dark:divide-white/10">
                  {active.length === 0 ? (
                    <p className="p-8 text-center text-gray-500 dark:text-gray-400">No active tasks</p>
                  ) : (
                    active.map((todo) => (
                      <div key={todo.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-white/5">
                        <div className="flex size-7 items-center justify-center">
                          <Checkbox
                            checked={todo.completed}
                            onCheckedChange={() => toggle(todo.id, todo.completed)}
                            className="h-5 w-5 rounded border-gray-400 dark:border-gray-600 border-2 bg-transparent text-[#137fec] checked:bg-[#137fec] checked:border-[#137fec] focus:ring-0 focus:ring-offset-0 focus:border-gray-400 dark:focus:border-gray-600 focus:outline-none cursor-pointer"
                          />
                        </div>
                        <p className="text-base flex-1 truncate text-gray-800 dark:text-gray-200">{todo.title}</p>
                        <div className="shrink-0">
                          <button
                            onClick={() => del(todo.id)}
                            className="text-gray-400 dark:text-gray-500 hover:text-red-500 flex size-8 items-center justify-center rounded-md hover:bg-red-500/10"
                          >
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              {/* Completed Today */}
              <Card className="bg-white dark:bg-gray-900/40 rounded-xl border border-gray-200/80 dark:border-white/10 shadow-sm overflow-hidden">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-6 border-b border-gray-200/80 dark:border-white/10">
                  Completed Today
                </h2>
                <div className="flex flex-col divide-y divide-gray-200/80 dark:divide-white/10">
                  {completedToday.length === 0 ? (
                    <p className="p-8 text-center text-gray-500 dark:text-gray-400">Nothing completed yet today</p>
                  ) : (
                    completedToday.map((todo) => (
                      <div key={todo.id} className="flex items-center gap-4 p-4">
                        <div className="flex size-7 items-center justify-center">
                          <Checkbox
                            checked
                            className="h-5 w-5 rounded border-gray-400 dark:border-gray-600 border-2 bg-transparent text-[#137fec] checked:bg-[#137fec] checked:border-[#137fec] focus:ring-0 focus:ring-offset-0 focus:border-gray-400 dark:focus:border-gray-600 focus:outline-none cursor-pointer"
                          />
                        </div>
                        <p className="text-base flex-1 truncate text-gray-400 dark:text-gray-500 line-through">
                          {todo.title}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-white dark:bg-gray-900/40 rounded-xl border border-gray-200/80 dark:border-white/10 shadow-sm">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-6">Quick Stats</h2>
                <div className="px-6 pb-6 space-y-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Today's Progress</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {completedToday.length} / {todos.filter(t => new Date(t.createdAt).toDateString() === new Date().toDateString()).length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-[#137fec] h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${(completedToday.length / Math.max(todos.filter(t => new Date(t.createdAt).toDateString() === new Date().toDateString()).length, 1)) * 100}%` }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-[#137fec]">{completedToday.length}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">
                        {active.length}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Remaining</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
