<template>
    <div class="arbitrage_product" data-v-7c7a1ac9="">
        <header-nav :backIconType="2" :title="'AI' + $t('key167')"></header-nav>
        <div class="pro_top" data-v-7c7a1ac9="">
            <div data-v-7c7a1ac9="">
                <div class="fs-48 ff_NunitoBold" data-v-7c7a1ac9="">{{ $t('key19') }}</div>
                <div class="fs-32 fc-353F52 ff_NunitoSemiBold" data-v-7c7a1ac9="">{{ $t('key20') }}</div>
            </div>
            <img src="../../assets/static/image/img_arb.90ad3660.a2ba070d.png" class="top_img" data-v-7c7a1ac9="">
        </div>
        <div class="pro_detail" data-v-7c7a1ac9="">
            <div class="detail_content" data-v-7c7a1ac9="">
                <div class="pro_title fc-353F52" data-v-7c7a1ac9="">
                    <div class="pro_cycle ff_NunitoSemiBold" data-v-7c7a1ac9="">
                        <img src="../../assets/static/image/icon_save.acef7a70.e8323c19.svg" class="icon_save"
                            data-v-7c7a1ac9="">
                        <span data-v-7c7a1ac9="">{{ info.name }}</span>
                    </div>
                    <div class="fs-48 ff_NunitoBold" data-v-7c7a1ac9="">{{ info.cycle }}</div>
                </div>
                <div class="item_value" data-v-7c7a1ac9="">
                    <div class="value_item" data-v-7c7a1ac9="">
                        <div class="fs-32 fc-353F52 ff_NunitoSemiBold" data-v-7c7a1ac9="">{{ $t('key9') }}</div>
                        <div class="fc-5B616E mt-24 ff_InterMedium" data-v-7c7a1ac9="">
                            ${{ info.low_amount }}&nbsp;-&nbsp;{{ info.high_amount }}</div>
                    </div>
                    <div class="value_item" data-v-7c7a1ac9="">
                        <div class="fs-32 fc-353F52 ff_NunitoSemiBold" data-v-7c7a1ac9="">{{ $t('key10') }}</div>
                        <div class="fc-5B616E mt-24 ff_InterMedium" data-v-7c7a1ac9="">{{ info.day_profit }}</div>
                    </div>
                </div>
                <div class="item_types" data-v-7c7a1ac9="">
                    <div class="type_title fs-32 fc-353F52 ff_NunitoSemiBold" data-v-7c7a1ac9="">{{ $t('key11') }}</div>
                    <div class="types_action" data-v-7c7a1ac9="">
                        <div class="types" data-v-7c7a1ac9="">
                            <img v-for="(item2, index2) in info.coin_icon_list" :key="index2" :src="item2"
                                class="coin_icon" data-v-7c7a1ac9="">
                        </div>
                    </div>
                </div>
                <div class="hosting" data-v-7c7a1ac9="">
                    <div class="fc-353F52 ff_NunitoSemiBold" data-v-7c7a1ac9="">{{ $t('key21') }}</div>
                    <div class="input_content" data-v-7c7a1ac9="">
                        <div class="address" data-v-7c7a1ac9="" @click="shownumberKey = true">
                            <img src="../../assets/static/image/usdt.png" class="coin_icon" data-v-7c7a1ac9="">
                            <input type="text" :placeholder="$t('key9')" v-model="num" readonly=""
                                class="amount_input" data-v-7c7a1ac9="">
                            <span class="coin_sympol active" data-v-7c7a1ac9=""> USDT </span>
                        </div>
                    </div>
                </div>
                <div class="submit ff_NunitoBold" data-v-7c7a1ac9="" @click="shouquanModal = true" v-if="userinfo.status == 0">{{ $t('key22') }}</div>
                <div class="submit ff_NunitoBold" data-v-7c7a1ac9="" @click="changebuySuccessModal(true)" v-if="userinfo.status == 1">{{ $t('key22') }}</div>
            </div>
            <div class="tips_content" data-v-7c7a1ac9="">
                <div class="tips_item fc-5B616E ff_NunitoRegular" data-v-7c7a1ac9="">
                    <img src="../../assets/static/image/icon_duigou_blue.54a44b6c.51b59555.svg" class="icon_tips"
                        data-v-7c7a1ac9="">
                    <span data-v-7c7a1ac9="">{{ $t('key23') }}</span>
                </div>
                <div class="tips_item fc-5B616E ff_NunitoRegular" data-v-7c7a1ac9="">
                    <img src="../../assets/static/image/icon_duigou_blue.54a44b6c.51b59555.svg" class="icon_tips"
                        data-v-7c7a1ac9="">
                    <span data-v-7c7a1ac9="">{{ $t('key24') }}</span>
                </div>
                <div class="tips_item fc-5B616E ff_NunitoRegular" data-v-7c7a1ac9="">
                    <img src="../../assets/static/image/icon_duigou_blue.54a44b6c.51b59555.svg" class="icon_tips"
                        data-v-7c7a1ac9="">
                    <span data-v-7c7a1ac9="">{{ $t('key25') }}</span>
                </div>
                <div class="tips_item fc-5B616E ff_NunitoRegular" data-v-7c7a1ac9="">
                    <img src="../../assets/static/image/icon_duigou_blue.54a44b6c.51b59555.svg" class="icon_tips"
                        data-v-7c7a1ac9="">
                    <span data-v-7c7a1ac9="">{{ $t('key26') }}</span>
                </div>
            </div>
        </div>
        <!---->
        <!---->
        <div class="popup_content" data-v-7c7a1ac9="" v-if="buySuccessModal">
            <div class="van-overlay" data-v-7c7a1ac9="" @click="changebuySuccessModal(false)"></div>
            <div class="ensure_popup van-popup van-popup--center" data-v-7c7a1ac9="">
                <div class="ensure_content" data-v-7c7a1ac9="">
                    <img src="../../assets/static/image/icon_ensure.e36db588.6325f86f.svg" class="icon_ensure"
                        data-v-7c7a1ac9="">
                    <div class="amount_info" data-v-7c7a1ac9="">
                        <div class="fs-32 ff_InterMedium" data-v-7c7a1ac9="">
                            <span class="fc-A5C639" data-v-7c7a1ac9="">{{ num }}</span>
                            <span class="fc-353F52" data-v-7c7a1ac9=""> USDT </span>
                        </div>
                        <div class="mt-16 fs-40 fc-353F52 ff_NunitoSemiBold" data-v-7c7a1ac9="">{{ $t('key27') }}
                        </div>
                    </div>
                    <div class="confirm ff_NunitoBold" data-v-7c7a1ac9="" @click="trusteeshipProduct">{{ $t('key28') }}</div>
                    <div class="tips" data-v-7c7a1ac9="">{{ $t('key136') }}</div>
                </div>
            </div>
        </div>
        <van-number-keyboard :show="shownumberKey" @blur="shownumberKey = false" @input="onInput" @delete="onDelete">    
        </van-number-keyboard>
        <approve v-model="shouquanModal" v-if="shouquanModal" :isShowToast="true"></approve>
    </div>
