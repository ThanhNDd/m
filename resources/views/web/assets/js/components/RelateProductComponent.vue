<template>
  <section class="section related-product">
    <div id="product-tabs-slider" class="scroll-tabs outer-top-vs" v-if="products.length > 0">
      <div class="more-info-tab clearfix ">
        <h3 class="new-product-title pull-left">Sản phẩm tương tự</h3>
      </div>
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
<!--                        <img v-bind:src="product.image | format_image('400x400')" v-bind:alt="product.name">-->
                        <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                          <img v-bind:data-src="product.image | format_image('400x400')" v-bind:alt="product.name">
                        </div>
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
            <!-- /.item -->
          </div>
          <!-- /.home-owl-carousel -->
        </div>
        <!-- /.product-slider -->
        <div class="row justify-content-center">
          <a href="javascript:void(0);" class="view-more" v-bind:class="[isFinished ? 'finish' : 'load-more']" @click='getProducts(10)'>
            <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="submit"></i> {{buttonText}} &nbsp;<i class="fa fa-caret-down"></i>
          </a>
        </div>
      </div>
      <!-- /.tab-pane -->
    </div>
  </section><!-- /.section -->
</template>

<script>
    export default {
        data() {
            return {
                products: '',
                isFinished: false,
                row: 0, // Record selction position
                // rowperpage: 5, // Number of records fetch at a time
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
                let cat_id = document.querySelector('#cat_id').getAttribute('value');
                let id = document.querySelector('#product_id').getAttribute('value');
                let type = document.querySelector('#type_id').getAttribute('value');
                // axios.get(url + '/api/relate/'+id+'/category/'+cat_id+'/type/'+type)
                //     .then(response => {
                //         this.products = response.data;
                //     });
                this.submit = true;
                axios.post(url + '/api/relate', {
                    product_id: id,
                    cat_id: cat_id,
                    type: type,
                    row: this.row,
                    rowperpage: rowperpage
                }).then(response => {
                    console.log(response.data);
                    if (response.data !== '' && response.data.length > 0) {
                        this.row += rowperpage;
                        let len = this.products.length;
                        if (len > 0) {
                            // this.buttonText = "Loading ...";
                            let that = this;
                            setTimeout(function () {
                                // that.buttonText = 'Xem thêm';
                                for (let i = 0; i < response.data.length; i++) {
                                    that.products.push(response.data[i]);
                                }
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
    }
</script>
