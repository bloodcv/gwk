<template>
    <div id="news-panel" class="right-panel-wrapper is-news" :class="[value ? 'is-active' : '']" data-v-ed59e634="" data-v-51fd882a="">
        <div class="panel-overlay" tabindex="0" data-v-ed59e634=""></div>
        <div class="right-panel" data-v-ed59e634="">
            <div class="right-panel-head" data-v-ed59e634="">
                <div data-v-ed59e634="" style="width: 90px;">
                    <a class="close-panel" tabindex="0" data-v-ed59e634="" @click="$emit('input', false)">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="fluent:arrow-left-24-regular" data-v-ed59e634="">
                            <g fill="none">
                                <path d="M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a.995.995 0 0 0-.3.58a.754.754 0 0 0 .001.289a.995.995 0 0 0 .3.579l7.419 7.067z" fill="currentColor"></path>
                            </g>
                        </svg>
                    </a>
                </div>
                <span data-v-ed59e634="">{{$t('key0')}}</span>
                <div class="head-end" data-v-ed59e634=""></div>
            </div>
            <div class="right-panel-body has-slimscroll" data-v-ed59e634="" v-if="value">
                <iframe class="news-content" :src="url" frameborder="0" data-v-ed59e634=""></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from '@/components/header-nav.vue'

export default {
    name: 'news-panel',
    props: {
        url: {},
        value: Boolean
    },
    components: {
        headerNav
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style>
</style>

