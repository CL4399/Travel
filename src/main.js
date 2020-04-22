// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
import './assets/style/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.min.css'
import { Calendar } from 'vant'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.use(Calendar)

Vue.use(VueAwesomeSwiper)

Vue.use(VueParticles)
// 自定义指令 Vue.directive
/*
  在子组件中使用   v-rainbow  就执行以下指令，让其显示随机颜色
*/
/* Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.style.color = '#' + Math.random().toString(16).slice(2, 8)
  }
}) */

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1260px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ccc'
      el.style.padding = '20px'
    }
  }
})

// 自定义过滤器 Vue.filter
/* Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
}) */

Vue.filter('snippet', function (value) {
  return value.slice(0, 500) + '...'
})

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: `<App/>`
})
