<template>
  <div class="message">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="2" @click="ClickBlogger">返回</el-menu-item>
      <el-menu-item index="1">随笔浏览</el-menu-item>
    </el-menu>
    <div class="note">
      <el-row>
          <el-button type="primary" @click="ClickGet" class="button">获取数据</el-button>
      </el-row>
      <el-collapse
        v-for="item in land"
        :key="item.id"
        >
        <el-collapse-item name="1">
          <template slot="title">{{item.title}}</template>
          <div>{{item.title}}</div>
          <div>{{item.content}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Note',
  data () {
    return {
      land: [],
      key: [],
      blogs: []
    }
  },
  methods: {
    ClickBlogger () {
      this.$router.push('/Blogger')
    },
    ClickGet () {
      axios.get('https://blog-4399.firebaseio.com/note/note.json')
        .then(data => {
          this.land = Object.values(data.data)
        })
    }
  }
}
</script>

<style lang='stylus' scoped>
.div {
  width: 20rem;
  height: 20rem;
  position: absolute;
  top: 10rem;
}
.button
  width : 99%
  height : 2rem
  border-radius : .5rem
  margin-left : .5%
</style>
