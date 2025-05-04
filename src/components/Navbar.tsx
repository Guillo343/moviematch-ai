"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Catalog", href: "/catalog" },
  { label: "Trending", href: "/trending" },
  { label: "IA", href: "/movie-suggest", highlight: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-900 text-white p-4 shadow-md">
      <ul className="flex justify-center gap-8">
        {navItems.map(({ label, href, highlight }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${pathname === href ? "underline" : ""} ${
                highlight
                  ? "text-indigo-400 font-bold"
                  : "hover:text-indigo-300"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
