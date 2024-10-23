import { TipoNotas } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { rm: string, idProva: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/notas.json', 'utf-8');
    const dados: TipoNotas[] = JSON.parse(file);

    const aluno = dados.find((p) => p.rm === params.rm)
    if (!aluno) {
        return NextResponse.json({ mensagem: "Não foi possível encontrar o aluno." }), { status: 404 };
    }

    const prova = aluno.provas.find((p) => p.idProva == params.idProva)

    if (!prova) {
        return NextResponse.json({ mensagem: "Não foi possível encontrar a disciplina." }), { status: 404 };
    }


    return NextResponse.json(prova);
}

export async function PUT(request: Request, { params }: { params: { rm: string, idProva: number } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/notas.json', 'utf-8');
    const dados: TipoNotas[] = JSON.parse(file);

    const aluno = dados.find((p) => p.rm === params.rm)
    if (!aluno) {
        return NextResponse.json({ mensagem: "Não foi possível encontrar o aluno." }), { status: 404 };
    }

    const { semestre, avaliacao, disciplina, nota, data, feedback, descricao } = await request.json();

    const indice = aluno.provas.findIndex(p => p.idProva == params.idProva);

    if (indice != -1) {

        aluno.provas.splice(indice, 1, { idProva: parseInt(params.idProva.toString()), semestre, avaliacao, disciplina, nota, data, feedback, descricao });

        const fileUpdate = JSON.stringify(dados);

        await fs.writeFile(process.cwd() + '/src/data/notas.json', fileUpdate);

        return NextResponse.json({ msg: "Prova atualizado com sucesso!" });

    }
}
