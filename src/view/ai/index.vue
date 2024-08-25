<template>
    <div class="arbitrage" data-v-e8010a80="">
        <div class="header" data-v-e8010a80="">
            <header-nav :backIconType="1" color="white"></header-nav>
            <div class="title" data-v-e8010a80="">
                <div class="fs-40 fc-ffffff ff_NunitoSemiBold" data-v-e8010a80="">{{ $t('key2') }}</div>
                <div class="fs-60 fc-ffffff ff_InterSemiBold" data-v-e8010a80=""> $ {{ info.trusteeship_amount }}</div>
            </div>
            <div class="order" data-v-e8010a80="">
                <div class="order_btn" data-v-e8010a80="">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" class="iconify iconify--feather icon_order" width="1em"
                        height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                        data-icon="feather:file-text" data-v-e8010a80="">
                        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <path d="M14 2v6h6"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                            <path d="M10 9H8"></path>
                        </g>
                    </svg>
                    <span class="fs-32 fc-353F52 ff_NunitoSemiBold" data-v-e8010a80=""
                        @click="go('/ai/record')">{{ $t('key3') }}</span>
                </div>
            </div>
        </div>
        <div class="account_info" data-v-e8010a80="">
            <div class="info_content" data-v-e8010a80="">
                <div class="info_items" data-v-e8010a80="">
                    <div class="info_item" data-v-e8010a80="">
                        <div class="fs-32 fc-353F52 ff_NunitoSemiBold" data-v-e8010a80="">{{ $t('key4') }}</div>
                        <div class="mt-24 fs-28 fc-5B616E ff_InterMedium" data-v-e8010a80="">{{ info.total_amount }} ETH
                        </div>
                    </div>
                    <div class="info_item" data-v-e8010a80="">
                        <div class="fs-32 fc-353F52 ff_NunitoSemiBold" data-v-e8010a80="">{{ $t('key5') }}</div>
                        <div class="mt-24 fs-28 fc-5B616E ff_InterMedium" data-v-e8010a80="">{{ info.day_amount }} ETH
                        </div>
                    </div>
                </div>
                <div class="intro_content" data-v-e8010a80="">
                    <div class="ff_NunitoSemiBold" data-v-e8010a80="" @click="go('/ai/intro')">
                        <div class="fs-32 fc-1652F0" data-v-e8010a80="">Ai{{ $t('key6') }}</div>
                        <div class="fs-32 fc-050F1A" data-v-e8010a80="">{{ $t('key7') }}</div>
                    </div>
                    <img src="../../assets/static/image/img_intro.e0184ea6.5acfef68.png" class="intro_img"
                        data-v-e8010a80="">
                </div>
            </div>
        </div>
        <div class="product_list" data-v-e8010a80="">
            <div class="pro_title ff_NunitoBold" data-v-e8010a80="">{{ $t('key8') }}</div>
            <div class="list_content" data-v-e8010a80="">
                <div class="pro_item" v-for="(item, index) in list" :key="index" data-v-e8010a80="">
                    <div class="item_name ff_NunitoSemiBold" data-v-e8010a80="">
                        <span class="days" data-v-e8010a80="">
                            <span data-v-e8010a80="">{{ item.cycle }}</span>
                        </span>
                        <span class="name" data-v-e8010a80="">{{ item.name }}</span>
                    </div>
                    <div class="item_value" data-v-e8010a80="">
                        <div class="value_item" data-v-e8010a80="">
                            <div class="fs-32 fc-353F52 ff_NunitoSemiBold" data-v-e8010a80="">{{ $t('key9') }}</div>
                            <div class="fc-5B616E mt-24 ff_InterMedium" data-v-e8010a80="">
                                ${{ item.low_amount }}&nbsp;-&nbsp;{{ item.high_amount }}
                            </div>
                        </div>
                        <div class="value_item" data-v-e8010a80="">
                            <div class="fs-32 fc-353F52 ff_NunitoSemiBold" data-v-e8010a80="">{{ $t('key10') }}</div>
                            <div class="fc-5B616E mt-24 ff_InterMedium" data-v-e8010a80="">{{ item.day_profit }} </div>
                        </div>
                    </div>
                    <div class="item_types" data-v-e8010a80="">
                        <div class="type_title fs-32 fc-353F52 ff_NunitoSemiBold" data-v-e8010a80="">{{ $t('key11') }}
                        </div>
                        <div class="types_action" data-v-e8010a80="">
                            <div class="types" data-v-e8010a80="">
                                <img v-for="(item2, index2) in item.coin_icon_list" :key="index2" :src="item2"
                                    class="coin_icon" data-v-e8010a80="">
                            </div>
                            <span class="actions" data-v-e8010a80="">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    @click="go('/ai/product', { product_id: item.product_id })" aria-hidden="true"
                                    role="img" class="iconify iconify--feather" width="1em" height="1em"
                                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                    data-icon="feather:arrow-right" data-v-e8010a80="">
                                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7l-7 7"></path>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="video_container" data-v-e8010a80="">
            <div class="video_content" data-v-e8010a80="">
                <div class="video_info" data-v-e8010a80="">
                    <div class="fs-32 fc-1652F0 ff_NunitoSemiBold" data-v-e8010a80="">Ai{{ $t('key12') }}</div>
                    <div class="tips fs-32 fc-050F1A" data-v-e8010a80="">{{ $t('key13') }}</div>
                </div>
                <div class="video_file" data-v-e8010a80="">
                    <iframe src="https://www.youtube-nocookie.com/embed/LLoKFgfeE0o" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="" data-v-e8010a80=""></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from '@/components/header-nav.vue'
