import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './views/app/App';
import Vuesax from 'vuesax';
import store from '../src/auth/index'
import VueLogger from 'vuejs-logger';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import router from './router'
import Vuelidate from 'vuelidate';
import VCalendar from 'v-calendar';

import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'
import CenterContainer from "./components/layout/positioning/center-container/CenterContainer";
import Loading from "./components/layout/loading/Loading";

import VueSidebarMenu from "vue-sidebar-menu";
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.config.productionTip = false;

import { Carousel3d} from 'vue-carousel-3d';

const options = {
  isEnabled: true,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName : false,
  separator: '|',
  showConsoleColors: true
};



//Vue.use(BootstrapVue);
Vue.use(VueLogger, options);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);
Vue.use(Carousel3d);
Vue.use(VCalendar, {
  componentPrefix: 'vc'
});
Vue.use(VueSidebarMenu);


//Configure this to only add the used components
Vue.use(Vuesax);


Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

Vue.component('center-container', CenterContainer)
Vue.component('loading', Loading)

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
});
