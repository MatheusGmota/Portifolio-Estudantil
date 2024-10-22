'use client'
import TabelaProvas from "@/components/TabelaProvas/TabelaProvas";
import { TipoProva } from "@/type";
import { useState } from "react";
 
export default function Provas({ params }: { params: {rm: string, avaliacao: string, disciplina: string} }) {
 
    const [botaoAtivo, setbotaoAtivo] = useState<number>(1)
    const provas: TipoProva[] = []
 
 
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
            <h1 className="text-4xl font-bold my-2">{params.avaliacao.toUpperCase()}</h1>
            <section className="conteudo-principal">
                <article>
                    <h2 className="text-lg/3">{decodeURIComponent(params.disciplina)}</h2>
                    <div>
                        <button className={`botao ${botaoAtivo === 1 ? "ativo" : ""}`} onClick={() => setbotaoAtivo(1)}>1 semestre</button>
                        <button className={`botao ${botaoAtivo === 2 ? "ativo" : ""}`} onClick={() => setbotaoAtivo(2)}>2 semestre</button>
                    </div>
                </article>
                <article>
                    <TabelaProvas provas={provas} />
                </article>
            </section>
        </div>
    )
}