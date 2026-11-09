import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Diogo",
    course: "LEAer",
    href: "/members/diogo",
    photo: "/pictures/diogo.jpg"
  },
  {
    name: "Sofia Reis",
    course: "MEIC",
    href: "/members/sofia",
    photo: "/pictures/sofia.jpg",
  },
  {
    name: "Rita Vieira",
    course: "LEIC",
    href: "/members/rita",
  }
];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-zinc-950 lg:px-12 lg:py-16 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm font-semibold text-sky-800 hover:text-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 dark:text-sky-300 dark:hover:text-sky-200 dark:focus-visible:outline-sky-300"
        >
          ← Início
        </Link>
        <p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-orange-700 dark:text-orange-400">
          TLMoto · Técnico Lisboa
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Membros
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Grupo 1
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {members.map((member) => (
            <li key={member.href}>
              <Link
                href={member.href}
                className="group flex h-full items-center gap-5 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-700 dark:focus-visible:outline-sky-300"
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt=""
                    width={88}
                    height={88}
                    className="size-20 rounded-2xl object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-2xl font-bold text-sky-900 dark:bg-sky-950 dark:text-sky-200"
                  >
                    D
                  </span>
                )}
                <span>
                  <span className="block text-xl font-semibold">{member.name}</span>
                  <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                    {member.course}
                  </span>
                  <span className="mt-4 inline-block text-sm font-semibold text-blue-800 group-hover:text-orange-600">
                    Ver perfil <span aria-hidden="true">→</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}