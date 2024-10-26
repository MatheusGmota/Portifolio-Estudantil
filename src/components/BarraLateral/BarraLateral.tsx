"use client"

import { TipoAluno } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BarraLateral() {

    const { rm } = useParams();

    const [aluno, setAluno] = useState<TipoAluno>({
        rm: "",
        img: "",
        nome: "",
        turma: "",
        curso: ""
    });

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:3000/api/base-alunos/${rm}`);
            const data = await response.json();
            setAluno(data);
            console.log(data + "sim")
        }
        chamadaApi();
    }, [rm])

    return (
        <div className='barra-lateral'>
            <section key={aluno.rm} className='wrapper-aluno'>
                <article>
                    <div className='aluno'>
                        <Image src={aluno.img} width={140} height={140} alt={`foto de ${aluno.nome}`} className='rounded-full m-2' />
                        <h3 className='text-center'>
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
                    <Link href={`/aluno/${rm}/cad-prova`}>Adicionar Prova</Link>
                </div>
                <div>
                    <Link href={"/"}>Voltar Página Principal</Link>
                </div>
            </section>

        </div>
    )
}
