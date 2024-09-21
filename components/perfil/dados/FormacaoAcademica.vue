<template>
    <section>
        <div class="space-y-2 mt-4 px-2">
            <div v-for="formacaoAcademica in state" class="p-5 py-2 border-dotted space-y-2 border-2 border-gray-200 dark:border-gray-800">
                <div class="flex justify-between">
                    <span>Formação academica</span>
                    <UButton icon="i-heroicons-trash-solid" color="white" @click="state = state.filter(fformacaoAcademica => fformacaoAcademica != formacaoAcademica)" />
                </div>

                <UFormGroup label="Curso" name="curso">
                    <CleanableInput v-model="formacaoAcademica.curso" placeholder="Curso" />
                </UFormGroup>
                <UFormGroup label="Instituição" name="instituicao">
                    <CleanableInput v-model="formacaoAcademica.instituicao" placeholder="Instituição de ensino" />
                </UFormGroup>
                <div class="flex gap-2">
                    <UFormGroup class="w-full" label="Inico" name="inicio">
                        <CleanableInput v-model="formacaoAcademica.tempo.inicio" type="date" />
                    </UFormGroup>
                    <UFormGroup class="w-full" label="Fim" name="fim">
                        <CleanableInput v-model="formacaoAcademica.tempo.fim" type="date" />
                    </UFormGroup>
                </div>
                <UFormGroup label="Descrição" name="descricao">
                    <UTextarea resize placeholder="Digite o Texto..." v-model="formacaoAcademica.descricao" />
                </UFormGroup>
            </div>
            <div>
                <UButton label="Adicionar Formação Academica" icon="i-heroicons-squares-plus" @click="state.push({curso: '', tempo: {inicio: undefined!, fim: undefined!}})" block/>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';

const state = defineModel<Curriculo['formacaoAcademica']>({required: true})
</script>