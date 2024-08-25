<template>
    <div class="mining_record">
        <header-nav :backIconType="2" :title="$t('key142')"></header-nav>
        <div class="survey_container" data-v-a794c92e="">
            <div class="survey_item" data-v-a794c92e="">
                <img src="../../assets/static/image/icon_miner_survey1.435b9803.11a3c433.svg" data-v-a794c92e="">
                <div class="name" data-v-a794c92e="">{{$t('key2')}}</div>
                <div class="value" data-v-a794c92e="">{{info.trusteeship_count}} Sets</div>
            </div>
            <div class="survey_item" data-v-a794c92e="">
                <img src="../../assets/static/image/icon_miner_survey2.6bdf440c.82dc30d9.svg" data-v-a794c92e="">
                <div class="name" data-v-a794c92e="">{{$t('key144')}}</div>
                <div class="value" data-v-a794c92e="">{{info.total_mining}} ETH </div>
            </div>
            <div class="survey_item" data-v-a794c92e="">
                <img src="../../assets/static/image/icon_miner_survey3.a6ff5369.671bcdb9.svg" data-v-a794c92e="">
                <div class="name" data-v-a794c92e="">{{$t('key145')}}</div>
                <div class="value" data-v-a794c92e="">{{info.day_mining}} ETH </div>
            </div>
        </div>
        <div class="switch_container" data-v-a794c92e="">
            <tab v-model="tabindex" :title="[$t('key146'), $t('key147')]"></tab>
        </div>
        <div data-v-a794c92e="">
            <van-pull-refresh v-model="loading" @refresh="getMachineOrderListXiala" pulling-text="Pull down to refresh.." loosing-text="Release to refresh..." loading-text="loading...">
                <van-list v-model="loading" :finished="finished" loading-text="loading..." @load="getMachineOrderList">
                    <div class="record_list" data-v-a794c92e="" style="padding-bottom: 40px;">
                        <div class="record_item" data-v-a794c92e="" v-for="(item, index) in List" :key="index">
                            <div class="pro_info" data-v-a794c92e="">
                                <div class="pro_cycle ff_NunitoSemiBold" data-v-a794c92e="">
                                    <img src="../../assets/static/image/icon_save.acef7a70.e8323c19.svg" class="icon_save" data-v-a794c92e="">
                                    <span data-v-a794c92e="">{{item.name}}</span>
                                </div>
                                <div class="fs-36 ff_NunitoBold" data-v-a794c92e="">{{item.cycle}}</div>
                            </div>
                            <div class="record_info" data-v-a794c92e="">
                                <div class="section" data-v-a794c92e="">
                                    <div class="section_item" data-v-a794c92e="">
                                        <div class="item_name" data-v-a794c92e="">{{$t('key9')}}</div>
                                        <div class="item_value" data-v-a794c92e="">${{item.price}}</div>
                                    </div>
                                    <div class="section_item" data-v-a794c92e="">
                                        <div class="item_name" data-v-a794c92e="">{{$t('key148')}}</div>
                                        <div class="item_value" data-v-a794c92e="">{{item.buy_time}}</div>
                                    </div>
                                    <div class="section_item" data-v-a794c92e="">
                                        <div class="item_name" data-v-a794c92e="">{{$t('key34')}}</div>
                                        <div class="item_value" data-v-a794c92e="">{{item.end_time}}</div>
                                    </div>
                                    <div class="section_item" data-v-a794c92e="">
                                        <div class="item_name" data-v-a794c92e="">{{$t('key125')}}</div>
                                        <div class="item_value" data-v-a794c92e="">{{item.produce_eth_total}} ETH </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order_info" data-v-a794c92e="">
                                <div data-v-a794c92e="">
                                    <!-- <span data-v-a794c92e="">27 Days 10:45:06</span> -->
                                </div>
                                <div class="order_status" data-v-a794c92e="">
                                    <button class="button_status" data-v-a794c92e="">
                                        <!---->
                                        <!---->
                                        <span data-v-a794c92e="" v-if="item.status === 1">{{$t('key150')}}</span>
                                        <span data-v-a794c92e="" v-if="item.status === 0">{{$t('key147')}}</span>
                                        <!---->
                                        <!---->
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-list>
                <no-data v-if="List.length <= 0"></no-data>
            </van-pull-refresh>
        </div>
    </div>
</template>
  
<script>
import headerNav from '@/components/header-nav.vue'
import tab from '@/components/tab.vue'
import noData from '@/components/no-data.vue'
import { myMachine, getMachineOrderList } from '@/api/user'

