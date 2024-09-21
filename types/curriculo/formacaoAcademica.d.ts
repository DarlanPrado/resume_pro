interface FormacaoAcademica {
    curso: string,
    instituicao?: string | undefined,
    tempo: {
        inicio: Date,
        fim: Date,
    },
    descricao?: string | undefined,
}

export default FormacaoAcademica;