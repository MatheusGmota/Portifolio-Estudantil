'use client'

import { TipoProva } from "@/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Adicionar({ params }: { params: { rm: string } }) {

    const navegacao = useRouter()

    const [prova, setProva] = useState<TipoProva>({
        idProva: 0,
        semestre: 0,
        nota: 0,
        data: "",
        feedback: "",
        avaliacao: "",
        disciplina: "",
        descricao: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        setProva((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        try {

            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PROVAS as string}/${params.rm}/cad-prova`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(prova)
            })

            if (response.ok) {
                alert("Prova adicionada com sucesso!")
                setProva({
                    idProva: 0,
                    semestre: 0,
                    nota: 0,
                    data: "",
                    feedback: "",
                    avaliacao: "",
                    disciplina: "",
                    descricao: ""
                })
                navegacao.push(`/aluno/${params.rm}`)
            }

        } catch (e) {
            console.error("Erro ao adicionar prova", e)
        }
    }

    const disciplinas = ["ARTIFICIAL INTELLIGENCE & CHATBOT", "COMPUTATIONAL THINKING USING PYTHON", "DOMAIN DRIVEN DESIGN USING JAVA", "BUILDING RELATIONAL DATABASE", "FRONT-END DESIGN ENGINEERING", "SOFTWARE ENGINEERING AND BUSINESS MODEL"];

    return (
        <div className="flex flex-col items-center justify-center">
            <section className="flex flex-col items-center gap-5 p-8 rounded-lg shadow-2xl">
                <h1 className="font-bold text-2xl antialiased">Cadastrar Avaliação</h1>
                <p>{prova.disciplina}</p>
                <form onSubmit={handleSubmit} className="form-adicionar">

                    <div className="col-span-2">
                        <label>Semestre</label>
                        <select name="semestre" id="semestre" className="w-full">
                            <option value={1}>1° Semestre</option>
                            <option value={2}>2° Semestre</option>
                        </select>
                    </div>
                    <div>
                        <label>Avaliação</label>
                        <select name="avaliacao" id="avalicao">
                            <option value="checkpoint">Checkpoint</option>
                            <option value="challenge">Challenge Sprints</option>
                            <option value="gs">Global Solutions</option>
                        </select>
                    </div>
                    <div>
                        <label>Materia</label>
                        <select name="avaliacao" id="avalicao">
                            {disciplinas.map((d, i) => (
                                <option value={d} key={i}>
                                    {d}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Descrição</label>
                        <input
                            type="text"
                            id="descricao"
                            name="descricao"
                            value={prova.descricao}
                            placeholder="Descrição"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div>
                        <label>Data</label>
                        <input
                            type="text"
                            id="data"
                            name="data"
                            value={prova.data}
                            placeholder="Data"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div>
                        <label>Nota</label>
                        <input
                            type="number"
                            id="nota"
                            name="nota"
                            value={prova.nota}
                            placeholder="Nota"
                            onChange={(e) => handleChange(e)}
                            required
                        />

                    </div>
                    <div>
                        <label>Feedback</label>
                        <input
                            type="text"
                            id="feedback"
                            name="feedback"
                            value={prova.feedback}
                            placeholder="Feedback"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <section className="col-span-2">
                        <button className="botao bg-slate-800 text-white w-full" type="submit">Cadastrar</button>
                    </section>
                </form>
            </section>
            <section>
                <Link href={`/aluno/${params.rm}`} className="botao my-10 px-4 text-base">Voltar</Link>
            </section>
        </div>
    )
}
