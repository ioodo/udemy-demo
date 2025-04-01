<template>
    <div class="section">
        <div class="section-title">Instructor</div>
        <a class="link font-bold mt-2 xs:mt-4 inline-block text-xs xs:text-base">ACI69 | Trading ™</a>
        <div>
            <div class="text-[#595c73]">✔ Ingegnere Informatico Best Seller – Impara e Guadagna!</div>
            <div class="mt-2 flex items-center">
                <img src="https://img-c.udemycdn.com/user/200_H/44745822_3f5f_30.jpg" class="mr-4 rounded-full border border-solid border-gray-200 w-20 xs:w-28"/>
                <div class="text-xs xs:text-sm font-normal leading-7">
                    <div class="flex items-center">
                        <IconStar class="w-3 h-3 text-black mr-2 xs:mr-4"/>
                        <span>4.5 Instructor Rating</span>
                    </div>
                    <div class="flex items-center">
                        <IconHonor class="w-3 h-3 text-black mr-2 xs:mr-4"/>
                        <span>{{ formatNumber(3028) }} Reviews</span>
                    </div>
                    <div class="flex items-center">
                        <IconGroup class="w-3 h-3 text-black mr-2 xs:mr-4"/>
                        <span>{{ formatNumber(3028) }} Students</span>
                    </div>
                    <div class="flex items-center">
                        <IconPlay class="w-3 h-3 text-black mr-2 xs:mr-4"/>
                        <span>{{ formatNumber(3028) }} Courses</span>
                    </div>
                </div>
            </div>
        </div>
        <div :class="`section-content text-xs xs:text-sm mt-2 xs:mt-4 font-normal text-main leading-7 ${fold ? 'fold max-h-64 overflow-hidden' : ''}`">
            <p>★ Impara, Applica, Guadagna!</p><p>Mi occupo di formazione online da 18 anni</p><p>✔ <strong>senza fronzoli</strong></p><p>✔ <strong>senza piedistalli del cavolo </strong></p><p>✔ <strong>senza perdite di tempo</strong></p><p>Ciao, sono <strong>Leo</strong>, meglio conosciuto online come <strong>ACI69 Cripto Trading - powered by VideoRipet1zioni™</strong></p><p><br>✔ <strong>13.000 studenti</strong> già formati</p><p>★★★★★ <strong>3.000 recensioni verificate</strong><br>▶ <strong>4.350.000 visualizzazioni</strong> </p><p>▶ <strong>32.000 iscritti tra Udemy e YouTube</strong></p><p><br></p><p>Ho creato oltre <strong>500.000 ore di contenuti video</strong> (parliamo di <strong>57 anni di formazione condensati</strong>).</p><p>✓ <strong>Perché dovresti fidarti di me?</strong><br>Perché <strong>i miei studenti ottengono risultati veri</strong>. Guadagnano, si migliorano e trasformano le competenze apprese nei miei corsi in opportunità concrete.</p><p>✔ <strong>Se vuoi imparare davvero un mestiere</strong>, lascia stare le informazioni sparse su Google e affidati a chi ha già fatto gli errori per te.</p><p>⚡ <strong>Iscriviti ora ai miei corsi</strong>: hai la <strong>garanzia soddisfatto o rimborsato</strong>.<br>✉ <strong>Supporto esclusivo</strong> su Telegram &amp; Facebook solo per studenti.</p><p>⏳ Non perdere tempo prezioso: <strong>clicca e inizia subito</strong><br>Ci vediamo dall'altra parte → ✔ACI69</p>
        </div>
        <div class="btn btn-text text-xs xs:text-sm !text-primary font-bold !pl-0.5 flex items-center" @click="toggle">
            <span>Show {{ fold ? 'more' : 'less'}}</span>
            <IconArrow :class="`ml-2 w-2 color-primary ${fold ? 'rotate-90' : '-rotate-90'}`"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import IconArrow from '~/assets/svg/arrow.svg'
import IconStar from '~/assets/svg/star-fill.svg'
import IconHonor from '~/assets/svg/honor.svg'
import IconPlay from '~/assets/svg/play-fill.svg'
import IconGroup from '~/assets/svg/group.svg'
import { formatNumber } from '@/utils'

const fold = ref(true)
const toggle = () => {
    fold.value = !fold.value
}
</script>

<style lang="scss" scoped>
.section {
    @apply mt-8 text-xs xs:text-base;
    &-content.fold {
        -webkit-mask-image: linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0));
    }
}
</style>