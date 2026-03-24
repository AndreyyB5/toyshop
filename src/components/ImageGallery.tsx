"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const handleSwipe = useCallback(() => {
    const diff = touchStart.current - touchEnd.current;
    const threshold = 50;

    if (diff > threshold && active < images.length - 1) {
      setActive(active + 1);
    } else if (diff < -threshold && active > 0) {
      setActive(active - 1);
    }
  }, [active, images.length]);

  const markLoaded = (index: number) => {
    setLoaded((prev) => new Set(prev).add(index));
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Главное фото с поддержкой свайпа */}
      <div
        className="relative aspect-square overflow-hidden rounded-2xl bg-sky-50 md:aspect-[4/5] md:rounded-3xl"
        onTouchStart={(e) => {
          touchStart.current = e.targetTouches[0].clientX;
        }}
        onTouchMove={(e) => {
          touchEnd.current = e.targetTouches[0].clientX;
        }}
        onTouchEnd={handleSwipe}
      >
        {/* Скелетон */}
        {!loaded.has(active) && (
          <div className="skeleton absolute inset-0 z-10" />
        )}

        <Image
          src={images[active]}
          alt=""
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: loaded.has(active) ? 1 : 0 }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          onLoad={() => markLoaded(active)}
        />
      </div>

      {/* Точки-индикаторы на мобилке */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 md:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                active === i
                  ? "w-6 bg-sky-500"
                  : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* Миниатюры на десктопе */}
      {images.length > 1 && (
        <div className="hidden gap-2 md:flex">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-xl transition-all ${
                active === i
                  ? "ring-2 ring-sky-500 ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
