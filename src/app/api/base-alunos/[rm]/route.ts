import { Aluno } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { rm: string } }) {

    const file = await fs.readFile(process.cwd() + '/src/data/alunos.json', 'utf-8');
    const dados:Aluno[] = JSON.parse(file);

    const produto = dados.find(a => a.rm == params.rm);

    return NextResponse.json(produto);
}