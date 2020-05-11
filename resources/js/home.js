Vue.component('best-seller-component', require('./components/BestSellerComponent.vue').default);
Vue.component('flash-sale-component', require('./components/FlashSaleProductComponent.vue').default);
Vue.component('latest-product-component', require('./components/LatestProductComponent.vue').default);
Vue.component('viewed-product-component', require('./components/ViewedProductComponent.vue').default);
Vue.component('blog-component', require('./components/BlogComponent.vue').default);

const home = new Vue({
  el: '#home',
  data() {
    return {

    }
  },
  methods: {

  }
});
