"use client"

import React, { useState } from 'react'
import { TipoAluno } from "@/types";
import Image from 'next/image';
import Link from 'next/link';

export default function BarraLateral() {

    const [aluno, setAluno] = useState<TipoAluno>({
        nome: 'Felipe Seiki', curso: 'Análise e Desenvolvimento de Sistemas', img: '/img/foto-felipe.jpg', rm: '98985', turma: '1TDSPY'
    });

    return (
        <div className='barra-lateral'>
            <section key={aluno.rm} className='wrapper-aluno'>
                <article>
                    <div className='aluno'>
                        <Image src={aluno.img} width={140} height={140} alt={`foto de ${aluno.nome}`} className='rounded-full m-2'/>
                        <h3>
                            {aluno.nome}
                        </h3>
                    </div>
                    <div className='dados'>
                        <p>RM - {aluno.rm}</p>
                        <p>Turma - {aluno.turma}</p>
                        <p>Curso - {aluno.curso}</p>
                    </div>
                </article>
                <div>
                    <Link href={"/"}>Voltar</Link>
                </div>
            </section>

        </div>
    )
}
