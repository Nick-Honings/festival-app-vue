import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../auth';
import Login from "../views/login/Login";
import Account from "../views/account/Account";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if(!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated){
    next();
    return;
  }
  next("/");
};


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/home/Home"),

  },
  {
    path: "/account",
    name: "Account",
    component: Account,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/festival/festival'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/events/add',
    name: 'Test',
    component: () => import('../components/festival/add/AddView'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/events/:id/info',
    name: 'Event information',
    component: () => import('../components/festival/festival-summary/FestivalSummary'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/calendar/Calendar'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard'),
    beforeEnter: ifNotAuthenticated
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