export default {
    name: 'mining-record',
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
            tabindex: 0,
            info: {},
            status: 1 // 1=进行中,0=到期
        }
    },
    watch: {
        tabindex () {
            this.getMachineOrderListXiala()
        }
    },
    mounted() {
        this.myMachine()
    },
    methods: {
        reset () {
            this.page = 1
            this.loading = false
            this.finished = false
            this.List = []
        },
        getMachineOrderListXiala () {
            this.reset()
            this.getMachineOrderList()
        },
        getMachineOrderList () {
            this.loading = true
            getMachineOrderList({ page: this.page, page_size: this.page_size, status: this.tabindex === 0 ? 1 : 0 }).then(res => {
                let data = res.data
                this.loading = false
                if (data.code == 1) {
                    console.log(data.data.list)
                    this.List.push(...data.data.list)
                    this.page++
                }
                if (this.List.length >= data.data.count) this.finished = true
            })
        },
        myMachine () {
            myMachine().then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.info = data.data
                }
            })
        }
    }
}
</script>
  
<style>
.mining_record[data-v-a794c92e] {
    padding-bottom: .6rem;
    font-weight: 500
}

.mining_record .header[data-v-a794c92e] {
    position: relative;
    padding: .27rem .44rem;
    text-align: center
}

.mining_record .header .back[data-v-a794c92e] {
    position: absolute;
    top: 0;
    left: .44rem;
    bottom: 0;
    margin: auto;
    width: .4rem
}

.mining_record .survey_container[data-v-a794c92e] {
    margin-top: .24rem;
    display: flex;
    justify-content: space-between
}

.mining_record .survey_container .survey_item[data-v-a794c92e] {
    width: 33%;
    text-align: center
}

.mining_record .survey_container .survey_item img[data-v-a794c92e] {
    width: .32rem
}

.mining_record .survey_container .survey_item .name[data-v-a794c92e] {
    margin-top: .08rem;
    color: #000
}

.mining_record .survey_container .survey_item .value[data-v-a794c92e] {
    margin-top: .12rem;
    color: #5b616e
}

.mining_record .switch_container[data-v-a794c92e] {
    margin-top: .4rem;
    padding-bottom: .56rem;
    box-shadow: 0 2px 4px #0000001a
}

.mining_record .switch_container .switch_content[data-v-a794c92e] {
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

.mining_record .switch_container .switch_content .switch_item[data-v-a794c92e] {
    width: 2.14rem;
    height: .72rem;
    line-height: .72rem;
    text-align: center;
    font-size: .26rem;
    color: #353f52;
    font-weight: 600
}

.mining_record .switch_container .switch_content .switch_item.active[data-v-a794c92e] {
    background: #fff;
    border-radius: .2rem
}

.mining_record .record_list[data-v-a794c92e] {
    padding: 0 .36rem
}

.mining_record .record_list .record_item[data-v-a794c92e] {
    margin-top: .56rem;
    background: #fff;
    box-shadow: 6px 12px 20px #0000000d;
    border-radius: .3rem
}

.mining_record .record_list .record_item .pro_info[data-v-a794c92e] {
    padding: 0 .32rem;
    height: 1.14rem;
    border-bottom: 1px solid rgba(216, 216, 216, .5);
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.mining_record .record_list .record_item .pro_info .pro_cycle[data-v-a794c92e] {
    display: flex;
    align-content: center;
    align-items: center;
    font-size: .36rem;
    color: #353f52
}

.mining_record .record_list .record_item .pro_info .pro_cycle .icon_save[data-v-a794c92e] {
    margin-right: .2rem;
    width: .4rem
}

.mining_record .record_list .record_item .record_info .section[data-v-a794c92e] {
    padding: 0 !important;
    margin-top: .32rem
}

.mining_record .record_list .record_item .record_info .section .section_item[data-v-a794c92e] {
    display: flex;
    justify-content: space-between;
    padding: 0 .32rem;
    align-content: center;
    align-items: center;
    margin-bottom: .32rem
}

.mining_record .record_list .record_item .record_info .section .section_item .item_name[data-v-a794c92e] {
    color: #353f52
}

.mining_record .record_list .record_item .record_info .section .section_item .item_value[data-v-a794c92e] {
    color: #5b616e
}

.mining_record .record_list .record_item .order_info[data-v-a794c92e] {
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

.mining_record .record_list .record_item .order_info .order_status[data-v-a794c92e] {
    display: flex;
    align-content: center;
    align-items: center
}

.mining_record .record_list .record_item .order_info .order_status .button_status[data-v-a794c92e] {
    padding: 0 .4rem;
    display: inline-block;
    height: .65rem;
    line-height: .65rem;
    background: #1652f0;
    border-radius: .2rem;
    border: none;
    color: #fff
}

.mining_record .no_data_content[data-v-a794c92e] {
    margin-top: .4rem;
    padding-bottom: .4rem;
    text-align: center
}

.mining_record .no_data_content .title[data-v-a794c92e] {
    color: #aaa;
    font-size: .3rem
}

.mining_record .no_data_content .img_no_data[data-v-a794c92e] {
    margin-bottom: .56rem;
    width: 3.7rem;
    height: auto
}

.mining_record .load-more[data-v-a794c92e] {
    margin: 0 auto;
    margin-top: .32rem;
    text-align: center;
    color: #1652f0
}

.mining_record .no-more-data[data-v-a794c92e] {
    margin: 0 auto;
    margin-top: .32rem;
    text-align: center
}
</style>
  
  