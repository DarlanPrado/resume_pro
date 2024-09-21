import { CurriculosClassico } from '#components'

interface State {
    tags: Tags[],
    curriculos: Curriculo[],
}

interface Tags {
    id: string | undefined;
    name: string;
}

interface Curriculo {
    id: string | undefined;
    nome: string;
    tags: Tags[];
    componente: any,
}

export const useCurriculosModelosStore = defineStore('curriculosModelos', {
    state: (): State => {
        return {
            tags: [{
                id: useId(),
                name: 'Foto'
            }, {
                id: useId(),
                name: 'Estilizavel'
            },{
                id: useId(),
                name: 'Pesonalização de cores'
            },{
                id: useId(),
                name: 'Persolanização de fundo'
            }],
            curriculos: [{
                id: useId(),
                nome: 'Classico',
                tags: [],
                componente: CurriculosClassico
            }]
        }
    },
    getters: {
        getCurriculoById: (state) => (curriculoId: Curriculo['id']) => state.curriculos.find(c => c.id === curriculoId),
        getCurriculos: (state) => state.curriculos,
        getTags: (state) => state.tags,
        getCurriculosByTag: (state) => (tagId: Tags['id']) => state.curriculos.filter(c => c.tags.some(t => t.id === tagId))
    }
})