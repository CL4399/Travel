<template>
    <div>
        <div class="title">热销推荐</div>
          <div class="body">
            <ul>
                <router-link
                  :to="'/detail/' + item.id"
                  tag='li'
                  class="item border-bottom"
                  v-for="item of list"
                  :key="item.id">
                        <img class="item-img" :src="item.imgUrl" alt="">
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
              </router-link>
            </ul>
          </div>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommended',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl';
.title
  margin-top : .2rem
  line-height : .7rem
  background : #eee
  text-indent : .2rem
  font-size : .33rem
.body
  height : 5.8rem
  overflow : auto
.item
  display : flex
  height : 1.9rem
  overflow : hidden
.item-img
  width : 1.9rem
  height : 1.7rem
  padding : .1rem
.item-info
  flex : 1
  padding : .1rem
  min-width : 0
.item-title
  line-height : .54rem
  font-size : .32rem
  ellipsis()
.item-desc
  ellipsis()
  line-height : .3rem
  color : #666
.item-button
  margin-top : .1rem
  color : #fff
  background : #ff9300
  padding : 0 .2rem
  border-radius : .15rem
</style>
