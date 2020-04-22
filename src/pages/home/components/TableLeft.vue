<template>
    <div class="table">
        <div class="div">
            {{hour}}:{{min}}:{{second}}
        </div>
        <div class="swiper">
            <div class="wrapper">
                <swiper v-if="showSwiper" :options="swiperOption" class="swiper-container" >
                    <swiper-slide class="swiper-item" v-for='item of swiper' :key='item.id'>
                        <img class='swiper-img' :src='item.imgUrl' alt="星空" />
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TableLeft',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: {
          delay: 4000
        }
      },
      swiper: [{
        id: '001',
        imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4005610539,1460288450&fm=26&gp=0.jpg'}, {
        id: '002',
        imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=308135526,268397684&fm=26&gp=0.jpg'}, {
        id: '003',
        imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1592201907,2965357656&fm=26&gp=0.jpg'}, {
        id: '004',
        imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3032198665,3895567120&fm=26&gp=0.jpg'}],
      time: '15:44:00',
      date: null,
      hour: '00',
      min: '00',
      second: '00',
      timer: null
    }
  },
  computed: {
    showSwiper () {
      return this.swiper.length
    }
  },
  methods: {
    autoMove () {
      this.timer = setInterval(res => {
        let date = new Date()
        this.second = date.getSeconds()
        this.min = date.getMinutes()
        this.hour = date.getHours()
      }, 1000)
    }
  },
  mounted () {
    this.autoMove()
  }
}

</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 60%
.table
  z-index : 99
.clock
  display : flex
.div
  width : 100%
  height : 10rem
  margin-top  : 5rem
  margin-left : 28rem
  flex : 1
  line-height : 10rem
  font-size : 3rem
  color: #ffffff;
  text-align: center;
  -webkit-transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
.span
  font-size : 3rem
.swiper
  flex : 1
  margin-left : 3rem
  box-shadow : .5rem .5rem 5rem #eee;
  width : 100%
  overflow : hidden
  text-align : center
  background : #000
  border-radius : 1rem
.swiper-img
  width : 100%
</style>
