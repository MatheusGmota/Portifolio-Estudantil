'use client'

import { TipoProva } from "@/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Editar({ params }: { params: { rm: string, idProva: number } }) {

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

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:3000/api/base-provas/${params.rm}/editar-prova/${params.idProva}`, {mode: 'no-cors'})
            const data = await response.json()

            setProva(data)
        }
        chamadaApi()
    }, [params])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        setProva((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        try {

            const response = await fetch(`http://localhost:3000/api/base-provas/${params.rm}/editar-prova/${params.idProva}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(prova),
                mode:'no-cors'
            })

            if (response.ok) {
                alert("Prova atualizada com sucesso!")
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
            console.error("Erro ao atualizar prova", e)
        }
    }

    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <section className="flex flex-col items-center max-w-xl gap-5 p-8 rounded-lg shadow-2xl">
                <h1 className="font-bold text-2xl antialiased">Editar Avaliação</h1>
                <p>{prova.disciplina}</p>
                <form onSubmit={handleSubmit} className="form-editar">

                    <section>
                        <div>
                            <label>Semestre</label>
                            <select name="semestre" id="semestre">
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
                    </section>

                    <section>
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
                    </section>

                    <section>
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
                    </section>

                    <section>
                        <button className="botao bg-slate-800 text-white w-full" type="submit">Editar</button>
                    </section>
                </form>
            </section>
            <section>
                <Link href={`/aluno/${params.rm}`} className="botao my-10 px-4 text-base">Voltar</Link>
            </section>
        </div>
    )
}