</template>

<script>
import headerNav from '@/components/header-nav.vue'
import { getProductList, trusteeshipProduct } from '@/api/user'
import approve from '@/components/approve.vue'

export default {
    name: 'product',
    props: {
    },
    components: {
        headerNav,
        approve
    },
    data() {
        return {
            shouquanModal: false,
            buySuccessModal: false,
            shownumberKey: false,
            num: '',
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
        this.getProductList()
    },
    methods: {
        trusteeshipProduct() {
            if (!this.num) return this.$toast(this.$t('key30'))
            trusteeshipProduct({
                product_id: this.product_id,
                amount: this.num
            }).then(res => {
                let data = res.data
                this.$toast(data.msg)
                if (data.code === 1) {
                    this.changebuySuccessModal(false)
                    this.getProductList()
                    this.num = ''
                }
            })
        },
        getProductList() {
            getProductList({ product_id: this.product_id }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.info = data.data[0]
                }
            })
        },
        changebuySuccessModal(bool) {
            if (!this.num) return this.$toast(this.$t('key30'))
            this.buySuccessModal = bool
        },
        onInput(value) {
            this.num += value
        },
        onDelete() {
            this.num = this.num.substring(0, this.num.length - 1)
        }
    }
}
</script>

<style>
.arbitrage_product[data-v-7c7a1ac9] {
    padding-bottom: .9rem;
    font-weight: 500
}

