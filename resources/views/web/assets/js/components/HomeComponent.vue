<template>
  <div class="col-xs-12 col-sm-12 col-md-12 homebanner-holder">
    <div id="hero">
        <img class="img-responsive" v-bind:src="url+'/resources/views/web/assets/images/banners/smi.jpg'" alt="">
    </div>
<!--    <div class="best-seller">-->
<!--      <best-seller-component></best-seller-component>-->
<!--    </div>-->
    <section class="section featured-product">
        <latest-product-component></latest-product-component>
    </section>
    <div v-if="recently">
        <recently-product-component></recently-product-component>
    </div>
    <div>
        <blog-component></blog-component>
    </div>
  </div>
</template>
<script>
    import VueSession from 'vue-session';
    Vue.use(VueSession);
    import bestSellerComponent from './BestSellerComponent.vue';
    import LatestProductComponent from './LatestProductComponent.vue';
    import RecentlyProductComponent from './RecentlyProductComponent.vue';
    import BlogComponent from './BlogComponent.vue';

  export default {
      data() {
          return {
              products: '',
              url: '',
              // swiper: null,
              recently: false
          }
      },
      components: {
          bestSellerComponent: () => import('./BestSellerComponent.vue'),
          LatestProductComponent: () => import('./LatestProductComponent.vue'),
          recentlyProductComponent: () => import('./RecentlyProductComponent'),
          blogComponent: () => import('./BlogComponent'),
      },
      created() {
          this.url = url;
      },
      methods: {
      },
      mounted: function () {
          this.$session.start();
          if (this.$session.exists('viewed')){
              this.recently = true;
          }
      },
  }
</script>
