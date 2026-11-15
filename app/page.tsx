import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white text-zinc-950 dark:bg-slate-950 dark:text-white">
      <Image
        src="/pictures/tl05.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-20 object-cover object-center"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-white/70 dark:bg-slate-950/75" />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-12 pt-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:px-12 lg:pb-16">
        <div className="flex min-w-0 flex-col justify-center py-10 lg:py-16">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-sky-800 sm:tracking-[0.24em] dark:text-sky-300">
            <span className="h-px w-9 shrink-0 bg-orange-500" />
            TLMoto · Técnico Lisboa
          </p>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            TLMoto
            <span className="block text-sky-800 dark:text-sky-300">Recrutamento</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-700 dark:text-slate-200">
            Projeto workshop website 2027 - Tarefa 1
          </p>
          <div className="mt-9">
            <Link
              href="/members"
              className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
            >
              Descobre os membros
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-zinc-300 px-6 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-12 dark:border-white/20 dark:text-slate-300">
        <span>TLMoto · Técnico Lisboa</span>
      </footer>
    </main>
  );
}
