<template>
    <div>
        <div class="title">周末游</div>
          <div class="body">
            <ul>
                <li class="item border-bottom" v-for="item of list" :key="item.id">
                    <div class="item-img-wrapper">
                        <img class="item-img" :src="item.imgUrl" alt="">
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                    </div>
                </li>
            </ul>
          </div>
    </div>
</template>

<script>
export default {
  name: 'HommeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl';
.title
  line-height : .7rem
  background : #eee
  text-indent : .2rem
  font-size : .33rem
.item-img-wrapper
   height : 4.95rem
   overflow : hidden
.body
  height : 6rem
  overflow : auto
.item-img
  width : 100%
  height : 100%
.item-info
  padding : .12rem
  min-width : 0
.item-title
  line-height : .54rem
  font-size : .32rem
  ellipsis()
.item-desc
  ellipsis()
  line-height : .3rem
  color : #666
</style>
