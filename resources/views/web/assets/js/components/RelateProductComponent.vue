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
            <div class="item item-carousel" style="width: 206px;" v-for="product in products">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image">
                      <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        <img v-bind:src="product.image | format_image" v-bind:alt="product.name">
                      </a>
                    </div>
                  </div>
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
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button data-toggle="tooltip" class="btn btn-primary icon" type="button" title="Add Cart"><i
                            class="fa fa-shopping-cart"></i></button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <!--                        <li class="lnk wishlist"> <a data-toggle="tooltip" class="add-to-cart" href="detail.html" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>-->
                        <!--                        <li class="lnk"> <a data-toggle="tooltip" class="add-to-cart" href="detail.html" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>-->
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
  </section><!-- /.section -->
</template>

<script>
    export default {
        data() {
            return {
                products: [],
                url: '',
            }
        },
        created() {
            this.url = url;
            let cat_id = document.querySelector('#cat_id').getAttribute('value');
            let id = document.querySelector('#product_id').getAttribute('value');
            let type = document.querySelector('#type_id').getAttribute('value');
            axios.get(url + '/api/relate/'+id+'/category/'+cat_id+'/type/'+type)
                .then(response => {
                    this.products = response.data;
                });
        },
        methods: {
        },
        mounted:function () {
        }
    }
</script>
