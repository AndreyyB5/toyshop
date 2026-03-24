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
        <h1 className="mb-3 text-2xl font-bold md:text-3xl">
          Корзина пуста
        </h1>
        <p className="mb-8 text-lg text-zinc-500">
          Добавьте игрушки из каталога
        </p>
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-zinc-700"
        >
          Перейти в каталог →
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
        Корзина
      </h1>
      <p className="mb-8 text-sm text-zinc-400 md:text-base">
        {totalItems} {totalItems === 1 ? "товар" : totalItems < 5 ? "товара" : "товаров"}
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Список товаров */}
        <div className="space-y-4 lg:col-span-2">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-2xl border border-zinc-100 bg-white p-4 md:gap-6 md:p-5"
            >
              {/* Фото */}
              <Link
                href={`/catalog/${product.id}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100 md:h-32 md:w-32"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </Link>

              {/* Инфо */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link
                    href={`/catalog/${product.id}`}
                    className="text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 md:text-base"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-0.5 text-xs text-zinc-400 md:text-sm">
                    {product.category}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  {/* Количество */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-zinc-200 text-sm transition-colors hover:bg-zinc-50"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-zinc-200 text-sm transition-colors hover:bg-zinc-50"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold md:text-base">
                      {(product.price * quantity).toFixed(2)} €
                    </span>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="cursor-pointer text-xs text-zinc-400 transition-colors hover:text-red-500 md:text-sm"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Итого */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-zinc-100 bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">Итого</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Товары ({totalItems})</span>
                <span className="font-medium">{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Доставка</span>
                <span className="font-medium text-emerald-600">Бесплатно</span>
              </div>
              <div className="border-t border-zinc-100 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>К оплате</span>
                  <span>{totalPrice.toFixed(2)} €</span>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full cursor-pointer rounded-full bg-zinc-900 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-zinc-700 hover:shadow-lg">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
