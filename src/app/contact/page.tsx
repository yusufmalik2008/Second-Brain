// src/app/contact/page.tsx — FIXED & WORKING 100%
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    const subject = encodeURIComponent(`Message from ${name} - Second Brain`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:yusufmalik2008@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f7f8] dark:bg-[#101922] text-gray-800 dark:text-gray-200 font-['Inter'] overflow-x-hidden">

      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 sm:px-10 lg:px-20 py-4 bg-[#f6f7f8]/80 dark:bg-[#101922]/80 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="size-6 text-[#137fec]">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-black dark:text-white">
            Second Brain
          </h2>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-9">
            <Link href="/" className="text-black/80 dark:text-white/80 hover:text-[#137fec] text-sm font-medium">Home</Link>
            <Link href="/#features" className="text-black/80 dark:text-white/80 hover:text-[#137fec] text-sm font-medium">Features</Link>
            <Link href="/#pricing" className="text-black/80 dark:text-white/80 hover:text-[#137fec] text-sm font-medium">Pricing</Link>
            <Link href="/contact" className="text-[#137fec] text-sm font-medium">Contact Us</Link>
          </div>
          <Link href="/portofolio">
            <Button className="h-10 px-4 bg-[#137fec] hover:bg-[#137fec]/90 text-white text-sm font-bold">
              Portofolio
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 lg:px-20 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Hero Text */}
          <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
            <div className="flex flex-col gap-3">
              <p className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-black dark:text-white">
                Get in Touch
              </p>
              <p className="text-base md:text-lg font-normal text-black/60 dark:text-white/60 max-w-2xl mx-auto">
                We'd love to hear from you. Fill the form and click send — your email app will open with everything ready.
              </p>
            </div>
          </div>

          {/* Form + Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="flex flex-col gap-6">
              <Input
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 rounded-lg border border-black/20 dark:border-white/20 bg-[#f6f7f8] dark:bg-[#101922]"
              />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-lg border border-black/20 dark:border-white/20 bg-[#f6f7f8] dark:bg-[#101922]"
              />
              <Textarea
                placeholder="Write your message here..."
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-lg border border-black/20 dark:border-white/20 bg-[#f6f7f8] dark:bg-[#101922] resize-y"
              />

              <Button onClick={sendEmail} className="h-12 bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold">
                Open Email & Send
              </Button>
            </div>

            <div className="flex flex-col gap-8 md:pl-8">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Other Ways to Connect</h3>
                <div className="flex flex-col gap-4">
                  <a href="mailto:yusufmalik2008@gmail.com" className="flex items-center gap-3 text-black/80 dark:text-white/80 hover:text-[#137fec]">
                    <span className="material-symbols-outlined text-[#137fec]/80">mail</span>
                    <span>yusufmalik2008@gmail.com</span>
                  </a>
                  <a href="https://github.com" target="_blank" className="flex items-center gap-3 text-black/80 dark:text-white/80 hover:text-[#137fec]">
                    <span className="material-symbols-outlined text-[#137fec]/80">code</span>
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-black/10 dark:border-white/10 pt-8">
                <blockquote>
                  <p className="text-black/90 dark:text-white/90 italic text-lg leading-relaxed">
                    "Sejak kecil gue udah terbakar banget sama dunia IT. 
  Dari situ sampai sekarang, passion-nya nggak pernah padam — 
  aktif ngulik software engineering, IoT, sama segala hal teknis lainnya. 
  Dan sampai detik ini, masih semangat 1000%."                  </p>
                  <footer className="mt-4 text-sm text-black/60 dark:text-white/60">
                    — Yusuf Malik XI-2
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
