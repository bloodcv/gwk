<template>
    <div class="mechine_detail" data-v-4224d29a="">
        <header-nav :backIconType="2" :title="$t('key123')"></header-nav>
        <div class="banner" data-v-4224d29a="">
            <img src="../../assets/static/image/img_mechine_banner.805ee9d5.4c5f77ad.png" class="mechine_img" data-v-4224d29a="">
        </div>
        <div class="mechine_num" data-v-4224d29a="">
            <div class="m_info" data-v-4224d29a="">
                <div class="fs-40 fc-353F52 ff_NunitoSemiBold" data-v-4224d29a="">{{info.name}}</div>
                <div class="m_price" data-v-4224d29a="">
                    <span class="symbol" data-v-4224d29a="">$</span>
                    <span class="ff_NunitoSemiBold" data-v-4224d29a="">{{info.price}} USDT</span>
                    <div class="icon_star_wrapper" data-v-4224d29a="">
                        <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-4224d29a="">
                        <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-4224d29a="">
                        <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-4224d29a="">
                        <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-4224d29a="">
                        <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-4224d29a="">
                    </div>
                </div>
            </div>
        </div>
        <div class="mechine_intro" data-v-4224d29a="">
            <div class="title ff_NunitoSemiBold" data-v-4224d29a="">{{$t('key124')}}</div>
            <div class="intro_list" data-v-4224d29a="">
                <div class="intro_item" data-v-4224d29a="">
                    <div class="name" data-v-4224d29a="">{{$t('key125')}}</div>
                    <div class="value" data-v-4224d29a="">{{info.low_produce}}-{{info.high_produce}} ETH/Day </div>
                </div>
                <div class="intro_item" data-v-4224d29a="">
                    <div class="name" data-v-4224d29a="">{{$t('key126')}}</div>
                    <div class="value" data-v-4224d29a="">{{info.calc}} TH/s </div>
                </div>
                <div class="intro_item" data-v-4224d29a="">
                    <div class="name" data-v-4224d29a="">{{$t('key127')}}</div>
                    <div class="value" data-v-4224d29a="">{{info.power}}W</div>
                </div>
                <div class="intro_item" data-v-4224d29a="">
                    <div class="name" data-v-4224d29a="">{{$t('key128')}}</div>
                    <div class="value" data-v-4224d29a="">{{info.cycle}}</div>
                </div>
            </div>
        </div>
        <div class="choose_content" data-v-4224d29a="">
            <div class="title ff_NunitoSemiBold" data-v-4224d29a="">{{$t('key129')}}</div>
            <div class="choose_list" data-v-4224d29a="">
                <div class="choose_item" data-v-4224d29a="">
                    <img src="../../assets/static/image/icon_duigou_blue.54a44b6c.51b59555.svg" data-v-4224d29a="">
                    <span data-v-4224d29a="">{{$t('key130')}}</span>
                </div>
                <div class="choose_item" data-v-4224d29a="">
                    <img src="../../assets/static/image/icon_duigou_blue.54a44b6c.51b59555.svg" data-v-4224d29a="">
                    <span data-v-4224d29a="">{{$t('key131')}}</span>
                </div>
                <div class="choose_item" data-v-4224d29a="">
                    <img src="../../assets/static/image/icon_duigou_blue.54a44b6c.51b59555.svg" data-v-4224d29a="">
                    <span data-v-4224d29a="">{{$t('key132')}}</span>
                </div>
                <div class="choose_item" data-v-4224d29a="">
                    <img src="../../assets/static/image/icon_duigou_blue.54a44b6c.51b59555.svg" data-v-4224d29a="">
                    <span data-v-4224d29a="">{{$t('key133')}}</span>
                </div>
            </div>
        </div>
        <div class="footer" data-v-4224d29a="">
            <div class="submit" data-v-4224d29a="" @click="shouquanModal = true" v-if="userinfo.status == 0">
                <div class="left" data-v-4224d29a="">
                    <img src="../../assets/static/image/icon_card.e453cf50.62b1e602.svg" class="icon_card" data-v-4224d29a="">
                    <span class="ff_NunitoBold" data-v-4224d29a="">{{$t('key134')}}</span>
                </div>
                <div class="right" data-v-4224d29a="">
                    <div class="divide" data-v-4224d29a=""></div>
                    <span class="ff_NunitoSemiBold" data-v-4224d29a="">{{info.price}} USDT</span>
                </div>
            </div>
            <div class="submit" data-v-4224d29a="" @click="changeconfirmBuyModal(true)" v-if="userinfo.status == 1">
                <div class="left" data-v-4224d29a="">
                    <img src="../../assets/static/image/icon_card.e453cf50.62b1e602.svg" class="icon_card" data-v-4224d29a="">
                    <span class="ff_NunitoBold" data-v-4224d29a="">{{$t('key134')}}</span>
                </div>
                <div class="right" data-v-4224d29a="">
                    <div class="divide" data-v-4224d29a=""></div>
                    <span class="ff_NunitoSemiBold" data-v-4224d29a="">{{info.price}} USDT</span>
                </div>
            </div>
        </div>
        <div class="popup_content" data-v-4224d29a="" v-if="confirmBuyModal">
            <div class="van-overlay" data-v-4224d29a="" @click="changeconfirmBuyModal(false)"></div>
            <div class="ensure_popup van-popup van-popup--center" data-v-4224d29a="">
                <div class="ensure_content" data-v-4224d29a="">
                    <img src="../../assets/static/image/icon_ensure.e36db588.6325f86f.svg" class="icon_ensure" data-v-4224d29a="">
                    <div class="amount_info" data-v-4224d29a="">
                        <div class="fs-32 ff_InterMedium" data-v-4224d29a="">
                            <span class="fc-A5C639" data-v-4224d29a="">{{info.price}}</span>
                            <span class="fc-353F52" data-v-4224d29a=""> USDT </span>
                        </div>
                        <div class="mt-16 fs-40 fc-353F52 ff_NunitoSemiBold" data-v-4224d29a="">{{$t('key135')}}</div>
                    </div>
                    <div class="confirm ff_NunitoBold" data-v-4224d29a="" @click="leaseProduct">{{$t('key28')}}</div>
                    <div class="tips" data-v-4224d29a="">{{$t('key136')}}</div>
                </div>
            </div>
        </div>
        <approve v-model="shouquanModal" v-if="shouquanModal" :isShowToast="true"></approve>
    </div>
