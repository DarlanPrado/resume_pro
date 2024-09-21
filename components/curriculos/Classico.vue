<template>
    <section>
      <div  class="space-y-5 bg-white text-gray-900 h-full px-10 py-16">
          <div>
            <p v-if="state.dadosPessoais.nome"><span class="font-bold">Nome:</span> {{ state.dadosPessoais.nome }}</p>
            <p v-if="state.dadosPessoais.endereco.cidade"><span class="font-bold">Endereco:</span> {{ state.dadosPessoais.endereco.cidade }} <span v-if="state.dadosPessoais.endereco.estado">/ {{ state.dadosPessoais.endereco.estado }}</span></p>
            <p v-if="state.dadosPessoais.email" ><span class="font-bold">Email:</span> {{ state.dadosPessoais.email }}</p>
            <p v-if="state.dadosPessoais.telefone"><span class="font-bold">Telefone:</span> {{ state.dadosPessoais.telefone }}</p>
            <p v-for="site in state.dadosPessoais.site" v-show="site.texto.length"><span class="font-bold">{{ site.texto }}:</span> {{ site.link }}</p>
          </div>
          <div v-if="state.resumo">
            <span class="font-bold text-lg">Resumo Profissional</span>
            <div class="pl-5">
              <p>{{ state.resumo }}</p>
            </div>
          </div>
          <div v-if="state.experienciaProfissional.length">
            <span class="font-bold text-lg">Experiencia Profissional</span>
            <div class="pl-5 py-2" v-for="experiencia in state.experienciaProfissional">
              <p v-if="experiencia.cargo" class="font-bold">{{ experiencia.cargo }} <span v-if="experiencia.empresa"> - {{ experiencia.empresa }}</span></p>
              <p v-if="experiencia.tempo.inicio" >Período: {{ new Date(experiencia.tempo.inicio).toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit'}) }} <span> - {{ (!experiencia.tempo.fim?.toString().length || experiencia.tempo.fim == 'atual') ? 'Atual' : new Date(experiencia.tempo.fim).toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit'}) }}</span></p>
              <p v-if="experiencia.descricao">{{ experiencia.descricao }}</p>
            </div>
          </div>
          <div v-if="state.formacaoAcademica.length">
              <span class="font-bold text-lg">Formação</span>
              <div class="pl-5 py-2" v-for="formacao in state.formacaoAcademica">
                <p v-if="formacao.curso" class="font-bold">{{ formacao.curso }} <span v-if="formacao.instituicao"> - {{ formacao.instituicao }}</span></p>
                <p v-if="formacao.tempo.inicio" >Período: {{ new Date(formacao.tempo.inicio).toLocaleDateString('pt-BR') }} <span v-if="formacao.tempo.fim"> - {{ new Date(formacao.tempo.fim).toLocaleDateString('pt-BR') }}</span></p>
                <p v-if="formacao.descricao">{{ formacao.descricao }}</p>
              </div>
          </div>
          <div v-if="state.habilidades.length">
            <span class="font-bold text-lg">Habilidades</span>
            <div class="px-5 flex flex-col">
              <span v-for="habilidade in state.habilidades">{{ habilidade }}</span>
            </div>
          </div>
      </div>
    </section>
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';

interface Props {
  bgColor?: string | undefined;
  textColor? : string | undefined;
  font: string;
}

const state = defineModel<Curriculo>({required: true});
const props = defineProps<Props>()

</script>