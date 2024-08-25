<template>
  <div class="arbitrage_record">
    <div class="back" data-v-ac6cd016="" @click="back" v-if="backIconType === 1" style="padding: 0.32rem 0.4rem;">
      <img src="../assets/static/image/icon_back_business.64307c1a.svg" data-v-ac6cd016="" v-if="color === 'black'">
      <img src="../assets/static/image/icon_back_white.fcc736c3.ed3cdad7.svg" style="    width: 0.4rem;" data-v-ac6cd016="" v-if="color === 'white'">
    </div>
    <div class="header" data-v-7932180b="" v-if="backIconType === 2">
      <span class="back" data-v-7932180b="">
        <svg xmlns="http://www.w3.org/2000/svg" @click="back" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--feather" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="feather:arrow-left" data-v-7932180b="">
          <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7l7-7"></path>
          </g>
        </svg>
      </span>
      <span class="fs-36 fc-353F52 ff_NunitoSemiBold" data-v-7932180b="">{{title}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    color: {
      default: 'black'
    },
    titleIconName: {},
    iconName: {},
    backIconType: {
      default: 1
    },
    title: {},
    rightText: {},
    fixed: {
      default: true
    },
    rightUrl: {
      default: ''
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    titleEmit () {
      this.$emit('on-titleclick')
    },
    parentEmit () {
      this.$emit('on-iconclick')
    },
    go () {
      if (this.rightUrl) this.$router.push({ path: this.rightUrl })
      else this.$emit('on-rightlick')
    },
    backEmit () {
      this.$emit('on-back')
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style>
.back img[data-v-ac6cd016] {
    width: 0.32rem;
}
</style>

