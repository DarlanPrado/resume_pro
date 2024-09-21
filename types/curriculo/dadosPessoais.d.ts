interface Endereco {
    estado: string,
    cidade: string
}

interface Site {
    texto: string,
    link: string,
}

interface DadosPessoais {
    nome: string,
    email: string,
    telefone: string,
    endereco: Endereco,
    site: Site[]
    nascimento?: Date | undefined,
}

export default DadosPessoais;