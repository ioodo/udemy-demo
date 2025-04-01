<template>
    <div class="section">
        <div class="section-title flex items-center">
            More courses by <a class="link ml-2" style="text-decoration-line: none;">ACI69 | Trading ™</a>
        </div>
        <div class="flex items-stretch flex-wrap gap-4 mt-6">
            <div
                v-for="item in dataSource"
                :key="item.id"
                class="item"
            >
                <img :src="item.cover" />
                <div class="font-bold text-xs xs:text-base mt-2 break-words">{{ item.name }}</div>
                <div class="text-main mt-1 text-[11px] xs:text-xs break-words">{{ item.description }}</div>
                <div class="flex item-center gap-1 mt-0.5">
                    <div class="font-bold text-xs xs:text-sm truncate text-[#c4710d] flex items-center">{{ item.score }}</div>
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
                        <span class="text-xs font-normal text-main">({{ item.num }})</span>
                    </div>
                </div>
                <div class="mt-0.5 text-[11px] text-main">
                    {{ item.hours }} total hours • {{ item. lectures}} lectures • ALl Levels
                </div>
                <div class="font-bold text-black mt-2 text-xs xs:text-base">${{ item.price }}</div>
            </div>

            <div class="w-full h-[1px] bg-gray-200 mt-8"></div>
            <div class="btn btn-default w-full text-xs xs:text-sm !text-primary font-bold">
                <span>Report abuse</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import IconStarFill from '~/assets/svg/star-fill.svg'
import IconStarHalf from '~/assets/svg/star-half.svg'
import IconStar from '~/assets/svg/star.svg'

const dataSource = ref([])

onMounted(() => {
    dataSource.value = new Array(3).fill(0).map((r, index) => {
        return {
            id: index,
            name: `Course Name ${index}`,
            description: `ACI69 | Trading ™,ACI69 Trading`,
            score: 3.7,
            num: 34,
            hours: 3.5,
            lectures: 27,
            price: 19.99,
            cover: 'https://img-c.udemycdn.com/course/240x135/2657286_2d98_4.jpg'
        }
    })
})
</script>

<style lang="scss" scoped>
.section {
    @apply mt-8;
    .item {
        width: calc(33.3% - 0.7rem);
    }
}
</style>