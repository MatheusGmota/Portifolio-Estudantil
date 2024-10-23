'use client'

import { TipoProva } from "@/type"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Editar({ params }:  { params : {rm: string, idProva: number }}) {

    const navegacao = useRouter()
    
    const [prova, setProva] = useState<TipoProva>({
        idProva: 1, 
        semestre:1, 
        nota: 0, 
        data: "", 
        feedback: "" , 
        avaliacao: "", 
        disciplina: "", 
        descricao: ""
    })
    
    useEffect(()=> {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:3000/api/base-provas/${params.rm}/editar-prova/${params.idProva}`)
            const data = await response.json()

            setProva(data)
        }
        chamadaApi()
    },[params])

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        try {

            const response = await fetch(`http://localhost:3000/api/base-provas/${params.rm}/editar-prova/${params.idProva}`, {
                method:"PUT",
                headers:{
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(prova)
            })
            
            if (response.ok) {
                alert("Prova atualizada com sucesso!")
                setProva({
                    idProva: 1, 
                    semestre:1, 
                    nota: 0, 
                    data: "", 
                    feedback: "" , 
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
        <div>
            <section>
                <h1>Editar Avaliação</h1>
                <form>
                    
                    <section>
                        <div>
                            <label>Semestre</label>
                            <select name="semestre" id="semestre">
                                <option value={1}>1° Semestre</option>
                                <option value={2}>2° Semestre</option>
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
                                onChange={(e)=> handleChange(e)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Descrição"
                                required
                                />
                    
                        </div>
                        <div>
                            <label></label>
                            <input type="text" />
                        </div>
                    </section>
                    
                    <section>
                        <div>
                            <label></label>
                            <input type="text" />
                    
                        </div>
                        <div>
                            <label></label>
                            <input type="text" />
                        </div>
                    </section>
                    
                    <section>
                        <div>
                            <label></label>
                            <input type="text" />
                    
                        </div>

                        <div>
                            <label></label>
                            <input type="text" />
                        </div>
                    </section>
                    
                    <section>
                        <button type="submit">Editar</button>
                    </section>
                </form>
            </section>
        </div>
    )
}
