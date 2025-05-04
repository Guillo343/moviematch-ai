"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Catálogo", href: "/catalog" },
  { label: "Tendencias", href: "/trending" },
  { label: "IA 🤖", href: "/ai", highlight: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 p-4 bg-gray-900 text-white shadow-md">
      {navItems.map(({ label, href, highlight }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`text-lg font-medium ${
              highlight ? "text-pink-400" : ""
            } ${isActive ? "underline underline-offset-4" : "hover:text-gray-300"}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
