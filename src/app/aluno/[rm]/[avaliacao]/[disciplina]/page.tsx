'use client'
import TabelaProvas from "@/components/TabelaProvas/TabelaProvas";
import { TipoProva } from "@/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
 
export default function Provas({ params }: { params: {rm: string, avaliacao: string, disciplina: string} }) {

    const navegacao = useRouter()

    const [botaoAtivo, setBotaoAtivo] = useState<number>(1)
    
    const [provas, setProvas] = useState<TipoProva[]>([])
    
    const [semestre, setSemestre] = useState<TipoProva[]>([])
    
    useEffect(()=> {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:3000/api/base-provas/${params.rm}/${params.avaliacao}/${params.disciplina}`)
            const data = await response.json()

            if(!data) {
                alert("Erro ao realizar requisição.")
                navegacao.push(`/aluno/${params.rm}`)
            }

            setProvas(data)
        }
        chamadaApi()
    },[params, navegacao])

    useEffect(()=> {
        setSemestre(provas.filter((p) => p.semestre === botaoAtivo))
    },[provas, botaoAtivo])

    return (
        <div className="flex flex-col justify-center items-center gap-6 w-auto">
            <h1 className="text-4xl font-bold my-2">{params.avaliacao.toUpperCase()}</h1>
            <motion.div initial={{ y:100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }}>
                <section className="conteudo-principal">
                    <article>
                        <h2 className="text-lg/3">{decodeURIComponent(params.disciplina)}</h2>
                        <div>
                            <button className={`botao ${botaoAtivo === 1 ? "ativo" : ""}`} onClick={() => setBotaoAtivo(1)}>1 semestre</button>
                            <button className={`botao ${botaoAtivo === 2 ? "ativo" : ""}`} onClick={() => setBotaoAtivo(2)}>2 semestre</button>
                        </div>
                    </article>
                    <article>
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