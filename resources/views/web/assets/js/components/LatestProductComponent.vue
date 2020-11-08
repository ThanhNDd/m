<template>
  <div id="product-tabs-slider" class="scroll-tabs outer-top-vs" v-if="products.length > 0">
    <div class="more-info-tab clearfix ">
      <h3 class="new-product-title pull-left">Hàng mới</h3>
    </div>
    <div class="outer-top-xs">
      <div class="tab-pane in active" id="all" ref="product_carousel">
        <div class="product-slider">
          <div class="owl-carousel home-owl-carousel custom-carousel owl-theme" style="opacity: 1; display: block;">
            <div class="item item-carousel" v-for="product in products">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
<!--                        <img v-bind:src="product.image | format_image('400x400')" v-bind:alt="product.name">-->
                        <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                          <img v-bind:data-src="!product.image || product.image === '[]' ? product.variant_image : product.image | format_image('400x400')" v-bind:alt="product.name">
                        </div>
                      </a>
                    </div>
                  </div>
                  <!-- /.product-image -->
                  <div class="product-info text-left">
                    <h3 class="name">
                      <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        {{product.name}}
                      </a>
                    </h3>
                    <div class="float-left col-md-12 col-lg-12 no-padding">
                      <i v-bind:class="product.rating == 0 ? 'far fa-star' : (product.rating >= 1 ? 'fas fa-star' : 'fas fa-star-half-alt')" style="color:#ffc107;"></i>
                      <i v-bind:class="product.rating > 1 ? (product.rating >= 2 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                      <i v-bind:class="product.rating > 2 ? (product.rating >= 3 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                      <i v-bind:class="product.rating > 3 ? (product.rating >= 4 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                      <i v-bind:class="product.rating > 4 ? (product.rating >= 5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                      <span style="margin-left: 5px; color: gray;" v-if="product.reviews > 0">({{ product.reviews }})</span>
                    </div>
                    <div class="product-price float-left col-md-12 col-lg-12 no-padding">
                        <p class="price" v-html="$options.filters.formatPrice(product.retail)"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center" id="load_more_latest">
              <a href="javascript:void(0);" class="view-more" v-bind:class="[isFinished ? 'finish' : 'load-more']" @click='getProducts(10)'>
                <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="submit"></i> Xem thêm &nbsp;<i class="fa fa-caret-down"></i>
              </a>
            </div>
            <!-- /.item -->
          </div>
          <!-- /.home-owl-carousel -->
        </div>
        <!-- /.product-slider -->
      </div>
      <!-- /.tab-pane -->
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                products: '',
                isFinished: false,
                row: 0, // Record selction position
                buttonText: 'Xem thêm',
                url: '',
                submit: false,
            }
        },
        created() {
            this.url = url;
            this.getProducts(5);
        },
        methods: {
            getProducts: function (rowperpage) {
                this.submit = true;
                axios.post(url + '/api/products', {
                    row: this.row,
                    rowperpage: rowperpage
                }).then(response => {
                    if (response.data !== '' && response.data.length > 0) {
                        this.row += rowperpage;
                        let len = this.products.length;
                        if (len > 0) {
                            // this.buttonText = "Loading ...";
                            let that = this;
                            setTimeout(function () {
                                // Loop on data and push in posts
                                for (let i = 0; i < response.data.length; i++) {
                                    that.products.push(response.data[i]);
                                }
                                that.buttonText = "Xem thêm";
                                that.submit = false;
                                that.scrollToTop();
                            }, 500);
                        } else {
                            this.products = response.data;
                            this.submit = false;
                        }
                    } else {
                        this.buttonText = "Không có thêm sản phẩm.";
                        this.isFinished = true;
                        this.submit = false;
                    }
                });
            },
            scrollToTop: function() {
                let top = $('#load_more_latest').offset().top;
                top = top - 100;
                window.scrollTo({
                    top: top,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
        mounted: function(){
            // jQuery(this.$refs.product_carousel).owlCarousel();
        }
    }
</script>
