import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './views/app/App';
import Vuesax from 'vuesax';

import VueLogger from 'vuejs-logger';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import router from './router'

Vue.config.productionTip = false;

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

//Configure this to only add the used components
Vue.use(Vuesax);

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});
