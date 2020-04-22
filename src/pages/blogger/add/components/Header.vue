<template>
  <div>
    <div class="header">
      <div class="top">
      <a href="#">Top</a>
    </div>
    </div>
    <div class="nav">
        <div class="nav-first">墨</div>
        <div class="nav-center">
            <router-link to="/Home" tag="div">主页</router-link>
            <router-link to="/NoteControl" tag="div">随笔管理</router-link>
            <router-link to="/Message" tag="div">用户管理</router-link>
        </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'AddHeader'
}

</script>

<style lang='stylus' scoped>
.nav
  position : fixed
  top : 0
  display : flex
  text-align : center
  width : 100%
  height : 2rem
  line-height : 2rem
  background : #000
  z-index : 99
  color : #fff
.nav-first
  flex : .5
  padding : 0 1rem
  background : #000
  color : #fff
.nav-center
  flex : 1
  display : flex
.nav-center div
  flex : 1
.TopTwo
  background: linear-gradient(top, white, #eee)
  border-radius : 1rem
  color : #000
  transition : all 0.5s linear
  &:hover
   background: linear-gradient(top, white, #ccc)
   transform : scale(1.05)
.top
  position : fixed
  bottom : 1rem
  right : 1rem
  background: linear-gradient(top left, white, #99ffff)
  border-radius : 3rem 3rem 1rem 1rem
  width : 3rem
  height : 3rem
  z-index : 99
  text-align : center
  line-height : 3rem
  a
   text-decoration:none
   color : #000
</style>
