<template>
  <div>
      <div class="banner" @click='handleBannerClick'>
        <img class="banner-img" :src="bannerImg">
          <div class="banner-info">
              <div class="banner-tittle">{{this.sightName}}</div>
              <div class="banner-number">
                <span class="iconfont banner-icon">&#xe635;</span>
                {{this.gallaryImgs.length}}
              </div>
          </div>
      </div>
      <fade-animation>
        <common-gallary
          :imgs='gallaryImgs'
          v-show='showGallary'
          @close="handleGallaryClose">
        </common-gallary>
      </fade-animation>
  </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/gallary'
import FadeAnimation from '../../../common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position : relative
  overflow : hidden
  height : 0
  padding-bottom : 55%
.banner-img
  width : 100%
.banner-info
  position : absolute
  left : 0
  right : 0
  bottom : 0
  line-height : .6rem
  display : flex
  background-image : linear-gradient(top, rgba(0, 0, 0, .1), rgba(0, 0, 0, .7))
.banner-tittle
  flex : 1
  color : #fff
  font-size : .4rem
  padding : 0 .2rem
  letter-spacing : .05rem
.banner-number
  height : .32rem
  padding : 0 .3rem
  margin-top : .18rem
  line-height : .4rem
  border-radius : .32rem
  background : rgba(0,40,50, .8)
  color : #fff
  font-size : .24rem
  .banner-icon
    font-size : .24rem
</style>
