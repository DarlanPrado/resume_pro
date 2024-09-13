<template>
  <div>
    <SpeedInsights/>
    <NuxtRouteAnnouncer />
    <main>
      <NuxtLayout>
        <NuxtPage :page-key="route => route.fullPath" />
      </NuxtLayout>
    </main>
  </div>
</template>
<script setup lang="ts">

useSeoMeta({
  title: 'ResumePro - Criador de curriculos',
  description: 'Crie, Recrie e Personalize seu curriculo profissional de formas simples e facil.',
  ogTitle: 'ResumePro - Criador de curriculos',
  ogDescription: 'Crie, Recrie e Personalize seu curriculo profissional de formas simples e facil.',
  ogImage: '/icon.png', // Substitua pelo caminho real da imagem
  twitterTitle: 'ResumePro - Criador de curriculos',
  twitterDescription: 'Crie, Recrie e Personalize seu curriculo profissional de formas simples e facil.',
  twitterImage: '/icon.png', // Substitua pelo caminho real da imagem
  twitterCard: 'summary'
})

useHead({
  bodyAttrs: {
    class: 'bg-gray-200 dark:bg-gray-800'
  },
  htmlAttrs: {
    lang: 'pt-br',
    // class: 'font-mukta overflow-y-auto snap-y snap-mandatory h-screen '
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon.png'
    }
  ]
})

</script>