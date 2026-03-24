"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function AddToCartButton({
  product,
  size = "sm",
}: {
  product: Product;
  size?: "sm" | "lg";
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  if (size === "lg") {
    return (
      <button
        onClick={handleClick}
        className="w-full cursor-pointer rounded-full bg-zinc-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-900/20 sm:w-auto"
      >
        {added ? "Добавлено ✓" : "Добавить в корзину"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-zinc-700 md:px-5 md:py-2 md:text-sm"
    >
      {added ? "✓" : "В корзину"}
    </button>
  );
}
