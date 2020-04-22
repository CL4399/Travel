<template>
  <div class="top">
    <h1>用户登录</h1>
    <div class="land">
      <div class="land-username">
        <div class="name">用户名 :</div>
        <div class="text">
          <el-input
            type="text"
            placeholder="请输入用户名"
            v-model="datas.username"
            maxlength="8"
            show-word-limit
            size="medium"
          ></el-input>
          <div style="margin: 20px 0;"></div>
        </div>
      </div>
      <div class="land-password">
        <div class="password">密码 :</div>
        <div class="text-pw">
          <el-input size="medium" placeholder="请输入密码" v-model="datas.password" show-password></el-input>
        </div>
      </div>
      <el-row class="button">
        <el-button class="button-to" @click="handleClickGet" round>登录</el-button>
        <router-link class="button-register" to="/Logon">
          <el-button type="text">注册</el-button>
        </router-link>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Land',
  data () {
    return {
      datas: {
        username: '',
        password: ''
      },
      land: [],
      blogger: {
        username: '4396',
        password: '439621652?CL'
      }
    }
  },
  methods: {
    handleClickGet () {
      // eslint-disable-next-line no-unused-vars
      if (this.blogger.username === this.datas.username) {
        this.$router.push('/Blogger')
      }
      axios
        .get('https://blog-4399.firebaseio.com/land/note.json')
        .then(data => {
          this.land = data.data
          // console.log(this.land)
          // console.log(this.land[0].username)
          // eslint-disable-next-line no-unused-vars
          let user = Object.values(this.land).find(item => {
            // console.log(item.username)
            // console.log(this.datas.username)
            return item.username === this.datas.username
          })
          if (!user) {
            alert('此账户不存在')
          } else if (user.password === this.datas.password) {
            this.$router.push('/Home')
          } else {
            alert('用户名或者密码错误')
          }
        })
    }
  }
}
</script>

<style lang='stylus' scoped>
.top {
  width: 25rem;
  height: 20rem;
  background-image: linear-gradient(rgba(94, 71, 111, 0.3), rgba(231, 111, 146, 0.7));
  border-radius: 1rem;
  position: absolute;
  top: 25%;
  left: 40%;
  text-align: center;
  color: #ccc;
  box-shadow: 0.002rem 0.002rem 1rem #fff;

  h1 {
    text-shadow: 0.002rem 0.002rem 1rem #00ffff;
    color: #fff;
    letter-spacing: 0.2rem;
  }
}

.land-username {
  display: flex;
  width: 20rem;
}

.name {
  flex: 1.2;
  font-size: 1.2rem;
  text-align: left;
}

.text {
  flex: 4;
}

.land-password {
  display: flex;
}

.password {
  text-align: left;
  font-size: 1.2rem;
  flex: 1.2;
}

.text-pw {
  flex: 4;
}

.land {
  width: 20rem;
  height: 6.5rem;
  margin: 3rem auto;
}

.button {
  margin-top: 2rem;
  display: flex;
}

.button-to {
  flex: 1;
  border-radius: rem;
}

.button-register {
  flex: 0.5;
  background: #fff;
  border-radius: 2rem;
}
</style>
