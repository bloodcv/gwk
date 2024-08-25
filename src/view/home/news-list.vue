<template>
    <div>
        <header-nav :backIconType="2" :title="$t('key0')"></header-nav>
        <div class="view-wrapper has-top-nav" data-v-58aecc89="">
            <div class="page-content-wrapper" data-v-58aecc89="">
                <div class="page-content is-relative" data-v-58aecc89="" style="padding: 16px;padding-top: 0;">
                    <div class="is-navbar-lg" data-v-58aecc89="">
                        <div class="news-container" data-v-57998186="">
                            <div class="home-news" data-v-57998186="">
                                <div class="news-content" data-v-57998186="">

                                    <van-pull-refresh v-model="loading" @refresh="getNewsListXiala"
                                        pulling-text="Pull down to refresh.." loosing-text="Release to refresh..."
                                        loading-text="loading...">
                                        <van-list v-model="loading" :finished="finished" loading-text="loading..."
                                            @load="getNewsList">
                                            <div class="news-item" data-v-57998186=""
                                                @click="changenewsPanelModal(true, item.link)"
                                                v-for="(item, index) in List" :key="index">
                                                <div class="news-info" data-v-57998186="">
                                                    <div class="main-title" data-v-57998186="">
                                                        <span class="fs-26" data-v-57998186=""> {{ item.title }} </span>
                                                        <span class="date fs-26"
                                                            data-v-57998186="">{{ item.news_time }}</span>
                                                    </div>
                                                    <div class="subtitle" data-v-57998186="">{{ item.abstract }}</div>
                                                    <div class="author" data-v-57998186="">{{ item.author }} </div>
                                                </div>
                                                <div class="news-img" data-v-57998186="">
                                                    <img :src="item.image" class="img-pic" data-v-57998186="">
                                                </div>
                                            </div>

                                        </van-list>
                                        <no-data v-if="List.length <= 0"></no-data>
                                    </van-pull-refresh>
                                </div>
                            </div>
                        </div>
                        <div id="news-panel" class="right-panel-wrapper is-news" data-v-ed59e634="" data-v-57998186="">
                            <div class="panel-overlay" tabindex="0" data-v-ed59e634=""></div>
                            <div class="right-panel" data-v-ed59e634="">
                                <div class="right-panel-head" data-v-ed59e634="">
                                    <div data-v-ed59e634="" style="width: 90px;">
                                        <a class="close-panel" tabindex="0" data-v-ed59e634="">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                                class="iconify iconify--fluent" width="1em" height="1em"
                                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
                                                data-icon="fluent:arrow-left-24-regular" data-v-ed59e634="">
                                                <g fill="none">
                                                    <path
                                                        d="M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a.995.995 0 0 0-.3.58a.754.754 0 0 0 .001.289a.995.995 0 0 0 .3.579l7.419 7.067z"
                                                        fill="currentColor"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                    <span data-v-ed59e634="">{{$t('key0')}}</span>
                                    <div class="head-end" data-v-ed59e634=""></div>
                                </div>
                                <div class="right-panel-body has-slimscroll" data-v-ed59e634="">
                                    <!---->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <news-panel v-model="newsPanelModal" :url="link"></news-panel>
    </div>
</template>

<script>
import headerNav from '@/components/header-nav.vue'
import newsPanel from '@/components/news-panel.vue'
import { getNewsList } from '@/api/user'
import noData from '@/components/no-data.vue'

export default {
    name: 'news-list',
    props: {
    },
    components: {
        headerNav,
        newsPanel,
        noData
    },
    data() {
        return {
            link: '',
            page: 1,
            page_size: 20,
            loading: false,
            finished: false,
            List: [],
            newsPanelModal: false,
        }
    },
    mounted() {
        this.getNewsList()
    },
    methods: {
        reset() {
            this.page = 1
            this.loading = false
            this.finished = false
            this.List = []
        },
        getNewsListXiala() {
            this.reset()
            this.getNewsList()
        },
        getNewsList() {
            this.loading = true
            getNewsList({ page: this.page, page_size: this.page_size }).then(res => {
                let data = res.data
                this.loading = false
                if (data.code == 1) {
                    this.List.push(...data.data.list)
                    this.page++
                }
                if (this.List.length >= data.data.count) this.finished = true
            })
        },
        changenewsPanelModal(bool, link) {
            this.link = link
            this.newsPanelModal = bool
        },
    }
}
</script>

<style>
/*! _variables.scss | Vuero | Css ninja 2020-2021 */
[data-v-57998186] .navbar {
    padding: 0px .34rem;
    min-height: 1.25rem;
    height: 0
}

[data-v-57998186] .navbar .container {
    min-height: 1.25rem
}

[data-v-57998186] .navbar-brand {
    min-height: 1.25rem;
    display: flex
}

.news-container[data-v-57998186] {
    line-height: normal
}

.news-container .news-title[data-v-57998186] {
    font-size: .4rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center
}

.news-container .news-title .more[data-v-57998186] {
    color: #1652f0;
    font-weight: 700;
    font-size: .32rem
}

.news-container .news-content[data-v-57998186] {
    margin-top: .4rem
}

.news-container .news-content .news-item[data-v-57998186] {
    margin-bottom: .76rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: flex-start
}

.news-container .news-content .news-item .news-info[data-v-57998186] {
    width: 72%
}

.news-container .news-content .news-item .fs-26[data-v-57998186] {
    font-size: .26rem;
    color: #5f6775
}

.news-container .news-content .news-item .date[data-v-57998186] {
    color: #f68d29;
    margin-left: .16rem
}

.news-container .news-content .news-item .subtitle[data-v-57998186] {
    margin: .08rem 0;
    font-weight: 600;
    font-size: .28rem;
    font-family: NunitoBold
}

.news-container .news-content .news-img[data-v-57998186] {
    margin-left: .62rem
}

.news-container .news-content .news-img img[data-v-57998186] {
    width: 1.32rem;
    height: 1.32rem;
    border-radius: .1rem
}

.v-button[data-v-57998186] {
    width: 2.66rem;
    height: .84rem;
    font-size: .28rem;
    border-radius: 14px
}

.load-more-btn[data-v-57998186] {
    margin-top: .6rem;
    text-align: center
}

.nomore-tips[data-v-57998186] {
    color: #353f5280;
    margin-top: .6rem;
    text-align: center
}
</style>

