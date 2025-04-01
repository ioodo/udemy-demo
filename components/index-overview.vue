<template>
    <div class="index-overview">
        <div class="index-overview-inner">
            <div class="index-overview-inner-content">
                <div class="breadcrumb">
                    <div
                        v-for="(item, index) in breadcrumbs"
                        :key="index"
                        class="breadcrumb-item"
                    >{{ item.label }}</div>
                </div>

                <Preview class="block md:hidden mt-6"/>

                <div class="text-2xl md:text-4xl font-bold md:font-medium mt-8">Coinbase Come Comprare Bitcoin e Guadagnare™?</div>
                <div class="text-base md:text-xl mt-4 md:mt-6 font-thin break-words">Come Acquistare e Guadagnare Facilmente Bitcoin Su Coinbase Corso Online Completo In Italiano</div>
                <div class="index-overview-rating">
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
                <div class="index-overview-createby">
                    Created by <span class="link">ACI69 | Trading ™</span>
                </div>
                <div class="index-overview-copyright">
                    <div class="flex items-center gap-2"><IconExclamation /> Last updated 2025/3</div>
                    <div class="flex items-center gap-2"><IconEarth /> Italian</div>
                    <div class="flex items-center gap-2"><IconConsole /> Italian [Auto]</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import IconStar from '~/assets/svg/star-fill.svg'
import IconStarFill from '~/assets/svg/star-half.svg'
import IconEarth from '~/assets/svg/earth.svg'
import IconExclamation from '~/assets/svg/exclamation.svg'
import IconConsole from '~/assets/svg/console.svg'
import Preview from './sidebar/preview.vue'

const breadcrumbs = ref([{
    label: 'Finance & Accounting'
}, {
    label: 'Cryptocurrency & Blockchain'
}, {
    label: 'Bitcoin'
}])
</script>

<style lang="scss" scoped>
.index-overview {
    @apply bg-white md:bg-[#1d1e27] w-full text-black md:text-white text-sm font-normal pt-3 pb-12;

    &-inner {
        @apply w-11/12 md:w-content m-auto;

        &-content {
            @apply w-full md:w-4/6 px-0 md:px-10;
        }
    }

    .breadcrumb {
        @apply flex items-center gap-8 text-sm mt-2 md:mt-6 text-primary md:text-secondary font-bold md:font-normal;

        &-item {
            @apply relative hover:cursor-pointer hover:opacity-90;
            &:not(:last-child) {
                &::after {
                    @apply absolute -right-5 top-1/2 w-1.5 h-1.5 -rotate-45 -translate-y-2/4 border-r border-b border-solid border-black md:border-white;
                    content: ' ';
                }
            }
        }
    }

    &-rating {
        @apply flex items-center gap-1.5 mt-5 text-sm;

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

    &-createby {
        @apply mt-4;
    }
    &-copyright {
        @apply mt-4 flex md:items-center gap-3 flex-col md:flex-row;
        svg {
            @apply text-main md:text-white w-3 h-3;
        }
    }
}
</style>