</template>

<script>
import headerNav from '@/components/header-nav.vue'
import { getMachineProductList, leaseProduct } from '@/api/user'
import approve from '@/components/approve.vue'

export default {
    name: 'mechine-buy',
    props: {
    },
    components: {
        headerNav,
        approve
    },
    data() {
        return {
            shouquanModal: false,
            confirmBuyModal: false,
            product_id: '',
            info: {}
        }
    },
    computed: {
        userinfo() {
            return this.$store.state.user.userinfo
        }
    },
    mounted() {
        this.product_id = this.$route.query.product_id
        this.getMachineProductList()
    },
    methods: {
        leaseProduct () {
            leaseProduct({ product_id: this.product_id }).then(res => {
                let data = res.data
                this.$toast(data.msg)
                if (data.code === 1) {
                    this.changeconfirmBuyModal(false)
                }
            })
        },
        getMachineProductList () {
            getMachineProductList({ product_id: this.product_id }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.info = data.data[0]
                }
            })
        },
        changeconfirmBuyModal (bool) {
            this.confirmBuyModal = bool
        }
    }
}
</script>

<style>
.mechine_detail[data-v-4224d29a] {
    position: relative;
    padding-bottom: 2.28rem;
    font-weight: 500
}

.mechine_detail .header[data-v-4224d29a] {
    padding: .28rem .4rem;
    position: relative;
    text-align: center
}

.mechine_detail .header .back[data-v-4224d29a] {
    position: absolute;
    top: 0;
    left: .4rem;
    bottom: 0;
    margin: auto;
    width: .4rem
}

.mechine_detail .banner[data-v-4224d29a] {
    margin-top: .36rem;
    padding: 0 .25rem
}

.mechine_detail .banner .mechine_img[data-v-4224d29a] {
    width: 100%;
    height: auto
}

