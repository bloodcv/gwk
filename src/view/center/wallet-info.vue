<template>
    <div class="recharge" data-v-4e295514="">
        <div class="header" data-v-4e295514="">
            <img src="../../assets/static/image/icon_back.0b3c36a6.ac21430a.svg" class="back" @click="back"
                data-v-4e295514="">
            <span class="titles fs-36 fc-353F52 ff_NunitoSemiBold" data-v-4e295514="">
                <span class="uppercase" data-v-4e295514="">{{ walletInfo.coin }}</span>&nbsp;{{ $t('key79') }}
            </span>
            <img src="../../assets/static/image/icon_record.7c965f76.6096f376.svg"
                @click="go('/wallet-record', { coin: coin })" class="record" data-v-4e295514="">
        </div>
        <div class="amount" data-v-4e295514="">
            <div class="us_num ff_InterSemiBold" data-v-4e295514=""> $&nbsp;{{ walletInfo.convert_usdt }}</div>
            <div class="coin_num" data-v-4e295514="">
                <img class="coin_icon" :src="walletInfo.icon" data-v-4e295514="">
                <span data-v-4e295514="">&nbsp;{{ walletInfo.balance }}&nbsp;<span class="uppercase"
                        data-v-4e295514="">{{ walletInfo.coin }}</span>
                </span>
            </div>
        </div>
        <div class="switch_container" data-v-4e295514="">
            <tab :title="[$t('key80'), $t('key81')]" v-model="tabindex" width="5rem"
                v-if="walletInfo.coin === 'USDT'"></tab>
            <tab :title="[$t('key80'), $t('key81'), $t('key82') + 'usdt']" v-model="tabindex"
                width="6.58rem" v-else></tab>
        </div>
        <div class="main_container" data-v-4e295514="">
            <div v-show="tabindex === 0">
                <div class="main_content" data-v-4e295514="">
                    <div class="titles" data-v-4e295514="">
                        <span class="left_icon" data-v-4e295514=""></span>
                        <span data-v-4e295514="">{{ $t('key83') }}</span>
                    </div>
                    <div class="coin_type" data-v-4e295514="">
                        <div class="coin_item" v-for="(item, index) in receive_asset" :key="index"
                            :class="[codeTabIndex === index ? 'active' : '']" @click="changecodeTabIndex(index)"
                            data-v-4e295514="">{{ item.name }}</div>
                    </div>
                    <div class="qr_content" data-v-4e295514="">
                        <!-- <canvas class="qr_code" id="yqrcode"></canvas> -->
                        <div class="address fc-353F52 ff_NunitoRegular" data-v-4e295514="" style="word-wrap: break-word;">
                            {{ receiveAddress }}</div>
                        <div class="copy fc-1652F0 ff_NunitoSemiBimage.pngold" data-v-4e295514="">
                            <span id="copyBtn" class="btn-copy" :data-clipboard-text="receiveAddress" @click="copy"
                                data-v-4e295514="">{{ $t('key84') }}</span>
                        </div>
                    </div>
                    <div class="input_content ff_NunitoSemiBold" data-v-4e295514="">
                        <div class="address" data-v-4e295514="" @click="changeshownumberKey(true)">
                            <img :src="walletInfo.icon" class="coin_icon" data-v-4e295514="">
                            <input type="text" :placeholder="$t('key9')" v-model="num.rechargeNumber" readonly=""
                                class="amount_input" data-v-4e295514="">
                            <span class="coin_sympol uppercase" data-v-4e295514="">{{ walletInfo.coin }}</span>
                        </div>
                    </div>
                    <div style="text-align: center;padding-top: 20px;">
                        <van-uploader :max-count="1" v-model="fileList" accept="image/*" @delete="deleteFile"
                            :after-read="afterRead">
                        </van-uploader>
                        <div style="text-align: center;color: #5f67754d;">{{$t('key174')}}</div>
                    </div>
                    <div class="send_action fs-32 ff_NunitoBold" data-v-4e295514="" @click="recharge">{{ $t('key85') }}
                    </div>
                </div>
                <div class="tips" data-v-4e295514="">
                    <div class="tips_titles fc-2F3848 ff_NunitoSemiBold" data-v-4e295514="">{{ $t('key86') }}?</div>
                    <div class="tips_content" data-v-4e295514="">{{ $t('key87') }}</div>
                </div>
            </div>
            <div v-if="tabindex === 1">
                <div class="main_content" data-v-4e295514="">
                    <div class="titles" data-v-4e295514="">
                        <span class="left_icon" data-v-4e295514=""></span>
                        <span data-v-4e295514="">{{ $t('key83') }}</span>
                    </div>
                    <div class="coin_type" data-v-4e295514="">
                        <div class="coin_item" data-v-4e295514="" v-for="(item, index) in receive_asset" :key="index"
                            :class="[sendTabIndex === index ? 'active' : '']" @click="changesendTabIndex(index)">
                            {{ item.name }}</div>

                    </div>
                    <div class="input_content ff_NunitoSemiBold" data-v-4e295514="">
                        <div class="address" data-v-4e295514="">
                            <input type="text" readonly="" :value="sendAddress" :placeholder="$t('key89')"
                                class="address_input" data-v-4e295514="">
                        </div>
                        <div class="address" data-v-4e295514="" @click="changeshownumberKey(true)">
                            <img :src="walletInfo.icon" class="coin_icon" data-v-4e295514="">
                            <input type="text" :placeholder="$t('key9')" v-model="num.sendNum" readonly=""
                                class="amount_input" data-v-4e295514="">
                            <span class="coin_sympol uppercase" data-v-4e295514="">{{ walletInfo.coin }}</span>
                        </div>
                    </div>
                    <div class="send_action fs-32 ff_NunitoBold" data-v-4e295514="" @click="withdraw">{{ $t('key90') }}
                    </div>
                    <div class="send_tips ff_NunitoRegular" data-v-4e295514="">{{ $t('key91') }}<span
                            data-v-4e295514="">$10</span>
                    </div>
                </div>
                <div class="single_tips" data-v-4e295514="">{{ $t('key92') }}</div>
            </div>

            <div v-if="tabindex === 2">
                <!-- <div class="main_content" data-v-4e295514="">
                  <div class="titles" data-v-4e295514="">
                      <span class="left_icon" data-v-4e295514=""></span>
                      <span data-v-4e295514="">快速合約轉換</span>
                  </div>
                  <div class="input_content ff_NunitoSemiBold" data-v-4e295514="">
                      <div class="address" data-v-4e295514="" @click="changeshownumberKey(true)">
                          <img src="../../assets/static/image/usdt.png" class="coin_icon" data-v-4e295514="">
                          <input type="text" placeholder="{{$t('key9')}}" v-model="num.convertNum" readonly="" class="amount_input" data-v-4e295514="">
                          <span class="coin_sympol uppercase" data-v-4e295514="">usdt</span>
                      </div>
                  </div>
                  <div class="send_action fs-32 ff_NunitoBold" data-v-4e295514="">立刻轉換</div>
              </div>
              <div class="single_tips" data-v-4e295514="">{{$t('key92')}}</div> -->
                <div class="main_content" data-v-4e295514="">
                    <div class="titles" data-v-4e295514="">
                        <span class="left_icon" data-v-4e295514=""></span>
                        <span data-v-4e295514="">{{ $t('key82') }} usdt</span>
                    </div>
                    <div class="input_content ff_NunitoSemiBold" data-v-4e295514="">
                        <div class="address" data-v-4e295514="">
                            <img :src="walletInfo.icon" class="coin_icon" data-v-4e295514="">
                            <input type="text" :placeholder="$t('key9')" readonly="" v-model="num.convertNum"
                                class="amount_input" @click="changeshownumberKey(true)" data-v-4e295514="">
                            <span class="coin_sympol" data-v-4e295514="">
                                <span class="uppercase" data-v-4e295514="">{{ walletInfo.coin }}</span>
                            </span>
                        </div>
                        <div class="img_swap_content" data-v-4e295514="">
                            <img src="../../assets/static/image/icon_swap.185cd8f3.svg" class="icon_swap"
                                data-v-4e295514="">
                        </div>
                        <div class="address swap" data-v-4e295514="">
                            <img src="../../assets/static/image/61d50277ca8872786ce33a35a650843c.93e5b38b.png"
                                class="coin_icon" data-v-4e295514="">
                            <input type="text" :placeholder="$t('key9')" class="amount_input" v-model="exchange_rate"
                                readonly="" data-v-4e295514="">
                            <span class="coin_sympol" data-v-4e295514=""> USDT </span>
                        </div>
                    </div>
                    <div class="send_action fs-32 ff_NunitoBold" data-v-4e295514="" @click="exchangeCoin">
                        {{ $t('key82') }}</div>
                </div>
                <div class="single_tips" data-v-4e295514="">{{ $t('key92') }}</div>
            </div>

        </div>

        <van-number-keyboard theme="custom" extra-key="." close-button-text="Close" :show="shownumberKey"
            @blur="shownumberKey = false" @input="onInput" @delete="onDelete">
        </van-number-keyboard>
    </div>
