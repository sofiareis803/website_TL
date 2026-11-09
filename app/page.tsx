import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12 lg:px-12">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
            Welcome to our website
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Write here a short introduction about the group: who you are, what
            course this is for, and what this website is about.
          </p>
        </div>

        <Image
          src="/pictures/TL.jpg"
          alt="Group photo"
          width={800}
          height={600}
          className="h-auto w-full rounded-2xl object-cover"
          priority
        />
      </div>
    </main>
  );
}