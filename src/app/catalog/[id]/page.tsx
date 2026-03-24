import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
import ProductOptions from "@/components/ProductOptions";

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
          <ImageGallery images={product.images} />
          <ProductOptions product={product} />
        </div>

        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="mb-6 text-xl font-bold text-slate-800 md:mb-8 md:text-2xl">
              Похожие товары
            </h2>
            <div className="grid grid-cols-2 gap-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
