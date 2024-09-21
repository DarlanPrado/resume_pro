<template>
    <section>
        <PerfilPreviewSlideChangeCurriculumModel v-model="showChangeCurriculum" />
        <UCard>
            <template #header>
                <div class="flex flex-col gap-4">
                    <h6 class="text-lg font-semibold">Curriculo</h6>
                    <UDivider />
                    <div>
                        <UFormGroup label="Modelo">
                            <UButtonGroup class="w-full">
                                <UBadge class="w-full" color="gray" :label="curriculoSelecionado.nome"></UBadge>
                                <UButton label="Selecionar" @click="showChangeCurriculum = true" disabled/>
                            </UButtonGroup>
                        </UFormGroup>
                    </div>
                </div>
            </template>
            
            <div class="flex flex-col gap-4">
                <div v-if="state.dadosPessoais.nome" ref="pdfSection">
                    <component :is="curriculoSelecionado.componente" v-model="state" />
                </div>
                <div v-else class="w-full h-28 flex justify-center items-center border-2 rounded border-dashed border-gray-200 dark:border-gray-800">
                    <span class="text-xl font-bold text-gray-300 dark:text-gray-700">Preencha o formulário</span>
                </div>

                <UButton size="lg" label="Baixar PDF" icon="i-heroicons-document-arrow-down" @click="createPDF(pdfSection!)" :disabled="!state.dadosPessoais.nome" block/>
            </div>
        </UCard>
    </section>
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';

const showChangeCurriculum = ref(false);

const curriculoSelecionado = ref(useCurriculosModelosStore().getCurriculos[0])
const state = defineModel<Curriculo>({required: true})

const pdfSection = ref<HTMLElement | null>(null)



const createPDF = async(HTMLElement: HTMLElement) => {
  if(HTMLElement){

    useToast().add({
        title: 'Gerando PDF...',
        description: 'Verifique se o arquivo foi gerado corretamente',
        icon: 'i-heroicons-document-text-solid',
        color: 'sky'
    });
    
    exportToPDF(`${state.value.dadosPessoais.nome} _ Curriculo.pdf`, HTMLElement, {
        format: 'A4',
        unit: 'mm',
        orientation: 'portrait',
    }, {
        html2canvas: {
            scale: 0.3,
            useCORS: true,
        },
    },).catch(error => {
        useToast().add({
            title: 'Erro',
            description: 'Ocorreu um erro ao tentar gerar o PDF.',
            icon: 'i-heroicons-exclamation-triangle',
            color: 'amber'
        });
        throw createError(error)
    })
  }

}

</script>