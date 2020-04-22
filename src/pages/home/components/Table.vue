/* eslint-disable no-unused-vars */
<template>
  <div class="top">
    <div class="left">
      <table-left></table-left>
    </div>
    <div class="top-conent">
      <h1>博客总览</h1>
      <div class="content">
        <el-collapse v-for="item in blogs" :key="item.id">
          <el-collapse-item name="1">
            <template slot="title">{{item.title}}</template>
              <div class="title">{{item.title | to-uppercase}}</div>
              <div class="content">{{item.content | snippet}}</div>
              <div>类别：{{item.categories}}</div>
              <div class="author">作者：{{item.author}}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import TableLeft from './TableLeft'
import axios from 'axios'
export default {
  name: 'HomeTable',
  data () {
    return {
      blogs: []
    }
  },
  components: {
    TableLeft
  },
  created () {
    /*
      this.$http.get('../../../../static/mock/city.json') 请求本地的数据
    */
    axios.get('https://blog-4399.firebaseio.com/post.json')
      .then(data => {
        this.blogs = data.data
      })
  },
  filters: {
    'to-uppercase': function (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style lang='stylus' scoped>
.top {
  display: flex;
}

.left {
  position: fixed;
  left: 0;
  top: 5rem;
  flex: 1;
  width: 48rem;
  height: 49rem;
  z-index: 99;
}

.top-conent {
  position: absolute;
  top: 5rem;
  right: 10rem;
  flex: 1;
  text-align: center;
  background: #fff;
  width: 42rem;
  filter: Alpha(opacity = 70);
  opacity: 0.9;
  overflow : auto
  border-radius: 2rem 2rem 0.5rem 0.5rem;
  box-shadow: 2rem 1rem 2rem #000;
  background: linear-gradient(360deg, #4E4065, #C5668C, #ccffff, #ccc, #ccffff, #C5668C, #4E4065);

  h1 {
    text-shadow: 0.3rem 0.2rem 0.2rem #fff;
  }
}

.top-conent h1 {
  font-size: 2.5rem;
}

.single-blog {
  border-radius: 0.5rem;
  width: 40rem;
  height: 20rem;
}

.content {
  letter-spacing: 0.2rem;
  color: #000;
  padding : 0 .5rem
  padding-bottom : .8rem
}

.title
  font-size : 1.5rem
  border-bottom : 1px solid #ccc
  text-align : center
.content
  text-indent : 2rem
  text-align : left
  font-size : 1.05rem
</style>
