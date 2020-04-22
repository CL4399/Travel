<template>
  <div>
    <div class="nav" name="top">
        <div class="nav-first">墨</div>
        <div class="nav-center">
            <router-link class="TopOne" to="/Home" tag="div">主页</router-link>
            <router-link to="/Note" tag="div">随笔</router-link>
            <router-link to="/AboutMe" tag="div">关于我</router-link>
        </div>
    </div>
    <div class="top">
      <a href="#top">Top</a>
      </div>
   </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}

</script>

<style lang='stylus' scoped>
.nav
  position : fixed
  top : 0
  z-index : 99
  display : flex
  text-align : center
  width : 100%
  height : 2.5rem
  line-height : 2.5rem
  background : #000
  max-width : 100%
  color : #fff
.nav-first
  font-size : 1.5rem
  flex : .5
  padding : 0 1rem
.nav-center
  flex : 1
  display : flex
.nav-center div
  flex : 1
.TopOne
  background: linear-gradient(top, white, #eee)
  border-radius : 1rem
  transition : all 0.5s linear
  color : #000
  &:hover
   background: linear-gradient(top, white, #ccc)
.top
  position : fixed
  right : 2rem
  bottom : 2rem
  width : 3rem
  height : 3rem
  text-align :center
  line-height : 3rem
  background : #eee
  border-radius : 2rem
</style>
