import { TipoProva } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TabelaProvas({ provas }: { provas: TipoProva[] }) {
    const { rm } = useParams()
    return (
        <table className="w-full">
            <thead>
                <tr className="font-bold w-96 border-b border-b-pink-400">
                    <th className="text-left">Descrição</th>
                    <th className="text-left">Data</th>
                    <th className="text-left">Nota</th>
                    <th className="text-left">Feedback</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {provas.map((p) => (
                    <tr key={p.idProva} className="border-b border-b-pink-400 hover:bg-gray-800 font-normal">
                        <td className="text-sm text-white text-left py-3" >{p.descricao}</td>
                        <td className="text-sm text-white text-left py-3" >{p.data}</td>
                        <td className="text-sm text-white text-left py-3" >{p.nota}</td>
                        <td className="text-sm text-white text-left py-3" >{p.feedback}</td>
                        <td className="text-sm text-white text-left py-3" ><Link className="text-pink-500 hover:underline hover:text-white" href={`/aluno/${rm}/editar-prova/${p.idProva}`}>Editar</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}