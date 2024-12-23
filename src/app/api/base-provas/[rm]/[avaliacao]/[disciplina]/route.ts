import { TipoNotas } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { rm: string, avaliacao: string, disciplina: string } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/notas.json', 'utf-8');
    const dados: TipoNotas[] = JSON.parse(file);

    const aluno = dados.find((p) => p.rm === params.rm)
    if (!aluno) {
        return NextResponse.json({ text: "Não foi possível encontrar o aluno." }, { status: 404 });
    }

    const provas = aluno.provas.filter((p) => {
        if (p.avaliacao === params.avaliacao && p.disciplina === decodeURIComponent(params.disciplina)) {
            return p
        }
    })

    if (!provas) {
        return NextResponse.json({ text: "Não foi possível encontrar a disciplina." }, { status: 404 });
    }


    return NextResponse.json(provas, {status: 200});
}
