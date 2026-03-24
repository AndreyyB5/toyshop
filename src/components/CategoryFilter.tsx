"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

const ALL = "Все";

type SortOption = "default" | "price-asc" | "price-desc" | "name";

const sortLabels: Record<SortOption, string> = {
  default: "По умолчанию",
  "price-asc": "Сначала дешёвые",
  "price-desc": "Сначала дорогие",
  name: "По названию",
};

function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "ru"));
    default:
      return sorted;
  }
}

export default function CategoryFilter({ products }: { products: Product[] }) {
  const categories = [ALL, ...new Set(products.map((p) => p.category))];
  const [active, setActive] = useState(ALL);
  const [sort, setSort] = useState<SortOption>("default");

  const filtered =
    active === ALL ? products : products.filter((p) => p.category === active);
  const sorted = sortProducts(filtered, sort);

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Категории */}
        <div className="scrollbar-hide -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
          <div className="flex gap-2 pb-2 md:flex-wrap md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-all md:text-base ${
                  active === cat
                    ? "bg-sky-500 font-semibold text-white shadow-md shadow-sky-500/20"
                    : "bg-sky-50 text-slate-600 hover:bg-sky-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Сортировка */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="cursor-pointer self-start rounded-full border border-sky-100 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition-colors hover:border-sky-300 focus:border-sky-300 focus:ring-2 focus:ring-sky-100 md:self-auto"
        >
          {Object.entries(sortLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Товары или пустое состояние */}
      {sorted.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:mt-10 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="text-5xl">🧸</p>
          <p className="mt-4 text-lg font-medium text-slate-800">
            Ничего не найдено
          </p>
          <p className="mt-1 text-sm text-slate-400">
            В этой категории пока нет товаров
          </p>
        </div>
      )}
    </>
  );
}
