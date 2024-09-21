<template>
    <section>

        <UCard>
            <UForm :state="state" class="space-y-5" >
                <!-- <div>
                    <h6 class="font-semibold">Dados pessoais</h6>
    
                    <div class="space-y-2 mt-4 px-2">
                        <UFormGroup label="Nome" name="nome">
                            <UInput v-model="state.dadosPessoais.nome" />
                        </UFormGroup>
                        <UFormGroup label="Email" name="email">
                            <UInput v-model="state.dadosPessoais.email" type="email" />
                        </UFormGroup>
                        <UFormGroup label="Telefone" name="telefone">
                            <UInput v-model="state.dadosPessoais.telefone" />
                        </UFormGroup>
                        <UFormGroup label="Estado" name="estado">
                            <UInput v-model="state.dadosPessoais.endereco.estado" />
                        </UFormGroup>
                        <UFormGroup label="Cidade" name="cidade">
                            <UInput v-model="state.dadosPessoais.endereco.cidade" />
                        </UFormGroup>
                        <UFormGroup label="Linkedin" name="linkedin">
                            <UInput v-model="state.dadosPessoais.linkedin" type="url" />
                        </UFormGroup>
                    </div>
    
                </div> -->
                <UAccordion :items="acordionItems" :ui="{ wrapper: 'flex flex-col w-full' }">
                    <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                            <h6 class="font-bold">{{ item.label }}</h6>
    
                            <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                            </template>
                        </UButton>
                    </template>
    
                    <template #dadosPessoais>
                        <PerfilDadosPessoais v-model="state.dadosPessoais" />
                    </template>
                    <template #resumo>
                        <PerfilDadosResumo  v-model="state.resumo" />
                    </template>
                    <template #experienciaProfissional>
                        <PerfilDadosExperienciaProfissional v-model="state.experienciaProfissional"/>
                    </template>
                    <template #formacaoAcademica>
                        <PerfilDadosFormacaoAcademica v-model="state.formacaoAcademica"/>
                    </template>
                    <template #habilidades>
                        <PerfilDadosHabilidades v-model="state.habilidades"/>
                    </template>
                </UAccordion>
                <!-- <div>
                    <h6 class="font-semibold">Resumo</h6>
    
                    <div class="space-y-2 mt-4 px-2">
                        <UFormGroup name="resumo">
                            <UTextarea v-model="state.resumo" resize placeholder="Resumo profissional" />
                        </UFormGroup>
                    </div>
    
                </div> -->
                <!-- <div>
                    <h6 class="font-semibold">Experiencia profissional</h6>
    
                    <div class="space-y-2 mt-4 px-2">
                        <UFormGroup label="Cargo" name="cargo">
                            <UInput v-model="state.experienciaProfissional.cargo" />
                        </UFormGroup>
                        <UFormGroup label="Empresa" name="empresa">
                            <UInput v-model="state.experienciaProfissional.empresa" />
                        </UFormGroup>
                        <div class="grid md:grid-cols-2 gap-1">
                            <UFormGroup label="Inicio" name="inicio">
                                <UInput v-model="state.experienciaProfissional.inicio" type="date" />
                            </UFormGroup>
                            <UFormGroup label="Fim" name="fim">
                                <UInput v-model="state.experienciaProfissional.fim" type="date" />
                            </UFormGroup>
                        </div>
                        <UFormGroup label="Descrição" name="descricao">
                            <UTextarea v-model="state.experienciaProfissional.descricao" resize placeholder="Descreva suas funções na vaga" />
                        </UFormGroup>
                    </div>
    
                </div>
                <div>
                    <h6 class="font-semibold">Formação academica</h6>
    
                    <div class="space-y-2 mt-4 px-2">
                        <UFormGroup label="Instituição" name="instituicao">
                            <UInput v-model="state.formacaoAcademica.instituicao" />
                        </UFormGroup>
                        <UFormGroup label="Curso" name="curso">
                            <UInput v-model="state.formacaoAcademica.curso" />
                        </UFormGroup>
                        <div class="grid md:grid-cols-2 gap-1">
                            <UFormGroup label="Inicio" name="inicio">
                                <UInput v-model="state.formacaoAcademica.inicio" type="date" />
                            </UFormGroup>
                            <UFormGroup label="Fim" name="fim">
                                <UInput v-model="state.formacaoAcademica.fim" type="date" />
                            </UFormGroup>
                        </div>
                        <UFormGroup label="Descrição" name="descricao">
                            <UTextarea v-model="state.formacaoAcademica.descricao" resize placeholder="Descreva informações sobre seu curso" />
                        </UFormGroup>
                    </div>
                </div>
                <div>
                    <h6 class="font-semibold">Habilidades e competencias</h6>
    
                    <div class="space-y-2 mt-4 px-2">
                        <UFormGroup name="habilidadeECompetencia">
                            <UButtonGroup class="w-full">
                                <UInput v-model="habilidadesECompetencias" class="w-full" />
                                <UButton @click="defineHabilidadesECompetencias" label="Adicionar"></UButton>
                            </UButtonGroup>
                        </UFormGroup>
                        
                        <div class="space-y-1 space-x-1">
                            <UButton color="gray" v-for="habilidadeECompetencia in state.habilidadesECompetencias" @click="removeHabilidadesECompetencias(habilidadeECompetencia)" :label="habilidadeECompetencia" />
                        </div>
                    </div>
    
                </div> -->
                <!-- <UButton block label="Salvar" type="submit" size="lg" /> -->
            </UForm>
        </UCard>
    </section>
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';

const state = defineModel<Curriculo>({required: true});

const acordionItems = [{
    label: 'Dados pessoais',
    slot: 'dadosPessoais',
    defaultOpen: true,
},{
    label: 'Resumo',
    slot: 'resumo',
},{
    label: 'Experiencia Profissional',
    slot: 'experienciaProfissional',
},{
    label: 'Formação academica',
    slot: 'formacaoAcademica',
},{
    label: 'Habilidades',
    slot: 'habilidades',
}]
</script>