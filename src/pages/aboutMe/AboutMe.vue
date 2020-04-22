<template>
  <div class="whole">
    <div class="header">
      <div class="top">
        <a href="#">Top</a>
      </div>
    </div>
    <div class="nav">
      <div class="nav-first">墨</div>
      <div class="nav-center">
        <router-link to="/Home" tag="div">主页</router-link>
        <router-link to="/Note" tag="div">随笔</router-link>
        <router-link class="TopFour" to="/AboutMe" tag="div">关于我</router-link>
      </div>
    </div>
    <div class="body">
      <p>一个自学前端的小渣渣的处女之作，写的丑请见谅，哈哈哈</p>
      <p>QQ : 439621652</p>
      <p>邮箱 : 439621652@qq.com</p>
    </div>
    <div class="friend">
      <div class="div">友链</div>
      <p>
        <a class="a" href="https://www.bilibili.com/">B站</a>
      </p>
      <p>
        <a class="a" href="https://www.baidu.com/">百度</a>
      </p>
    </div>
    <div class="footer">
      <fade-line>
        <div class="one" v-show="!show">
          <div class="two"></div>
          <div class="three">439621652</div>
          <div class="three-two">439621652@qq.com</div>
          <div class="four">QQ</div>
          <div class="four-two">邮箱</div>
        </div>
      </fade-line>
      <button class="button" @click="handleDown">转起来</button>
    </div>
  </div>
</template>

<script>
import FadeLine from '../../assets/animation/Line'
export default {
  name: 'AboutMe',
  components: {
    FadeLine
  },
  methods: {
    handleDown () {
      this.show = !this.show
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang='stylus' scoped>
.whole {
  position: relative;
  width: 100%;
  height: 100%;
}

.nav {
  position: fixed;
  top: 0;
  display: flex;
  text-align: center;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  background: #000;
  z-index: 99;
  color: #fff;
}

.nav-first {
  flex: 0.5;
  padding: 0 1rem;
  background: #000;
  color: #fff;
}

.nav-center {
  flex: 1;
  display: flex;
}

.nav-center div {
  flex: 1;
}

.TopFour {
  background: linear-gradient(top, white, #eee);
  border-radius: 1rem;
  color: #000;
  transition: all 0.5s linear;

  &:hover {
    background: linear-gradient(top, white, #ccc);
    transform: scale(1.05);
  }
}

.top {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: linear-gradient(top left, white, #99ffff);
  border-radius: 3rem 3rem 1rem 1rem;
  width: 3rem;
  height: 3rem;
  z-index: 99;
  text-align: center;
  line-height: 3rem;

  a {
    text-decoration: none;
    color: #000;
  }
}

.body {
  position: absolute;
  top: 5rem;
  left: 55%;
  width: 40rem;
  height: 30rem;
  background: #fff;
  border-radius: 2rem;
  text-align: center;

  p {
    margin-top: 5rem;
    font-size: 1.3rem;
    text-shadow: 0.5rem 0.5rem 0.5rem #000;
  }
}

.friend {
  position: absolute;
  top: 40rem;
  left: 55%;
  width: 40rem;
  height: 10rem;
  background: #fff;
  border-radius: 2rem;
  text-shadow: 0.1rem 0.1rem 0.5rem #000;
}

.div {
  letter-spacing: 2rem;
  font-size: 1.5rem;
  text-align: center;
}

.a {
  text-decoration: none;
  color: #000;
  padding-left: 2rem;
}

.footer {
  position: relative;
  top: 10rem;
  left: 5rem;
}

.one {
  position: absolute;
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  background: #000;
  transition: all 1.5s linear;

  &:hover {
    transform: rotate(360deg);
  }
}

.two {
  width: 20rem;
  height: 40rem;
  background: #fff;
  border-radius: 20rem 0rem 0rem 20rem;
}

.three {
  width: 20rem;
  height: 20rem;
  background: #000;
  border-radius: 50%;
  position: absolute;
  text-align: right;
  line-height: 40rem;
  color: #fff;
  top: 0;
  left: 10rem;
}

.three-two {
  width: 20rem;
  height: 20rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 9.5rem;
}

.four {
  position: absolute;
  top: 7rem;
  left: 17rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  line-height: 5rem;
}

.four-two {
  position: absolute;
  bottom: 6.5rem;
  left: 18rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #000;
  text-align: center;
  line-height: 5rem;
  color: #fff;
}

.button {
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
}
</style>
