<template>
    <section>
        <div class="space-y-2 mt-4 px-2">
            <UFormGroup label="Nome" name="nome">
                <!-- <UInput v-model="state.nome" /> -->
                <CleanableInput v-model="state.nome" placeholder="Nome completo" />
            </UFormGroup>
            <UFormGroup label="Email" name="email">
                <CleanableInput v-model="state.email" type="email" placeholder="example@email.com" />
            </UFormGroup>
            <UFormGroup label="Telefone" name="telefone">
                <CleanableInput v-model="state.telefone" placeholder="(00) 00000-0000" />
            </UFormGroup>
            <UFormGroup label="Estado" name="estado">
                <CleanableInput v-model="state.endereco.estado" />
            </UFormGroup>
            <UFormGroup label="Cidade" name="cidade">
                <CleanableInput v-model="state.endereco.cidade" />
            </UFormGroup>
            <div v-for="site in state.site" class="p-5 py-2 border-dotted border-2 border-gray-200 dark:border-gray-800">
                <div class="flex justify-between">
                    <span>Site</span>
                    <UButton icon="i-heroicons-trash-solid" color="white" @click="state.site = state.site.filter(fSite => fSite != site)" />
                </div>

                <div class="px-2 flex gap-4">
                    <UFormGroup label="Texto" name="text">
                        <UInput v-model="site.texto" type="url" />
                    </UFormGroup>
                    <UFormGroup class="w-full" label="Link" name="link">
                        <UInput v-model="site.link" type="url" />
                    </UFormGroup>
                </div>
            </div>
            <div>
                <UButton label="Adicionar site" icon="i-heroicons-squares-plus" @click="state.site.push({texto: '', link: ''})" block/>
            </div>
        </div>
    </section>    
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';

const state = defineModel<Curriculo['dadosPessoais']>({required: true})
</script>