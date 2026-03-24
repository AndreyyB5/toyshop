import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="scrollbar-hide mb-6 flex items-center overflow-x-auto whitespace-nowrap pb-1 text-xs text-zinc-400 md:mb-8">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <span className="mx-1.5 md:mx-2">/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="py-2 transition-colors hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ) : (
            <span className="max-w-[200px] truncate py-2 text-zinc-900">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
