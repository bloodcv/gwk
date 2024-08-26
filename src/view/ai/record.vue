<template>
     <div class="arbitrage_record">
      <header-nav :backIconType="2" :title="'Ai' + $t('key6')"></header-nav>
      <tab v-model="tabindex" :title="[$t('key2'), $t('key31')]"></tab>
      <div data-v-722890d9="">
          <van-pull-refresh v-model="loading" @refresh="getOrderListXiala" pulling-text="Pull down to refresh.." loosing-text="Release to refresh..." loading-text="loading...">
              <van-list v-model="loading" :finished="finished" loading-text="loading..." @load="getOrderList">
                  <div class="record_list" data-v-722890d9="" style="padding-bottom: 15px;">
                      <div class="record_item" data-v-722890d9="" v-for="(item, index) in List" :key="index">
                          <div class="pro_info" data-v-722890d9="">
                              <div class="pro_cycle ff_NunitoSemiBold" data-v-722890d9="">
                                  <img src="../../assets/static/image/icon_save.acef7a70.e8323c19.svg" class="icon_save" data-v-722890d9="">
                                  <span data-v-722890d9="">{{item.name}}</span>
                              </div>
                              <div class="fs-36 ff_NunitoBold" data-v-722890d9="">{{item.cycle}}</div>
                          </div>
                          <div class="record_info" data-v-722890d9="">
                              <div class="section" data-v-722890d9="">
                                  <div class="section_item" data-v-722890d9="">
                                      <div class="item_name" data-v-722890d9="">{{$t('key9')}}</div>
                                      <div class="item_value" data-v-722890d9=""> ${{item.amount}}</div>
                                  </div>
                                  <div class="section_item" data-v-722890d9="">
                                      <div class="item_name" data-v-722890d9="">{{$t('key32')}}</div>
                                      <div class="item_value" data-v-722890d9="">{{item.add_time}}</div>
                                  </div>
                                  <div class="section_item" data-v-722890d9="">
                                      <div class="item_name" data-v-722890d9="">{{$t('key33')}}</div>
                                      <div class="item_value" data-v-722890d9="">{{item.cycle}}</div>
                                  </div>
                                  <div class="section_item" data-v-722890d9="">
                                      <div class="item_name" data-v-722890d9="">{{$t('key34')}}</div>
                                      <div class="item_value" data-v-722890d9="">{{item.end_time}}</div>
                                  </div>
                                  <div class="section_item" data-v-722890d9="">
                                      <div class="item_name" data-v-722890d9="">{{$t('key35')}}</div>
                                      <div class="item_value" data-v-722890d9="">{{item.profit_day}}&nbsp;{{$t('key36')}}</div>
                                  </div>
                                  <div class="section_item" data-v-722890d9="">
                                      <div class="item_name" data-v-722890d9="">{{$t('key10')}}</div>
                                      <div class="item_value" data-v-722890d9="">{{item.day_profit}}</div>
                                  </div>
                                  <!---->
                                  <div class="section_item" data-v-722890d9="">
                                      <div class="item_name" data-v-722890d9="">{{$t('key38')}}</div>
                                      <div class="item_value" data-v-722890d9="">{{item.profit_total_amount}} ETH </div>
                                  </div>
                                  <!---->
                              </div>
                          </div>
                          <div class="order_info" data-v-722890d9="">
                              <div data-v-722890d9="">
                                  <!-- <span data-v-722890d9="">1 Days 23:57:06</span> -->
                              </div>
                              <div class="order_status" data-v-722890d9="">
                                  <button class="button_status" data-v-722890d9="">
                                      <span data-v-722890d9="" v-if="item.status === 1">{{$t('key39')}}</span>
                                      <span data-v-722890d9="" v-if="item.status === 0">{{$t('key31')}}</span>
                                      <!---->
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
import { getOrderList } from '@/api/user'