import { findTrusteeshipInfo, getProductList } from '@/api/user'

export default {
    name: 'aiindex',
    props: {
    },
    components: {
        headerNav
    },
    data() {
        return {
            info: {},
            list: []
        }
    },
    mounted() {
        this.findTrusteeshipInfo()
        this.getProductList()
    },
    methods: {
        findTrusteeshipInfo() {
            findTrusteeshipInfo().then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.info = data.data
                }
            })
        },
        getProductList() {
            getProductList().then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.list = data.data
                }
            })
        },
        go(path, query) {
            this.$router.push({ path, query })
        }
    }
}
</script>

<style>
.arbitrage[data-v-e8010a80] {
    padding-bottom: .6rem;
    font-weight: 500;
    line-height: normal
}

.arbitrage .header[data-v-e8010a80] {
    padding-bottom: 2.02rem;
    background: #1652f0
}

.arbitrage .header .back[data-v-e8010a80] {
    padding: .32rem .4rem
}

.arbitrage .header .back .icon_back[data-v-e8010a80] {
    width: .4rem
}

.arbitrage .header .title[data-v-e8010a80] {
    margin-top: .16rem;
    text-align: center;
    margin-bottom: 0 !important
}

.arbitrage .header .title .ff_InterSemiBold[data-v-e8010a80] {
    margin-top: .06rem
}

.arbitrage .header .order[data-v-e8010a80] {
    text-align: center
}

.arbitrage .header .order .order_btn[data-v-e8010a80] {
    margin-top: .48rem;
    padding: 0 .56rem;
    display: inline-block;
    height: .88rem;
    line-height: .88rem;
    background: #f5f6f8;
    border-radius: .2rem
}

.arbitrage .header .order .order_btn .icon_order[data-v-e8010a80] {
    margin-right: .2rem;
    font-size: .32rem
}

.arbitrage .account_info[data-v-e8010a80] {
    position: relative;
    padding: 0 .32rem
}

.arbitrage .account_info .info_content[data-v-e8010a80] {
    padding: .4rem .32rem;
    position: absolute;
    top: -1.38rem;
    left: .32rem;
    right: .32rem;
    background: #fff;
    box-shadow: 6px 12px 20px #0000001a;
    border-radius: .15rem
}

