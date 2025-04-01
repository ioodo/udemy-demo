<template>
    <div class="section">
        <div class="section-title">Students also bought</div>
        <div>
            <div
                v-for="item in dataSource"
                :key="item.id"
                class="py-4 flex items-center border-b border-solid border-gray-200 last:border-none"
            >
                <img :src="item.cover" class="w-16 h-16 object-cover mr-1 xs:mr-2"/>
                <div class="flex-1 pr-6 text-[10px] xs:text-base">
                    <div class="font-bold">{{ item.name }}</div>
                    <div class="xs:text-sm mt-1">
                        <span v-if="item.bestSeller" class="bg-[#c2e9eb] text-[#0d5261] font-semibold text-xs px-1 xs:px-2 py-0 xs:py-1 rounded mr-1 xs:mr-2">Bestseller</span>
                        <span class="font-bold text-[#206241]">{{ item.hours }} total hours <span class="text-xs mr-1">•</span> </span>
                        <span>Updated {{ item.updatedAt }}</span>
                    </div>
                </div>
                <div class="shrink-0 flex items-start gap-1 xs:gap-4 text-xs xs:text-sm">
                    <div class="flex items-center flex-1 justify-center">
                        <span class="font-bold text-[#8b4309]">{{ item.score }}</span>
                        <IconStar class="text-[#c4710d] w-3 h-3"/>
                    </div>
                    <div class="flex items-center flex-1 text-main">
                        <IconGroup class="w-4 h-4"/>
                        <span class="ml-0.5">{{ formatNumber(item.num) }}</span>
                    </div>
                    <div class="flex-1 flex items-start justify-end">
                        <div class="text-main text-right mr-4">
                            <div class="font-bold">${{ item.memberPrice }}</div>
                            <div class="line-through text-xs">${{ item.price }}</div>
                        </div>
                        <div class="justify-end text-main hidden xs:flex">
                            <div class="w-9 h-9 rounded-full border border-solid border-primary flex items-center justify-center cursor-pointer hover:bg-primary/10">
                                <IconFav class="text-primary w-6 h-6"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn btn-default w-full text-xs xs:text-sm !text-primary font-bold flex items-center" @click="toggle">
            <span>Show {{ fold ? 'more' : 'less'}}</span>
            <IconArrow :class="`ml-2 w-2 color-primary ${fold ? 'rotate-90' : '-rotate-90'}`"/>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IconStar from '~/assets/svg/star-fill.svg'
import IconGroup from '~/assets/svg/group.svg'
import IconFav from '~/assets/svg/fav.svg'
import { formatNumber } from '@/utils'

const dataSource = ref([])
const fold = ref(true)

const toggle = () => {
    fold.value = !fold.value
}

onMounted(() => {
    dataSource.value = new Array(10).fill(0).map((r, index) => {
        return {
            id: index,
            cover: 'https://img-c.udemycdn.com/course/50x50/380970_b5b4_42.jpg',
            name: 'Crypto Condensed: The Complete Guide To Bitcoin',
            hours: 1.5,
            updatedAt: '3/2025',
            score: 5,
            num: 12345,
            price: 39.99,
            memberPrice: 12.99,
            favorite: false,
            bestSeller: index === 0
        }
    })
})
</script>

<style lang="scss" scoped>
.section {
    @apply mt-8;
    &-content {
    }
}
</style>