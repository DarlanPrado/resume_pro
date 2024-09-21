interface ExperienciaProfissional {
    cargo: string,
    empresa?: string | undefined,
    tempo: {
        inicio: Date,
        fim: Date | "atual"
    },
    descricao?: string | undefined,
}

export default ExperienciaProfissional;