import { TipoAluno } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(){
    const file = await fs.readFile(process.cwd() + '/src/data/alunos.json', 'utf-8');
    
    const dados:TipoAluno[] = JSON.parse(file);

    return NextResponse.json(dados, {status: 200});
}