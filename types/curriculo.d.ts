import type DadosPessoais from "./curriculo/dadosPessoais";
import type ExperienciaProfissional from "./curriculo/experienciaProfissional";
import type FormacaoAcademica from "./curriculo/formacaoAcademica";
import type Habilidades from "./curriculo/habilidades";
import type Resumo from "./curriculo/resumo";


export default interface Curriculo {
    dadosPessoais: DadosPessoais,
    resumo: Resumo,
    experienciaProfissional: ExperienciaProfissional[],
    formacaoAcademica: FormacaoAcademica[],
    habilidades: Habilidades,
}