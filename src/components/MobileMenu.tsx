"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center"
        aria-label="Меню"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-5 bg-slate-700 transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-sky-900/10 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-white px-8 pt-24 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {[
            { href: "/", label: "Главная" },
            { href: "/catalog", label: "Каталог" },
            { href: "/about", label: "О нас" },
            { href: "/cart", label: "Корзина" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pb-8">
          <p className="text-xs text-slate-400">© 2026 ToyShop</p>
        </div>
      </div>
    </div>
  );
}
