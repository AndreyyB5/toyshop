import type { Metadata } from "next";
import Link from "next/link";
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
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-gray-50 text-gray-900">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              ToyShop
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/catalog"
                className="text-gray-700 transition-colors hover:text-indigo-600"
              >
                Каталог
              </Link>
              <Link
                href="/about"
                className="text-gray-700 transition-colors hover:text-indigo-600"
              >
                О нас
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
            © 2026 ToyShop
          </div>
        </footer>
      </body>
    </html>
  );
}
