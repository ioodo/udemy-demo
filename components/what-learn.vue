<template>
    <div class="section what-learn">
        <div class="section-title">What you'll learn</div>
        <div class="what-learn-content">
            <div
                v-for="(item, index) in whatLearns"
                :key="index"
                class="what-learn-content-item"
            >
                <IconTick class="icon"/>
                <span>{{ item.label }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import IconTick from '~/assets/svg/tick.svg'

const whatLearns = ref([{
    label: 'Guadagnare 10$ (circa 8€) di Benvenuto GRATIS'
}, {
    label: 'Come Funziona Coinbase Per Comprare BITCOIN'
}, {
    label: 'Come Funziona Coinbase Per Comprare Altre Criptovalute'
}])
</script>

<style lang="scss" scoped>
.what-learn {
    @apply border border-solid border-gray-200 px-6 py-5 md:py-6 text-main md:text-black;
    &-content {
        @apply flex-col xs:flex-row flex items-stretch flex-wrap gap-2 mt-4 md:mt-6;

        &-item {
            @apply relative pl-7 pr-1 text-xs md:text-sm;
            width: calc(50% - 1rem);
            @media (max-width: 512px) {
                @apply w-full;
            }

            .icon {
                @apply absolute left-0 top-0 text-black w-3;
            }
        }
    }
}
</style>