.mechine_detail .mechine_num[data-v-4224d29a] {
    padding: 0 .36rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.mechine_detail .mechine_num .m_info .m_price[data-v-4224d29a] {
    margin-top: .06rem;
    display: flex;
    align-content: center;
    align-items: center;
    color: #5b616eb3
}

.mechine_detail .mechine_num .m_info .m_price .symbol[data-v-4224d29a] {
    font-weight: 600;
    font-size: .18rem;
    position: relative;
    top: -.08rem
}

.icon_star_wrapper[data-v-4224d29a] {
    margin-left: .32rem
}

.mechine_detail .mechine_num .m_info .m_price .icon_star[data-v-4224d29a] {
    height: .16rem
}

.mechine_detail .mechine_num .m_num[data-v-4224d29a] {
    width: 2.04rem;
    height: .88rem;
    background: #f5f6f8;
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center
}

.mechine_detail .mechine_num .m_num .action_item[data-v-4224d29a] {
    width: .48rem;
    height: .48rem;
    line-height: .48rem;
    background: #fff;
    border-radius: .08rem;
    color: #353f52;
    font-size: .4rem;
    text-align: center
}

.mechine_detail .mechine_num .m_num .action_item img[data-v-4224d29a] {
    width: .48rem
}

.mechine_detail .mechine_num .m_num .num_input input[data-v-4224d29a] {
    width: .6rem;
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    background: transparent;
    font-size: .32rem;
    color: #353f52
}

.mechine_detail .mechine_intro[data-v-4224d29a] {
    margin-top: .6rem;
    padding: 0 .36rem
}

.mechine_detail .mechine_intro .title[data-v-4224d29a] {
    font-size: .4rem;
    color: #353f52;
    margin: 0 !important
}

.mechine_detail .mechine_intro .intro_list .intro_item[data-v-4224d29a] {
    margin-top: .56rem;
    display: flex;
    justify-content: space-between;
    font-size: .32rem
}

.mechine_detail .mechine_intro .intro_list .intro_item .name[data-v-4224d29a] {
    color: #353f52
}

.mechine_detail .mechine_intro .intro_list .intro_item .value[data-v-4224d29a] {
    color: #5b616e
}

.mechine_detail .choose_content[data-v-4224d29a] {
    margin-top: .78rem;
    padding: 0 .36rem
}

.mechine_detail .choose_content .title[data-v-4224d29a] {
    font-size: .4rem;
    color: #353f52;
    margin: 0 !important
}

.mechine_detail .choose_content .choose_list .choose_item[data-v-4224d29a] {
    margin-top: .24rem;
    display: flex;
    align-content: center;
    align-items: center
}

.mechine_detail .choose_content .choose_list .choose_item img[data-v-4224d29a] {
    margin-right: .2rem;
    width: .32rem
}

.mechine_detail .footer[data-v-4224d29a] {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.32rem;
    background: #fff;
    padding: 0 !important
}

.mechine_detail .footer .submit[data-v-4224d29a] {
    margin: 0 auto;
    margin-top: .24rem;
    width: 6.08rem;
    height: 1.04rem;
    line-height: 1.04rem;
    background: #1652f0;
    border-radius: .2rem;
    color: #fff;
    font-size: .32rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center
}

.mechine_detail .footer .submit span[data-v-4224d29a] {
    padding: 0 .12rem
}

.mechine_detail .footer .submit .left[data-v-4224d29a] {
    display: flex;
    align-content: center;
    align-items: center;
    color: #fff
}

.mechine_detail .footer .submit .left .icon_card[data-v-4224d29a] {
    margin-right: .2rem;
    width: .56rem
}

.mechine_detail .footer .submit .right[data-v-4224d29a] {
    margin-left: .3rem;
    display: flex;
    align-content: center;
    align-items: center;
    color: #fff
}

.mechine_detail .footer .submit .right .divide[data-v-4224d29a] {
    margin-right: .2rem;
    width: 1px;
    height: .6rem;
    background: rgba(255, 255, 255, .5)
}

.mechine_detail .popup_content .ensure_popup[data-v-4224d29a] {
    width: 6.42rem;
    background: #fff;
    border-radius: .2rem;
    z-index: 2
}

.mechine_detail .popup_content .ensure_popup .ensure_content[data-v-4224d29a] {
    padding: .44rem;
    text-align: center
}

.mechine_detail .popup_content .ensure_popup .ensure_content .icon_ensure[data-v-4224d29a] {
    width: 1.26rem
}

.mechine_detail .popup_content .ensure_popup .ensure_content .amount_info[data-v-4224d29a] {
    margin-top: .56rem
}

.mechine_detail .popup_content .ensure_popup .ensure_content .confirm[data-v-4224d29a] {
    margin: 0 auto;
    margin-top: .72rem;
    width: 4.46rem;
    height: .92rem;
    line-height: .92rem;
    background: #1652f0;
    border-radius: .2rem;
    color: #fff;
    font-size: .32rem
}

.mechine_detail .popup_content .ensure_popup .ensure_content .tips[data-v-4224d29a] {
    margin-top: .4rem;
    font-size: .24rem;
    color: #5b616e80
}

.join-popup[data-v-4224d29a] {
    padding: .48rem .4rem .35rem;
    width: 6.86rem;
    box-sizing: border-box;
    border-radius: .2rem
}

.join-popup .join-close[data-v-4224d29a] {
    position: absolute;
    top: .32rem;
    right: .32rem
}

.join-popup .join-close svg[data-v-4224d29a] {
    width: .32rem;
    height: .32rem
}

.join-popup .popup-content[data-v-4224d29a] {
    text-align: center
}

.join-popup .popup-content .img-join[data-v-4224d29a] {
    width: 1.27rem;
    height: 1.27rem
}

.join-popup .popup-content .join-title[data-v-4224d29a] {
    margin-top: .67rem;
    padding: 0 .7rem;
    font-size: .32rem;
    color: #353f52;
    font-weight: 500
}

.join-popup .popup-content .submit-btn[data-v-4224d29a] {
    margin: 0 auto;
    margin-top: .87rem;
    width: 4.46rem;
    height: .92rem;
    line-height: .92rem;
    color: #fff;
    background: #1652f0;
    border-radius: .2rem;
    text-align: center;
    font-size: .32rem
}

.join-popup .popup-content .tips[data-v-4224d29a] {
    margin-top: .4rem;
    font-size: .24rem;
    color: #5b616e80
}
</style>

