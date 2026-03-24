import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Добро пожаловать в ToyShop
        </h1>
        <p className="text-lg text-gray-600">
          Лучшие игрушки для ваших детей
        </p>
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-semibold text-gray-900">
          Популярные товары
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
