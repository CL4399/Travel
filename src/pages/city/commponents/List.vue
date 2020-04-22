<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                  <div class="button">{{this.currentCity}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper"
                v-for='item of hot'
                :key='item.id'
                @click="handleCityClick(item.name)"
                >
                  <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area"
        v-for='(item, key) of cities'
        :key="key"
        :ref='key'
        >
            <div class="title border-topbottom">{{key}}</div>
            <div
              @click="handleCityClick(vuleItem.name)"
              class="item-list"
              v-for='vuleItem of item'
              :key="vuleItem.id">
              <div class="item border-bottom">{{vuleItem.name}}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {mouseWheel: true, click: true, tap: true})
  }
}
</script>

<style lang='stylus' scoped>
.border-topbottom
  &:before
    border-color : #ccc
  &:after
    border-color : #ccc
.border-bottom
  &:before
    border-color : #666
.list
  overflow : hidden
  position : absolute
  top : 1.78rem
  left : 0
  right : 0
  bottom : 0
.title
  line-height : .3rem
  background : #eee
  padding : .2rem
  color : #666
  font-size : .3rem
.button-list
  overflow : hidden
  padding : .1rem .6rem .1rem .1rem
.button-wrapper
  float : left
  width : 33.3%
.button
  text-align : center
  margin : .1rem
  padding : .1rem 0
  background : #eee
  border-radius : .1rem
.item-list
 .item
  line-height : .64rem
  padding-left : .2rem
</style>
