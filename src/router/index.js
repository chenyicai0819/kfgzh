import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Kjgz from "../components/kjgz/Kjgz";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/kjgz',
      name:'kjgz',
      component: Kjgz
    }
  ]
})
