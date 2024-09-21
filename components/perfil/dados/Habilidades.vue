<template>
    <section>
        <div class="space-y-2 mt-4 px-2">
            <UFormGroup label="Adicionar Habilidade" name="adicionarHabilidade">
                <UButtonGroup class="w-full">
                    <UInput class="w-full" v-model="newSkill" placeholder="Habilidade" />
                    <UButton label="adicionar" @click="defineHabilidades" />
                </UButtonGroup>
            </UFormGroup>
            <div class="space-x-2 space-y-2">
                <UButton color="gray" v-for="habilidade in state" :label="habilidade" @click="removeHabilidades(habilidade)" />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';
const newSkill = ref<string>("");

const state = defineModel<Curriculo['habilidades']>({required: true})

const defineHabilidades = () => {
    if(!state.value.find(habilidadeECompetencia => habilidadeECompetencia == newSkill.value)){
        state.value.push(newSkill.value);
        newSkill.value = ''
    }
}
const removeHabilidades = (habilidadeEcompetenciaR: string) => {
    state.value = state.value.filter(habilidadeECompetencia => habilidadeECompetencia != habilidadeEcompetenciaR);
}
</script>