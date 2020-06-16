import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../auth/index';


Vue.use(VueRouter);

// const ifNotAuthenticated = (to, from, next) => {
//   if(!store.getters.isAuthenticated) {
//     console.log("going to next.... from isNotAuthenticated");
//     next("/");
//     return;
//   }
//   console.log("going to /.... from isNotAuthenticated");
//
//   next();
// };
//
// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated){
//     console.log("going to next.... from isAuthenticated");
//     next();
//     return;
//   }
//   console.log("going to /... from isAuthenticated")
//   next("/");
// };



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/home/Home"),
    //beforeEnter: ifNotAuthenticated
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/account/Account"),
    //beforeEnter: ifAuthenticated
  },

  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/festival/festival'),
    //beforeEnter: ifAuthenticated
  },
  {
    path: '/events/add',
    name: 'Test',
    component: () => import('../views/add-festival/AddView'),
    //beforeEnter: ifAuthenticated
  },
  {
    path: '/events/:id/info',
    name: 'Event information',
    component: () => import('../components/festival/festival-summary/FestivalSummary'),
    //beforeEnter: ifAuthenticated
  },
  {
    path: '/events/:id/edit',
    name: 'Edit event',
    component: () => import('../components/festival/festival-item/edit-festival/EditFestivalFull'),
    //beforeEnter: ifAuthenticated
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/calendar/Calendar2'),
    //beforeEnter: ifAuthenticated
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard'),
    //beforeEnter: ifAuthenticated
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    // beforeEnter: ifNotAuthenticated
  }
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'Home' && !store.getters.isAuthenticated) {
    console.log("authenticated?", store.getters.isAuthenticated);
    next({name: 'Home'});
    console.log("not authenticated");
  }
  else{
    next();
  }
});

export default router
