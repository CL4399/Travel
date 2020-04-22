<template>
    <div class="footer">
        <router-link to="/" tag="div" class="left">
                <span class="iconfont">&#xe61b;</span>
                主页
        </router-link>
        <router-link to="/weather" tag="div" class="right">
                <span class="iconfont">&#xe69c;</span>
                天气
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang='stylus' scoped>
.footer
  position : fixed
  bottom  : 0
  width  : 100%
  z-index : 99
  display : flex
  height : .8rem
  text-align : center
  background : #eee
  line-height : .8rem
.left
  flex : 1
.right
  flex : 1
</style>
