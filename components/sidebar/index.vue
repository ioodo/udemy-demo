<template>
    <div :class="sidebarClass">
        <Preview class="hidden md:block"/>

        <div class="md:px-6 md:py-6">
            <div class="text-xl md:text-2xl font-bold">$19.99</div>
            <div class="btn btn-primary btn-large w-full mt-4">Add to cart</div>
            <div class="btn btn-default btn-large w-full mt-2 md:mt-3 font-bold">Buy now</div>
            <div class="text-main text-xs md:text-sm text-center mt-4">30-Day Money-Back Guarantee</div>
            <div class="hidden md:block">
                <Courses/>
            </div>

            <div class="flex items-center justify-between text-main text-sm mt-4 md:mt-2 font-bold">
                <div
                    v-for="(item, index) in actions"
                    :key="index"
                    class="btn btn-text underline cursor-pointer !px-2 hover:!text-black hover:!bg-gray-300/30 w-1/3 md:w-auto"
                >{{ item }}</div>
            </div>

            <div class="border border-dashed border-gray-200 px-2 py-1 md:py-2 text-gray-300 font-normal flex items-center mt-2">
                <div class="min-w-0">
                    <div>
                        <span class="text-sm md:text-lg font-bold">KEEPLEARNING</span><span class="ml-2 text-xs md:text-sm">is applied</span>
                    </div>
                    <div class="text-xs md:text-sm">
                        Udemy coupon
                    </div>
                </div>
                <IconClose class="text-primary ml-auto w-6"/>
            </div>

            <div class="flex item-stretch gap-2 mt-2 md:mt-3">
                <div class="border border-solid border-gray-300 flex-1 rounded flex items-center px-4">
                    <input placeholder="Enter Coupon" class="border-none focus:outline-none placeholder:text-black/60 placeholder:text-sm md:placeholder:text-base"/>
                </div>
                <div class="btn btn-primary btn-small md:btn-large shrink-0">Apply</div>
            </div>
        </div>

        <div class="px-6 py-6 border-t border-solid border-gray-200 hidden md:block">
            <div class="text-lg font-bold">Training 5 or more people?</div>
            <div class="text-main mt-2 text-sm">Get your team access to 27,000+ top Udemy courses anytime, anywhere.</div>
            <div class="btn btn-default font-bold w-full mt-2">Try udemy Business</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, computed } from 'vue'
import IconClose from '~/assets/svg/close.svg'
import Preview from './preview.vue'
import Courses from './courses.vue'

const props = defineProps({
    wrapperClass: {
        type: String
    }
})
const className = ref('')
const actions = ref(['Share', 'Gift this course', 'Apply Coupon'])

const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    className.value = scrollTop >= window.innerHeight / 2 ? 'md:!fixed !top-4' : ''
}

const sidebarClass = computed(() => {
    return `sidebar !relative ${window?.innerWidth < 768 ? 'md:!absolute' : className.value || 'md:!absolute'}`
})

onMounted(() => {
    document.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
    document.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.sidebar {
    @apply absolute top-24 text-black bg-white;
    left: calc(calc(100vw - 1180px) / 2 + calc(1180px * 4/6));
    width: calc(1180px * 2/6 - 2.5rem);
    box-shadow: 0 2px 4px rgba(6, 17, 118, 0.08), 0 4px 12px rgba(6, 17, 118, 0.08);
}

@media (max-width: 768px) {
    .sidebar {
        @apply w-11/12 m-auto left-0 top-4 shadow-none;
    }
}
</style>