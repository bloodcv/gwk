<template>
    <div class="question_answer" data-v-237811ae="">
        <header-nav :backIconType="2" title="Q&amp;A"></header-nav>
        <div class="qa-container" data-v-237811ae="">
            <div class="qa-item" data-v-237811ae="" v-for="(item, index) in list" :key="index">
                <div class="item-title" data-v-237811ae="" @click="changetabindex(index)">
                    <div data-v-237811ae="">{{item.title}}</div>
                    <img src="../../assets/static/image/icon_arrow_down.fca20a50.svg" :class="[tabindex === index ? 'active' : '']" data-v-237811ae="">
                </div>
                <div class="item-content" data-v-237811ae="" v-if="tabindex === index">
                    <p>{{item.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from '@/components/header-nav.vue'

export default {
    name: 'help',
    props: {
    },
    components: {
        headerNav
    },
    data() {
        return {
            tabindex: '',
            list: [{
                title: this.$t('key102'),
                content: this.$t('key103')
            }, {
                title: this.$t('key104'),
                content: this.$t('key105')
            }]
        }
    },
    mounted() {
    },
    methods: {
        changetabindex (index) {
            if (index === this.tabindex) this.tabindex = ''
            else this.tabindex = index
        }
    }
}
</script>

<style>
.header[data-v-237811ae] {
    position: relative;
    padding: .32rem .4rem;
    text-align: center
}

.header .back-btn[data-v-237811ae] {
    position: fixed;
    width: .32rem;
    opacity: 0;
    z-index: 99
}

.header .back[data-v-237811ae] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .4rem;
    margin: auto;
    width: .32rem;
    rotate: 180deg
}

[data-v-237811ae] .van-loading {
    text-align: center;
    margin-top: .5rem
}

.qa-container[data-v-237811ae] {
    margin-top: .4rem;
    padding: 0 .32rem
}

.qa-container .qa-item[data-v-237811ae] {
    margin-bottom: .32rem;
    background: #fff;
    box-shadow: 0 .04rem .4rem .01rem #00000008;
    border-radius: .2rem
}

.qa-container .qa-item .item-title[data-v-237811ae] {
    position: relative;
    padding: .29rem .32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .28rem;
    color: #353f52;
    font-family: NunitoSemiBold;
    word-break: break-all
}

.qa-container .qa-item .item-title img[data-v-237811ae] {
    margin-left: .32rem;
    width: .28rem;
    height: .28rem
}

.qa-container .qa-item .item-title img.active[data-v-237811ae] {
    rotate: 180deg
}

.qa-container .qa-item .item-title[data-v-237811ae]:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: .08rem;
    height: .41rem;
    background: linear-gradient(1turn, rgba(90, 71, 217, .09), #1652f0);
    border-radius: .04rem
}

.qa-container .qa-item .item-content[data-v-237811ae] {
    margin-top: .03rem;
    padding: 0 .32rem .32rem;
    color: #333;
    font-size: .24rem;
    font-family: var(--font-alt)
}
</style>

