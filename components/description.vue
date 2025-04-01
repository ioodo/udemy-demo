<template>
    <div class="section">
        <div class="section-title">Description</div>
        <div :class="`section-content text-sm mt-4 font-normal text-main leading-7 ${fold ? 'fold max-h-64 overflow-hidden' : ''}`">
            <p><strong>Come funziona Coinbase per comprare Bitcoin ed altre criptovalute per guadagnarci?</strong></p><p>Guarda in questa serie di Tutorial come funziona Coinbase per comprare, vendere e trasferire criptovalute.</p><p>Guarda anche come guadagnare con Coinbase Criprovalute con Coinbase Earn: te lo spiego in maniera semplice.</p><p>Coinbase è un ottimo modo facile per iniziare con le criptovalute quindi se ti va iscriviti a questo corso e segui le semplici lezioni.</p><p>All'interno del corso troverai anche un invito per guadagnare e ti insegnerò anche come generare il tuo invito personale.</p><p><br></p><p>Ecco gli argomenti che vedrai in questo corso su Coinbase:</p><p><br></p><ul><li><p>Introduzione: cosa è ed a cosa serve Coinbase?</p><p><br></p></li><li><p><strong>Come Ti Registri Gratis Passo Passo a Coinbase?</strong></p><p><br></p></li><li><p>Ecco I Documenti E Dati Che Ti Verranno Richiesti Al Momento Della Tua Registrazione:&nbsp;Come Devi Fare&nbsp;Passo Passo?</p><p><br></p></li><li><p><strong>Guarda La Panoramica delle Funzionalita Iniziali Di Coinbase...</strong></p><p><br></p></li><li><p>Cosa Vedrai Appena Entrato In Coinbase?</p><p><br></p></li><li><p><strong>Carta Di Credito Prepagata Visa Ecco Come Richiederla In&nbsp;Coinbase?</strong></p><p><br></p></li><li><p>PAC:&nbsp;Piano Di Accumulo E Portafoglio Crypto In Coinbase</p><p><br></p></li><li><p><strong>Nella Pratica Come Si Fa Con Gli&nbsp; Acquisti Programmati E Piani Di Accumulo In Coinbase?</strong></p><p><br></p></li><li><p>Acquisto Cripto Con Conti Corrente, IBAN, Bonifici o Carte Prepagate: Come Si Fa?</p><p><br></p></li><li><p><strong>Funzionalità Della Scheda Prezzi In Coibase: Cosa Ci Puoi Fare?</strong></p><p><br></p></li><li><p>Come Si Trasferiscono Criptovalute Da Coinbase Ad Altri Wallet Esterni?</p><p><br></p></li><li><p><strong>Come Si Ricevono Cryptovalute da altri wallet esterni al tuo Wallet Coinbase?</strong></p><p><br></p></li><li><p>Cassaforte Coinbase: Cosa è E Cosa Ci Puoi Fare?</p></li></ul><p><br></p><p>Ci vediamo dall'altra parte, iscriviti per non commettere gli errori che il 90% fa sempre quando inizia con Coinbase.</p><p><br></p><p>Ci vediamo dall'altra parte nella prima lezione!</p>
        </div>
        <div class="btn btn-text text-sm !text-primary font-bold !pl-0.5 flex items-center" @click="toggle">
            <span>Show {{ fold ? 'more' : 'less'}}</span>
            <IconArrow :class="`ml-2 w-2 color-primary ${fold ? 'rotate-90' : '-rotate-90'}`"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import IconArrow from '~/assets/svg/arrow.svg'

const fold = ref(true)
const toggle = () => {
    fold.value = !fold.value
}
</script>

<style lang="scss" scoped>
.section {
    @apply mt-8;
    &-content.fold {
        -webkit-mask-image: linear-gradient(#ffffff, #ffffff, rgba(255, 255, 255, 0));
    }
}
</style>