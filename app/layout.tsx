import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TLMoto | Técnico Lisboa",
  description:
    "Conhece a TLMoto, a equipa de motociclismo do Técnico Lisboa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
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
              <Link
                href="/"
                className="text-sm font-semibold text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                Início
              </Link>
              <Link
                href="/members"
                className="text-sm font-semibold text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                Membros
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
