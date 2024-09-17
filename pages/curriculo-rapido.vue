<template>
    <div class="grid md:grid-cols-2 gap-2">
        <PerfilDadosUsuario @submit="(e) => data = e" />
        <ClientOnly>
            <PerfilPreviewCurriculo  :data="data"/>
        </ClientOnly>
    </div>
</template>
<script setup lang ts>
    const data = ref({})
</script>