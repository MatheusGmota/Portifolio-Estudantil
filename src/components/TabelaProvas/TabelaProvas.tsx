import { TipoProva } from "@/type";
import Link from "next/link";
 
export default function TabelaProvas( {provas} : {provas :TipoProva[]}) {
  return (
    <table className="tabela-provas">
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Data</th>
                <th>Nota</th>
                <th>Feedback</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {provas.map((p) => (
                <tr key={p.idProva}>
                    <td>{p.descricao}</td>
                    <td>{p.data}</td>
                    <td>{p.nota}</td>
                    <td>{p.feedback}</td>
                    <td><Link className="text-pink-500 hover:underline hover:text-white" href={``}>Editar</Link></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}