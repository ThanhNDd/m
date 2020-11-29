require('./bootstrap');
import {StarRating} from 'vue-rate-it';
import vSelect from 'vue-select';
import Paginate from 'vuejs-paginate';
import CxltToastr from 'cxlt-vue2-toastr'
import Lazyload from 'vue-lazyload'
import VueSweetalert2 from 'vue-sweetalert2';

import 'vue2-toast/lib/toast.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

window.Vue = require('vue');
window.VueRoute = require('vue-router');

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

Vue.use(VueSweetalert2);
Vue.use(Lazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  attempt: 1,
  listenEvents: [ 'scroll' ],
  throttleWait: 200
});
Vue.use(VueToast, {
    position: 'top'
});
Vue.use(CxltToastr, {
  position: 'top right',
  showDuration: 500,
  hideDuration: 5000,
  closeButton: true
});
Vue.use(require('vue-moment'));

Vue.component('paginate', Paginate);
Vue.component("v-select", vSelect);
Vue.component('star-rating', StarRating);
Vue.component('home-component', require('./components/HomeComponent.vue').default);
Vue.component('sidebar-component', require('./components/sidebarComponent.vue').default);
Vue.component('footer-component', require('./components/footerComponent.vue').default);
Vue.component('cart-number-component', require('./components/CartComponent').default);
Vue.component('items-cart-component', require('./components/ItemsInCartComponent.vue').default);
Vue.component('checkout-component', require('./components/CheckoutComponent.vue').default);
Vue.component('category-component', require('./components/CategoryComponent.vue').default);
Vue.component('sale-component', require('./components/SaleComponent.vue').default);
Vue.component('best-view-product-component', require('./components/BestViewProductComponent.vue').default);
Vue.component('hotboy-component', require('./components/HotboyComponent.vue').default);
Vue.component('login-component', require('./components/LoginComponent.vue').default);
Vue.component('slider-text-component', require('./components/SliderTextComponent.vue').default);
Vue.component('latest-product-component', require('./components/LatestProductComponent.vue').default);

jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
        time: 'far fa-clock',
        date: 'far fa-calendar',
        up: 'fas fa-arrow-up',
        down: 'fas fa-arrow-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',
        today: 'fas fa-calendar-check',
        clear: 'far fa-trash-alt',
        close: 'far fa-times-circle'
    }
});

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
    let sale_price = retail - (discount * retail) / 100;
    let val = (sale_price).toFixed(0).replace('.', ',');
    val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
    if(discount > 0) {
        val += ' (-' + discount + '%)';
    }
    return val;
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
let vm = new Vue({
    el: '#appv2'
});

