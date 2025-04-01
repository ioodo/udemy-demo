<template>
    <div
        class="item border-b md:border-b-0 border-t border-solid border-gray-200 py-4 md:pb-4 relative flex flex-col h-80 md:h-auto"
    >
        <div class="flex items-center flex-row-reverse md:flex-row">
            <img :src="item.avarar" class="w-6 xs:w-10 h-6 xs:h-10 rounded-full shrink-0 mr-4"/>
            <div class="flex-1">
                <div class="font-bold text-xs xs:text-base truncate">{{ item.name }}</div>
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-0.5 text-[#c4710d]">
                        <template
                            v-for="(star, i) in new Array(5).fill(0)"
                            :key="i"
                        >
                            <IconStarHalf class="w-3" v-if="item.score > (i+1) && item.score < (i + 2)"/>
                            <IconStarFill v-else-if="item.score > (i + 1)" class="w-3"/>
                            <IconStar v-else class="w-2.5"/>
                        </template>
                    </div>
                    <span class="text-xs font-semibold text-main">{{ item.year }} years ago</span>
                </div>
            </div>
            <div class="shrink-0 ml-auto pr-2 hidden md:block ">
                <IconMore class="h-4 text-gray-300 cursor-pointer"/>
            </div>
        </div>
        <div class="text-main text-xs xs:text-base mt-4">
            {{ item.description }}
        </div>
        <div class="text-gray-300 text-xs mt-6 flex items-end justify-between flex-1 md:flex-auto">
            <span class="flex items-cennter gap-3">
                <span>Helpful?</span>
                <IconLike class="w-3 xs:w-4 text-main cursor-pointer"/>
                <IconLike class="w-3 xs:w-4 text-main rotate-180 cursor-pointer"/>
            </span>
            <IconMore class="h-3 xs:h-4 text-gray-300 cursor-pointer block md:hidden"/>
        </div>
    </div>
</template>

<script setup lang="jsx">
import { ref, onMounted, defineProps } from 'vue'
import IconStarFill from '~/assets/svg/star-fill.svg'
import IconStarHalf from '~/assets/svg/star-half.svg'
import IconStar from '~/assets/svg/star.svg'
import IconMore from '~/assets/svg/more.svg'
import IconLike from '~/assets/svg/like.svg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
    item: {
        type: Object
    }
})
onMounted(() => {
})
</script>

<style lang="scss" scoped>
.item {
    width: calc(50% - 1rem);
    @media (max-width: 768px) {
        @apply w-full;    
    }
}
</style>