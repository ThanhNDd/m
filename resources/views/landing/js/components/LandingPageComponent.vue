<template>
  <div class="col-xs-12 col-sm-12 col-md-12 homebanner-holder">
    <div id="hero">
      <img
        class="img-responsive"
        v-bind:src="url + '/resources/views/web/assets/images/banners/smi.jpg'"
        alt=""
      />
    </div>
    <div v-if="recently">
      <recently-product-component></recently-product-component>
    </div>
    <div class="wide-banners outer-bottom-xs">
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="wide-banner cnt-strip">
            <div class="image">
              <img
                class="img-responsive"
                v-bind:src="
                  url +
                  '/resources/views/web/assets/images/banners/home-banner1.jpg'
                "
                alt=""
              />
            </div>
          </div>
          <!-- /.wide-banner -->
        </div>

        <div class="col-md-4 col-sm-4">
          <div class="wide-banner cnt-strip">
            <div class="image">
              <img
                class="img-responsive"
                v-bind:src="
                  url +
                  '/resources/views/web/assets/images/banners/home-banner2.jpg'
                "
                alt=""
              />
            </div>
          </div>
          <!-- /.wide-banner -->
        </div>

        <!-- /.col -->
        <div class="col-md-4 col-sm-4">
          <div class="wide-banner cnt-strip">
            <div class="image">
              <img
                class="img-responsive"
                v-bind:src="
                  url +
                  '/resources/views/web/assets/images/banners/home-banner3.jpg'
                "
                alt=""
              />
            </div>
          </div>
          <!-- /.wide-banner -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <section class="section featured-product">
      <latest-product-component></latest-product-component>
    </section>
    <div class="wide-banners outer-bottom-xs">
      <div class="row">
        <div class="col-md-8">
          <div class="wide-banner1 cnt-strip">
            <div class="image">
              <img
                class="img-responsive"
                v-bind:src="
                  url +
                  '/resources/views/web/assets/images/banners/home-banner.jpg'
                "
                alt=""
              />
            </div>
            <div class="strip strip-text">
              <div class="strip-inner">
                <h2 class="text-right">
                  Amazing Sunglasses<br />
                  <span class="shopping-needs"
                    >Get 40% off on selected items</span
                  >
                </h2>
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
              <img
                class="img-responsive"
                v-bind:src="
                  url +
                  '/resources/views/web/assets/images/banners/home-banner4.jpg'
                "
                alt=""
              />
            </div>

            <!-- /.new-label -->
          </div>
          <!-- /.wide-banner -->
        </div>
      </div>
      <!-- /.row -->
    </div>
    <div v-if="recently">
      <recently-product-component></recently-product-component>
    </div>
    <div>
      <blog-component></blog-component>
    </div>
  </div>
</template>
<script>
import VueSession from "vue-session";
Vue.use(VueSession);
import bestSellerComponent from "./BestSellerComponent.vue";
import LatestProductComponent from "./LatestProductComponent.vue";
import RecentlyProductComponent from "./RecentlyProductComponent.vue";
import BlogComponent from "./BlogComponent.vue";

export default {
  data() {
    return {
      products: "",
      url: "",
      recently: false,
    };
  },
  components: {
    bestSellerComponent: () => import("./BestSellerComponent.vue"),
    LatestProductComponent: () => import("./LatestProductComponent.vue"),
    recentlyProductComponent: () => import("./RecentlyProductComponent"),
    blogComponent: () => import("./BlogComponent"),
  },
  created() {
    this.url = url;
  },
  methods: {},
  mounted: function () {
    this.$session.start();
    if (this.$session.exists("viewed")) {
      this.recently = true;
    }
  },
};
</script>
