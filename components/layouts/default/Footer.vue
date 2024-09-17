<template>
    <section class="h-80 w-full bg-gray-400 dark:bg-gray-900">
        <footer class="h-full mt-12 py-10">
            <UContainer class="text-lg h-full flex flex-col">
                <div class="flex w-full h-full">
                    <div class="w-full px-4">
                        <h5 class="text-3xl font-semibold">ResumePro</h5>
                    </div>
                    <UDivider icon="i-heroicons-qr-code-solid" orientation="vertical" />
                    <div class="flex flex-col gap-2 w-full px-4">
                        <!-- <ULink :to="useLinksStore().getLinks['linkedin']" active-class="text-primary" target="_blank" >Linkedin</ULink>
                        <ULink :to="useLinksStore().getLinks['github']" active-class="text-primary" target="_blank" >Github</ULink>
                        <ULink :to="useLinksStore().getLinks['email']" active-class="text-primary" target="_blank" >Email</ULink> -->
                    </div>
                </div>
                <div class="pt-16 flex justify-center items-center">
                    <p>&copy;Copyright 2024 <NuxtLink to="https://darlanprado.vercel.app" target="_blank">Darlan Prado</NuxtLink>. Todos os direitos reservados.</p>
                </div>
            </UContainer>
        </footer>
    </section>
</template>