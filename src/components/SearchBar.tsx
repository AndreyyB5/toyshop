"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const results =
    query.trim().length > 0
      ? products.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen && mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, [mobileOpen]);

  const close = () => {
    setOpen(false);
    setMobileOpen(false);
    setQuery("");
  };

  const resultsList = (
    <>
      {results.length > 0 ? (
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/catalog/${product.id}`}
              onClick={close}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-sky-50"
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-sky-50">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-800">
                  {product.name}
                </p>
                <p className="text-xs text-slate-400">
                  {product.price.toFixed(2)} €
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : query.trim().length > 0 ? (
        <div className="px-4 py-12 text-center">
          <p className="text-3xl">🔍</p>
          <p className="mt-3 text-sm text-slate-500">
            Ничего не найдено по запросу «{query}»
          </p>
        </div>
      ) : null}
    </>
  );

  return (
    <>
      {/* Desktop search */}
      <div ref={ref} className="relative hidden md:block">
        <div className="relative">
          <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Найти игрушку..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => query.trim() && setOpen(true)}
            className="h-10 w-56 rounded-full border border-sky-100 bg-sky-50/50 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:w-72 focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-100 lg:w-64 lg:focus:w-80"
          />
        </div>

        {open && query.trim().length > 0 && (
          <div className="absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xl">
            {resultsList}
          </div>
        )}
      </div>

      {/* Mobile search button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-sky-50 md:hidden"
        aria-label="Поиск"
      >
        <SearchIcon className="text-slate-600" />
      </button>

      {/* Mobile search overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex items-center gap-3 border-b border-sky-100 px-4 py-3">
            <SearchIcon className="shrink-0 text-slate-400" />
            <input
              ref={mobileInputRef}
              type="text"
              placeholder="Найти игрушку..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
            />
            <button
              onClick={close}
              className="shrink-0 cursor-pointer text-sm font-medium text-sky-500"
            >
              Отмена
            </button>
          </div>
          {resultsList}
        </div>
      )}
    </>
  );
}