.arbitrage .account_info .info_content .info_items[data-v-e8010a80] {
    padding-bottom: .44rem;
    border-bottom: 1px solid rgba(216, 216, 216, .5);
    display: flex;
    text-align: center
}

.arbitrage .account_info .info_content .info_items .info_item[data-v-e8010a80] {
    width: 50%
}

.arbitrage .account_info .info_content .intro_content[data-v-e8010a80] {
    margin-top: .42rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage .account_info .info_content .intro_content .intro_img[data-v-e8010a80] {
    width: 2.3rem
}

.arbitrage .product_list[data-v-e8010a80] {
    margin-top: 3.8rem;
    padding: 0 .32rem
}

.arbitrage .product_list .pro_title[data-v-e8010a80] {
    font-size: .4rem;
    color: #000
}

.arbitrage .product_list .list_content .pro_item[data-v-e8010a80] {
    margin-top: .4rem;
    background: #fff;
    box-shadow: 6px 12px 20px #0000001a;
    border-radius: .15rem
}

.arbitrage .product_list .list_content .pro_item .item_name[data-v-e8010a80] {
    padding: .32rem .4rem;
    border-bottom: 1px solid rgba(216, 216, 216, .5)
}

.arbitrage .product_list .list_content .pro_item .item_name .days[data-v-e8010a80] {
    display: inline-block;
    padding: 0 .24rem;
    height: .56rem;
    line-height: .56rem;
    background: linear-gradient(90deg, #318af9, #1652f0);
    box-shadow: 2px 2px 10px 4px #1652f040;
    border-radius: .1rem;
    color: #fff
}

.arbitrage .product_list .list_content .pro_item .item_name .name[data-v-e8010a80] {
    margin-left: .4rem;
    font-size: .4rem;
    color: #5f6775
}

.arbitrage .product_list .list_content .pro_item .item_value[data-v-e8010a80] {
    padding: .32rem 0;
    display: flex;
    text-align: center
}

.arbitrage .product_list .list_content .pro_item .item_value .value_item[data-v-e8010a80] {
    width: 50%
}

.arbitrage .product_list .list_content .pro_item .item_types[data-v-e8010a80] {
    margin-top: .16rem;
    padding: 0 .4rem .42rem .42rem
}

.arbitrage .product_list .list_content .pro_item .item_types .types_action[data-v-e8010a80] {
    margin-top: .1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage .product_list .list_content .pro_item .item_types .types_action .types[data-v-e8010a80] {
    display: flex;
    align-content: center;
    align-items: center
}

.arbitrage .product_list .list_content .pro_item .item_types .types_action .types .coin_icon[data-v-e8010a80] {
    margin-right: .24rem;
    width: .4rem;
    border-radius: 50%
}

.arbitrage .product_list .list_content .pro_item .item_types .types_action .actions[data-v-e8010a80] {
    color: #fff;
    background-color: #1652f0;
    font-size: .35rem;
    border-radius: 100%;
    padding: .1rem;
    width: .55rem;
    height: .55rem;
    display: flex
}

.arbitrage .video_container[data-v-e8010a80] {
    margin-top: .8rem;
    padding: 0 .32rem
}

.arbitrage .video_container .video_content[data-v-e8010a80] {
    padding: .32rem;
    border-radius: .2rem;
    border: 1px solid #d8d8d8
}

.arbitrage .video_container .video_content .video_info[data-v-e8010a80] {
    padding: .1rem .08 0 .08rem
}

.arbitrage .video_container .video_content .video_info .tips[data-v-e8010a80] {
    font-weight: 700;
    margin-top: .04rem
}

.arbitrage .video_container .video_content .video_file[data-v-e8010a80] {
    margin-top: .4rem
}

.arbitrage .video_container .video_content .video_file iframe[data-v-e8010a80] {
    border-radius: .1rem;
    width: 100%
}
</style>

