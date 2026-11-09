import Card from "@/components/Card";
import ProfileCard from "@/components/ProfileCard";

const hobbies = ["Programação", "Jogos", "Ténis", "Ginásio"];

export default function DiogoPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-3">
        <aside className="lg:col-span-1">
          <ProfileCard
            photo="/pictures/diogo.jpg"
            name="Diogo Figueiredo"
            course="LEAer"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Hobbies &amp; Interesses
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <li
                  key={hobby}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800"
                >
                  {hobby}
                </li>
              ))}
            </ul>
          </ProfileCard>
        </aside>

        <div className="space-y-10 lg:col-span-2">
          <Card title="Projetos">
            <div className="rounded-xl bg-zinc-100 p-5 dark:bg-zinc-900">
              <h3 className="font-medium">A.A.</h3>
              <p className="mt-2 text-zinc-700 dark:text-zinc-400">
                Script que connectava às APIs de um MMO e do discord para automatizar a limpeza de loot assim que o user se ligava ao jogo (detetado através da rich presence).
              </p>
            </div>
          </Card>

          <Card title="O que espero aprender">
            <p className="leading-7 text-zinc-700 dark:text-zinc-400">
              Espero aprender mais sobre web development e webapps e eventualmente poder contribuir para os projetos da equipa.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}