export default {
    name: 'airecord',
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
            status: 1 // 1=托管中,0=已結束
        }
    },
    watch: {
        tabindex () {
            this.getOrderListXiala()
        }
    },
    mounted() {
        this.getOrderList()
    },
    methods: {
        reset () {
            this.page = 1
            this.loading = false
            this.finished = false
            this.List = []
        },
        getOrderListXiala () {
            this.reset()
            this.getOrderList()
        },
        getOrderList () {
            this.loading = true
            getOrderList({ page: this.page, page_size: this.page_size, status: this.tabindex === 0 ? 1 : 0 }).then(res => {
                let data = res.data
                this.loading = false
                if (data.code == 1) {
                    this.List.push(...data.data.list)
                    this.page++
                }
                if (this.List.length >= data.data.count) this.finished = true
            })
        }
    }
}
</script>
  
<style>
.arbitrage_record[data-v-722890d9] {
    padding-bottom: .6rem;
    font-weight: 500
}

.arbitrage_record .header[data-v-722890d9] {
    position: relative;
    padding: .27rem .44rem;
    text-align: center
}

.arbitrage_record .header .back[data-v-722890d9] {
    float: left;
    font-size: .4rem
}

.arbitrage_record .switch_container[data-v-722890d9] {
    margin-top: .32rem
}

.arbitrage_record .switch_container .switch_content[data-v-722890d9] {
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

.arbitrage_record .switch_container .switch_content .switch_item[data-v-722890d9] {
    width: 2.14rem;
    height: .72rem;
    line-height: .72rem;
    text-align: center;
    font-size: .26rem;
    color: #353f52;
    font-weight: 600
}

.arbitrage_record .switch_container .switch_content .switch_item.active[data-v-722890d9] {
    background: #fff;
    border-radius: .2rem
}

.arbitrage_record .record_list[data-v-722890d9] {
    padding: 0 .36rem
}

.arbitrage_record .record_list .record_item[data-v-722890d9] {
    margin-top: .56rem;
    background: #fff;
    box-shadow: .06rem .12rem .2rem #0000000d;
    border-radius: .3rem
}

.arbitrage_record .record_list .record_item .pro_info[data-v-722890d9] {
    padding: 0 .32rem;
    height: 1.14rem;
    border-bottom: 1px solid rgba(216, 216, 216, .5);
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.arbitrage_record .record_list .record_item .pro_info .pro_cycle[data-v-722890d9] {
    display: flex;
    align-content: center;
    align-items: center;
    font-size: .36rem;
    color: #353f52
}

.arbitrage_record .record_list .record_item .pro_info .pro_cycle .icon_save[data-v-722890d9] {
    margin-right: .2rem;
    width: .48rem
}

.arbitrage_record .record_list .record_item .record_info .section[data-v-722890d9] {
    padding: 0 !important;
    margin-top: .32rem
}

.arbitrage_record .record_list .record_item .record_info .section .section_item[data-v-722890d9] {
    display: flex;
    justify-content: space-between;
    padding: 0 .32rem;
    align-content: center;
    align-items: center;
    margin-bottom: .32rem
}

.arbitrage_record .record_list .record_item .record_info .section .section_item .item_name[data-v-722890d9] {
    color: #353f52
}

.arbitrage_record .record_list .record_item .record_info .section .section_item .item_value[data-v-722890d9] {
    color: #5b616e
}

.arbitrage_record .record_list .record_item .order_info[data-v-722890d9] {
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

.arbitrage_record .record_list .record_item .order_info .order_status[data-v-722890d9] {
    display: flex;
    align-content: center;
    align-items: center
}

.arbitrage_record .record_list .record_item .order_info .order_status .button_status[data-v-722890d9] {
    padding: 0 .4rem;
    display: inline-block;
    height: .65rem;
    line-height: .65rem;
    background: #1652f0;
    border-radius: .2rem;
    border: none;
    color: #fff
}

.arbitrage_record .no_data_content[data-v-722890d9] {
    margin-top: .4rem;
    padding-bottom: .4rem;
    text-align: center
}

.arbitrage_record .no_data_content .title[data-v-722890d9] {
    color: #aaa;
    font-size: .3rem
}

.arbitrage_record .no_data_content .img_no_data[data-v-722890d9] {
    margin-bottom: .56rem;
    width: 3.7rem;
    height: auto
}

.arbitrage_record .load-more[data-v-722890d9] {
    margin: 0 auto;
    margin-top: .32rem;
    text-align: center;
    color: #1652f0
}

.arbitrage_record .no-more-data[data-v-722890d9] {
    margin: 0 auto;
    margin-top: .32rem;
    text-align: center
}
</style>
  
  