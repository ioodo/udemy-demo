<template>
    <div class="section explore-topics">
        <div class="section-title">Explore related topics</div>
        <div class="explore-topics-content">
            <div
                v-for="item in exploreButtons"
                :key="item"
                class="btn btn-simple btn-small font-semibold"
            >{{ item }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const exploreButtons = ref(['Bitcoin', 'Cryptocurrency & Blockchain', 'Finance & Accounting'])
</script>

<style lang="scss" scoped>
.explore-topics {
    @apply text-black mt-8;
    &-content {
        @apply flex items-center gap-1 mt-4;
    }
}
</style>