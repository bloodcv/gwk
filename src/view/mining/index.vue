<template>
    <div class="mining" data-v-2d0a3040="">
        <div class="header_content" data-v-2d0a3040="">
            <img src="../../assets/static/image/img_mining_top.26710d07.8d50d263.png" class="bg_cover" data-v-2d0a3040="">
            <div class="header_title" data-v-2d0a3040="">
                <span data-v-2d0a3040="">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="back" aria-hidden="true" role="img" class="iconify iconify--feather back" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="feather:arrow-left" data-v-2d0a3040="">
                        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 12H5"></path>
                            <path d="M12 19l-7-7l7-7"></path>
                        </g>
                    </svg>
                </span>
                <span class="fs-36 ff_NunitoSemiBold" data-v-2d0a3040="">{{$t('key112')}}</span>
            </div>
            <div class="header_actions" data-v-2d0a3040="">
                <img src="../../assets/static/image/icon_mining_tip.ae051b2f.9b8a39b7.svg" data-v-2d0a3040="" @click="go('/mining/intro')">
                <img src="../../assets/static/image/icon_mining_list.37a747d9.1c5f0090.svg" data-v-2d0a3040="" @click="go('/mining/record')">
            </div>
        </div>
        <div class="mechine_list" data-v-2d0a3040="">
            <div class="list_title ff_NunitoSemiBold fs-40" data-v-2d0a3040="">{{$t('key113')}}</div>
            <div class="list_content" data-v-2d0a3040="">
                <div class="list_wrapper" data-v-2d0a3040="" :style="`width: ${4 * list.length}rem;`">
                    
                    <div class="list_item" data-v-2d0a3040="" v-for="(item, index) in list" :key="index">
                        <img src="../../assets/static/image/img_mechine.5ccc7427.f6157f9a.png" class="mechine_icon" data-v-2d0a3040="">
                        <!-- <img :src="item.image" class="mechine_icon"
                        data-v-2d0a3040=""> -->
                        <div class="time_days ff_NunitoSemiBold" data-v-2d0a3040="">{{item.cycle}}</div>
                        <div class="mechine_name fc-353F52 ff_NunitoSemiBold" data-v-2d0a3040="">{{item.name}}
                            <br data-v-2d0a3040="">
                            <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-2d0a3040="">
                            <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-2d0a3040="">
                            <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-2d0a3040="">
                            <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-2d0a3040="">
                            <img src="../../assets/static/image/icon_star.ab962301.78aae29a.svg" class="icon_star" data-v-2d0a3040="">
                        </div>
                        <div class="rent_content" data-v-2d0a3040="">
                            <div class="rent_info ff_NunitoSemiBold" data-v-2d0a3040="">
                                <div class="fc-353F52" data-v-2d0a3040="">{{$t('key114')}}</div>
                                <div class="rent_num" data-v-2d0a3040="">
                                    <span class="symbol" data-v-2d0a3040="">$</span>{{item.price}} USDT
                                </div>
                            </div>
                            <div class="rent_go" data-v-2d0a3040="">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="go('/mining/mechine-buy', { product_id: item.product_id })" aria-hidden="true" role="img" class="iconify iconify--feather" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="feather:arrow-right" data-v-2d0a3040="">
                                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7l-7 7"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="video_container" data-v-2d0a3040="">
            <div class="video_content" data-v-2d0a3040="">
                <div class="video_info" data-v-2d0a3040="">
                    <div class="fs-32 fc-1652F0 ff_NunitoSemiBold" data-v-2d0a3040="">{{$t('key115')}}</div>
                    <div class="tips fs-32 fc-050F1A" data-v-2d0a3040="">{{$t('key116')}}</div>
                </div>
                <div class="video_file" data-v-2d0a3040="">
                    <iframe src="https://www.youtube.com/embed/fAfrBL5QRr0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" data-v-2d0a3040=""></iframe>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { getMachineProductList } from '@/api/user'

export default {
    name: 'miningindex',
    props: {
    },
    components: {
    },
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.getMachineProductList()
    },
    methods: {
        getMachineProductList () {
            getMachineProductList().then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.list = data.data
                }
            })
        },
        go (path, query) {
            this.$router.push({ path, query })
        },
        back () {
            this.$router.back()
        }
    }
}
</script>

<style>
.mining[data-v-2d0a3040] {
    padding-bottom: .8rem;
    font-weight: 500
}

.mining .header_content[data-v-2d0a3040] {
    position: relative
}

