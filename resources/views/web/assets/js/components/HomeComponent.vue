<template>
  <div class="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
    <!-- ========================================== SECTION – HERO ========================================= -->
    <div id="hero">
<!--      <div id="owl-main" class="owl-carousel owl-inner-nav owl-ui-sm" style="opacity: 1; display: block;">-->
<!--        <div class="item">-->
<!--          <div class="container-fluid">-->
<!--            <div class="caption bg-color vertical-center text-left">-->
<!--              <div class="slider-header fadeInDown-1">Top Brands</div>-->
<!--              <div class="big-text fadeInDown-1"> New Collections </div>-->
<!--              <div class="excerpt fadeInDown-2 hidden-xs"> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> </div>-->
<!--              <div class="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" class="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; /.caption &ndash;&gt;-->
<!--          </div>-->
          <!-- /.container-fluid -->
<!--          <div class="item" v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.gif' }">-->
            <img class="img-responsive" v-bind:src="url+'/resources/views/web/assets/images/banners/smi.jpg'" alt="">
<!--          </div>-->
<!--        </div>-->
        <!-- /.item -->
<!--      </div>-->
      <!-- /.owl-carousel -->
    </div>
    <div class="best-seller">
<!--      <lazy-component>-->
      <best-seller-component></best-seller-component>
<!--      </lazy-component>-->
    </div>

    <!-- ========================================= SECTION – HERO : END ========================================= -->
    <!-- ============================================== WIDE PRODUCTS ============================================== -->
    <div class="wide-banners outer-bottom-xs">
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="wide-banner cnt-strip">
            <div class="image">
              <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.gif' }">
                <img class="img-responsive" v-bind:data-src="url+'/resources/views/web/assets/images/banners/home-banner1.jpg'" alt="">
              </div>
            </div>
          </div>
          <!-- /.wide-banner -->
        </div>

        <div class="col-md-4 col-sm-4">
          <div class="wide-banner cnt-strip">
            <div class="image">
              <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.gif' }">
                <img class="img-responsive" v-bind:data-src="url+'/resources/views/web/assets/images/banners/home-banner3.jpg'" alt="">
              </div>
            </div>
          </div>
          <!-- /.wide-banner -->
        </div>

        <!-- /.col -->
        <div class="col-md-4 col-sm-4">
          <div class="wide-banner cnt-strip">
            <div class="image">
              <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.gif' }">
                <img class="img-responsive" v-bind:data-src="url + '/resources/views/web/assets/images/banners/home-banner2.jpg'" alt="">
              </div>
            </div>
          </div>
          <!-- /.wide-banner -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.wide-banners -->

    <!-- ============================================== WIDE PRODUCTS : END ============================================== -->
    <!-- ============================================== FEATURED PRODUCTS ============================================== -->
    <section class="section featured-product">
        <latest-product-component></latest-product-component>
    </section>
    <!-- /.section -->
    <!-- ============================================== FEATURED PRODUCTS : END ============================================== -->
    <!-- ============================================== WIDE PRODUCTS ============================================== -->
    <div class="wide-banners outer-bottom-xs">
      <div class="row">
        <div class="col-md-8">
          <div class="wide-banner1 cnt-strip">
            <div class="image">
              <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.gif' }">
                <img class="img-responsive" v-bind:data-src="url + '/resources/views/web/assets/images/banners/home-banner.jpg'" alt="">
              </div>
            </div>
            <div class="strip strip-text">
              <div class="strip-inner">
                <h2 class="text-right">Amazing Sunglasses<br>
                  <span class="shopping-needs">Get 40% off on selected items</span></h2>
              </div>
            </div>
            <div class="new-label">
              <div class="text">NEW</div>
            </div>
            <!-- /.new-label -->
          </div>
          <!-- /.wide-banner -->
        </div>
        <!-- /.col -->
        <div class="col-md-4">
          <div class="wide-banner cnt-strip">
            <div class="image">
              <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.gif' }">
                <img class="img-responsive" v-bind:data-src="url + '/resources/views/web/assets/images/banners/home-banner4.jpg'" alt="">
              </div>
            </div>
          </div>
          <!-- /.wide-banner -->
        </div>

      </div>
      <!-- /.row -->
    </div>
    <!-- /.wide-banners -->
    <!-- ============================================== WIDE PRODUCTS : END ============================================== -->
    <!-- /.sidebar-widget -->
    <!-- ============================================== BEST SELLER : END ============================================== -->
    <div v-if="recently">
      <lazy-component>
        <recently-product-component></recently-product-component>
      </lazy-component>
    </div>
    <!-- ============================================== BLOG SLIDER ============================================== -->
    <div>
<!--      <lazy-component>-->
        <blog-component></blog-component>
<!--      </lazy-component>-->
    </div>
    <!-- /.section -->
    <!-- ============================================== BLOG SLIDER : END ============================================== -->
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
              swiper: null,
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
