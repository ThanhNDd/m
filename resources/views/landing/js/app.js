require('./bootstrap');

// import VueRouter from 'vue-router';
import CxltToastr from 'cxlt-vue2-toastr'
import VueSweetalert2 from 'vue-sweetalert2';
// import VueToast from 'vue-toast-notification';
import vSelect from 'vue-select';

import VueToastr from "vue-toastr";

// import 'vue2-toast/lib/toast.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';
import 'vue-toast-notification/dist/theme-default.css';

window.Vue = require('vue');

// Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
// Vue.use(VueToast, {
//   position: 'top'
// });
Vue.use(CxltToastr, {
  position: 'top',
  showDuration: 5000,
  hideDuration: 5000,
  closeButton: true
});
Vue.use(require('vue-moment'));
Vue.component("v-select", vSelect);
Vue.component('product-info-component', require('./components/ProductInfoComponent.vue').default);

Vue.filter('validateEmail', function (email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
});
Vue.filter('validatePhone', function (phone) {
  let reg = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  return reg.test(String(phone).toLowerCase());
});
Vue.filter('formatNumber', function (num) {
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return num;
});

let app = new Vue({
  el: '#landing'
});
