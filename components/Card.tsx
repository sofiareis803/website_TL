export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}