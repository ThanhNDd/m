

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Toast from "vue2-toast";
import 'vue2-toast/lib/toast.css';
import {StarRating} from 'vue-rate-it';
import vSelect from "../../node_modules/vue-select";
import VueLazyload from "vue-lazyload";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import firebase from 'firebase';
let firebaseConfig = {
    apiKey: "AIzaSyDQRx7vqJSf9pi67MhBJhMAOAU2-ayll90",
    authDomain: "authen-smi-sms.firebaseapp.com",
    databaseURL: "https://authen-smi-sms.firebaseio.com",
    projectId: "authen-smi-sms",
    storageBucket: "authen-smi-sms.appspot.com",
    messagingSenderId: "236690079442"
};
firebase.initializeApp(firebaseConfig);

window.Vue = require('vue');
// window.VueRoute = require('vue-router');
// window.Swal = require('sweetalert2');

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueSweetalert2);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  listenEvents: ['scroll'],
});
Vue.use(Toast, {
    type: 'center',
    duration: 3000,
    wordWrap: true,
    width: '90%'
});
Vue.use(require('vue-moment'));

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component("home-component",require('./components/homeComponent.vue').default);
Vue.component("v-select", vSelect);
Vue.component('star-rating', StarRating);
// Vue.component('latest-product-component', require('./components/LatestProductComponent.vue').default);
// Vue.component('flash-sale-component', require('./components/FlashSaleProductComponent.vue').default);
Vue.component('sale-component', require('./components/SaleComponent.vue').default);
// Vue.component('best-seller-component', require('./components/BestSellerComponent.vue').default);
// Vue.component('attributes-component', require('./components/AttributeComponent.vue').default);
// Vue.component('relate-product-component', require('./components/RelateProductComponent.vue').default);
Vue.component('cart-number-component', require('./components/CartComponent.vue').default);
Vue.component('items-cart-component', require('./components/ItemsInCartComponent.vue').default);
Vue.component('checkout-component', require('./components/CheckoutComponent.vue').default);
// Vue.component('recommend-product-component', require('./components/RecommendComponent.vue').default);
Vue.component('category-component', require('./components/CategoryComponent.vue').default);
// Vue.component('reviews-component', require('./components/ReviewsComponent.vue').default);
Vue.component('all-reviews-component', require('./components/AllReviewsComponent.vue').default);
// Vue.component('viewed-product-component', require('./components/ViewedProductComponent.vue').default);
// Vue.component('rating-component', require('./components/RatingComponent.vue').default);
// Vue.component('blog-component', require('./components/BlogComponent.vue').default);
Vue.component('login-component', require('./components/LoginComponent.vue').default);
Vue.component('status-component', require('../views/web/assets/js/components/StatusComponent.vue').default);
Vue.component('sidebar-component', require('./components/SidebarComponent').default);

Vue.filter('formatPrice', function (value) {
    if(!value) {
        return value;
    }
    if(value.toString().indexOf(" - ") > -1) {
        let arr = value.split(" - ");
        let min_price = arr[0];
        let max_price = arr[1];
        min_price = (min_price/1).toFixed(0).replace('.', ',');
        max_price = (max_price/1).toFixed(0).replace('.', ',');
        min_price = min_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' <sup>đ</sup>';
        max_price = max_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' <sup>đ</sup>';
        return min_price + " - " +max_price;
    }
    let val = (value/1).toFixed(0).replace('.', ',');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' <sup>đ</sup>';
});
Vue.filter('formatSalePrice', function (discount, retail) {
    if(!discount || isNaN(discount) || !retail || isNaN(retail)) {
        return;
    }
    discount = Number(discount);
    retail = Number(retail);
    let sale_price = 0;
    if(discount > 0 && discount < 101) {
        sale_price = retail * (100 - discount) / 100;
    } else {
        sale_price = retail - discount;
    }
    if(sale_price != retail) {
        let val = (sale_price).toFixed(0).replace('.', ',');
        val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' <sup>đ</sup>';
        if (discount > 0) {
            // val += ' (-' + discount + '%)';
        }
        return val;
    } else {
        return retail.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' <sup>đ</sup>';
    }
});
Vue.filter('format_image', function (value, thumb) {
    try {
        let image = JSON.parse(value);
        let src = image[0].src;
        let type = image[0].type;
        if(type === 'upload') {
            src = 'https://img.shopmein.vn/' + src;
        } else if(src.indexOf('cbu01.alicdn.com') > -1 && src.indexOf(thumb) === -1){
            if(typeof thumb !== 'undefined' && thumb !== '') {
                let ext = src.substr(src.lastIndexOf('.') + 1);
                src = src.replace('.'+ext,'');
                src = src+'.'+thumb+'.'+ext;
            }
        }
        return src;
    } catch (e) {
        return value;
    }
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

Vue.filter('change_to_slug', function (title) {
    if(!title) {
        return title;
    }
    let slug = title.toLowerCase();
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /gi, "-");
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug;
});

Vue.filter('url_product', function (slug, id) {
    return url + '/san-pham/' + slug + '-' + id + '.html';
});
Vue.filter('url_reviews', function (slug, id) {
    return url + '/danh-gia/' + slug + '-' + id + '.html';
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
new Vue({
    el: '#app',
    data() {
        return {
            isLogged: false,
            customer_id: '',
            customer_name: '',
            customer_phone: '',
            customer_address: '',
            customer_email: '',
            customer_city: ''
        }
    },
    methods: {
        checkLogged: function() {
            axios.post(url + '/api/check-logged')
                .then(response => {
                    if(response.data !== 'not_exist_user') {
                        this.isLogged = true;
                        this.customer_id = response.data.id;
                        this.customer_name = response.data.name;
                        this.customer_phone = response.data.phone;
                        this.customer_address = response.data.address;
                        this.customer_email = response.data.email;
                        this.customer_city = response.data.city_id;
                    } else {
                        this.isLogged = false;
                    }
                }).catch(e =>{
                this.isLogged = false;
            });
        },
    }
});
