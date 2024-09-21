<template>
    <section>
        <div class="space-y-2 mt-4 px-2">
            <div v-for="experiencia in state" class="p-5 py-2 border-dotted space-y-2 border-2 border-gray-200 dark:border-gray-800">
                <div class="flex justify-between">
                    <span>Experiencia Profissional</span>
                    <UButton icon="i-heroicons-trash-solid" color="white" @click="state = state.filter(fExperiencia => fExperiencia != experiencia)" />
                </div>

                <UFormGroup label="Cargo" name="cargo">
                    <CleanableInput v-model="experiencia.cargo" placeholder="Cargo ocupado" />
                </UFormGroup>
                <UFormGroup label="Empresa" name="empresa">
                    <CleanableInput v-model="experiencia.empresa" placeholder="Empresa" />
                </UFormGroup>
                <div class="flex gap-4">
                    <div class="flex gap-2 w-full">
                        <UFormGroup class="w-full" label="Inico" name="inicio">
                            <CleanableInput v-model="experiencia.tempo.inicio" type="date" />
                        </UFormGroup>
                        <UFormGroup class="w-full" label="Fim" name="fim">
                            <CleanableInput :disabled="experiencia.tempo.fim == 'atual'" v-model="experiencia.tempo.fim" type="date" />
                        </UFormGroup>
                    </div>
                    <!-- <div class="flex justify-center items-center">
                        <UFormGroup class="w-full" label="Atual" name="atual">
                            <UCheckbox v-if="experiencia.tempo.fim == 'atual'" @click="experiencia.tempo.fim = undefined!" on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid" :model-value="true" />
                            <UCheckbox v-else on-icon="i-heroicons-check-20-solid" @click="experiencia.tempo.fim = 'atual'" off-icon="i-heroicons-x-mark-20-solid" :model-value="false" />
                        </UFormGroup>
                    </div> -->
                </div>
                <UFormGroup label="Descrição" name="descricao">
                    <UTextarea resize placeholder="Digite o Texto..." v-model="experiencia.descricao" />
                </UFormGroup>
            </div>
            <div>
                <UButton label="Adicionar experiencia" icon="i-heroicons-squares-plus" @click="state.push({cargo: '', tempo: {inicio: undefined!, fim: undefined!}})" block/>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';

const state = defineModel<Curriculo['experienciaProfissional']>({required: true})
</script>