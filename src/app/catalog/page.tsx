import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Каталог</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
