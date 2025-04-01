<template>
    <div class="index-content">
        <div class="index-content-inner">
            <div class="index-content-inner-content">
                <WhatLearn />
                <ExploreTopics/>
                <div class="section block md:hidden mt-12 md:mt-0">
                    <Courses/>
                </div>
                <CourseContent />
                <Requirement />
                <Description />
                <StudentsBought />
                <Instructor />
                <CourseRating />
                <MoreCourses />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import WhatLearn from './what-learn.vue'
import ExploreTopics from './explore-topics.vue'
import CourseContent from './course-content.vue'
import Requirement from './requirement.vue'
import Description from './description.vue'
import StudentsBought from './students-bought.vue'
import Instructor from './instructor.vue'
import CourseRating from './course-rating.vue'
import MoreCourses from './more-courses.vue'
import Courses from './sidebar/courses.vue'
</script>

<style lang="scss" scoped>
.index-content {
    @apply w-full text-white py-9 pb-14;

    &-inner {
        @apply w-11/12 md:w-content m-auto;

        &-content {
            @apply w-full md:w-4/6 px-0 md:px-10 pt-12 md:pt-0;
        }
    }

    :deep .section {
        @apply text-main;
        .section-title {
            @apply font-bold text-xl md:text-2xl;
        }
    }
}
</style>