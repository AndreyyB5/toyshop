"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-6">
        <div className="mb-6 text-6xl">🛒</div>
        <h1 className="mb-3 text-2xl font-bold text-slate-800 md:text-3xl">
          Корзина пуста
        </h1>
        <p className="mb-8 text-lg text-slate-500">
          Добавьте игрушки из каталога
        </p>
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-600 hover:shadow-xl"
        >
          Перейти в каталог →
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-slate-800 md:text-3xl">
        Корзина
      </h1>
      <p className="mb-8 text-sm text-slate-400 md:text-base">
        {totalItems} {totalItems === 1 ? "товар" : totalItems < 5 ? "товара" : "товаров"}
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-2xl border border-sky-100 bg-white p-4 transition-all hover:shadow-md md:gap-6 md:p-5"
            >
              <Link
                href={`/catalog/${product.id}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-sky-50 md:h-32 md:w-32"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </Link>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link
                    href={`/catalog/${product.id}`}
                    className="text-sm font-medium text-slate-800 transition-colors hover:text-sky-600 md:text-base"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-0.5 text-xs text-slate-400 md:text-sm">
                    {product.category}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-sky-50 text-sm font-medium text-sky-700 transition-colors hover:bg-sky-100"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (val > 0 && val <= 99) updateQuantity(product.id, val);
                      }}
                      min="1"
                      max="99"
                      className="h-8 w-12 rounded-lg border border-sky-100 text-center text-sm font-bold text-sky-700 outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                    />
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-sm font-medium text-white transition-colors hover:bg-sky-600"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-sky-700 md:text-base">
                      {(product.price * quantity).toFixed(2)} €
                    </span>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="cursor-pointer text-xs text-slate-400 transition-colors hover:text-rose-500 md:text-sm"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-sky-100 bg-gradient-to-b from-white to-sky-50/50 p-6">
            <h2 className="mb-4 text-lg font-bold text-slate-800">Итого</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Товары ({totalItems})</span>
                <span className="font-medium text-slate-700">{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Доставка</span>
                <span className="font-medium text-emerald-500">Бесплатно</span>
              </div>
              <div className="border-t border-sky-100 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-slate-800">К оплате</span>
                  <span className="text-sky-700">{totalPrice.toFixed(2)} €</span>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full cursor-pointer rounded-full bg-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-600 hover:shadow-xl">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
