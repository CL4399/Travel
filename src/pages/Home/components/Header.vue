<template>
    <div class="header-top">
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe60a;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            <input placeholder="输入城市/景点/游玩主题" />
        </div>
        <router-link to='/city'>
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

/* scoped限制此css样式只对当前组件有效 */
/* 1rem = html font-size = 50px  86px就是.86rem*/
<style lang="stylus" scopde>
@import '../../../assets/styles/varibles.styl';
.header-top
  position : fixed
  top : 0
  width  : 100%
  z-index : 99
.header
    display :flex
    line-height : .88rem
    background-color : $bgColor
    color :#fff
.header-left
    flex : 0.1
    width :.64rem
    float :left
.header-left span
    padding-left : 0.25rem
    font-size : 0.35rem
.header-input
    flex : 0.85
    background :#fff
    border-radius :.5rem
    margin-top :.12rem
    margin-left .08rem
    height :.65rem
    line-height :.62rem
    color :#000
    padding-left : 0.2rem
.header-input input
    padding-bottom : 0.1rem
.header-right
    padding-left : .2rem
    flex 0.5
    float :right
    text-align center
    font-size : 0.32rem
    color : #fff
.arrow-icon
    font-size : 0.35rem
</style>
