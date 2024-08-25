<template>
     <div class="account" data-v-45b316b8="">
      <div class="header" data-v-45b316b8="">
          <img src="../../assets/static/image/icon_back_account.bddc267e.286ce987.svg" class="back" @click="back" data-v-45b316b8="">
      </div>
      <div class="title_container" data-v-45b316b8="">
          <div class="title_info" data-v-45b316b8="">
              <div class="title fs-40 ff_NunitoBold" data-v-45b316b8="">{{$t('key99')}}</div>
              <div class="subtitle fs-26 fc-5B616E ff_NunitoSemiBold" data-v-45b316b8="">{{$t('key100')}}</div>
          </div>
          <img src="../../assets/static/image/img_wallet.e04efaed.062eb968.png" class="title_img" data-v-45b316b8="">
      </div>
      <div class="wallte_select" data-v-45b316b8="">
          <div class="title" data-v-45b316b8="">
              <div class="select_line" data-v-45b316b8=""></div>
              <div class="value fs-26 fc-5B616E ff_NunitoSemiBold" data-v-45b316b8="">{{$t('key101')}}</div>
          </div>
          <div class="wallet_list" data-v-45b316b8="">
              <div class="wallet_item" data-v-45b316b8="" v-for="(item, index) in list" :key="index" @click="go('/wallet-info', { coin: item.coin })">
                  <div class="item_info" data-v-45b316b8="">
                      <img :src="item.icon" class="icon" data-v-45b316b8="">
                      <div class="info" data-v-45b316b8="">
                          <div class="title fs-32 fc-353F52 ff_NunitoBold" data-v-45b316b8="">
                              <span class="uppercase" data-v-45b316b8="">{{item.coin}}</span>&nbsp;{{$t('key79')}}
                          </div>
                          <div class="subtitle fs-26 fc-5B616E ff_NunitoSemiBold" data-v-45b316b8="">
                              <span class="uppercase" data-v-45b316b8="">{{item.coin}}</span>&nbsp;Coin
                          </div>
                      </div>
                  </div>
                  <div class="item_value" data-v-45b316b8="">
                      <div class="title fs-32 fc-353F52 ff_InterSemiBold" data-v-45b316b8=""> $&nbsp;{{item.balance}}</div>
                      <div class="subtitle fs-26 fc-5B616E ff_InterMedium" data-v-45b316b8="">{{item.convert_usdt}}&nbsp;<span class="uppercase" data-v-45b316b8="">{{item.coin}}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { getWalletList } from '@/api/user'
export default {
    name: 'wallet',
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
        this.getWalletList()
    },
    methods: {
        getWalletList () {
            getWalletList().then(res => {
                let data = res.data
                if (data.code == 1) {
                    this.list = data.data
                }
            })
        },
        back () {
            this.$router.back()
        },
        go (path, query) {
            this.$router.push({ path, query })
        }
    }
}
</script>

<style>
.account[data-v-45b316b8] {
    font-weight: 500
}

.title[data-v-45b316b8] {
    line-height: normal !important
}

.account .uppercase[data-v-45b316b8] {
    text-transform: uppercase
}

.account .header[data-v-45b316b8] {
    padding: .24rem 0 0 .4rem
}

.account .header .back[data-v-45b316b8] {
    width: .6rem
}

.account .title_container[data-v-45b316b8] {
    margin-top: .32rem;
    padding: 0 .4rem;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between
}

.account .title_container .title_info .title[data-v-45b316b8] {
    margin-bottom: 0 !important
}

.account .title_container .title_info .subtitle[data-v-45b316b8] {
    margin-top: .12rem
}

.account .title_container .title_img[data-v-45b316b8] {
    width: 1.64rem;
    height: auto
}

.account .wallte_select .title[data-v-45b316b8] {
    margin-top: .24rem;
    position: relative;
    margin-bottom: 0 !important;
    font-weight: 500 !important
}

.account .wallte_select .title .value[data-v-45b316b8] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: #fff;
    height: .36rem;
    padding: 0 .12rem 0 .4rem
}

.account .wallte_select .title .select_line[data-v-45b316b8] {
    position: relative;
    top: .1rem;
    width: 100%;
    height: .02rem;
    background: rgba(216, 216, 216, .5)
}

.account .wallte_select .wallet_list .wallet_item[data-v-45b316b8] {
    margin-top: .38rem;
    padding: 0 .4rem .38rem;
    border-bottom: 1px solid rgba(216, 216, 216, .5);
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.account .wallte_select .wallet_list .wallet_item .title[data-v-45b316b8] {
    font-weight: 600
}

.account .wallte_select .wallet_list .wallet_item .item_info[data-v-45b316b8] {
    display: flex;
    align-content: center;
    align-items: center
}

.account .wallte_select .wallet_list .wallet_item .item_info .icon[data-v-45b316b8] {
    margin-right: .32rem;
    width: .64rem;
    height: .64rem;
    border-radius: 50%
}

.account .wallte_select .wallet_list .wallet_item .item_info .info .subtitle[data-v-45b316b8] {
    margin-top: .08rem
}

.account .wallte_select .wallet_list .wallet_item .item_value[data-v-45b316b8] {
    text-align: right
}

.account .wallte_select .wallet_list .wallet_item .item_value .subtitle[data-v-45b316b8] {
    margin-top: .1rem
}
</style>

