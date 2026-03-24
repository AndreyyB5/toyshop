import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <p className="mb-1 text-sm text-gray-500">{product.category}</p>
      <h3 className="mb-1 text-lg font-semibold text-gray-900">
        {product.name}
      </h3>
      <p className="mb-4 text-sm text-gray-600 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">
          {product.price.toFixed(2)} €
        </span>
        <button className="cursor-pointer rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
          В корзину
        </button>
      </div>
    </div>
  );
}
