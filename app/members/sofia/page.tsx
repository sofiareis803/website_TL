import Card from "@/components/Card";
import ProfileCard from "@/components/ProfileCard";

export default function SofiaPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-3">
        <aside className="lg:col-span-1">
          <ProfileCard
            photo="/pictures/sofia.jpg"
            name="Sofia Reis"
            course="MEIC"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Hobbies &amp; Interests
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              <li className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                  Livros
              </li>
              <li className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                Séries
              </li>
              <li className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                Filmes
              </li>
              <li className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                Jogos
              </li>
            </ul>
          </ProfileCard>
        </aside>

        <div className="space-y-10 lg:col-span-2">
          <Card title="Projects">
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <h3 className="font-medium">Project title</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  A short description of the project.
                </p>
              </div>
              <div className="rounded-xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <h3 className="font-medium">Another project</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  A short description of the project.
                </p>
              </div>
            </div>
          </Card>

          <Card title="What I Expect to Learn">
            <p className="leading-7 text-zinc-600 dark:text-zinc-400">
              Write here what you hope to learn.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}