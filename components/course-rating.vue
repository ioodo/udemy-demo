<template>
    <div class="section">
        <div class="section-title flex items-center">
            <IconStarFill class="w-5 h-5 mr-2 text-[#c4710d]"/> 4.7 course rating <span class="text-gray-300 mx-2">•</span> 50 ratings
        </div>

        <div class="block md:hidden mt-4 relative">
            <swiper
                @swiper="bindSwiper"
                @slideChange="handleSwiperChange"
            >
                <swiper-slide
                    v-for="item in dataSource"
                    :key="item.id"
                >
                    <Item :item="item"/>
                </swiper-slide>
                <div v-if="activeIndex > 0" class="nav absolute left-1" @click="handleNav('prev')">
                    <IconArrow class="rotate-180"/>
                </div>
                <div v-if="activeIndex < dataSource.length-1" class="nav absolute right-1"  @click="handleNav('next')">
                    <IconArrow />
                </div>
            </swiper>
        </div>
        <div class="hidden md:flex flex-col md:flex-row md:items-stretch flex-wrap gap-6 mt-6">
            <Item
                v-for="item in dataSource"
                :key="item.id"
                :item="item"
            >
            </Item>
        </div>
        <div class="btn btn-default text-xs xs:text-sm !text-primary font-bold flex items-center mt-4">
            <span>Show all reviews</span>
        </div>
    </div>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import IconStarFill from '~/assets/svg/star-fill.svg'
import IconArrow from '~/assets/svg/arrow.svg'
import IconStar from '~/assets/svg/star.svg'
import IconMore from '~/assets/svg/more.svg'
import IconLike from '~/assets/svg/like.svg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Item from './course-rating-item.vue'

const swiperRef = ref(null)
const dataSource = ref([])
const activeIndex = ref(0)

const bindSwiper = (e) => {
    swiperRef.value = e
}

const handleSwiperChange = (e) => {
    activeIndex.value = e.activeIndex
}
const handleNav = (nav) => {
    const item = swiperRef.value
    if (nav === 'prev') {
        item.slidePrev()
        return
    }
    item.slideNext()
}
onMounted(() => {
    dataSource.value = new Array(4).fill(0).map((r, index) => {
        return {
            id: index,
            name: `Paolo ${index + 1}`,
            avarar: 'https://img-c.udemycdn.com/user/50x50/157746552_4e74.jpg',
            score: 3.5,
            year: 2,
            description: `Spiegazione elementare dell'uso di Coinbase. Probabilmente la cosa più fastidiosa è che tutte le risorse "scaricabili" fanno riferimento a pseudo bonus o referral cosa alquanto antipatica ritengo.`
        }
    })
})
</script>

<style lang="scss" scoped>
.section {
    @apply mt-8;
    &-content.fold {
        -webkit-mask-image: linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0));
    }
    .item {
        width: calc(50% - 1rem);
        @media (max-width: 768px) {
            @apply w-full;    
        }
    }
    .nav {
        @apply w-10 h-10 rounded-full flex items-center justify-center z-20 top-1/2 -translate-y-1/4;
        box-shadow: 0 2px 4px rgba(6, 17, 118, 0.08), 0 4px 12px rgba(6, 17, 118, 0.08);
        svg {
            @apply text-black w-10;
        }
    }
}
</style>