// src/app/page.tsx — EXACT "Second Brain" LANDING PAGE (2024 version)
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#f6f7f8] dark:bg-[#101922] text-gray-800 dark:text-gray-200 font-['Inter']">

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#f6f7f8]/80 dark:bg-[#101922]/80 backdrop-blur-sm border-b border-gray-200 dark:border-white/10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#137fec] text-3xl">neurology</span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Second Brain</h2>
            </div>

            <nav className="hidden md:flex items-center justify-end gap-8 flex-1">
              <div className="flex items-center gap-6">
                <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#137fec] transition-colors">Features</a>
                <a href="#pricing" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#137fec] transition-colors">Pricing</a>
		<Link href="/portofolio" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#137fec] transition-colors">
  Portfolio
</Link>
                <Link href="/dashboard" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#137fec] transition-colors">Log In</Link>
              </div>
              <Link href="/dashboard">
                <Button className="h-10 px-4 bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold text-sm">
                  Sign Up
                </Button>
              </Link>
            </nav>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-gray-900 dark:text-white">
                  Build Your Second Brain,<br />Achieve Total Clarity.
                </h1>
                <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300">
                  An offline-first task management system to help you organize thoughts and tasks effortlessly, ensuring your data is always private and accessible.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <Link href="/dashboard">
                    <Button className="h-12 px-6 text-base font-bold bg-[#137fec] hover:bg-[#137fec]/90 text-white">
                      Get Started - It's Free
                    </Button>
                  </Link>
		  <Link href="/contact">
                  <Button variant="outline" className="h-12 px-6 text-base font-bold border-gray-300 dark:border-gray-700">
                    See Demo
                  </Button>
		  </Link>

                </div>
              </div>

              <div className="relative">
                <div className="aspect-video lg:aspect-auto lg:h-full rounded-xl shadow-2xl shadow-[#137fec]/20 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhbUZYf8doACAHEVQacIqimxoHDuWigsMdqLE4TbYTAmtktRhSQMTsVLeD2ZvfRj7c69gQXrW-5ao7uvRKlAugyk0ZWEDzY00je6-S0oHzKSjsvFDlErodiREP7mcyJPGt3-3IZ_rviN0uPo1rmzdPAqSBtq9xZ2BWrMQbj8UsmllfmOzxta4Tuvdnly8nMmD4N47GgtHYFKsyUiIMvBjxO3aA1ONWQkykLgc9l2SZDJf2hfo8_1_Or9bXwErImhjmvpxtlEOTnn8"
                    alt="Second Brain dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 md:py-24 bg-[#f6f7f8] dark:bg-[#101922]">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Everything you need to focus
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Our minimalist design and powerful features help you get things done without the clutter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "bolt", title: "Instant", desc: "Blazing fast performance that keeps up with your thoughts, with no lag or loading spinners." },
                { icon: "cloud_off", title: "Works Offline", desc: "Your data is yours. Access and manage your tasks anytime, anywhere, with or without an internet connection." },
                { icon: "auto_awesome", title: "Beautiful by Default", desc: "A clean, modern, and inviting interface designed to help you focus on what truly matters." },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#101922] p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#137fec]/10 text-[#137fec]">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-[#137fec]/10 dark:bg-[#137fec]/20 p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ready to Organize Your Life?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                Start building your second brain today. It's free to get started and takes less than a minute.
              </p>
              <div className="mt-8">
                <Link href="/dashboard">
                  <Button className="h-12 px-6 text-base font-bold bg-[#137fec] hover:bg-[#137fec]/90 text-white">
                    Sign Up Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900/50 border-t border-gray-200 dark:border-white/10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center items-center gap-2 text-gray-800 dark:text-white">
              <span className="material-symbols-outlined text-[#137fec] text-2xl">neurology</span>
              <span className="font-bold">Second Brain</span>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 sm:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:opacity-75 dark:text-gray-400">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:opacity-75 dark:text-gray-400">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:opacity-75 dark:text-gray-400">Contact</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 Second Brain. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
