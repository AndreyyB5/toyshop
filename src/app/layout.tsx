import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CartProvider } from "@/context/CartContext";
import CartIcon from "@/components/CartIcon";
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
      <body className="flex min-h-full flex-col bg-white text-slate-800">
        <CartProvider>
          <header className="sticky top-0 z-50 border-b border-sky-100/60 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="ToyShop"
                  width={32}
                  height={32}
                  className="md:h-9 md:w-9"
                />
                <span className="text-lg font-bold tracking-tight text-sky-700 md:text-xl">
                  ToyShop
                </span>
              </Link>

              <nav className="hidden items-center gap-8 text-base md:flex">
                <Link
                  href="/catalog"
                  className="font-medium text-slate-500 transition-colors hover:text-sky-600"
                >
                  Каталог
                </Link>
                <Link
                  href="/about"
                  className="font-medium text-slate-500 transition-colors hover:text-sky-600"
                >
                  О нас
                </Link>
              </nav>

              <div className="flex items-center gap-1">
                <CartIcon />
                <MobileMenu />
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-sky-100/60 bg-sky-50/30">
            <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-8 text-sm text-slate-400">
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
        </CartProvider>
      </body>
    </html>
  );
}
