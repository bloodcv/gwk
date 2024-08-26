<template>
    <div class="arbitrage_intro" data-v-899b0a96="">
      <div class="header" data-v-899b0a96="">
          <span data-v-899b0a96="">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" @click="back" role="img" class="iconify iconify--feather back" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="feather:x" data-v-899b0a96="">
                  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 6L6 18"></path>
                      <path d="M6 6l12 12"></path>
                  </g>
              </svg>
          </span>
          <span class="fs-32 ff_NunitoSemiBold" data-v-899b0a96="">Ai{{$t('key6')}}</span>
      </div>
      <div class="intro_content" data-v-899b0a96="">
          <div class="intro_img" data-v-899b0a96="">
              <img src="../../assets/static/image/img_invest.49cd0918.9336986f.png" data-v-899b0a96="">
          </div>
          <div class="intro_detail ff_NunitoRegular" data-v-899b0a96="">
              <p>
                  <strong>
                      <span style="color:#0066cc;">{{$t('key14')}}</span>
                  </strong>
              </p>

              <p>{{$t('key15')}}</p>

              <p>{{$t('key16')}}</p>

              <p>
                  <span style="color:#0066cc;">
                      <strong>{{$t('key17')}}</strong>
                  </span>
              </p>

              <p>{{$t('key18')}}</p>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name: 'intro',
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
.arbitrage_intro[data-v-899b0a96] {
    padding-bottom: .5rem;
    font-weight: 500
}

.arbitrage_intro .header[data-v-899b0a96] {
    position: relative;
    padding: .27rem .44rem;
    text-align: center
}

.arbitrage_intro .header .back[data-v-899b0a96] {
    position: absolute;
    top: 0;
    left: .44rem;
    bottom: 0;
    margin: auto;
    font-size: .5rem
}

.arbitrage_intro .intro_content[data-v-899b0a96] {
    padding: .32rem
}

.arbitrage_intro .intro_content .intro_img[data-v-899b0a96] {
    text-align: center
}

.arbitrage_intro .intro_content .intro_img img[data-v-899b0a96] {
    width: 1.94rem
}

.arbitrage_intro .intro_content .intro_detail[data-v-899b0a96],
.arbitrage_intro .intro_content .intro_item[data-v-899b0a96] {
    margin-top: .64rem
}

.arbitrage_intro .intro_content .intro_item .intro_title[data-v-899b0a96] {
    font-size: .4rem;
    color: #1652f0
}

.arbitrage_intro .intro_content .intro_item .intro_text[data-v-899b0a96] {
    font-size: .32rem;
    color: #333
}

.arbitrage_intro .intro_content .intro_item .intro_text .text[data-v-899b0a96] {
    margin-top: .4rem
}

.arbitrage_intro p[data-v-899b0a96] {
    color: #000;
    margin: 0
}

[data-v-899b0a96] .intro_detail p {
    margin: 10px 0
}

[data-v-899b0a96] .intro_detail strong {
    color: inherit
}
</style>

