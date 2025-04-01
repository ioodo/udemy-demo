<template>
    <div class="index">
        <Overview />
        <Sidebar />
        <Content/>
        <FloatBar />
    </div>
</template>

<script setup>
import Overview from '@/components/index-overview.vue'
import Content from '@/components/index-content.vue'
import Sidebar from '@/components/sidebar/index.vue'
import FloatBar from '@/components/float-bar.vue'
</script>

<style lang="scss" scoped>
</style>