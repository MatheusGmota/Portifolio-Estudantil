import BarraLateral from "@/components/BarraLateral/BarraLateral";

export default function AlunoLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <BarraLateral />
            <main>
                {children}
            </main>
        </div>
    );
}
