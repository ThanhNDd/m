<template>
  <div id="product-tabs-slider" class="scroll-tabs outer-top-vs" v-if="products.length > 0">
    <div class="more-info-tab clearfix ">
      <h3 class="new-product-title pull-left">Bán chạy nhất</h3>
    </div>
    <div class="tab-content outer-top-xs">
      <div class="tab-pane in active" id="all" ref="product_carousel">
        <div class="product-slider">
          <div class="owl-carousel home-owl-carousel custom-carousel owl-theme" style="opacity: 1; display: block;">
            <div class="item item-carousel" v-for="product in products">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        <img v-bind:src="!product.image || product.image === '[]' ? product.variant_image : product.image | format_image('400x400')" v-bind:alt="product.name">
                      </a>
                    </div>
                  </div>
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
                    <!-- /.product-price -->

                  </div>
                </div>
              </div>
              <!-- /.products -->
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
                rowperpage: 5, // Number of records fetch at a time
                buttonText: 'Xem thêm',
                url: ''
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                axios.post(url + '/api/best-seller', {
                    row: this.row,
                    rowperpage: this.rowperpage
                }).then(response => {
                  // console.log(response.data);
                    if (response.data !== '' && response.data.length > 0) {
                        this.row += this.rowperpage;
                        let len = this.products.length;
                        if (len > 0) {
                            this.buttonText = "Loading ...";
                            let that = this;
                            setTimeout(function () {
                                that.buttonText = "Xem thêm";
                                // Loop on data and push in posts
                                for (let i = 0; i < response.data.length; i++) {
                                    that.products.push(response.data[i]);
                                }
                            }, 500);
                        } else {
                            this.products = response.data;
                        }
                    } else {
                        this.buttonText = "Không có thêm sản phẩm.";
                        this.isFinished = true;
                    }
                });
            },
        },
    }
</script>
