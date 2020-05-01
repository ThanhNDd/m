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
                        <img v-bind:src="product.image | format_image" v-bind:alt="product.name">
                      </a>
                    </div>
                    <!-- /.image -->
                    <!--                    <div class="tag new"><span>new</span></div>-->
                  </div>
                  <!-- /.product-image -->
                  <div class="product-info text-left">
                    <h3 class="name">
                      <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        {{product.name}}
                      </a>
                    </h3>
                    <div class="rating rateit-small"></div>
                    <!--                    <div class="description"></div>-->
                    <div class="product-price">
                      <p class="price" v-cloak>{{product.retail | formatPrice}}</p>
                      <!--                      <span class="price-before-discount">$ 800</span> -->
                    </div>
                    <!-- /.product-price -->

                  </div>
                  <!-- /.product-info -->
<!--                  <div class="cart clearfix animate-effect">-->
<!--                    <div class="action">-->
<!--                      <ul class="list-unstyled">-->
<!--                        <li class="add-cart-button btn-group">-->
<!--                          <button data-toggle="tooltip" class="btn btn-primary icon" type="button" title="Add Cart"><i-->
<!--                            class="fa fa-shopping-cart"></i></button>-->
<!--                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>-->
<!--                        </li>-->
<!--                        &lt;!&ndash;                        <li class="lnk wishlist"> <a data-toggle="tooltip" class="add-to-cart" href="detail.html" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>&ndash;&gt;-->
<!--                        &lt;!&ndash;                        <li class="lnk"> <a data-toggle="tooltip" class="add-to-cart" href="detail.html" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>&ndash;&gt;-->
<!--                      </ul>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; /.action &ndash;&gt;-->
<!--                  </div>-->
                  <!-- /.cart -->
                </div>
                <!-- /.product -->

              </div>
              <!-- /.products -->
            </div>
            <div class="row justify-content-center">
              <a href="javascript:void(0);" class="view-more" v-bind:class="[isFinished ? 'finish' : 'load-more']" @click='getProducts()'>
                <i class="fa fa-spinner fa-spin" style="font-size:20px" v-bind:class="submit ? '' : 'hidden'"></i> Xem thêm &nbsp;<i class="fa fa-caret-down"></i>
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
    // import jQuery from 'jquery';
    // let $ = jQuery;
    export default {
        data() {
            return {
                products: '',
                isFinished: false,
                row: 0, // Record selction position
                rowperpage: 10, // Number of records fetch at a time
                buttonText: 'Xem thêm',
                url: '',
                submit: false,
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                this.submit = true;
                axios.post(url + '/api/products', {
                    row: this.row,
                    rowperpage: this.rowperpage
                }).then(response => {
                    console.log(response.data);
                    if (response.data !== '' && response.data.length > 0) {
                        this.row += this.rowperpage;
                        let len = this.products.length;
                        if (len > 0) {
                            this.buttonText = "Loading ...";
                            let that = this;
                            setTimeout(function () {
                                // Loop on data and push in posts
                                for (let i = 0; i < response.data.length; i++) {
                                    that.products.push(response.data[i]);
                                }
                                that.buttonText = "Xem thêm";
                                that.submit = false;
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
            }
        },
        mounted: function(){
            // jQuery(this.$refs.product_carousel).owlCarousel();
        }
    }
</script>
