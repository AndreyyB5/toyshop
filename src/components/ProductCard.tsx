import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

const badgeConfig = {
  new: { label: "Новинка", className: "bg-emerald-400 text-white" },
  hit: { label: "Хит", className: "bg-amber-400 text-white" },
  sale: { label: "Скидка", className: "bg-rose-400 text-white" },
};

export default function ProductCard({ product }: { product: Product }) {
  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <div className="group">
      <Link href={`/catalog/${product.id}`}>
        <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-xl bg-sky-50 md:mb-4 md:rounded-2xl">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          />
          {badge && (
            <span
              className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold shadow-sm md:left-3 md:top-3 md:text-xs ${badge.className}`}
            >
              {badge.label}
            </span>
          )}
        </div>
      </Link>
      <div className="space-y-1">
        <p className="text-xs text-slate-400 md:text-sm">{product.category}</p>
        <Link href={`/catalog/${product.id}`}>
          <h3 className="text-sm font-medium text-slate-800 md:text-base">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-bold text-sky-700 md:text-base">
            {product.price.toFixed(2)} €
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
