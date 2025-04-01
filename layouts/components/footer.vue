<template>
    <div class="w-full text-white">
        <div class="px-4 xs:px-8 md:px-12 py-4 xs:py-6 bg-[#1d1e27] flex flex-col md:flex-row md:items-center justify-between border-b border-solid border-gray-200">
            <div class="text-xs xs:text-base md:text-lg">Top companies choose <span class="text-secondary cursor-pointer">Udemy Business</span> to build in-demand career skills.</div>
            <div class="flex items-center gap-6 mt-4 md:mt-0">
                <LogoNasdaq class="h-8 xs:h-12"/>
                <LogoVW class="h-8 xs:h-12"/>
                <LogoNetapp class="h-8 xs:h-12"/>
                <LogoEventBrite class="h-8 xs:h-12"/>
            </div>
        </div>

        <div class="px-4 xs:px-8 md:px-12 bg-[#1d1e27] py-6 xs:py-10">
            <div class="text-sm xs:text-xl">
              <span>Explore top skills and certifications</span>
            </div>
            <div class="flex flex-wrap items-stretch mt-4 md:mt-0">
                <div
                    v-for="(section, index) in exploreDataSource"
                    :key="index"
                    class="w-full md:w-1/4 mt-0 md:mt-10 border-b border-solid border-gray-200 md:border-none"
                    @click="handleFold(section)"
                >
                    <div class="text-xs xs:text-base md:mb-4 font-medium flex items-center justify-between py-4 xs:py-6 md:py-0">
                      <span>{{ section.name }}</span>
                      <IconArrow :class="`block md:hidden arrow w-3 text-white ${section.fold ? 'rotate-90' : '-rotate-90'}`"/>
                    </div>
                    <div :class="` ${section.fold ? 'h-0 opacity-0' : 'py-2 xs:pt-4 pb-4 xs:pb-8 md:py-0'} md:h-auto md:opacity-100`">
                      <div
                          v-for="(item, j) in section.children"
                          :key="j"
                          class="text-xs leading-6 font-light"
                      >
                          <div class="cursor-pointer hover:underline">{{ item }}</div>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-4 xs:px-8 md:px-12 bg-[#111116] py-10 pb-20 xs:pb-28 border-b border-solid border-gray-200">
            <div class="flex flex-wrap items-stretch">
                <div
                    v-for="(section, index) in dataSource"
                    :key="index"
                    class="w-1/4"
                >
                    <div class="text-sm xs:text-base mb-4 font-medium">{{ section.name }}</div>
                    <div
                        v-for="(item, j) in section.children"
                        :key="j"
                        class="text-xs leading-6 font-light"
                    >
                        <div class="cursor-pointer hover:underline">{{ item }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-4 xs:px-8 md:px-12 flex md:flex-row md:items-center md:justify-between py-6 bg-[#111116] relative flex-col-reverse gap-4 xs:gap-8 md:gap-0">
            <div class="items-center gap-4 hidden md:flex">
                <Logo class="h-9"/>
                <span class="text-xs xs:text-sm">© 2025 Udemy, Inc.</span>
            </div>
            <div class="text-xs xs:text-sm md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                Cookie settings
            </div>
            <div class="text-xs xs:text-sm flex items-center gap-2">
                <IconEarth class="w-4"/>
                English
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '~/assets/svg/logo-udemy-inverted.svg'
import LogoNasdaq from '~/assets/svg/nasdaq-light.svg'
import LogoVW from '~/assets/svg/volkswagen-light.svg'
import LogoNetapp from '~/assets/svg/netapp-light.svg'
import LogoEventBrite from '~/assets/svg/eventbrite-light.svg'
import IconEarth from '~/assets/svg/earth.svg'
import IconArrow from '~/assets/svg/arrow.svg'

const exploreDataSource = ref([
  {
    name: "Certifications by Issuer",
    fold: true,
    children: [
      "Amazon Web Services (AWS) Certifications",
      "Six Sigma Certifications",
      "Microsoft Certifications",
      "Cisco Certifications",
      "Tableau Certifications",
      "See all Certifications"
    ]
  },
  {
    name: "Web Development",
    fold: true,
    children: [
      "Web Development",
      "JavaScript",
      "React JS",
      "Angular",
      "Java"
    ]
  },
  {
    name: "IT Certifications",
    fold: true,
    children: [
      "Amazon AWS",
      "AWS Certified Cloud Practitioner",
      "AZ-900: Microsoft Azure Fundamentals",
      "AWS Certified Solutions Architect - Associate",
      "Kubernetes"
    ]
  },
  {
    name: "Leadership",
    fold: true,
    children: [
      "Leadership",
      "Management Skills",
      "Project Management",
      "Personal Productivity",
      "Emotional Intelligence"
    ]
  },
  {
    name: "Certifications by Skill",
    fold: true,
    children: [
      "Cybersecurity Certification",
      "Project Management Certification",
      "Cloud Certification",
      "Data Analytics Certification",
      "HR Management Certification",
      "See all Certifications"
    ]
  },
  {
    name: "Data Science",
    fold: true,
    children: [
      "Data Science",
      "Python",
      "Machine Learning",
      "ChatGPT",
      "Deep Learning"
    ]
  },
  {
    name: "Communication",
    fold: true,
    children: [
      "Communication Skills",
      "Presentation Skills",
      "Public Speaking",
      "Writing",
      "PowerPoint"
    ]
  },
  {
    name: "Business Analytics & Intelligence",
    fold: true,
    children: [
      "Microsoft Excel",
      "SQL",
      "Microsoft Power BI",
      "Data Analysis",
      "Business Analysis"
    ]
  }
])

const dataSource = ref([
  {
    name: "About",
    children: [
      "About us",
      "Careers",
      "Contact us",
      "Blog",
      "Investors"
    ]
  },
  {
    name: "Discovery Udemy",
    children: [
      "Get the app",
      "Teach on Udemy",
      "Plans and Pricing",
      "Affiliate",
      "Help and Support"
    ]
  },
  {
    name: "Udemy for Business",
    children: [
      "Udemy Business"
    ]
  },
  {
    name: "Legal & Accessibility",
    children: [
      "Accessibility statement",
      "Privacy policy",
      "Sitemap",
      "Terms"
    ]
  }
])

const handleFold = (e) => {
  e.fold = !e.fold
}

</script>
<style lang="scss" scoped>
.arrow {
  transition: transform 150ms linear;
}
</style>