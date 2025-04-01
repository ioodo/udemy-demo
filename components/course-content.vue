<template>
    <div class="section">
        <div class="section-title">Course content</div>
        <div class="content">
            <div class="toolbar">
                <div class="toolbar-left">
                    {{ dataSource.length }} sections • {{ lecturesCount }} lectures • 2h 7m total length
                </div>
                <div class="toolbar-right">
                    <div class="btn !pl-0 xs:pl-2">Expand all sections</div>
                </div>
            </div>
            <div class="course-list">
                <div
                    v-for="(item) in dataSource"
                    :key="item.id"
                    :class="`course-list-item ${item.fold ? '' : 'unfold'}`"
                    @click="handleFoldToggle(item)"
                >
                    <div class="course-list-item-header">
                        <IconArrow class="w-3 h-3 arrow"/>
                        <div class="break-words pl-4 break-words text-xs md:text-sm">{{  item.name  }}</div>
                        <div class="ml-auto text-main text-right font-normal text-xs md:text-sm shrink-0 hidden md:block">{{  item.children?.length || 0  }} lectures • {{ formatSectionDuration(item) }}</div>
                    </div>

                    <div v-if="!item.fold" class="py-2 text-main border-b border-solid border-gray-200">
                        <div
                            v-for="(child, index) in (item.children || [])"
                            :key="index"
                            class="flex items-center px-3 xs:px-6 py-2 md:py-4"
                        >
                            <div class="mr-4">
                                <IconPlay class="w-4"/>
                            </div>
                            <div class="flex-1 flex items-center">
                                <div :class="`${child.url ? 'link !text-primary cursor-pointer' : ''} break-words`">{{ child.name }}</div>
                                <div v-if="child.url" class="ml-auto link !text-primary cursor-pointer pl-4">Preview</div>
                            </div>
                            <div class="pl-6">{{ formatDuration(child.duration) }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="btn btn-default w-full mt-4 font-bold">3 more sections</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import IconPlay from '~/assets/svg/play.svg'
import IconArrow from '~/assets/svg/arrow.svg'
import { formatDuration } from '@/utils'

const dataSource = ref([{
    id: 0,
    name: 'INTRODUZIONE A COINBASE Per Comprare BITCOIN',
    children: [{
        name: 'Introduzione',
        url: 'https://mp4-c.udemycdn.com/2021-01-13_10-38-22-1ef26c4b3672248bfe06d96907eb0db3/1/WebHD_720p.mp4?Expires=1743435190&Signature=OY9YDHRMKGs6k9TfFBCBUrBWysYOa5PdN7~d6YkCSR9Uro-wCkBoMNLR8TbBYNQL79tz6AaeJ63Vl~ce5u7QNxMWAzRK9bUKDJyt2yEvKok166V2UpFLDRZ8wQiIDDx-Elf5lxkREmWo0Po4uamI8VcmiOTdvk3mcwhIluyzNLFZZidtj2VcwkEeSCH0J8ik9KLRQ-r3F4xNDcopDJwF4mahQDvMN7jx7F8Z5ozPKmZnGdnwhRef2ISlYLwDrtZdyReRDq~igzIdVABESdYUmVHEaS4nTIw3FeKPuEOLtmUmJYoHIa6WJ5EhAe9u2p89pYZdJCDkng~9gPdBe~fErA__&Key-Pair-Id=K3MG148K9RIRF4',
        duration: 271
    }, {
        name: 'IMPORTANTE Guarda Prima Di Andare Avanti, Grazie...',
        url: '',
        duration: 61
    }, {
        name: 'Invito Per Studenti Al Gruppo Telegram ACI69',
        url: '',
        duration: 5
    }, {
        name: 'Vantaggi Per Studenti ACI69',
        url: '',
        duration: 80
    }],
    fold: false
}, {
    id: 1,
    name: 'COME CI SI REGISTRA GRATIS A COINBASE IN ITALIANO?',
    children: [{
        name: 'IMPORTANTE: Come Ti Registri Gratis Su Coinbase? Guardalo Passo Passo',
        url: 'https://mp4-c.udemycdn.com/2021-01-13_10-38-22-1ef26c4b3672248bfe06d96907eb0db3/1/WebHD_720p.mp4?Expires=1743435190&Signature=OY9YDHRMKGs6k9TfFBCBUrBWysYOa5PdN7~d6YkCSR9Uro-wCkBoMNLR8TbBYNQL79tz6AaeJ63Vl~ce5u7QNxMWAzRK9bUKDJyt2yEvKok166V2UpFLDRZ8wQiIDDx-Elf5lxkREmWo0Po4uamI8VcmiOTdvk3mcwhIluyzNLFZZidtj2VcwkEeSCH0J8ik9KLRQ-r3F4xNDcopDJwF4mahQDvMN7jx7F8Z5ozPKmZnGdnwhRef2ISlYLwDrtZdyReRDq~igzIdVABESdYUmVHEaS4nTIw3FeKPuEOLtmUmJYoHIa6WJ5EhAe9u2p89pYZdJCDkng~9gPdBe~fErA__&Key-Pair-Id=K3MG148K9RIRF4',
        duration: 424
    }, {
        name: 'Documenti e Dati Richiesti Da Coinbase: Come Devi Fare?',
        url: '',
        duration: 0
    }],
    fold: true
}])

const lecturesCount = computed(() => {
    return dataSource.value.reduce((prev, curr) => {
        return prev + curr.children.length
    }, 0)
})

const handleFoldToggle = (e) => {
    e.fold = !e.fold
}

const formatSectionDuration = (section) => {
    const seconds = section.children.reduce((prev, curr) => {
        return prev + curr.duration
    }, 0)
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) {
        return `${hours}Hour ${minutes > 0 ? `:${minutes}min` : ''}`;
    }
    return `${minutes}min`
}
</script>

<style lang="scss" scoped>
.section {
    @apply mt-8;
}
.content {
    @apply text-xs xs:text-sm;
    .toolbar {
        @apply flex xs:items-center xs:justify-between mt-4 flex-col xs:flex-row;
        &-left {
        }
        &-right {
            .btn {
                @apply font-bold text-primary;
            }
        }
    }

    .course-list {
        @apply border-t border-solid border-gray-200;
        &-item {
            @apply border-x border-solid border-gray-200;

            &-header {
                @apply relative flex items-center bg-[#f6f7f9] px-3 xs:px-6 py-2 xs:py-4 font-bold md:text-base border-b border-solid border-gray-200 cursor-pointer;
                .arrow {
                    @apply rotate-90;
                    transition: transform 150ms linear;
                }
            }

            &.unfold .course-list-item-header {
                .arrow {
                    @apply -rotate-90;
                }
            }
        }
    }
}
</style>