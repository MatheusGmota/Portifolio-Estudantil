import { TipoAluno } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Card({aluno} : {aluno: TipoAluno} ) {
  return (
    <>
        <div className="relative flex w-80 h-[400px] flex-col justify-between rounded-xl bg-gray-800 bg-clip-border text-gray-700 shadow-md">
            <Image alt={`foto do ${aluno.nome}`} src={aluno.img} width={90} height={90} className="relative h-auto w-auto mx-4 -mt-10 self-center overflow-hidden rounded-full text-white shadow-lg shadow-blue-gray-500/40 bg-black" />
            <div className="flex flex-col p-6 items-center">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased text-center">
                {aluno.nome}
                </h5>
                <p className="block font-sans text-base text-white leading-relaxed text-inherit antialiased text-center">
                RM - {aluno.rm} 
                </p>
                <p className="block font-sans text-base text-white leading-relaxed text-inherit antialiased text-center">
                {aluno.turma}
                </p>
                <p className="block font-sans text-base text-white leading-relaxed text-inherit antialiased text-center" >
                Curso
                </p>
                <p className="block font-sans text-base text-white leading-relaxed text-inherit antialiased text-center">
                {aluno.curso} 
                </p>
            </div>
            <div className="p-6 pt-0 self-center">
                <Link href={`aluno/${aluno.rm}`} className="select-none rounded-lg bg-pink-600 py-3 px-6 text-center align-middle font-sans text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Visualizar Notas
                </Link>
            </div>
        </div>
    </>
  )
}
