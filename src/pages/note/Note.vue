<template>
  <div>
    <div class="nav" name="top">
      <div class="nav-first">墨</div>
      <div class="nav-center">
        <router-link to="/Home" tag="div">主页</router-link>
        <router-link class="TopThree" to="/Note" tag="div">随笔</router-link>
        <router-link to="/AboutMe" tag="div">关于我</router-link>
      </div>
    </div>
    <div class="top">
      <a href="#top">Top</a>
    </div>
    <div class="ani">
      <div class="bb">
        <p v-rainbow>{{contents}}</p>
      </div>
    </div>
    <div class="timer">
      <van-calendar
        title="日历"
        position="top"
        :poppable="false"
        :show-confirm="false"
        @confirm="onConfirm"
      />
    </div>
    <div class="right">
      <div class="write">
        <input v-model="datas.title" class="input" type="text" placeholder="标题" />
        <textarea v-model="datas.content"></textarea>
        <button class="button" @click.prevent="postClick">提交</button>
      </div>
      <div class="note" @click="onNote">
        <div v-for="(item) in note" :key="item.id">
          <div class="note-content">
            <h2>{{item.title}}</h2>
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimationLine from '../../assets/animation/Line'
import axios from 'axios'

export default {
  name: 'Note',
  data () {
    return {
      contents: '不在沉默中爆发，就在沉默中灭亡',
      note: '',
      data: '',
      datas: {
        title: '',
        content: ''
      }
    }
  },
  components: {
    AnimationLine
  },
  methods: {
    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm (date) {
      this.date = this.formatDate(date)
    },
    onNote () {
      axios.get('https://blog-4399.firebaseio.com/note/note.json')
        .then((data) => {
          this.note = data.data
        })
    },
    postClick: function () {
      axios.post('https://blog-4399.firebaseio.com/note/note.json', this.datas)
      setTimeout(function () {
        location.reload()
      }, 5000)
    }
  },
  created () {
    this.onNote()
  }
}
</script>

<style lang='stylus' scoped>
.nav {
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  text-align: center;
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  background: #000;
  max-width: 100%;
  color : #fff
}

.nav-first {
  font-size: 1.5rem;
  flex: 0.5;
  padding: 0 1rem;
}

.nav-center {
  flex: 1;
  display: flex;
}

.nav-center div {
  flex: 1;
}

.TopThree {
  background: linear-gradient(top, white, #eee);
  border-radius: 1rem;
  transition: all 0.5s linear;
  color : #000

  &:hover {
    background: linear-gradient(top, white, #ccc);
  }
}

.top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 3rem;
  height: 3rem;
  text-align: center;
  line-height: 3rem;
  background: #fff;
  border-radius: 2rem;
}

.bb, .bb::before, .bb::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1.5rem;
  text-align: center;
  line-height: 4.5rem;
}

.ani {
  background: #000;
  filter: Alpha(opacity = 70);
  opacity: 0.8;
  width: 30rem;
  height: 16rem;
  border-radius : 2rem
  position: fixed;
  top: 13%;
  bottom: 0;
  left: 3.8%;
  right: 0;
}

.bb {
  width: 12rem;
  height: 12rem;
  margin: auto;
  background: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4005610539,1460288450&fm=26&gp=0.jpg');
  color: #ccffff;
  box-shadow: 0.1rem 0.1rem 3rem #fff;
}

.bb::before, .bb::after {
  content: '';
  z-index: 1;
  margin: -5%;
  box-shadow: inset 0 0 0 0.2rem;
  animation: clipMe 8s linear infinite;
}

.bb::before {
  animation-delay: -4s;
}

@keyframes clipMe {
  0%, 100% {
    clip: rect(0px, 13.26rem, 0.1rem, 0px);
  }

  25% {
    clip: rect(0px, 0.1rem, 13.26rem, 0px);
  }

  50% {
    clip: rect(12rem, 13.26rem, 13.26rem, 0px);
  }

  75% {
    clip: rect(0px, 13.26rem, 13.26rem, 12rem);
  }
}

.timer {
  width: 27rem;
  height: 30rem;
  background: #fff;
  position: fixed;
  left: 5%;
  bottom: 2%;
}

.right {
  position: absolute;
  left : 38%;
  top: 16%;
  display: flex;
}

.note {
  flex: 1;
  width: 30rem;
  height: 45rem;
  overflow: auto;
  background: #eee;
  border-radius: 20rem 10rem 30rem 0
  text-indent: 2rem;
  opacity: 0.5;
}

.write {
  flex: 1;
  width: 30rem;
  height: 45rem;
  background: #000
  text-align: center;
  border-radius: 10rem 20rem 0rem 30rem;
  opacity: 0.5;
  margin-right : 1rem
}

.input {
  width: 40%;
  text-align : center
  height: 3rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
  margin-right : 6rem
  outline: none;
  text-indent: 0.3rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.6rem #000;
}

textarea {
  filter: Alpha(opacity = 70);
  opacity: 0.5;
  outline: none;
  box-sizing: border-box;
  text-indent: 1rem;
  background: #eee;
  height: 23rem;
  width: 20rem
  font-size: 1.5rem;
  text-indent : .2rem
  border-radius : 1rem
}

.button
  width : 10rem
  height : 2rem
  margin-top : 2rem
</style>