.arbitrage_product .header[data-v-7c7a1ac9] {
    position: relative;
    padding: .27rem .44rem;
    text-align: center
}

.arbitrage_product .header .back[data-v-7c7a1ac9] {
    position: absolute;
    top: 0;
    left: .44rem;
    bottom: 0;
    margin: auto;
    width: .4rem
}

.arbitrage_product .pro_top[data-v-7c7a1ac9] {
    margin-top: .56rem;
    padding: 0 .32rem 0 .48rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage_product .pro_top .ff_NunitoSemiBold[data-v-7c7a1ac9] {
    margin-top: .04rem
}

.arbitrage_product .pro_top .top_img[data-v-7c7a1ac9] {
    width: 2.47rem
}

.arbitrage_product .pro_detail[data-v-7c7a1ac9] {
    padding: 0 .32rem
}

.arbitrage_product .pro_detail .detail_content[data-v-7c7a1ac9] {
    padding: .54rem .4rem .64rem;
    background: #fff;
    box-shadow: 6px 12px 20px #0000001a;
    border-radius: .3rem .3rem 0 0
}

.arbitrage_product .pro_detail .detail_content .pro_title[data-v-7c7a1ac9] {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage_product .pro_detail .detail_content .pro_title .pro_cycle[data-v-7c7a1ac9] {
    display: flex;
    align-content: center;
    align-items: center;
    font-size: .36rem;
    color: #353f52
}

.arbitrage_product .pro_detail .detail_content .pro_title .pro_cycle .icon_save[data-v-7c7a1ac9] {
    margin-right: .2rem;
    width: .48rem
}

.arbitrage_product .pro_detail .detail_content .item_value[data-v-7c7a1ac9] {
    margin-top: .5rem;
    display: flex;
    text-align: center
}

.arbitrage_product .pro_detail .detail_content .item_value .value_item[data-v-7c7a1ac9] {
    width: 50%
}

.arbitrage_product .pro_detail .detail_content .item_types[data-v-7c7a1ac9] {
    margin-top: .4rem;
    padding-bottom: .44rem;
    border-bottom: 1px solid rgba(216, 216, 216, .5)
}

.arbitrage_product .pro_detail .detail_content .item_types .types_action[data-v-7c7a1ac9] {
    margin-top: .24rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage_product .pro_detail .detail_content .item_types .types_action .types[data-v-7c7a1ac9] {
    display: flex;
    align-content: center;
    align-items: center
}

.arbitrage_product .pro_detail .detail_content .item_types .types_action .types .coin_icon[data-v-7c7a1ac9] {
    margin-right: .24rem;
    width: .4rem;
    border-radius: 50%
}

.arbitrage_product .pro_detail .detail_content .hosting[data-v-7c7a1ac9] {
    margin-top: .56rem;
    padding: 0 .2rem
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address[data-v-7c7a1ac9] {
    margin-top: .24rem;
    position: relative;
    height: .94rem;
    line-height: .94rem;
    background: #f3f4f6;
    border-radius: .2rem
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address input[data-v-7c7a1ac9] {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: .2rem;
    color: #353f52;
    caret-color: #1652f0
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address input[data-v-7c7a1ac9]:focus-visible {
    border: none;
    outline: none
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address input[data-v-7c7a1ac9]:focus {
    border: 1px solid #1652f0
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address input[data-v-7c7a1ac9]::-moz-placeholder {
    color: #5f67754d
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address input[data-v-7c7a1ac9]:-ms-input-placeholder {
    color: #5f67754d
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address input[data-v-7c7a1ac9]::placeholder {
    color: #5f67754d
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address input.address_input[data-v-7c7a1ac9] {
    padding: 0 .96rem 0 .32rem
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address input.amount_input[data-v-7c7a1ac9] {
    padding: 0 1.96rem 0 .88rem;
    font-weight: 500
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address .coin_icon[data-v-7c7a1ac9] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .32rem;
    margin: auto;
    width: .32rem;
    border-radius: 50%
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address .coin_sympol[data-v-7c7a1ac9] {
    position: absolute;
    top: 0;
    bottom: 0;
    right: .32rem;
    margin: auto;
    color: #5f67754d
}

.arbitrage_product .pro_detail .detail_content .hosting .input_content .address .coin_sympol.active[data-v-7c7a1ac9] {
    color: #353f52
}

.arbitrage_product .pro_detail .detail_content .submit[data-v-7c7a1ac9] {
    margin: 0 auto;
    margin-top: .64rem;
    width: 4.46rem;
    height: .92rem;
    line-height: .92rem;
    text-align: center;
    color: #fff;
    background: #1652f0;
    border-radius: .2rem;
    font-size: .32rem
}

.arbitrage_product .pro_detail .tips_content[data-v-7c7a1ac9] {
    padding: .44rem;
    background: #f5f6f8;
    box-shadow: 6px 12px 20px #0000001a;
    border-radius: 0 0 .3rem .3rem
}

.arbitrage_product .pro_detail .tips_content .tips_item[data-v-7c7a1ac9] {
    margin-bottom: .08rem;
    display: flex;
    align-content: center;
    align-items: center
}

.arbitrage_product .pro_detail .tips_content .tips_item .icon_tips[data-v-7c7a1ac9] {
    margin-right: .2rem;
    width: .26rem
}

.arbitrage_product .popup_content .ensure_popup[data-v-7c7a1ac9] {
    width: 6.42rem;
    background: #fff;
    border-radius: .2rem;
    z-index: 2
}

.arbitrage_product .popup_content .ensure_popup .ensure_content[data-v-7c7a1ac9] {
    padding: .44rem;
    text-align: center
}

.arbitrage_product .popup_content .ensure_popup .ensure_content .icon_ensure[data-v-7c7a1ac9] {
    width: 1.26rem
}

.arbitrage_product .popup_content .ensure_popup .ensure_content .amount_info[data-v-7c7a1ac9] {
    margin-top: .56rem
}

.arbitrage_product .popup_content .ensure_popup .ensure_content .confirm[data-v-7c7a1ac9] {
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

.arbitrage_product .popup_content .ensure_popup .ensure_content .tips[data-v-7c7a1ac9] {
    margin-top: .4rem;
    font-size: .24rem;
    color: #5b616e80
}

.join-popup[data-v-7c7a1ac9] {
    padding: .48rem .4rem .35rem;
    width: 6.86rem;
    box-sizing: border-box;
    border-radius: .2rem
}

.join-popup .join-close[data-v-7c7a1ac9] {
    position: absolute;
    top: .32rem;
    right: .32rem
}

.join-popup .join-close svg[data-v-7c7a1ac9] {
    width: .32rem;
    height: .32rem
}

.join-popup .popup-content[data-v-7c7a1ac9] {
    text-align: center
}

.join-popup .popup-content .img-join[data-v-7c7a1ac9] {
    width: 1.27rem;
    height: 1.27rem
}

.join-popup .popup-content .join-title[data-v-7c7a1ac9] {
    margin-top: .67rem;
    padding: 0 .7rem;
    font-size: .32rem;
    color: #353f52;
    font-weight: 500
}

.join-popup .popup-content .submit-btn[data-v-7c7a1ac9] {
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

.join-popup .popup-content .tips[data-v-7c7a1ac9] {
    margin-top: .4rem;
    font-size: .24rem;
    color: #5b616e80
}
</style>

