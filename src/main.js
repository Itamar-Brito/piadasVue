// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from "axios";

import VueAxios from 'vue-axios'

//variavel host api piadas
Vue.prototype.$piadasHost = 'http://api.ijb.dev.br/piadas'
Vue.use(VueAxios, axios)

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
