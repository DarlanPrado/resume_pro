<template>
    <div class="grid md:grid-cols-2 gap-2">
        <!-- <PerfilDadosUsuario @submit="(e) => data = e" /> -->

        <PerfilDados v-model="state" />
        <ClientOnly>
            <PerfilPreview v-model="state" />
        </ClientOnly>
    </div>
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';

const state = useState<Curriculo>('curriculoRapido', () => ({
    dadosPessoais: {
        nome: '',
        email: '',
        telefone: '',
        endereco: {
            cidade: '',
            estado: ''
        },
        site: []
    },
    resumo: '',
    experienciaProfissional: [],
    formacaoAcademica: [],
    habilidades: [],
}))
</script>