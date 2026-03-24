import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:px-6 md:py-20">
      <div className="mb-8 flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="ToyShop"
          width={48}
          height={48}
        />
        <div>
          <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
            О магазине
          </p>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            ToyShop
          </h1>
        </div>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-zinc-500 md:space-y-5 md:text-base">
        <p>
          Мы — интернет-магазин качественных игрушек для детей всех возрастов.
          Каждый товар в нашем каталоге тщательно отобран, чтобы быть безопасным,
          интересным и полезным для развития ребёнка.
        </p>
        <p>
          Ассортимент включает мягкие игрушки, конструкторы, настольные игры и
          кукол от проверенных производителей. Мы работаем напрямую с
          поставщиками, что позволяет предлагать лучшие цены.
        </p>
        <p>
          Игра — важнейшая часть детства. Каждая игрушка в нашем каталоге
          помогает детям учиться, творить и мечтать.
        </p>
      </div>
    </div>
  );
}