</template>

<script>
import { exchangeCoin, getWalletDetails, recharge, withdraw } from '@/api/user'
import tab from '@/components/tab.vue'
import Clipboard from 'clipboard'
import QRCode from 'qrcode'

export default {
    name: 'wallet-info',
    props: {
    },
    components: {
        tab
    },
    data() {
        return {
            fileList: [],
            exchange_rate: '',
            shownumberKey: false,
            num: {
                convertNum: '',
                sendNum: '',
                rechargeNumber: ''
            },
            tabindex: 0,
            codeTabIndex: 0,
            sendTabIndex: 0,
            coin: '',
            walletInfo: {},
            receive_asset: [],
            send_asset: [],
            receiveAddress: '',
            sendAddress: '',
            rechargeImgBase64: '',
            file: null
        }
    },
    mounted() {
        this.coin = this.$route.query.coin
        this.getWalletDetails()
    },
    methods: {
        deleteFile() {
            this.rechargeImgBase64 = ''
            this.file = null
            this.fileList = []
        },
        afterRead(file) {
            this.fileList = [
                {
                    url: file.content,
                    isImage: true
                }
            ]
            this.rechargeImgBase64 = file.content
            this.file = file.file
        },
        recharge() {
            if (!this.num.rechargeNumber) return this.$toast(this.$t('key30'))
            if (!this.file) return this.$toast('key95')
            var formData = new FormData()
            formData.append("coin", this.walletInfo.coin)
            formData.append("amount", this.num.rechargeNumber)
            formData.append("image", this.file)
            recharge(formData).then(res => {
                let data = res.data
                this.$toast(data.msg)
                if (data.code === 1) {
                    this.getWalletDetails()
                    this.num.rechargeNumber = ''
                    this.deleteFile()
                }
            })
        },
        withdraw() {
            if (!this.num.sendNum) return this.$toast(this.$t('key30'))
            withdraw({
                coin: this.walletInfo.coin,
                amount: this.num.sendNum,
                link: this.sendAddress
            }).then(res => {
                let data = res.data
                this.$toast(data.msg)
                if (data.code === 1) {
                    this.getWalletDetails()
                    this.num.sendNum = ''
                }
            })
        },
        exchangeCoin() {
            if (!this.num.convertNum) return this.$toast(this.$t('key30'))
            exchangeCoin({
                coin: this.walletInfo.coin,
                amount: this.num.convertNum
            }).then(res => {
                let data = res.data
                this.$toast(data.msg)
                if (data.code === 1) {
                    this.num.convertNum = ''
                    this.changeRate()
                    this.getWalletDetails()
                }
            })
        },
        useqrcode() {
            var canvas = document.getElementById('yqrcode')
            QRCode.toCanvas(canvas, this.receiveAddress, { width: 180, height: 180, margin: 1 })
        },
        getWalletDetails() {
            getWalletDetails({ coin: this.coin }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.walletInfo = data.data
                    this.receive_asset = []
                    this.send_asset = []
                    for (let key in data.data.receive_asset) {
                        this.receive_asset.push({
                            name: key,
                            address: data.data.receive_asset[key],
                        })
                    }
                    for (let key in data.data.send_asset) {
                        this.send_asset.push({
                            name: key,
                            address: data.data.send_asset[key],
                        })
                    }
                    this.receiveAddress = this.receive_asset[0].address
                    this.sendAddress = this.send_asset[0].address
                    // this.useqrcode()
                }
            })
        },
        back() {
            this.$router.back()
        },
        go(path, query) {
            this.$router.push({ path, query })
        },
        changeshownumberKey(bool) {
            this.shownumberKey = bool
        },
        onInput(value) {
            let key = ''
            if (this.tabindex === 2) key = 'convertNum'
            if (this.tabindex === 1) key = 'sendNum'
            if (this.tabindex === 0) key = 'rechargeNumber'

            this.num[key] += value

            if (key === 'convertNum') {
                this.changeRate()
            }
        },
        onDelete() {
            let key = ''
            if (this.tabindex === 2) key = 'convertNum'
            if (this.tabindex === 1) key = 'sendNum'
            if (this.tabindex === 0) key = 'rechargeNumber'
            this.num[key] = this.num[key].substring(0, this.num[key].length - 1)

            if (key === 'convertNum') {
                this.changeRate()
            }
        },
        changeRate() {
            if (this.num.convertNum) this.exchange_rate = (Number(this.num.convertNum) * this.walletInfo.exchange_rate).toFixed(4)
            else this.exchange_rate = ''
        },
        copy() {
            var clipboard = new Clipboard('.btn-copy')
            clipboard.on('success', e => {
                this.$toast({
                    message: this.$t('key96'),
                    icon: 'success',
                })
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                this.$toast({
                    message: this.$t('key97'),
                    icon: 'cross',
                })
                // 释放内存
                clipboard.destroy()
            })
        },
        changesendTabIndex(index) {
            this.sendAddress = this.send_asset[index].address
            this.sendTabIndex = index
        },
        changecodeTabIndex(index) {
            this.receiveAddress = this.receive_asset[index].address
            this.codeTabIndex = index
            this.useqrcode()
        }
    }
}
</script>

