<template>
    <UCard >
        <div class="h-full space-y-5">
          <div ref="pdfSection" class="bg-white h-full px-10 py-16">
            <div  v-if="props.data.dadosPessoais?.nome" class="space-y-5 text-gray-900">
              <div>
                <p v-if="props.data.dadosPessoais.nome"><span class="font-semibold">Nome:</span> {{ props.data.dadosPessoais.nome }}</p>
                <p v-if="props.data.dadosPessoais.endereco.cidade"><span class="font-semibold">Endereco:</span> {{ props.data.dadosPessoais.endereco.cidade }} <span v-if="props.data.dadosPessoais.endereco.estado">/{{ props.data.dadosPessoais.endereco.estado }}</span></p>
                <p v-if="props.data.dadosPessoais.email" ><span class="font-semibold">Email:</span> {{ props.data.dadosPessoais.email }}</p>
                <p v-if="props.data.dadosPessoais.telefone"><span class="font-semibold">Telefone:</span> {{ props.data.dadosPessoais.telefone }}</p>
                <p v-if="props.data.dadosPessoais.linkedin"><span class="font-semibold">Linkedin:</span> {{ props.data.dadosPessoais.linkedin }}</p>
              </div>
              <div v-if="props.data.resumo">
                <span class="font-bold text-lg">Resumo Profissional</span>
                <div class="px-5">
                  <p>{{ props.data.resumo }}</p>
                </div>
              </div>
              <div v-if="props.data.experienciaProfissional.cargo">
                <span class="font-bold text-lg">Experiencia Profissional</span>
                <div class="px-5">
                  <p v-if="props.data.experienciaProfissional.cargo" class="font-semibold">{{ props.data.experienciaProfissional.cargo }} <span v-if="props.data.experienciaProfissional.empresa"> - {{ props.data.experienciaProfissional.empresa }}</span></p>
                  <p v-if="props.data.experienciaProfissional.inicio" >Período: {{ new Date(props.data.experienciaProfissional.inicio).toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit'}) }} <span> - {{ (props.data.experienciaProfissional.fim).toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit'}) || 'Atual' }}</span></p>
                  <p v-if="props.data.experienciaProfissional.descricao">{{ props.data.experienciaProfissional.descricao }}</p>
                </div>
              </div>
              <div v-if="props.data.formacaoAcademica.curso">
                <span class="font-bold text-lg">Formação</span>
                <div>
                  <p v-if="props.data.formacaoAcademica.curso" class="font-semibold">{{ props.data.formacaoAcademica.curso }} <span v-if="props.data.formacaoAcademica.instituicao"> - {{ props.data.formacaoAcademica.instituicao }}</span></p>
                  <p v-if="props.data.formacaoAcademica.inicio" >inicio: {{ props.data.formacaoAcademica.inicio }} <span v-if="props.data.formacaoAcademica.fim"> fim: {{ props.data.formacaoAcademica.fim }}</span></p>
                  <p v-if="props.data.formacaoAcademica.descricao">{{ props.data.formacaoAcademica.descricao }}</p>
                </div>
              </div>
              <div v-if="props.data.habilidadesECompetencias.length">
                <span class="font-bold text-lg">Habilidades</span>
                <div class="px-5">
                  <p v-for="habilidade in props.data.habilidadesECompetencias">{{ habilidade }}</p>
                </div>
              </div>
            </div>
            <div v-else class="flex justify-center items-center text-gray-400">
              <div class="border-dashed border-2 p-16">
                <span class="text-2xl font-semibold">Preencha o formulário</span>
              </div>
            </div>
          </div>
          <UButton @click="createPDF(pdfSection as HTMLElement)" size="lg" label="Baixar PDF" block />
        </div>
    </UCard>
</template>
<script setup lang="ts">

const pdfSection = ref<HTMLElement | null>(null)

interface Props {
  data: any,
}

const props = defineProps<Props>()

const createPDF = async(HTMLElement: HTMLElement) => {
  if(HTMLElement){
    exportToPDF(`${props.data.dadosPessoais.nome}_Curriculo.pdf`, HTMLElement, {
      format: 'A4'
    }, {
      html2canvas: {
        scale: 0.7,
        useCORS: true
      }
    })
  }

}
</script>