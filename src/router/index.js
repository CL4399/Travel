import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Land from '@/pages/Land'
import Logon from '@/pages/Logon'
import Add from '@/pages/blogger/add/Add.vue'
import Note from '@/pages/note/Note'
import AboutMe from '@/pages/aboutMe/AboutMe'
import Blogger from '@/pages/blogger/Blogger'
import Message from '@/pages/blogger/message/Message'
import NoteControl from '@/pages/blogger/message/components/Note'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Land',
      component: Land
    },
    {
      path: '/Logon',
      name: 'Logon',
      component: Logon
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Note',
      name: 'Note',
      component: Note
    }, {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    }, {
      path: '/Blogger',
      name: 'Blogger',
      component: Blogger
    }, {
      path: '/Message',
      name: 'Message',
      component: Message
    }, {
      path: '/NoteControl',
      name: 'NoteControl',
      component: NoteControl
    }
  ]
})
