import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToyShop — Магазин игрушек",
  description: "Лучшие игрушки для ваших детей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased" style={{ colorScheme: "light" }}>
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="ToyShop"
                width={32}
                height={32}
                className="md:h-9 md:w-9"
              />
              <span className="text-lg font-semibold tracking-tight md:text-xl">
                ToyShop
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 text-sm md:flex">
              <Link
                href="/catalog"
                className="text-zinc-500 transition-colors hover:text-zinc-900"
              >
                Каталог
              </Link>
              <Link
                href="/about"
                className="text-zinc-500 transition-colors hover:text-zinc-900"
              >
                О нас
              </Link>
            </nav>

            {/* Mobile nav */}
            <MobileMenu />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-100">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-8 text-xs text-zinc-400">
            <Image
              src="/logo.svg"
              alt="ToyShop"
              width={18}
              height={18}
              className="opacity-40"
            />
            © 2026 ToyShop
          </div>
        </footer>
      </body>
    </html>
  );
}
