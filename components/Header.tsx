import Image from "next/image";
import Link from "next/link";
import { members } from "@/data/members";

const linkClass =
  "text-sm font-semibold text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white";

export default function Header() {
  return (
    <header className="relative z-10 border-b border-zinc-200 bg-white/90 dark:border-white/10 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/" aria-label="TLMoto - Início">
          <Image
            src="/pictures/logotl.jpg"
            alt="TLMoto, Técnico Lisboa"
            width={88}
            height={88}
            className="size-14 rounded-lg object-contain"
            priority
          />
        </Link>

        <nav aria-label="Navegação principal" className="flex items-center gap-6">
          <Link href="/" className={linkClass}>
            Início
          </Link>

          <div className="group relative">
            <Link href="/members" className={linkClass}>
              Membros ▾
            </Link>

            <ul className="invisible absolute right-0 top-full w-52 rounded-xl border border-zinc-200 bg-white p-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-900">
              {members.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/members/${m.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}