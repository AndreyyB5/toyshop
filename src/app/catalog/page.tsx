import { products } from "@/data/products";
import CategoryFilter from "@/components/CategoryFilter";

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-16">
      <h1 className="mb-1 text-2xl font-bold tracking-tight md:text-3xl">
        Каталог
      </h1>
      <p className="mb-6 text-xs text-zinc-400 md:mb-8 md:text-sm">
        {products.length} товаров
      </p>
      <CategoryFilter products={products} />
    </div>
  );
}
