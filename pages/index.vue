<template>
    <div class="fixed z-50 right-5 top-5">
      <LazyChangeTheme />
    </div>
    <div class="h-screen">
        <div class="h-full w-full z-10 absolute bg-gradient-to-b from-gray-200 dark:from-gray-800 via-primary-400/90 dark:via-primary-400/50 to-gray-200 dark:to-gray-800"></div>
            <div :class="useColorMode().value == 'light' ? 'grid' : ''" class="h-full w-full z-30 absolute bg-transparent backdrop-blur-sm">
            <div class="w-full h-full flex flex-col bg-gradient-to-b from-gray-800/20 to-gray-200 dark:to-gray-800">
                <UContainer class="min-h-full">
                    <div class="flex flex-col md:grid md:h-full md:grid-cols-2 gap-5 py-8">
                        <div class="h-full flex flex-col justify-between">
                            <div class="space-y-3">
                                <h1 class="text-primary-600 dark:text-primary-500 text-6xl font-bold text-center">ResumePro</h1>
                                <h2 class="text-4xl text-center text-primary-800 dark:text-primary-300">Desenvolva currículos profissionais de forma simples e rápida.</h2>
                            </div>
                            <div class="mt-5">
                                <!-- <UButton size="xl"  label="Começar" block /> -->
                                <UButton size="xl" to="/curriculo-rapido" label="Começar" block />
                            </div>
                        </div>
                        <div class="h-full py-14 space-y-10">
                            <div class="grid grid-cols-2 justify-center gap-4">
                                <div class="flex justify-center items-center">
                                    <NuxtImg  placeholder="/images/passando_cartao.jpg" alt="Imagem de um curriculo" class="rounded-lg shadow-2xl drop-shadow-lg" width="250" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <h6 class="font-semibold text-lg">Crie seu curriculo gratuitamente</h6>
                                    <span>No ResumePro, você pode criar um currículo profissional de forma totalmente gratuita</span>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 justify-center gap-4">
                                <div class="flex flex-col gap-2">
                                    <h6 class="font-semibold text-lg">Crie curriculos de forma dinamica</h6>
                                    <span>Você pode facilmente adaptar o seu curriculo de acordo com a vaga de interesse</span>
                                </div>
                                <div class="flex justify-center items-center  w-250 h-200">
                                    <NuxtImg  placeholder="/images/pessoa_criando_curriculo.jpg" alt="Imagem de homem escrevendo" class="rounded-lg shadow-2xl drop-shadow-lg" width="250"/>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 justify-center gap-4">
                                <div class="flex justify-center items-center  w-250 h-200">
                                    <NuxtImg  placeholder="/images/materiais_de_artes.jpg" alt="Imagem de homem escrevendo" class="rounded-lg shadow-2xl drop-shadow-lg" width="250"/>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <h6 class="font-semibold text-lg">Personalize seu curriculo</h6>
                                    <span>O ResumePro possui várias opções de curriculo, para que você possa personalizar o seu curriculo ao seu estilo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </UContainer>
                <div>
                    <!-- <LayoutsDefaultFooter /> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

definePageMeta({
    layout: false
})
</script>