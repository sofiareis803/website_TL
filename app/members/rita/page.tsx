import Card from "@/app/components/Card";
import ProfileCard from "@/app/components/ProfileCard";

export default function RitaPage() {
    return (
        <main className="mx-auto min-h-screen max-w-7xl px-6 py-12 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-3">
                <aside className="lg:col-span-1">
                    <ProfileCard
                        photo="/fotos/rita.jpeg"
                        name="Rita Vieira"
                        course="LEIC-A 2.º Ano"
                    ></ProfileCard>
                </aside>
            </div>
        </main>
            )
}
