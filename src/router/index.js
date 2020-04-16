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
  {
    path: '/events/add',
    name: 'Test',
    component: () => import('../components/festival/add/AddView')
  },
  {
    path: '/events/:id/info',
    name: 'Event information',
    component: () => import('../components/festival/festival-summary/FestivalSummary')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
