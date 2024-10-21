export type Aluno = {
    rm: string,
    nome: string,
    turma: string,
    curso: string
}

export type TipoDisciplina = {
    disciplina: string,
    checkpoint: TipoProva[],
    gs: TipoProva[],
    challenge: TipoProva[]
}

export type TipoProva = {
    idProva: number, 
    nota: number, 
    data: string, 
    feedback: string, 
    descricao: string
}