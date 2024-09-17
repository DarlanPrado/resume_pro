<template>
    <!-- <div>
        <div class="fixed z-50 right-5 top-5">
          <LazyChangeTheme />
        </div>
    </div> -->
    <div class="h-screen">
        <div class="h-full w-full z-10 absolute bg-gradient-to-b from-gray-200 dark:from-gray-800 via-primary-400/90 dark:via-primary-400/50 to-gray-200 dark:to-gray-800"></div>
        <div :class="useColorMode().value == 'light' ? 'grid' : ''" class="h-full w-full z-30 absolute bg-transparent backdrop-blur-sm">
        <div class="w-full h-full overflow-y-auto bg-gradient-to-b from-gray-800/20 to-gray-200 dark:to-gray-800">
            <LayoutsDefaultHeader />
            <div class="max-h-full h-full">
                <UContainer class="min-h-full pt-12">
                    <slot />
                </UContainer>
                <LayoutsDefaultFooter />
            </div>
        </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>