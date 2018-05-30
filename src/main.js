// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import jQuery from 'jquery';
global.jQuery = jQuery;
let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import {routes} from './routes';
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-material.css";
import VueResource from 'vue-resource';


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
