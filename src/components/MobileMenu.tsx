"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Burger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center"
        aria-label="Меню"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 bg-zinc-900 transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-zinc-900 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-zinc-900 transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Menu panel */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-white px-8 pt-24 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-lg font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            Главная
          </Link>
          <Link
            href="/catalog"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-lg font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            Каталог
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-lg font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            О нас
          </Link>
        </nav>

        <div className="mt-auto pb-8">
          <p className="text-xs text-zinc-400">© 2026 ToyShop</p>
        </div>
      </div>
    </div>
  );
}
