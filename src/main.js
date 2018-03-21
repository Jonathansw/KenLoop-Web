// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false;
Vue.use(VeeValidate, lodash, VueLodash);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
