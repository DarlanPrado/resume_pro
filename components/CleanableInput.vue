<template>
    <UButtonGroup class="w-full">
        <UInput v-model="state" class="w-full" :type="props.type" :placeholder="props.placeholder" :disabled="props.disabled" />
        <UTooltip text="Limpar">
            <UButton color="gray" @click="state = ''" :icon="'i-heroicons-x-mark-16-solid'" :disabled="props.disabled" />
        </UTooltip>
    </UButtonGroup>
</template>
<script setup lang="ts">
const state = defineModel<string | undefined | number>({required: true})

interface Props {
    type?: string | undefined,
    disabled?: boolean | undefined,
    placeholder?: string | undefined,
}

const props = defineProps<Props>()
</script>