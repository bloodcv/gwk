<template>
    <div class="mining_intro" data-v-3bb86546="">
        <div class="header" data-v-3bb86546="">
            <span data-v-3bb86546="">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" @click="back" role="img" class="iconify iconify--feather back" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="feather:x" data-v-3bb86546="">
                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6l12 12"></path>
                    </g>
                </svg>
            </span>
            <span class="fs-32 ff_NunitoSemiBold" data-v-3bb86546=""> {{$t('key117')}} </span>
        </div>
        <div class="intro_content" data-v-3bb86546="">
            <div class="intro_img" data-v-3bb86546="">
                <img src="../../assets/static/image/img_mining_intro.7b66b255.0d7725cb.png" data-v-3bb86546="">
            </div>
            <div class="intro_detail ff_NunitoRegular" data-v-3bb86546="">
                <p>{{$t('key118')}}</p>

                <p>
                    <strong>
                        <span style="color:#0066cc;">{{$t('key119')}}</span>
                    </strong>
                </p>

                <p>{{$t('key120')}}</p>

                <p>
                    <span style="color:#0066cc;">
                        <strong>{{$t('key121')}}</strong>
                    </span>
                </p>

                <p>{{$t('key122')}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'mining-intro',
    props: {
    },
    components: {
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        back() {
            this.$router.back()
        }
    }
}
</script>

<style>
.mining_intro[data-v-3bb86546] {
    padding-bottom: .5rem;
    font-weight: 500
}

.mining_intro .header[data-v-3bb86546] {
    position: relative;
    padding: .27rem .44rem;
    text-align: center
}

.mining_intro .header .back[data-v-3bb86546] {
    position: absolute;
    top: 0;
    left: .44rem;
    bottom: 0;
    margin: auto;
    font-size: .5rem
}

.mining_intro .intro_content[data-v-3bb86546] {
    padding: .32rem
}

.mining_intro .intro_content .intro_img[data-v-3bb86546] {
    text-align: center
}

.mining_intro .intro_content .intro_img img[data-v-3bb86546] {
    width: 2.7rem
}

.mining_intro .intro_content .intro_detail[data-v-3bb86546],
.mining_intro .intro_content .intro_item[data-v-3bb86546] {
    margin-top: .64rem
}

.mining_intro .intro_content .intro_item .intro_title[data-v-3bb86546] {
    font-size: .4rem;
    color: #1652f0
}

.mining_intro .intro_content .intro_item .intro_text[data-v-3bb86546] {
    font-size: .32rem;
    color: #333
}

.mining_intro .intro_content .intro_item .intro_text .text[data-v-3bb86546] {
    margin-top: .4rem
}

.mining_intro p[data-v-3bb86546] {
    color: #000;
    margin: 0
}
</style>

