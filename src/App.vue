<template>
  <div id="app">
        <router-view />
        <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="polygon"
          :particleSize="4"
          linesColor="#FFFFFF"
          :linesWidth="2"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        ></vue-particles>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='stylus'>
 #particles-js{
        width: 100%;
        height: 100%;
        position: absolute;   //设置absolute,其他DIV设置为relative，这样这个例子效果就作为背景
        z-index : -1
    }
</style>
