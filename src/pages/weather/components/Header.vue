/* eslint-disable no-undef */
<template>
  <div>
    <div>
      <div>
        <div>
          <div class="header">
            <router-link class="back" to="/">
              <div class="iconfont">&#xe60a;</div>
            </router-link>
            <div class="title">查看天气</div>
          </div>
          <div class="search">
            <input
              placeholder="输入城市"
              v-model="city"
              type="text"
              class="form-control"
            />
          </div>
          <button class="button" @click="searchWeather">查询该城市天气</button>
        </div>
        <div class="footer">
              <div class="thead">
                <span>天气</span>
                <span>低温</span>
                <span>高温</span>
                <span>星期</span>
              </div>
            <div v-for="item of weatherList" :key="item.index">
              <div class="tbody">
                <span>{{item.type}}</span>
                <span>{{item.low}}</span>
                <span>{{item.high}}</span>
                <span>{{item.date}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'WeatherHeader',
  data () {
    return {
      city: '',
      weatherList: []
    }
  },
  methods: {
    searchWeather: function () {
      var that = this
      axios
        .get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
        .then(function (response) {
          that.weatherList = response.data.data.forecast
        })
      if (!this.city) {
        alert('请输入城市名字')
      }
    },
    changecity: function (cityin) {
      this.city = cityin
      this.searchWeather()
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  display : flex
  height : .8rem
  font-size : .5rem
  line-height : .8rem
  background : red
  margin-bottom : .3rem
  color : #fff
.back
  flex : 1
.iconfont
  font-size : .5rem
  color : #eee
  margin-left : .3rem
.title
  flex : 7
  padding-left : 1.8rem

.serach
  margin-top : 1rem
  width: 7.5rem;
  height: .3rem;

.form-control {
    outline: none;
    box-shadow: .02rem .02rem .3rem #000;
    border: 1px solid #eee;
    font-size: 0.4rem;
    color : #000
    height : .2rem
    width: 7rem;
    margin-left: 0.25rem;
  }

.button {
  outline : none
  width: 6.5rem;
  height: 0.8rem;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  background: #eee;
  border-radius: 0.2rem;
  }

.footer
  width : 7rem
  height : 7rem
  padding-top : .2rem
.thead
  display : flex
  width : 7rem
  text-align : center
  font-size : .5rem
  margin-top : .2rem
  span
   flex : 1
.tbody
  padding-top : .2rem
  display : flex
  width : 7rem
  text-align : center
  font-size : .4rem
  span
   flex : 1
   height : 1rem
</style>
