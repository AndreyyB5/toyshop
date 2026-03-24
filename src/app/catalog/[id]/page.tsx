import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Каталог", href: "/catalog" },
            { label: product.name },
          ]}
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          {/* Фото */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 md:aspect-[4/5] md:rounded-3xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Информация */}
          <div className="flex flex-col justify-center pb-20 md:pb-0">
            <p className="mb-2 text-xs font-medium tracking-widest text-zinc-400 uppercase md:mb-3">
              {product.category}
            </p>
            <h1 className="mb-3 text-2xl font-bold tracking-tight md:mb-4 md:text-3xl">
              {product.name}
            </h1>
            <p className="mb-6 text-sm leading-relaxed text-zinc-500 md:mb-8 md:text-base">
              {product.description}
            </p>
            <p className="mb-6 text-xl font-bold md:mb-8 md:text-2xl">
              {product.price.toFixed(2)} €
            </p>
            {/* Desktop button */}
            <button className="hidden w-full cursor-pointer rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-900/20 md:block md:w-auto">
              Добавить в корзину
            </button>
          </div>
        </div>

        {/* Похожие товары */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="mb-6 text-lg font-semibold md:mb-8">Похожие товары</h2>
            <div className="grid grid-cols-2 gap-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-100 bg-white/90 px-4 py-3 backdrop-blur-md md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-zinc-500">{product.name}</p>
            <p className="text-lg font-bold">{product.price.toFixed(2)} €</p>
          </div>
          <button className="cursor-pointer rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
            В корзину
          </button>
        </div>
      </div>
    </>
  );
}
