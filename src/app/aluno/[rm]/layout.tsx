import BarraLateral from "@/components/BarraLateral/BarraLateral";

export default function AlunoLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex">
            <BarraLateral />
            <main className="grid content-center w-full">
                {children}
            </main>
        </div>
    );
}