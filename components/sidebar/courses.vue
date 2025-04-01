<template>
    <div class="font-bold mt-2 xs:mt-6 text-sm xs:text-xl md:text-2xl">This course includes:</div>
    <div class="courses text-xs xs:text-sm font-normal flex xs:flex-wrap flex-col md:flex-col gap-0 md:gap-2 mt-2 text-main [&>div]:w-full xs:[&>div]:w-1/2 md:[&>div]:w-full [&>div]:mb-2 md:[&>div]:mb-0">
        <div class="flex items-center gap-4 truncate">
            <IconPlay class="w-3"/>
            <div>2 hourse on-demand video</div>
        </div>
        <div class="flex items-center gap-4 truncate">
            <IconArticle class="w-3"/>
            <div>1 article</div>
        </div>
        <div class="flex items-center gap-4 truncate">
            <IconArticle class="w-3.5"/>
            <div>2 downloadedable resources</div>
        </div>
        <div class="flex items-center gap-4 truncate">
            <IconPhone class="w-3.5"/>
            <div>Access on mobile and TV</div>
        </div>
    </div>
</template>

<script setup>
import IconPlay from '~/assets/svg/play.svg'
import IconArticle from '~/assets/svg/article.svg'
import IconDownload from '~/assets/svg/download.svg'
import IconPhone from '~/assets/svg/mobile-phone.svg'
</script>

<style lang="scss" scoped>
</style>