<style>
.van-password-input[data-v-4e295514] {
    margin: 0
}

.van-password-input .van-password-input__security[data-v-4e295514] {
    display: flex;
    justify-content: space-between
}

.van-password-input .van-password-input__security li[data-v-4e295514] {
    width: .66rem;
    height: .8rem;
    border: 1px solid rgba(151, 151, 151, .51);
    border-radius: .1rem
}

.recharge[data-v-4e295514] {
    padding-bottom: 1.26rem;
    font-weight: 500
}

.recharge .uppercase[data-v-4e295514] {
    text-transform: uppercase
}

.recharge .header[data-v-4e295514] {
    padding: .32rem .4rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center
}

.recharge .header .back[data-v-4e295514] {
    width: .32rem
}

.recharge .header .record[data-v-4e295514] {
    width: .4rem
}

.recharge .amount[data-v-4e295514] {
    margin-top: .16rem;
    text-align: center
}

.recharge .amount .us_num[data-v-4e295514] {
    font-size: .64rem;
    color: #353f52;
    font-weight: 600
}

.recharge .amount .coin_num[data-v-4e295514] {
    margin-top: .08rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center
}

.recharge .amount .coin_num .coin_icon[data-v-4e295514] {
    margin-right: .12rem;
    width: .32rem;
    height: .32rem;
    border-radius: 50%
}

