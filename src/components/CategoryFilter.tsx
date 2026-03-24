"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

const ALL = "Все";

export default function CategoryFilter({ products }: { products: Product[] }) {
  const categories = [ALL, ...new Set(products.map((p) => p.category))];
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL ? products : products.filter((p) => p.category === active);

  return (
    <>
      <div className="scrollbar-hide -mx-4 mb-6 overflow-x-auto px-4 md:mx-0 md:mb-10 md:px-0">
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
      <div className="grid grid-cols-2 gap-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
