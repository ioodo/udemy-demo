<template>
    <div :class="['hidden md:block fixed left-0 top-0 z-0 w-full bg-[#1d1e27] text-white px-4 py-3']">
        <div class="text-base">Coinbase Come Comprare Bitcoin e Guadagnare™?</div>
        <div class="rating">
            <span class="score">4.7</span>
            <div class="stars">
                <template v-for="(item, index) in new Array(5).fill(0)" :key="index">
                    <IconStar v-if="index < 4" class="star"/>
                    <IconStarFill v-else class="star"/>
                </template>
            </div>
            <div class="link ">(50 ratings)</div>
            <div>1,127 students</div>
        </div>
    </div>
</template>

<script setup>
import IconStar from '~/assets/svg/star-fill.svg'
import IconStarFill from '~/assets/svg/star-half.svg'

</script>

<style lang="scss" scoped>
.rating {
    @apply flex items-center gap-1.5 mt-2 text-sm;

    .score {
        @apply text-gold-800 md:text-gold-200 font-semibold;
    }

    .stars {
        @apply flex items-center gap-0.5 text-gold-400 md:text-gold-200;
        svg {
            @apply w-3 h-3;
        }
    }
}
</style>