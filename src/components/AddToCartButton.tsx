"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function AddToCartButton({
  product,
  size = "sm",
}: {
  product: Product;
  size?: "sm" | "lg";
}) {
  const { items, addToCart, updateQuantity, removeFromCart } = useCart();
  const cartItem = items.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  if (quantity > 0 && size === "sm") {
    return (
      <div className="animate-pop-in flex items-center gap-1.5">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-sky-100 text-sm font-medium text-sky-700 transition-colors hover:bg-sky-200 md:h-8 md:w-8"
        >
          −
        </button>
        <span className="w-6 text-center text-sm font-bold text-sky-700">
          {quantity}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-sm font-medium text-white transition-colors hover:bg-sky-600 md:h-8 md:w-8"
        >
          +
        </button>
      </div>
    );
  }

  if (quantity > 0 && size === "lg") {
    return (
      <div className="animate-pop-in flex items-center gap-3">
        <button
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-sky-100 text-lg font-medium text-sky-700 transition-colors hover:bg-sky-200"
        >
          −
        </button>
        <span className="w-10 text-center text-xl font-bold text-sky-700">
          {quantity}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-lg font-medium text-white transition-colors hover:bg-sky-600"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-2 cursor-pointer text-sm text-slate-400 transition-colors hover:text-rose-500"
        >
          Убрать
        </button>
      </div>
    );
  }

  if (size === "lg") {
    return (
      <button
        onClick={() => addToCart(product)}
        className="w-full cursor-pointer rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/30 sm:w-auto"
      >
        Добавить в корзину
      </button>
    );
  }

  return (
    <button
      onClick={() => addToCart(product)}
      className="cursor-pointer rounded-full bg-sky-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-sky-500/20 transition-all hover:bg-sky-600 hover:shadow-md md:px-5 md:py-2 md:text-sm"
    >
      В корзину
    </button>
  );
}
