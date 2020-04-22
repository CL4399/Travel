import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: {
    changeCity (ctx, blog) {
      ctx.commit('changeBlog', blog)
    },
    changeTitle (ctx, title) {
      ctx.commit('changeTitle', title)
    }
  },
  mutations
})
