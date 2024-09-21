<template>
    <section>
        <UTextarea resize placeholder="Resuma seu perfil profissional" v-model="state" />
    </section>
</template>
<script setup lang="ts">
import type Curriculo from '~/types/curriculo';

const state = defineModel<Curriculo['resumo']>({required: true})
</script>