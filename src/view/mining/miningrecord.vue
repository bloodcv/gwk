<template>
    <div class="arbitrage_record" data-v-8178a22e="">
        <header-nav :backIconType="2" :title="$t('key73')"></header-nav>
        <div class="exchange-container" data-v-8178a22e="">
            <div class="base-content" data-v-8178a22e="">
                <div class="base-title" data-v-8178a22e="">
                    <div class="left-line" data-v-8178a22e=""></div> {{$t('key137')}}
                </div>
                <div class="base-value" data-v-8178a22e="">
                    <div class="value-item" data-v-8178a22e="">
                        <div class="value-title" data-v-8178a22e="">{{$t('key71')}}</div>
                        <div class="value ff_InterRegular" data-v-8178a22e="">{{info.total_produce}} ETH </div>
                    </div>
                    <div class="value-item" data-v-8178a22e="">
                        <div class="value-title" data-v-8178a22e="">{{$t('key138')}}</div>
                        <div class="value ff_InterRegular" data-v-8178a22e="">{{info.eth_balance}} ETH </div>
                    </div>
                </div>
            </div>
            <div class="exchange-content" data-v-8178a22e="">
                <div class="exchange-title ff_NunitoSemiBold" data-v-8178a22e="">{{$t('key139')}}</div>
                <div class="input-content" data-v-8178a22e="">
                    <input type="text" onkeyup="if(isNaN(value))execCommand('undo')" onafterpaste="if(isNaN(value))execCommand('undo')" v-model="num" placeholder="ETH" data-v-8178a22e="">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAGyklEQVRYCe1Ya4xTVRA+5962yz7aLq99AfIQWcMCRpEEEyOIIQqSwNKtirzUGERQA2rUQNT1lw8I/JAowX+YDaylCAEBMaJEs2oQlKcSURL3WRTctru82nvHb7q93Xt7292uoD8MJ+meOTPfzJkzcx5zV4gb7X8eAXk91jdkUWRg/JJSoVK8XJfqFYeut8QKPC2hD2Xntdr/Rw6WLqRCebljBun6bCHoQSLRP6MjUp5RJO1UpLJjSZW7obZW6hlxPTD75ODoZykv0hx9RkpaRUQDerBrE0kpjkshX2kLevfYhD0wcnawxN8+Hev/ANEabrEnRUSS/I6kaJZStkqiPGAqgBkB3iRBpJrxmPCAI9+1uLmuoMnMz0bn5GCpL/wcCbEuNZmUOhS3KkJsHqB4vjgZkFczTcB7U+sUsxDt5SRoUgojZZt0iOpQvffbFC8L0auDpXPD62F8haGfiIDT8XxzfdFRg9dbDwdleU3Yj0WuQXRvYjzSfUWqwtcW8H7Skz6CkL2V1YSXWZyTyltPT/BO74tzbB2pp7Zg8UeqS5mIBR5kHuzm6RptKX04Oo7H2VrWCJbVRKfquv4ZTDlYGZv8qVCweFM2Q7nyJy4hZ+P58BZ46EvaPetU5J1NAe+FTDYyRnBqLTl00jcaziEfa/viXFlN5PESX/u2Cl/n7emTHt4kYy7FuxD8IyxDykfGdPF6Os4YZ3Tw1PHwk9CsTICkbFg23vuyodBbz4vD/biBI6SJ2Odl/ujYdJ2mgLzkUPOqkb6LSdnSUl/7qHQcj20O8gRIaPeKFPliXy7YL2tlHBHfz8YRnf6kafuGzL84lMfm1hLI/x37Zj3zcIhcJORrZrlB2xz86UTnFGiUMQCbe9e5gOcbA5xr7+7nXQwnf2Q8Tu6w+OXYvhGPUXG6vruf5x3w2rv4VF3lJ1c6JnEALEzS5qTGRHUpOknwydZJrJA4hekyYxy9HBa4vAtxUhMsRKjqUjT8MfppfKIN3Jk6GcEduxv8BYB6LuiReyH71JBzb3MQaZnBAhi6ihXuDfHA1EgXbyAug1KzmGRW0oqA3alDHoqOAea0GScVZSe2wQLm4aHmuS0OWlJcW0s8Hs5grP4Ur5BpcyMp38S4CRftn334nQO2bkyV+1ezLaadqtJg4o0y0QnSEsH3TncOhmsJHgy2pIN5fC7oWYeOf31uoe12lclaQeigjOjY9wgO8RtuaZYIOuOivFtKrd30v0cFAlLDrvyDZ8CmSBxO82yWCEodT7vRsMkN0tzjXpvCewbXgu3EmXEWWgpdFcru1qA7aOEnBySpMHGeyF7gWhzkKlh0hhNqULKFmwW4hLdjpagFrYcgOVfmDlBN6ouGPdI5rHFroWXrVD5B7r/aw0WsiANukTHPkuJEiY76jgWY37ZhE3xBOVcxXfjU319KPAWJVKY4IDqinTd3j+373uIgA/H8HEoqDC3xdUzoVu6iyOWYh8LhN4MP+qyKwlSR6rhsP9Wpjl023jOW32FDz+jjFJ9p0JjcmDvFsqSYuTi9O3DF3NeFSFzax1JoEOe2FIWG+sP344FvwAU7mB97VK+rQ0F3tRmXTtemM4yxLvEwJLeLdO002EZvi6DidHaDSCytWEIFBtjoURqdUQTNRPQShwpOzslUFBj4bH2FP3I3gjGJ5bB1LBTIP5uOtTnYsrWgEa9I0kkq186HV6Yr8bg1WPw9UjsXZBN+R4vKimyXMON6appGa1Jyqbybok0Etpy9Vfgit8YFncDlqSLnHYpQJ7cF3SftSCH8flL5Lssk64lX5gsv14k2MAYBOXWP4pmQyU5GB1kJBt6HgaVdBsRZR6EyqXmz5zyPr7WV+qPTSNPx5na9WooqZ2X7NrGl2JhcGeh5AfQRHvNBiHXo+zPVdQY+154/X0nX8Oh1OYcMrc3mHNvM6mDLJnnRme+ajfi3JSe/I3Y5dog3dq7OmHFciKC0Wil0uReH1ssypHZPb9V61hQbxst80SoS2i6OYhcPlZ4UAZeDVjXWF+d0MMp94fs1orehf5thF87tGqR4HsU3dYfBy9T36iArVcyLDNKu6NtwW01JGcHHOyLRgDjsUFT6yiGczXeJ/DaU366YHi4X0jGSKP4A5LOxR25J6YGQ/Pk63r06l0+JnBxk4/yt8vPxyFJE8lXcXSXmCbtprpbxD48sDZE/LBT1pVDAfSALxMbOasyGTDISj3sksgLRm4/IVGbDpfiSyyn6WihyY1vAU4/UYhG5tz47aDaNA1MZ18Qs/IttNCLL1U85Zr+CSHFV0opn8we1UOy+XteTee4b9I0I/FcR+Bu07Yt7L6kt/gAAAABJRU5ErkJggg==" class="icon-exchange" data-v-8178a22e="">
                    <input type="text" readonly="" :value="Number(num) * info.rate" placeholder="USDT" data-v-8178a22e="">
                </div>
            </div>
            <div class="submit-content" data-v-8178a22e="">
                <div class="submit-btn" data-v-8178a22e="" @click="exchangeCoin">{{$t('key139')}}</div>
            </div>
        </div>
        <div class="list-container" data-v-8178a22e="">
            <div class="list-title" data-v-8178a22e="">{{$t('key73')}}</div>
            <div class="switch_container" data-v-8178a22e="">
                <tab :title="[$t('key139'), $t('key140'), $t('key141')]" v-model="tabindex" width="6.58rem"></tab>
            </div>
            <van-pull-refresh v-model="loading" @refresh="getRecordListXiala" pulling-text="Pull down to refresh.." loosing-text="Release to refresh..." loading-text="loading...">
                <van-list v-model="loading" :finished="finished" loading-text="loading..." @load="getRecordList">
                    <div class="record_list" data-v-8178a22e="" style="padding-bottom: 20px;padding-left: 0;padding-right: 0;">
                        <div class="record_item" data-v-8178a22e="" v-for="(item, index) in List" :key="index">
                            <div class="pro_info" data-v-8178a22e="">
                                <div class="pro_cycle ff_NunitoSemiBold" data-v-8178a22e="">
                                    <img :src="item.icon" class="icon_save" data-v-8178a22e="">
                                    <span class="fs-32" data-v-8178a22e="">
                                        <span class="yred" data-v-8178a22e="">{{item.amount}}</span> {{item.coin}}
                                    </span>
                                </div>
                            </div>
                            <div class="order_info" data-v-8178a22e="">
                                <div data-v-8178a22e="">{{item.create_time}}</div>
                                <div class="order_status" data-v-8178a22e="">
                                    <button class="button_status" data-v-8178a22e="" v-if="item.type === 7">{{$t('key74')}}</button>
                                    <button class="button_status" data-v-8178a22e="" v-if="item.type === 8">{{$t('key75')}}</button>
                                    <button class="button_status" data-v-8178a22e="" v-if="item.type === 10">{{$t('key76')}}</button>
                                    <button class="button_status" data-v-8178a22e="" v-if="item.type === 11">{{$t('key77')}}</button>
                                    <button class="button_status" data-v-8178a22e="" v-if="item.type === 12">{{$t('key78')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-list>
                <no-data v-if="List.length <= 0"></no-data>
            </van-pull-refresh>

        </div>
        <!---->
    </div>
</template>

<script>
import headerNav from '@/components/header-nav.vue'
import tab from '@/components/tab.vue'
import noData from '@/components/no-data.vue'
import { getRecordList, findAccountAndRate, exchangeCoin } from '@/api/user'

export default {
    name: 'miningrecord',
    props: {
    },
    components: {
        tab,
        noData,
        headerNav
    },
    data() {
        return {
            page: 1,
            page_size: 20,
            loading: false,
            finished: false,
            List: [],
            info: {},
            tabindex: 0,
            type: 1,
            num: ''
        }
    },
    watch: {
        tabindex () {
            this.type = this.tabindex + 1
            this.getRecordListXiala()
        }
    },
    mounted() {
        this.findAccountAndRate()
        this.getRecordList()
    },
    methods: {
        exchangeCoin () {
            if (!this.num) return this.$toast(this.$t('key30'))
            exchangeCoin({
                coin: 'ETH',
                amount: this.num
            }).then(res => {
                let data = res.data
                this.$toast(data.msg)
                if (data.code === 1) {
                    this.num = ''
                    this.findAccountAndRate()
                    this.getRecordListXiala()
                }
            })
        },
        findAccountAndRate () {
            findAccountAndRate().then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.info = data.data
                }
            })
        },
        reset () {
            this.page = 1
            this.loading = false
            this.finished = false
            this.List = []
        },
        getRecordListXiala () {
            this.reset()
            this.getRecordList()
        },
        getRecordList () {
            this.loading = true
            getRecordList({ page: this.page, page_size: this.page_size, type: this.type }).then(res => {
                let data = res.data
                this.loading = false
                if (data.code == 1) {
                    this.List.push(...data.data.list)
                    this.page++
                }
                if (this.List.length >= data.data.count) this.finished = true
            })
        },
    }
}
</script>

