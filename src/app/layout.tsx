import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portifolio Estudantil",
    description: "Nesse portifolio, os alunos podem visualizar suas notas de maneira mais eficiente.",
};

export const viewport = {
    width:'device-width', 
    initialScale:1.0
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
        <body className="min-h-screen">
            {children}
        </body>
        </html>
    );
}