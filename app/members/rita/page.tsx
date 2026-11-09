import Card from "@/components/Card";
import ProfileCard from "@/components/ProfileCard";

export default function RitaPage() {
    return (
        <main className="mx-auto min-h-screen max-w-7xl px-6 py-12 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-3">
                <aside className="lg:col-span-1">
                    <ProfileCard
                        photo="/pictures/rita.jpg"
                        name="Rita Vieira"
                        course="LEIC-A 2.º Ano"
                    >
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    Hobbies &amp; Interesses
                    </h2>
                    <ul className="mt-3 flex flex-wrap gap-2">
                        <li className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                            Volley
                        </li>
                        <li className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                            Livros
                        </li>
                        <li className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                            Música
                        </li>
                        <li className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                            Crochet
                        </li>
                        <li className="w-full flex justify-center">
                            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                                Desportos (Futebol, Ténis, Fórmula1)
                            </span>
                        </li>
                    </ul>
                    </ProfileCard>
                </aside>

                <div className="space-y-10 lg:col-span-2">
                    <Card title="Projetos">
                        <div className="rounded-xl bg-zinc-50 p-5 dark:bg-zinc-900">
                            <h3 className="font-medium">Sistema faturação de produtos (IAED)</h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                            Sistema que permitia adicionar, remover e listar produtos e no fim criava a fatura associada ao cliente.
                            </p>
                        </div>
                    </Card>

                    <Card title="O que espero aprender">
                        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                        Desenvolvimento de apps e ganhar conhecimentos ligados à minha área para além do curso.
                        </p>
                    </Card>
                </div>
            </div>
        </main>
            )
}