import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group">
      <Link href={`/catalog/${product.id}`}>
        <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100 md:mb-4 md:rounded-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </Link>
      <div className="space-y-0.5 md:space-y-1">
        <p className="text-[10px] text-zinc-400 md:text-xs">{product.category}</p>
        <Link href={`/catalog/${product.id}`}>
          <h3 className="text-xs font-medium text-zinc-900 md:text-sm">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs font-semibold md:text-sm">
            {product.price.toFixed(2)} €
          </span>
          <button className="cursor-pointer rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-medium text-white transition-colors hover:bg-zinc-700 md:px-4 md:py-1.5 md:text-xs">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