.recharge .switch_container[data-v-4e295514] {
    margin-top: .46rem;
    padding-bottom: .56rem;
    text-align: center;
    box-shadow: 0 5px 5px #9999991a
}

.recharge .switch_container .switch_content[data-v-4e295514] {
    display: inline-block;
    background: #f5f6f8;
    border-radius: .2rem;
    padding: .08rem
}

.recharge .switch_container .switch_content .switch_item[data-v-4e295514] {
    display: inline-block;
    width: 2.14rem;
    height: .72rem;
    line-height: .72rem;
    border-radius: .2rem;
    font-size: .26rem
}

.recharge .switch_container .switch_content .switch_item.active[data-v-4e295514] {
    background: #fff
}

.recharge .main_container[data-v-4e295514] {
    margin-top: .48rem;
    padding: 0 .52rem
}

.recharge .main_container .main_content[data-v-4e295514] {
    box-shadow: 6px 12px 20px #0000001a;
    border-radius: .3rem;
    padding: .24rem .24rem .8rem
}

.recharge .main_container .main_content .titles[data-v-4e295514] {
    position: relative
}

.recharge .main_container .main_content .titles .left_icon[data-v-4e295514] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -.28rem;
    margin: auto;
    display: inline-block;
    width: .08rem;
    height: .4rem;
    background: linear-gradient(1turn, rgba(90, 71, 217, .09), #71a8e0);
    border-radius: .04rem
}

