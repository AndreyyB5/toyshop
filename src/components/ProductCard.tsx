import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

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
      <div className="space-y-1">
        <p className="text-xs text-zinc-400 md:text-sm">{product.category}</p>
        <Link href={`/catalog/${product.id}`}>
          <h3 className="text-sm font-medium text-zinc-900 md:text-base">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-bold md:text-base">
            {product.price.toFixed(2)} €
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
