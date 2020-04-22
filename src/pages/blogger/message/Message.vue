<template>
  <div class="message">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="2" @click="ClickBlog">返回</el-menu-item>
      <el-menu-item index="1">用户中心</el-menu-item>
    </el-menu>
    <div class="note">
      <el-row>
          <el-button type="primary" @click="ClickGet" class="button">获取数据</el-button>
      </el-row>
      <el-collapse
        v-for="item in user"
        :key="item.id"
        >
        <el-collapse-item name="1">
          <template slot="title">{{item.username}}</template>
          <div>{{item.username}}</div>
          <div>{{item.password}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Message',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      user: []
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    ClickBlog () {
      this.$router.push('/Blogger')
    },
    ClickGet () {
      axios.get('https://blog-4399.firebaseio.com/land/note.json').then(data => {
        this.user = data.data
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.message {
  position: absolute;
  top: 0;
  background: #fff;
  width: 100%;
}
.button
  width : 99%
  height : 2rem
  border-radius : .5rem
  margin-left : .5%
</style>
