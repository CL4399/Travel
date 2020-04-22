<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
.v-enter, .v-leave-to
  background-position: 0%
.v-enter-active, .v-leave-active
  background : red
  transition: opacity 1 3s
</style>
