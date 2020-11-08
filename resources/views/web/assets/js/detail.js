import Lingallery from 'lingallery';

Vue.component('lingallery', Lingallery);

Vue.component('sidebar-component', require('./components/sidebarComponent.vue').default);
Vue.component('rating-component', require('./components/RatingComponent.vue').default);
Vue.component('status-component', require('./components/StatusComponent.vue').default);
Vue.component('attributes-component', require('./components/AttributeComponent.vue').default);
Vue.component('relate-product-component', require('./components/RelateProductComponent.vue').default);
Vue.component('reviews-component', require('./components/ReviewsComponent.vue').default);
Vue.component('recommend-product-component', require('./components/RecommendComponent.vue').default);
Vue.component('recently-product-component', require('./components/RecentlyProductComponent.vue').default);
Vue.component('slider-component', require('./components/ImageGalleryComponent.vue').default);

const detail = new Vue({
  el: '#detail',
  data() {
    return {
      reload: 0,
    }
  },
  methods: {
  }
});
