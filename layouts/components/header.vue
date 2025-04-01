<template>
    <div class="header hidden md:block z-20">
        <div class="header-inner">
            <Logo class="w-24" />
            
            <div class="py-4 relative group">
                <div class="btn btn-text">Explore</div>
                <Popover class="bottom-0 translate-y-full w-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div class="flex items-start [&>div]:border-r [&>div]:border-solid [&>div]:border-gray-200 [&>div:last-child]:border-none">
                        <div
                        >
                            <div
                                v-for="(group, i) in exploreMenus"
                                :key="i"
                                class="border-b border-solid border-gray-200 last:border-none py-2 w-60"
                            >
                                <div v-if="group.name" class="px-4 py-2 font-bold">{{ group.name }}</div>
                                <div
                                    v-for="(category, j) in (group.children || [])"
                                    :key="j"
                                    class="flex items-center py-2 px-4 hover:bg-primary/20 hover:text-primary cursor-pointer"
                                    @click="handleCategoryChange(category)"
                                >
                                    <div class="min-w-0 flex-1 truncate">{{ category.name }}</div>
                                    <IconArrow class="w-2.5 ml-auto shrink-0"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="currentCategory">
                            <div
                                v-for="(group, i) in currentCategory.children"
                                :key="i"
                                class="border-b border-solid border-gray-200 last:border-none py-2 w-60"
                            >
                                <div v-if="group.name" class="px-4 py-2 font-bold">{{ group.name }}</div>
                                <div
                                    v-for="(category, j) in (group.children || [])"
                                    :key="j"
                                    class="flex items-center py-2 px-4 hover:bg-primary/20 hover:text-primary cursor-pointer"
                                >
                                    <div class="min-w-0 flex-1 truncate">{{ category.name }}</div>
                                    <IconArrow v-if="category.children && category.children.length" class="w-2.5 ml-auto shrink-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover>
            </div>

            <div class="search-input">
                <IconSearch class="text-gray-300"/>
                <input placeholder="Search for anything"/>
            </div>

            <div class="py-4 relative group">
                <div class="btn btn-text !hidden md:!inline-flex">
                    <span>Udemy Business</span>
                </div>
                <Popover class="bottom-0 translate-y-full w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div class="px-4 py-4">
                        <div class="font-bold text-main text-lg">Get your team access to over 27,000 top Udemy courses, anytime, anywhere.</div>
                        <div class="btn btn-primary w-full mt-4">Try Udemy Business</div>
                    </div>
                </Popover>
            </div>

            <div class="py-4 relative group">
                <div class="btn btn-text !hidden md:!inline-flex">Teach on Udemy</div>
                <Popover class="bottom-0 translate-y-full w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div class="px-4 py-4">
                        <div class="font-bold text-main text-lg">Turn what you know into an opportunity and reach millions around the world.</div>
                        <div class="btn btn-primary w-full mt-4">Learn more</div>
                    </div>
                </Popover>
            </div>

            <div class="btn btn-text aspect-square !px-0 !py-0">
                <IconCart class="w-5 text-black"/>
            </div>
            <div class="btn btn-default font-bold">Log in</div>
            <div class="btn btn-primary">Sign up</div>
            <div class="btn btn-default aspect-square !px-0 !py-0">
                <IconEarth class="w-4 text-black"/>
            </div>
        </div>
    </div>
    <div class="header !px-0 !py-2 block md:hidden">
        <div class="header-inner relative h-10 justify-between">
            <div class="btn btn-text">
                <IconMoreHor class="w-3.5"/>
            </div>
            <Logo class="w-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div>
                <div class="btn btn-text !px-3">
                    <IconSearch class="w-4 text-black"/>
                </div>
                <div class="btn btn-text !px-3">
                    <IconCart class="w-4 text-black"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '~/assets/svg/logo.svg'
import IconSearch from '~/assets/svg/search.svg'
import IconCart from '~/assets/svg/cart.svg'
import IconEarth from '~/assets/svg/earth.svg'
import IconMoreHor from '~/assets/svg/more-hor.svg'
import IconArrow from '~/assets/svg/arrow.svg'
import Popover from '@/components/popover.vue'

const exploreMenus = ref([{
    name: 'Browse Certifications',
    children: [{
        name: 'Certification preparation',
        children: [{
            name: 'Popular Issuers',
            children: [{
                name: 'Amazon Web Services'
            }, {
                name: 'Microsoft Certifications'
            }]
        }]
    }]
}, {
    children: [{
        name: 'Development',
        children: [{
            name: 'Development Group',
            children: [{
                name: 'Web Development'
            }, {
                name: 'Mobile Development'
            }]
        }]
    }, {
        name: 'Business',
        children: [{
            name: 'Business Group',
            children: [{
                name: 'Sales'
            }, {
                name: 'Industry'
            }]
        }]
    }]
}])
const currentCategory = ref(null)

const handleCategoryChange = (e) => {
    currentCategory.value = e
}

</script>
<style lang="scss" scoped>
.header {
    @apply px-6 py-0 text-sm text-main relative md:shadow-none bg-white;
    box-shadow: 0 2px 4px rgba(6, 17, 118, 0.08), 0 4px 12px rgba(6, 17, 118, 0.08);

    &-inner {
        @apply flex items-center gap-2 w-full;
    }

    .search-input {
        @apply relative border border-solid border-[#9194ac] rounded-full flex-1 px-6 py-2 px-10;

        svg {
            @apply w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2;
        }

        input {
            @apply border-none w-full h-8;
        }
    }
}
</style>