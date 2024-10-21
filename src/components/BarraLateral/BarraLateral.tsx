import React, { useState } from 'react'
import { Aluno } from "@/types";

export default function BarraLateral() {
    
    const [aluno, setAluno] = useState<Aluno[]>([]);

  return (
    <div>
        {aluno.map((a) =>(
            <div key={a.rm}>
                <img src="" alt="" />
                <h2>
                    {a.nome}
                </h2>
                <p>{a.rm}</p>
                <p>{a.turma}</p>
                <p>curso</p>
                <p>{a.curso}</p>
            </div>
        ))}
    </div>
  )
}
