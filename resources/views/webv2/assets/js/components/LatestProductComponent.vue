<template>
  <div id="product-tabs-slider" class="scroll-tabs outer-top-vs" v-if="products.length > 0">
    <div class="more-info-tab clearfix ">
      <h3 class="new-product-title pull-left">New products</h3>
      <ul class="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
        <li class="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
        <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
        <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
        <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
      </ul>
      <!-- /.nav-tabs -->
    </div>
    <div class="tab-content outer-top-xs">
      <div class="tab-pane in active" id="all">
        <div class="product-slider">
          <div class="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="4">
            <div class="item item-carousel" v-for="product in products">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                          <img v-bind:data-src="!product.image || product.image === '[]' ? product.variant_image : product.image | format_image('400x400')" v-bind:alt="product.name">
                        </div>
                      </a>
                    </div>
                    <div class="tag new"><span>new</span></div>
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
                  <!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button data-toggle="tooltip" class="btn btn-primary icon" type="button" title="Add Cart"> <i class="fa fa-shopping-cart"></i> </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li class="lnk wishlist"> <a data-toggle="tooltip" class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                        <li class="lnk"> <a data-toggle="tooltip" class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    <!-- /.action -->
                  </div>
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
      </div>
      <!-- /.tab-pane -->
    </div>
    <!-- /.tab-content -->
  </div>
</template>

<script>
    export default {
        data() {
            return {
                products: '',
                isFinished: false,
                row: 0,
                buttonText: 'Xem thêm',
                url: '',
                submit: false,
                rowperpage: 10
            }
        },
        created() {
            this.url = url;
            this.getProducts(this.rowperpage);
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
                            let that = this;
                            setTimeout(function () {
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
    }
</script>
