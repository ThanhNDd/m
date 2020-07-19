<template>
  <div class="container" style="padding: 0 !important;" v-if="products.length > 0">
    <div class="section-title">
      <h3>Sản phẩm bạn đã xem</h3>
    </div>
    <div class="swiper-container swiper-flash-sale">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="margin-right: 15px;" v-for="product in products">
                <div class="content content-shadow-product">
                    <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                      <div class="image">
                        <img v-bind:src="product.image | format_image('150x150')" v-bind:alt="product.name">
                      </div>
                        <div class="text">
                            <p class="title-product title-product-center" v-text="product.name"></p>
                          <div class="float-left col-md-12 col-lg-12 no-padding">
                            <i v-bind:class="product.rating == 0 ? 'far fa-star' : (product.rating >= 1 ? 'fas fa-star' : 'fas fa-star-half-alt')" style="color:#ffc107;"></i>
                            <i v-bind:class="product.rating > 1 ? (product.rating >= 2 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                            <i v-bind:class="product.rating > 2 ? (product.rating >= 3 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                            <i v-bind:class="product.rating > 3 ? (product.rating >= 4 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                            <i v-bind:class="product.rating > 4 ? (product.rating >= 5 ? 'fas fa-star' : 'fas fa-star-half-alt') : 'far fa-star' " style="color:#ffc107;"></i>
                            <span style="margin-left: 5px; color: gray;" v-if="product.reviews > 0">({{ product.reviews }})</span>
                          </div>
                            <p class="price" v-html="$options.filters.formatPrice(product.retail)"></p>
                        </div>
                    </a>
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
                url: '',
                swiper: null
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                axios.get(url + '/api/viewed-product')
                    .then(response => {
                    this.products = response.data;
                });
            }
        },
    }
</script>