.recharge .main_container .main_content .coin_type[data-v-4e295514] {
    margin-top: .24rem;
    display: flex
}

.recharge .main_container .main_content .coin_type .coin_item[data-v-4e295514] {
    margin-right: .24rem;
    padding: 0 .24rem;
    height: .56rem;
    line-height: .56rem;
    text-align: center;
    font-size: .26rem;
    color: #353f52;
    background: #f5f6f8;
    border-radius: .1rem
}

.recharge .main_container .main_content .coin_type .coin_item.active[data-v-4e295514] {
    border: 1px solid #1652f0;
    box-sizing: border-box
}

.recharge .main_container .main_content .qr_content[data-v-4e295514] {
    margin-top: .66rem;
    text-align: center
}

.recharge .main_container .main_content .qr_content .qr_code[data-v-4e295514] {
    width: 3.66rem;
    height: 3.66rem
}

.recharge .main_container .main_content .qr_content .address[data-v-4e295514] {
    margin-top: .24rem
}

.recharge .main_container .main_content .qr_content .copy[data-v-4e295514] {
    margin-top: .32rem
}

.recharge .main_container .main_content .input_content[data-v-4e295514] {
    padding: 0 .08rem
}

.recharge .main_container .main_content .input_content .address[data-v-4e295514] {
    margin-top: .44rem;
    position: relative;
    height: .94rem;
    line-height: .94rem;
    background: #f3f4f6;
    border-radius: .2rem
}

.recharge .main_container .main_content .input_content .address.swap[data-v-4e295514] {
    margin-top: .32rem
}

.recharge .main_container .main_content .input_content .address input[data-v-4e295514] {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: .2rem;
    color: #353f52;
    caret-color: #1652f0
}

.recharge .main_container .main_content .input_content .address input[data-v-4e295514]:focus {
    border: 1px solid #1652f0
}

.recharge .main_container .main_content .input_content .address input[data-v-4e295514]::-moz-placeholder {
    color: #5f67754d
}

.recharge .main_container .main_content .input_content .address input[data-v-4e295514]:-ms-input-placeholder {
    color: #5f67754d
}

.recharge .main_container .main_content .input_content .address input[data-v-4e295514]::placeholder {
    color: #5f67754d
}

.recharge .main_container .main_content .input_content .address input.address_input[data-v-4e295514] {
    padding: 0 .32rem
}

.recharge .main_container .main_content .input_content .address input.amount_input[data-v-4e295514] {
    padding: 0 1.96rem 0 .88rem
}

