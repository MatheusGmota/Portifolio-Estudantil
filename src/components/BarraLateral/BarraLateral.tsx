"use client"

import React, { useState } from 'react'
import { TipoAluno } from "@/types";
import Image from 'next/image';

export default function BarraLateral() {

    const [aluno, setAluno] = useState<TipoAluno>({
        nome: 'Felipe Seiki', curso: 'Ads', img: '/img/foto-felipe.jpg', rm: '98985', turma: '1TDSPY'
    });

    return (
        <div className='barra-lateral'>
            {/* {aluno.map((a) =>( */}
            <div key={aluno.rm} className='wrapper-aluno'>
                <article>
                    <div className='aluno'>
                        <Image src={aluno.img} width={140} height={140} alt={`foto de ${aluno.nome}`} />
                        <h3>
                            {aluno.nome}
                        </h3>
                    </div>
                    <div className='dados'>
                        <p>{aluno.rm}</p>
                        <p>{aluno.turma}</p>
                        <p>curso</p>
                        <p>{aluno.curso}</p>
                    </div>
                </article>
            </div>

        </div>
    )
}
