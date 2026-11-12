import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "@/components/Card";
import ProfileCard from "@/components/ProfileCard";
import { members } from "@/data/members";
import { Suspense } from "react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  return { title: member ? `${member.name} | TLMoto` : "Membro não encontrado" };
}


export default async function MemberPage({ params }: Props) {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 lg:px-12">
      <Link
        href="/members"
        className="text-sm font-semibold text-sky-800 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
      >
        ← Membros
      </Link>

      <Suspense fallback={<p className="mt-8 text-zinc-500">A carregar…</p>}>
        <MemberContent params={params} />
      </Suspense>
    </main>
  );
}



async function MemberContent({ params }: Props) {
    const { slug } = await params;
    const member = members.find((m) => m.slug === slug);

    if (!member) notFound();

    return (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <aside className="lg:col-span-1">
                <ProfileCard
                photo={member.photo}
                name={member.name}
                course={member.course}
                >
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    Hobbies e Interesses
                    </h2>
                    <ul className="mt-3 flex flex-wrap gap-2">
                    {member.interests.map((interest) => (
                        <li
                        key={interest}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800"
                        >
                        {interest}
                        </li>
                    ))}
                    </ul>
                </ProfileCard>
            </aside>
            <div className="space-y-8 lg:col-span-2">
            <Card title="Projetos">
                <div className="space-y-4">
                {member.projects.map((project) => (
                    <div
                    key={project.title}
                    className="rounded-xl bg-zinc-50 p-5 dark:bg-zinc-900"
                    >
                    <h3 className="font-medium">
                        {(
                        project.title
                        )}
                    </h3>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                        {project.description}
                    </p>
                    </div>
                ))}
                </div>
            </Card>
            <Card title="O que espero aprender">
                <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                {member.expectations}
                </p>
            </Card>
        </div>
    </div>
    );
}