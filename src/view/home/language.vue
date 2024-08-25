<template>
    <div class="navbar-layout" data-v-58aecc89="" data-v-6bc556e8="">
        <div class="app-overlay" data-v-58aecc89=""></div>
        <header-nav :backIconType="2" :title="$t('key106')"></header-nav>
        <div class="view-wrapper has-top-nav" data-v-58aecc89="">
            <div class="page-content-wrapper" data-v-58aecc89="">
                <div class="page-content is-relative" data-v-58aecc89="" style="padding: 16px;">
                    <div class="is-navbar-lg" data-v-58aecc89="">
                        <div data-v-6bc556e8="">
                            <div class="transparent-layer" data-v-6bc556e8="" v-for="(item, i) in languages" :key="i" @click="setlang(i)" :class="[i === lang ? 'active' : '']">
                                <div class="d-flex" data-v-6bc556e8="">
                                    <label class="lang-title" data-v-6bc556e8="">{{ item.name }}</label>
                                </div>
                                <div class="indicator" data-v-6bc556e8="" v-if="i === lang">
                                    <img src="../../assets/static/image/icon_duigou_blue.12ac9660.svg" alt="" data-v-6bc556e8="">
                                </div>
                            </div>
                        </div>
                        <div class="submit-container" data-v-6bc556e8="">
                            <div class="submit-btn" data-v-6bc556e8="" @click="changeLang">{{$t('key28')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { localRead, localSave } from '@/libs/util'
import headerNav from '@/components/header-nav.vue'

export default {
    name: 'language',
    props: {
    },
    components: {
        headerNav
    },
    data() {
        return {
            lang: '',
            languages: {
                'en': { name: 'English' },
                'cn': { name: '简体中文' },
                'zh-TW': { name: '繁體中文' },
                'fr': { name: 'Français' },
                'ja': { name: '日本' },
                'it': { name: 'Italiano' },
                'de': { name: 'Deutsch' },
                'sv': { name: 'Svenska' },
            },
            index: 0
        }
    },
    mounted() {
        this.lang = localRead('local')
        if (this.lang === 'zh-TW') {
            this.lang = 'en'
            this.changeLang(this.lang)
        }
    },
    methods: {
        setlang (lang) {
            this.lang = lang;
        },
        // 语言切换
        changeLang() {
            localSave('local', this.lang)
            this.$i18n.locale = this.lang;
            this.isshowlang = false;

            this.$toast(this.$t('key172'))
        },
    }
}
</script>

<style>
/*! _variables.scss | Vuero | Css ninja 2020-2021 */
.loading-wrapper[data-v-6bc556e8] {
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #00000050;
    left: 0;
    top: 0
}

.loading-wrapper .iconify[data-v-6bc556e8],
.loading-wrapper .data[data-v-6bc556e8] {
    color: var(--light-text)
}

.transparent-layer[data-v-6bc556e8] {
    padding: .24rem 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-bottom: 1px solid rgba(216, 216, 216, .5)
}

.transparent-layer .lang-title[data-v-6bc556e8] {
    font-size: .28rem
}

.transparent-layer .indicator img[data-v-6bc556e8] {
    width: .32rem
}

.transparent-layer .radio[data-v-6bc556e8] {
    width: 100%
}

.transparent-layer label[data-v-6bc556e8] {
    margin-bottom: 0;
    color: var(--text-color);
    font-size: 16px
}

.languages-boxes[data-v-6bc556e8] {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;
    justify-content: center
}

.languages-boxes .language-box[data-v-6bc556e8] {
    margin: 8px 8px 16px;
    width: calc(33.3% - 16px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}

.languages-boxes .language-box .language-option[data-v-6bc556e8] {
    position: relative
}

.languages-boxes .language-box .language-option input[data-v-6bc556e8] {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 3
}

.languages-boxes .language-box .language-option input:checked+.language-option-inner[data-v-6bc556e8] {
    border-color: var(--primary)
}

.languages-boxes .language-box .language-option input:checked+.language-option-inner .indicator[data-v-6bc556e8] {
    display: flex
}

.languages-boxes .language-box .language-option .language-option-inner[data-v-6bc556e8] {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 55px;
    border-radius: var(--radius-rounded);
    border: 1.6px solid var(--stroke);
    background: #1a1a1a;
    box-shadow: var(--light-box-shadow);
    transition: color .3s, background-color .3s, border-color .3s, height .3s, width .3s
}

.languages-boxes .language-box .language-option .language-option-inner img[data-v-6bc556e8] {
    display: block;
    width: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: var(--radius-rounded)
}

.languages-boxes .language-box .language-option .language-option-inner .indicator[data-v-6bc556e8] {
    position: absolute;
    top: -4px;
    right: -4px;
    height: 26px;
    width: 26px;
    border-radius: var(--radius-rounded);
    display: none;
    justify-content: center;
    align-items: center;
    background: #1652f0;
    border: 3px solid var(--background-grey)
}

.languages-boxes .language-box .language-option .language-option-inner .indicator svg[data-v-6bc556e8] {
    height: 10px;
    width: 10px;
    stroke-width: 3px;
    color: var(--dark-text)
}

.img-wrap>img[data-v-6bc556e8] {
    display: block;
    max-width: 280px;
    margin: 0 auto
}

[data-v-6bc556e8] .navbar {
    padding: 0px .34rem;
    min-height: 1.25rem;
    height: 0
}

[data-v-6bc556e8] .navbar .container {
    min-height: 1.25rem
}

[data-v-6bc556e8] .navbar-brand {
    min-height: 1.25rem;
    display: flex
}

.submit-container[data-v-6bc556e8] {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.32rem;
    background: #fff;
    padding: 0 .48rem;
    z-index: 2
}

.submit-container .submit-btn[data-v-6bc556e8] {
    margin-top: .24rem;
    height: 1.04rem;
    line-height: 1.04rem;
    background: #1652f0;
    border-radius: .14rem;
    color: #fff;
    font-size: .36rem;
    text-align: center
}
</style>

