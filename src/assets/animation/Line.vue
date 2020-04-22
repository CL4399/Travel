<template>
  <div>
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang='stylus' scoped>
.v-enter {
  transform: rotate(0deg)
}
.v-leave-to {
  transform : rotate(360deg)
  transition: all 3s ease;
}
</style>