.mining .header_content .bg_cover[data-v-2d0a3040] {
    position: absolute;
    top: 0;
    left: 0;
    height: 3.1rem;
    width: auto
}

.mining .header_content .header_title[data-v-2d0a3040] {
    padding-top: .28rem;
    position: relative;
    text-align: center;
    color: #fff
}

.mining .header_content .header_title .back[data-v-2d0a3040] {
    font-size: .4rem;
    position: absolute;
    left: .4rem;
    top: .28rem;
    bottom: 0;
    margin: auto
}

.mining .header_content .header_actions[data-v-2d0a3040] {
    position: absolute;
    right: .32rem;
    top: .48rem;
    display: flex;
    flex-direction: column
}

.mining .header_content .header_actions img[data-v-2d0a3040] {
    width: .9rem
}

.mining .header_content .header_actions img[data-v-2d0a3040]:last-child {
    margin-top: .24rem
}

.mining .mechine_list[data-v-2d0a3040] {
    margin-top: 3rem
}

.mining .mechine_list .list_title[data-v-2d0a3040] {
    padding: 0 .32rem;
    color: #000
}

.mining .mechine_list .list_content[data-v-2d0a3040] {
    margin-top: .56rem;
    padding: 0 .32rem .4rem;
    overflow: auto
}

.mining .mechine_list .list_content[data-v-2d0a3040]::-webkit-scrollbar {
    display: none
}

.mining .mechine_list .list_content .list_wrapper[data-v-2d0a3040] {
    display: flex;
    flex-wrap: nowrap
}

.mining .mechine_list .list_content .list_item[data-v-2d0a3040] {
    margin-top: .68rem;
    margin-right: .24rem;
    width: 3.76rem;
    background: #fff;
    box-shadow: .06rem .12rem .2rem #0000001a;
    border-radius: .15rem
}

.mining .mechine_list .list_content .list_item .mechine_icon[data-v-2d0a3040] {
    position: relative;
    top: -.68rem;
    width: 3.76rem
}

.mining .mechine_list .list_content .list_item .time_days[data-v-2d0a3040] {
    position: relative;
    top: -.52rem;
    left: .32rem;
    display: inline-block;
    height: .56rem;
    line-height: .56rem;
    padding: 0 .24rem;
    background: linear-gradient(90deg, #318af9, #1652f0);
    box-shadow: 2px 2px 10px 4px #1652f040;
    border-radius: .1rem;
    color: #fff
}

.mining .mechine_list .list_content .list_item .mechine_name[data-v-2d0a3040] {
    position: relative;
    top: -.24rem;
    padding: 0 .32rem
}

.mining .mechine_list .list_content .list_item .mechine_name .icon_star[data-v-2d0a3040] {
    margin-top: .08rem;
    height: .16rem
}

.mining .mechine_list .list_content .list_item .rent_content[data-v-2d0a3040] {
    margin-top: .24rem;
    padding: 0 .32rem .5rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.mining .mechine_list .list_content .list_item .rent_content .rent_info .rent_num[data-v-2d0a3040] {
    margin-top: .12rem;
    color: #5b616eb3
}

.mining .mechine_list .list_content .list_item .rent_content .rent_info .rent_num .symbol[data-v-2d0a3040] {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
    font-weight: 600;
    position: relative;
    top: -.08rem;
    font-size: .18rem
}

.mining .mechine_list .list_content .list_item .rent_content .rent_go[data-v-2d0a3040] {
    color: #fff;
    background-color: #1652f0;
    font-size: .35rem;
    border-radius: 100%;
    padding: .1rem;
    width: .55rem;
    height: .55rem;
    display: flex
}

.mining .video_container[data-v-2d0a3040] {
    margin-top: .4rem;
    padding: 0 .32rem
}

.mining .video_container .video_content[data-v-2d0a3040] {
    padding: .32rem;
    border-radius: .2rem;
    border: 1px solid #d8d8d8
}

.mining .video_container .video_content .video_info[data-v-2d0a3040] {
    padding: .1rem .08 0 .08rem
}

.mining .video_container .video_content .video_info .tips[data-v-2d0a3040] {
    font-weight: 700;
    margin-top: .04rem
}

.mining .video_container .video_content .video_file[data-v-2d0a3040] {
    margin-top: .4rem
}

.mining .video_container .video_content .video_file iframe[data-v-2d0a3040] {
    border-radius: .1rem;
    width: 100%
}
</style>

