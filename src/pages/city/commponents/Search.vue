<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content"
      ref="search"
      v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
        v-for="item of list"
        :key="item.id"
         @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      // 实现搜索逻辑，当搜索到时将数据push到lresult数组里面去
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        // 让这个list数组等于result这个数组，然后在上面的li标签里面去循环输出list这个数组
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {mouseWheel: true, click: true, tap: true})
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $agColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background-color #eee
.search-item
  line-height : .62rem
  padding-left : .2rem
  background : #fff
  color : #666
</style>
