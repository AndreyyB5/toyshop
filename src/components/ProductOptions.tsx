"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductOptions({ product }: { product: Product }) {
  const defaultSizeIndex = product.sizes
    ? product.sizes.findIndex((s) => s.price === product.price)
    : -1;
  const [sizeIndex, setSizeIndex] = useState(
    defaultSizeIndex >= 0 ? defaultSizeIndex : 0
  );
  const [colorIndex, setColorIndex] = useState(0);

  const currentPrice = product.sizes
    ? product.sizes[sizeIndex].price
    : product.price;

  const selectedSize = product.sizes?.[sizeIndex]?.label;
  const selectedColor = product.colors?.[colorIndex]?.name;

  // Формируем продукт с актуальной ценой для корзины
  const cartProduct: Product = {
    ...product,
    price: currentPrice,
    // Кодируем вариант в название для уникальности в корзине
    name: [
      product.name,
      selectedSize && `(${selectedSize})`,
      selectedColor && `— ${selectedColor}`,
    ]
      .filter(Boolean)
      .join(" "),
    // Уникальный id для разных вариантов
    id: product.id * 1000 + sizeIndex * 10 + colorIndex,
  };

  return (
    <div className="flex flex-col justify-center pb-20 md:pb-0">
      <p className="mb-2 text-sm font-medium tracking-widest text-sky-500 uppercase md:mb-3">
        {product.category}
      </p>
      <h1 className="mb-3 text-2xl font-bold tracking-tight text-slate-800 md:mb-4 md:text-4xl">
        {product.name}
      </h1>
      <p className="mb-6 text-base leading-relaxed text-slate-500 md:text-lg">
        {product.description}
      </p>

      {/* Размеры */}
      {product.sizes && (
        <div className="mb-5">
          <p className="mb-2.5 text-sm font-semibold text-slate-700">Размер</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size, i) => (
              <button
                key={size.label}
                onClick={() => setSizeIndex(i)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-all ${
                  sizeIndex === i
                    ? "bg-sky-500 font-semibold text-white shadow-md shadow-sky-500/20"
                    : "bg-sky-50 text-slate-600 hover:bg-sky-100"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Цвета */}
      {product.colors && (
        <div className="mb-6">
          <p className="mb-2.5 text-sm font-semibold text-slate-700">
            Цвет: <span className="font-normal text-slate-500">{product.colors[colorIndex].name}</span>
          </p>
          <div className="flex gap-2.5">
            {product.colors.map((color, i) => (
              <button
                key={color.name}
                onClick={() => setColorIndex(i)}
                title={color.name}
                className={`h-9 w-9 cursor-pointer rounded-full border-2 transition-all ${
                  colorIndex === i
                    ? "border-sky-500 ring-2 ring-sky-200"
                    : "border-slate-200 hover:border-slate-400"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Цена */}
      <p className="mb-6 text-2xl font-bold text-sky-700 md:mb-8 md:text-3xl">
        {currentPrice.toFixed(2)} €
      </p>

      {/* Desktop button */}
      <div className="hidden md:block">
        <AddToCartButton product={cartProduct} size="lg" />
      </div>
    </div>
  );
}
