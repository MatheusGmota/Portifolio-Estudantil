import { NextResponse } from "next/server";
import {promises as fs} from "fs";
import { TipoNotas } from "@/type";

export async function GET(request: Request,{ params }:  { params : {rm: string, avaliacao: string, disciplina: string }}) {

    const file = await fs.readFile(process.cwd() + '/src/data/notas.json','utf-8');
    const dados: TipoNotas[] = JSON.parse(file);

    const aluno = dados.find((p) => p.rm === params.rm)
    if (!aluno) {    
        return NextResponse.json({mensagem: "Não foi possível encontrar o aluno."}), {status: 404};
    }

    const dscpEncontrada = aluno.disciplinas.find(d=> d.disciplina === decodeURIComponent(params.disciplina))
    
    if (!dscpEncontrada) {    
        return NextResponse.json({mensagem: "Não foi possível encontrar a disciplina."}), {status: 404};
    }


    let provas;
    if (params.avaliacao === "checkpoints" ){
        provas = dscpEncontrada.checkpoints;
    }
    else if (params.avaliacao === "challenge-sprints") {
        provas = dscpEncontrada.challenge;
    }
    else if (params.avaliacao === "global-solutions") {
        provas = dscpEncontrada.gs;
    }        
    
    return NextResponse.json(provas);
}
