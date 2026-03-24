export default function Marquee() {
  const items = [
    "Мягкие игрушки",
    "★",
    "Конструкторы",
    "★",
    "Настольные игры",
    "★",
    "Куклы",
    "★",
    "Бесплатная доставка",
    "★",
    "Безопасные материалы",
    "★",
    "От 0 до 12 лет",
    "★",
  ];

  const content = items.join("   ");

  return (
    <div className="relative overflow-hidden border-y border-zinc-100 bg-zinc-50 py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium tracking-wider text-zinc-400 uppercase"
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