<style>
.arbitrage_record[data-v-8178a22e] {
    padding-bottom: .6rem;
    font-weight: 500
}

.arbitrage_record .header[data-v-8178a22e] {
    position: relative;
    padding: .27rem .44rem;
    text-align: center
}

.arbitrage_record .header .back[data-v-8178a22e] {
    float: left;
    font-size: .4rem
}

.arbitrage_record .switch_container[data-v-8178a22e] {
    margin-top: .32rem
}

.arbitrage_record .switch_container .switch_content[data-v-8178a22e] {
    margin: 0 auto;
    padding: .08rem;
    width: 4.44rem;
    background: #f5f6f8;
    border-radius: .2rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage_record .switch_container .switch_content .switch_item[data-v-8178a22e] {
    width: 2.14rem;
    height: .72rem;
    line-height: .72rem;
    text-align: center;
    font-size: .26rem;
    color: #353f52;
    font-weight: 600
}

.arbitrage_record .switch_container .switch_content .switch_item.active[data-v-8178a22e] {
    background: #fff;
    border-radius: .2rem
}

.arbitrage_record .record_list[data-v-8178a22e] {
    padding: 0 .36rem
}

.arbitrage_record .record_list .record_item[data-v-8178a22e] {
    margin-top: .56rem;
    background: #fff;
    box-shadow: .06rem .12rem .2rem #0000000d;
    border-radius: .3rem
}

.arbitrage_record .record_list .record_item .pro_info[data-v-8178a22e] {
    padding: 0 .32rem;
    height: 1.14rem;
    border-bottom: 1px solid rgba(216, 216, 216, .5);
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage_record .record_list .record_item .pro_info .pro_cycle[data-v-8178a22e] {
    display: flex;
    align-content: center;
    align-items: center;
    font-size: .36rem;
    color: #353f52
}

.arbitrage_record .record_list .record_item .pro_info .pro_cycle .icon_save[data-v-8178a22e] {
    margin-right: .2rem;
    width: .48rem
}

.arbitrage_record .record_list .record_item .record_info .section[data-v-8178a22e] {
    padding: 0 !important;
    margin-top: .32rem
}

.arbitrage_record .record_list .record_item .record_info .section .section_item[data-v-8178a22e] {
    display: flex;
    justify-content: space-between;
    padding: 0 .32rem;
    align-content: center;
    align-items: center;
    margin-bottom: .32rem
}

.arbitrage_record .record_list .record_item .record_info .section .section_item .item_name[data-v-8178a22e] {
    color: #353f52
}

.arbitrage_record .record_list .record_item .record_info .section .section_item .item_value[data-v-8178a22e] {
    color: #5b616e
}

.arbitrage_record .record_list .record_item .order_info[data-v-8178a22e] {
    padding: 0 .4rem;
    height: 1.04rem;
    background: #f5f6f8;
    box-shadow: 6px 12px 20px #0000000d;
    border-radius: 0 0 .3rem .3rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage_record .record_list .record_item .order_info .order_status[data-v-8178a22e] {
    display: flex;
    align-content: center;
    align-items: center
}

.arbitrage_record .record_list .record_item .order_info .order_status .button_status[data-v-8178a22e] {
    padding: 0 .4rem;
    display: inline-block;
    height: .65rem;
    line-height: .65rem;
    background: #1652f0;
    border-radius: .2rem;
    border: none;
    color: #fff
}

.arbitrage_record .no_data_content[data-v-8178a22e] {
    margin-top: .4rem;
    padding-bottom: .4rem;
    text-align: center
}

.arbitrage_record .no_data_content .title[data-v-8178a22e] {
    color: #aaa;
    font-size: .3rem
}

.arbitrage_record .no_data_content .img_no_data[data-v-8178a22e] {
    margin-bottom: .56rem;
    width: 3.7rem;
    height: auto
}

.arbitrage_record .load-more[data-v-8178a22e] {
    margin: 0 auto;
    margin-top: .32rem;
    text-align: center;
    color: #1652f0
}

.arbitrage_record .no-more-data[data-v-8178a22e] {
    margin: 0 auto;
    margin-top: .32rem;
    text-align: center
}

/*! _variables.scss | Vuero | Css ninja 2020-2021 */
[data-v-8178a22e] .van-loading {
    text-align: center;
    margin-top: .5rem
}

.exchange-container[data-v-8178a22e] {
    margin-top: .4rem;
    padding: 0 .32rem;
    line-height: normal
}

.exchange-container .base-content[data-v-8178a22e] {
    padding: .24rem .32rem .46rem;
    background: #fff;
    box-shadow: 0 4px 40px 1px #00000008;
    border-radius: 10px;
    border: 1px solid #eeeef0
}

.exchange-container .base-content .base-title[data-v-8178a22e] {
    position: relative;
    font-size: .28rem;
    color: #353f52;
    font-weight: 500
}

.exchange-container .base-content .base-title .left-line[data-v-8178a22e] {
    position: absolute;
    top: 0;
    left: -.32rem;
    width: .08rem;
    height: .4rem;
    background: linear-gradient(1turn, rgba(90, 71, 217, .09), #1652f0);
    border-radius: .04rem
}

.exchange-container .base-content .base-value[data-v-8178a22e] {
    margin-top: .44rem;
    display: flex;
    justify-content: space-between;
    text-align: center
}

.exchange-container .base-content .base-value .value-item[data-v-8178a22e] {
    width: 50%
}

.exchange-container .base-content .base-value .value-item .value-title[data-v-8178a22e] {
    margin-bottom: .16rem;
    font-size: .28rem;
    color: #353f52;
    font-weight: 500
}

.exchange-container .base-content .base-value .value-item .value[data-v-8178a22e] {
    color: #5b616e;
    font-weight: 400
}

.exchange-container .exchange-content[data-v-8178a22e] {
    margin-top: .4rem
}

.exchange-container .exchange-content .exchange-title[data-v-8178a22e] {
    color: #353f52;
    font-size: .32rem
}

.exchange-container .exchange-content .input-content[data-v-8178a22e] {
    margin-top: .24rem;
    display: flex;
    justify-content: space-between;
    align-items: center
}

.exchange-container .exchange-content .input-content .icon-exchange[data-v-8178a22e] {
    margin: 0 .24rem;
    width: .4rem;
    height: .4rem
}

.exchange-container .exchange-content .input-content input[data-v-8178a22e] {
    width: 3rem;
    height: .94rem;
    padding: 0 .24rem;
    box-sizing: border-box;
    background: #f3f4f6;
    border-radius: .1rem;
    color: #5f6775;
    font-family: NunitoSemiBold
}

.exchange-container .submit-content[data-v-8178a22e] {
    margin-top: .56rem;
    display: flex;
    justify-content: center
}

.exchange-container .submit-content .submit-btn[data-v-8178a22e] {
    width: 3.66rem;
    height: .94rem;
    line-height: .94rem;
    text-align: center;
    background: #1652f0;
    border-radius: 14px;
    color: #fff;
    font-size: .36rem;
    font-weight: 500
}

.list-container[data-v-8178a22e] {
    margin-top: .56rem;
    padding: 0 .32rem
}

.list-container .list-title[data-v-8178a22e] {
    margin-bottom: .24rem;
    color: #353f52;
    font-size: .32rem;
    font-weight: 600
}

.v-button[data-v-8178a22e] {
    width: 2.66rem;
    height: .84rem;
    font-size: .28rem;
    border-radius: 14px
}

.arbitrage_record .popup_content .ensure_popup[data-v-8178a22e] {
    width: 6.42rem;
    background: #fff;
    border-radius: .2rem;
    z-index: 2
}

.arbitrage_record .popup_content .ensure_popup .ensure_content[data-v-8178a22e] {
    padding: .44rem;
    text-align: center
}

.arbitrage_record .popup_content .ensure_popup .ensure_content .icon_ensure[data-v-8178a22e] {
    width: 1.26rem
}

.arbitrage_record .popup_content .ensure_popup .ensure_content .amount_info[data-v-8178a22e] {
    margin-top: .56rem
}

.arbitrage_record .popup_content .ensure_popup .ensure_content .confirm[data-v-8178a22e] {
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

.arbitrage_record .popup_content .ensure_popup .ensure_content .tips[data-v-8178a22e] {
    margin-top: .4rem;
    font-size: .24rem;
    color: #5b616e80
}

.load-more-btn[data-v-8178a22e] {
    margin-top: .6rem;
    text-align: center
}

.nomore-tips[data-v-8178a22e] {
    color: #353f5280;
    margin-top: .6rem;
    text-align: center
}

.fc-13B26F[data-v-8178a22e] {
    color: #13b26f
}

.fc-CF202F[data-v-8178a22e] {
    color: #cf202f
}
</style>

