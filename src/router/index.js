import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/main/Main.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/festival/festival')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
