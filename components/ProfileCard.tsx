import Image from "next/image";

export default function ProfileCard({
  photo,
  name,
  course,
  children,
}: {
  photo: string;
  name: string;
  course: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center lg:sticky lg:top-8 dark:border-zinc-800 dark:bg-zinc-900">
      <Image
        src={photo}
        alt={`Photo of ${name}`}
        width={240}
        height={240}
        className="mx-auto h-56 w-56 rounded-full object-cover"
        priority
      />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">{name}</h1>
      <p className="mt-1 text-zinc-600 dark:text-zinc-400">{course}</p>

      {children && (
        <div className="mt-8 border-t border-zinc-200 pt-6 text-left dark:border-zinc-800">
          {children}
        </div>
      )}
    </div>
  );
}