<template>
    <div>
        <router-link
            tag="div" to='/'
            class="header-abs"
            v-show="showAbs">
            <div class="iconfont">&#xe60a;</div>
        </router-link>
        <div class="header-fixed" v-show='!showAbs' :style="opacityStyle">
            <router-link to='/'>
                <div class="iconfont header-fixed-back">&#xe60a;</div>
            </router-link>
            <div class="title">
                景点详情
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';
.header-abs
  position : absolute
  top: .2rem
  left: .2rem
  width : .6rem
  height : .6rem
  text-align : center
  line-height : .6rem
  border-radius : .4rem
  background : rgba(0,0,0, .8)
  color : #ccc
  padding-left : .1rem
.header-fixed
  z-index : 98
  position : fixed
  display : flex
  top : 0
  right : 0
  left : 0
  height : .7rem
  line-height : .7rem
  background : $agColor
  overflow : hidden
  color : #fff
  font-size : .5rem
.header-fixed-back
  flex : 1
  padding-left : .3rem
  color : #fff
  width : .64rem
  font-size : .4rem
.title
  margin-left : 2.2rem
  font-size : .4rem
  letter-spacing : .2rem
</style>
