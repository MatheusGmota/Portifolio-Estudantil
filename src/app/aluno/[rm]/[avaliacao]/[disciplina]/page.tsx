'use client'
import TabelaProvas from "@/components/TabelaProvas/TabelaProvas";
import { TipoProva } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Provas({ params }: { params: { rm: string, avaliacao: string, disciplina: string } }) {

    const navegacao = useRouter()

    const [botaoAtivo, setBotaoAtivo] = useState<number>(1)

    const [provas, setProvas] = useState<TipoProva[]>([])

    const [semestre, setSemestre] = useState<TipoProva[]>([])

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PROVAS as string}/${params.rm}/${params.avaliacao}/${params.disciplina}`)
            
            if (!response.ok) {
                alert(`Erro na requisição. Status: ${response.status}`)
                navegacao.push(`/aluno/${params.rm}`)
            } else {
                const data = await response.json()
                setProvas(data)
            }

        }
        chamadaApi()
    }, [params, navegacao])

    
    useEffect(() => {
        setSemestre(provas.filter((p) => p.semestre === botaoAtivo))
    }, [provas, botaoAtivo])



    return (
        <div className="flex flex-col justify-center items-center gap-6 w-auto">
            <h1 className="text-4xl font-bold my-2">{params.avaliacao.toUpperCase()}</h1>
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }}>
                <section className="flex flex-col items-center gap-10 text-white p-6 rounded-lg bg-gray-900 shadow-2xl">
                    <article className="flex items-center justify-between w-[1200px]">
                        <h2 className="text-lg/3">{decodeURIComponent(params.disciplina)}</h2>
                        <div className="flex justify-between min-w-60">
                            <button className={`botao ${botaoAtivo === 1 ? "ativo" : ""}`} onClick={() => setBotaoAtivo(1)}>1 semestre</button>
                            <button className={`botao ${botaoAtivo === 2 ? "ativo" : ""}`} onClick={() => setBotaoAtivo(2)}>2 semestre</button>
                        </div>
                    </article>
                    <article className="flex items-center justify-between w-[1200px]">
                        <TabelaProvas provas={semestre} />
                    </article>
                </section>
            </motion.div>
            <section className="flex items-start w-full p-6">
                <Link className="font-bold text-lg underline hover:text-pink-600 transition-all" href={`/aluno/${params.rm}`}>Voltar</Link>
            </section>
        </div>
    )
}