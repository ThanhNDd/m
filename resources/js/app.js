/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueLazyload from 'vue-lazyload';
import Toast from 'vue2-toast';
import vSelect from "vue-select";
import Vuelidate from 'vuelidate'
import 'vue2-toast/lib/toast.css';
import {StarRating} from 'vue-rate-it';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import swal from 'sweetalert';

window.Vue = require('vue');
window.VueRoute = require('vue-router');

// Vue.use(Swal);
Vue.use(BootstrapVue);
Vue.use(Toast, {
    type: 'center',
    duration: 3000,
    wordWrap: true,
    width: '90%'
});
Vue.use(Vuelidate);
Vue.use(VueLazyload);
Vue.use(require('vue-moment'));

Vue.component("v-select", vSelect);
Vue.component('star-rating', StarRating);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('latest-product-component', require('./components/LatestProductComponent.vue').default);
Vue.component('flash-sale-component', require('./components/FlashSaleProductComponent.vue').default);
Vue.component('sale-component', require('./components/SaleComponent.vue').default);
Vue.component('best-seller-component', require('./components/BestSellerComponent.vue').default);
Vue.component('attributes-component', require('./components/AttributeComponent.vue').default);
Vue.component('relate-product-component', require('./components/RelateProductComponent.vue').default);
Vue.component('cart-number-component', require('./components/CartComponent.vue').default);
Vue.component('items-cart-component', require('./components/ItemsInCartComponent.vue').default);
Vue.component('checkout-component', require('./components/CheckoutComponent.vue').default);
Vue.component('recommend-product-component', require('./components/RecommendComponent.vue').default);
Vue.component('category-component', require('./components/CategoryComponent.vue').default);
Vue.component('reviews-component', require('./components/ReviewsComponent.vue').default);
Vue.component('all-reviews-component', require('./components/AllReviewsComponent.vue').default);

Vue.filter('formatPrice', function (value) {
    let val = (value/1).toFixed(0).replace('.', ',');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
});
Vue.filter('formatSalePrice', function (discount, retail) {
    let sale_price = retail - (discount * retail) / 100;
    let val = (sale_price).toFixed(0).replace('.', ',');
    val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
    if(discount > 0) {
        val += ' (-' + discount + '%)';
    }
    return val;
});
Vue.filter('format_image', function (value) {
    let image = JSON.parse(value);
    let src = image[0].src;
    let type = image[0].type;
    if(type === 'upload') {
        src = 'https://img.shopmein.vn/' + src;
    }
    return src;
});
Vue.filter('validateEmail', function (email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
});
Vue.filter('validatePhone', function (phone) {
    let reg = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return reg.test(String(phone).toLowerCase());
});
Vue.filter('formatNumber', function (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
});
Vue.filter('format_color', function (value) {
    let color_code = '';
    switch (value) {
        case 'Trắng':
            color_code = 'background-color: white';
            break;
        case 'Xanh':
            color_code = 'background-color: lightseagreen';
            break;
        case 'Đỏ':
            color_code = 'background-color: red';
            break;
        case 'Tím':
            color_code = 'background-color: purple';
            break;
        case 'Vàng':
            color_code = 'background-color: yellow';
            break;
        case 'Xám':
            color_code = 'background-color: gray';
            break;
        case 'Hồng':
            color_code = 'background-color: pink';
            break;
        case 'Đen':
            color_code = 'background-color: black';
            break;
        case 'Nâu':
            color_code = 'background-color: brown';
            break;
        case 'Kem':
            color_code = 'background-color: blue';
            break;
        case 'Cam':
            color_code = 'background-color: orange';
            break;
        case 'Kẻ':
            color_code = 'background-image: linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%), linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);\n' +
                '}';
            break;
    }
    return color_code;
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
    el: '#app',
});
