<template>
    <div class="header">
      <div class="header-back">
        <router-link to='/'>
          <div class="iconfont header-back">&#xe60a;</div>
        </router-link>
      </div>
      <div class="title">
        城市选择
      </div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '../../../assets/styles/varibles.styl';
.header
  display : flex
  background : $agColor
  height : $headerHeight
  line-height : $headerHeight
  overflow : hidden
  letter-spacing : .4rem
  color : #fff
  font-size : .5rem
.header-back
  padding-left : .15rem
  flex 0.8
  color : #fff
  width : .64rem
  font-size : .4rem
.title
  flex : 15
  text-align : center
  padding-right : .3rem
</style>
