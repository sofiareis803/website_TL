"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const members = [
  { href: "/members/sofia", label: "Sofia" },
  { href: "/members/member-two", label: "Member Two" },
  { href: "/members/member-three", label: "Member Three" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(pathname.startsWith("/members"));

  const itemClass = (href: string) =>
    `block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
      pathname === href ? "bg-zinc-100 font-medium dark:bg-zinc-800" : ""
    }`;

  return (
    <aside className="border-b border-zinc-200 p-6 dark:border-zinc-800 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Our Team
      </Link>

      <nav className="mt-8 space-y-1">
        <Link href="/" className={itemClass("/")}>
          Home
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          Members
          <span>{open ? "▾" : "▸"}</span>
        </button>

        {open && (
          <ul className="ml-3 space-y-1 border-l border-zinc-200 pl-3 dark:border-zinc-800">
            {members.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className={itemClass(m.href)}>
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
}