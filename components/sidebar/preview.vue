<template>
    <div class="aspect-[1.82/1] relative cursor-pointer">
        <img src="https://img-c.udemycdn.com/course/240x135/3524274_d5ed_5.jpg" class="w-full object-cover"/>
        <div class="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/10 to-black/90">
            <div class="px-6 py-6 bg-white inline-flex rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <IconPlayer class="text-black/70 w-7 h-7"/>
            </div>
            <div class="absolute left-1/2 bottom-3 -translate-x-1/2 font-bold text-white">Peview this course</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import IconPlayer from '~/assets/svg/player.svg'

</script>

<style lang="scss" scoped>
</style>