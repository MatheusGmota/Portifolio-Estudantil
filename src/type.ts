export type TipoAluno = {
    rm: string,
    img: string,
    nome: string,
    turma: string,
    curso: string
}

export type TipoNotas = {
    rm: string,
    provas: TipoProva[]
}

export type TipoProva = {
    idProva: number;
    semestre: number;
    avaliacao: string;
    disciplina: string;
    nota: number;
    data: string;
    feedback: string;
    descricao: string;
}