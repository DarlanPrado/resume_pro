<template>
    <section>
        <USlideover v-model="show" >
            <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                    Slideover
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="show = false" />
                </div>
                </template>

                <Placeholder class="h-full" />
            </UCard>
        </USlideover>
    </section>
</template>
<script setup lang="ts">

const show = defineModel<boolean | undefined>({required: true})

</script>
