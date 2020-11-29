<template>
  <div class="sidebar-widget outer-bottom-small" v-if="products.length > 0">
    <h3 class="section-title">Xem nhiều nhất</h3>
    <div class="sidebar-widget-body outer-top-xs">
      <div class="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs" style="opacity: 1; display: block;">
        <div class="item">
          <div class="products special-product">
            <div class="product" v-for="product in products">
              <div class="product-micro">
                <div class="row product-micro-row">
                    <div class="product-image">
                      <div class="image">
                        <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
<!--                          <img v-bind:src="product.image | format_image('140x140xz')" v-bind:alt="product.name">-->
                          <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                            <img v-bind:data-src="product.image | format_image" v-bind:alt="product.name">
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="product-info">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                products: '',
                url: ''
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                axios.get(url + '/api/best-view-product')
                    .then(response => {
                    if (response.data !== '' && response.data.length > 0) {
                        this.products = response.data;
                    }
                });
            }
        },
    }
</script>