.recharge .main_container .main_content .input_content .address .icon_delete[data-v-4e295514] {
    position: absolute;
    top: 0;
    bottom: 0;
    right: .32rem;
    margin: auto;
    width: .32rem
}

.recharge .main_container .main_content .input_content .address .coin_icon[data-v-4e295514] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: .32rem;
    margin: auto;
    width: .32rem;
    border-radius: 50%
}

.recharge .main_container .main_content .input_content .address .coin_sympol[data-v-4e295514] {
    position: absolute;
    top: 0;
    bottom: 0;
    right: .32rem;
    margin: auto;
    color: #5f67754d
}

.recharge .main_container .main_content .input_content .address .coin_sympol.active[data-v-4e295514] {
    color: #353f52
}

.recharge .main_container .main_content .input_content .img_swap_content[data-v-4e295514] {
    margin-top: .32rem;
    padding-left: .32rem
}

.recharge .main_container .main_content .input_content .img_swap_content .icon_swap[data-v-4e295514] {
    width: .32rem;
    vertical-align: middle
}

.recharge .main_container .main_content .send_action[data-v-4e295514] {
    margin: 0 auto;
    margin-top: .88rem;
    width: 4.46rem;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    color: #fff;
    background: #1652f0;
    border-radius: .2rem
}

.recharge .main_container .main_content .send_tips[data-v-4e295514] {
    margin-top: .44rem;
    padding: 0 .12rem;
    font-size: .24rem;
    color: #5f6775
}

.recharge .main_container .tips[data-v-4e295514] {
    margin-top: .4rem;
    padding: 0 .12rem
}

.recharge .main_container .tips .tips_titles[data-v-4e295514] {
    text-align: center
}

.recharge .main_container .tips .tips_content[data-v-4e295514] {
    margin-top: .16rem;
    color: #353f52;
    font-size: .26rem
}

.recharge .main_container .single_tips[data-v-4e295514] {
    margin-top: .4rem;
    text-align: center;
    color: #5f6775;
    font-size: .24rem
}

.recharge .popup_content .ensure_popup[data-v-4e295514] {
    width: 6.42rem;
    background: #fff;
    border-radius: .2rem;
    z-index: 2
}

.recharge .popup_content .ensure_popup .ensure_content[data-v-4e295514] {
    padding: .44rem;
    text-align: center
}

.recharge .popup_content .ensure_popup .ensure_content .icon_ensure[data-v-4e295514] {
    width: 1.26rem
}

.recharge .popup_content .ensure_popup .ensure_content .amount_info[data-v-4e295514] {
    margin-top: .56rem
}

.recharge .popup_content .ensure_popup .ensure_content .confirm[data-v-4e295514] {
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

.recharge .popup_content .ensure_popup .ensure_content .tips[data-v-4e295514] {
    margin-top: .4rem;
    font-size: .24rem;
    color: #5b616e80
}

.join-popup[data-v-4e295514] {
    padding: .48rem .4rem .35rem;
    width: 6.86rem;
    box-sizing: border-box;
    border-radius: .2rem
}

.join-popup .close[data-v-4e295514] {
    position: absolute;
    top: .32rem;
    right: .32rem;
    width: .5rem;
    height: .5rem
}

.join-popup .popup-content[data-v-4e295514] {
    text-align: center
}

.join-popup .popup-content .img-join[data-v-4e295514] {
    width: 1.27rem;
    height: 1.27rem
}

.join-popup .popup-content .join-title[data-v-4e295514] {
    margin-top: .67rem;
    padding: 0 .7rem;
    font-size: .32rem;
    color: #353f52;
    font-weight: 500
}

.join-popup .popup-content .submit-btn[data-v-4e295514] {
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

.join-popup .popup-content .tips[data-v-4e295514] {
    margin-top: .4rem;
    font-size: .24rem;
    color: #5b616e80
}
</style>

