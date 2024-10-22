export type TipoAluno = {
    rm: string,
    nome: string,
    turma: string,
    curso: string
}

export type TipoNotas = {
    rm: string, 
    disciplinas: TipoDisciplina[] 
} 

export type TipoDisciplina = {
    disciplina: string,
    checkpoints: TipoProva[],
    gs: TipoProva[],
    challenge: TipoProva[]
}

export type TipoProva = {
    idProva: number;
    semestre: number;
    descricao: string;
    data: string;
    nota: number;
    feedback: string;
}