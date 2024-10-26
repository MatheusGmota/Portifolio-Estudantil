import { TipoNotas, TipoProva } from "@/types";
import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function POST(request:Request, { params }: { params: { rm: string }}) {
    const file = await fs.readFile(process.cwd() + '/src/data/notas.json','utf-8');
    const notas:TipoNotas[] = JSON.parse(file);
    
    const aluno = notas.find((a) => a.rm === params.rm)
    if(!aluno){
        return NextResponse.json({msg: 'Aluno não encontrado'},{status:404});
    }
    const{  avaliacao,data,descricao,disciplina,feedback,idProva,nota,semestre } = await request.json();

    const prova = { avaliacao,data,descricao,disciplina,feedback,idProva,nota,semestre } as TipoProva;

    prova.idProva = (aluno.provas[ aluno.provas.length - 1 ].idProva + 1);

    aluno.provas.push(idProva);

    const fileCreated = JSON.stringify(notas);
    await fs.writeFile(process.cwd() + '/src/data/notas.json',fileCreated);
        
    return NextResponse.json(prova,{status:201});

}