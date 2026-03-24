import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const featured = products.slice(0, 4);

  const categories = [
    {
      name: "Мягкие игрушки",
      emoji: "🧸",
      color: "from-amber-50 to-orange-50",
      desc: "Уютные друзья для обнимашек",
    },
    {
      name: "Конструкторы",
      emoji: "🧱",
      color: "from-blue-50 to-sky-50",
      desc: "Строй, создавай, мечтай",
    },
    {
      name: "Настольные игры",
      emoji: "🎲",
      color: "from-emerald-50 to-green-50",
      desc: "Вечера с семьёй",
    },
    {
      name: "Куклы",
      emoji: "🎀",
      color: "from-pink-50 to-rose-50",
      desc: "Истории и приключения",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Анимированные градиентные пятна */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-pulse-glow absolute -top-32 left-1/4 h-[300px] w-[300px] rounded-full bg-sky-200/40 blur-3xl md:h-[500px] md:w-[500px]" />
          <div className="animate-pulse-glow absolute -top-20 right-1/3 h-[250px] w-[250px] rounded-full bg-indigo-200/30 blur-3xl md:h-[400px] md:w-[400px]" style={{ animationDelay: "2s" }} />
          <div className="animate-pulse-glow absolute bottom-0 right-1/4 h-[200px] w-[200px] rounded-full bg-pink-100/30 blur-3xl md:h-[300px] md:w-[300px]" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 text-center md:px-6 md:pb-20 md:pt-24">
          {/* Заголовок с градиентом */}
          <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:mb-6 md:text-7xl">
            Игрушки, с которыми{" "}
            <span className="animate-gradient-text">хочется расти</span>
          </h1>

          <p className="mx-auto mb-8 max-w-md px-4 text-lg text-slate-500 md:mb-10 md:text-xl">
            Качественные и безопасные игрушки для детей всех возрастов.
            Доставка по всей Европе.
          </p>

          <div className="flex flex-col items-center gap-3 px-4 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/catalog"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/30 sm:w-auto"
            >
              Смотреть каталог →
            </Link>
            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky-200 bg-white/80 px-8 py-3.5 text-base font-semibold text-sky-700 backdrop-blur-sm transition-all hover:border-sky-300 hover:bg-sky-50 hover:shadow-lg sm:w-auto"
            >
              О магазине
            </Link>
          </div>
        </div>
      </section>

      {/* BENTO GRID — категории */}
      <section className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-14">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest text-slate-400 uppercase md:text-base">
              Категории
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Найдите идеальный подарок
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 100}>
              <Link
                href="/catalog"
                className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${cat.color} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:rounded-3xl md:p-10`}
              >
                <span className="mb-2 text-4xl transition-transform duration-300 group-hover:scale-110 md:mb-3 md:text-6xl">
                  {cat.emoji}
                </span>
                <h3 className="mb-0.5 text-sm font-semibold text-slate-800 md:text-base">
                  {cat.name}
                </h3>
                <p className="hidden text-sm text-slate-500 sm:block">{cat.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ПОПУЛЯРНЫЕ ТОВАРЫ */}
      <section className="bg-sky-50/30 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-8 flex items-end justify-between md:mb-10">
              <div>
                <p className="mb-1 text-sm font-medium tracking-widest text-slate-400 uppercase md:mb-2 md:text-base">
                  Хиты продаж
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Популярное
                </h2>
              </div>
              <Link
                href="/catalog"
                className="hidden text-base text-slate-400 transition-colors hover:text-slate-800 sm:block"
              >
                Все товары →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
            {featured.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-slate-800"
              >
                Все товары →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA секция */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-pulse-glow absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-sky-100/50 blur-3xl" />
          <div className="animate-pulse-glow absolute bottom-0 right-1/3 h-[250px] w-[250px] rounded-full bg-indigo-100/40 blur-3xl" style={{ animationDelay: "2s" }} />
        </div>

        <ScrollReveal>
          <div className="relative mx-auto max-w-2xl px-4 text-center md:px-6">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:mb-4 md:text-4xl">
              Не знаете, что выбрать?
            </h2>
            <p className="mb-6 text-lg text-slate-500 md:mb-8 md:text-xl">
              Загляните в каталог — там точно есть то, что вызовет улыбку.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/30"
            >
              Перейти в каталог →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
