<template>
  <div class="container" style="padding: 0 !important;" v-if="products.length > 0">
    <div class="section-title">
      <h3>Sản phẩm bạn đã xem</h3>
    </div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="margin-right: 15px;" v-for="product in products">
                <div class="content content-shadow-product">
                    <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        <div class="image">
                            <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: url + '/public/web/images/loading.svg' }">
                                <img v-bind:data-src="!product.image || product.image === '[]' ? product.variant_image : product.image | format_image('150x150')" v-bind:alt="product.name">
                            </div>
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
            }
        },
        created() {
            this.url = url;
            this.getProducts(10);
        },
        methods: {
            getProducts: function (rowperpage) {
                axios.post(url + '/api/viewed-product', {
                    row: 0,
                    rowperpage: rowperpage
                }).then(response => {
                    // console.log(response.data);
                    this.products = response.data;
                    // if (response.data !== '' && response.data.length > 0) {
                    //     let len = this.products.length;
                    //     if (len > 0) {
                    //         let that = this;
                    //         setTimeout(function () {
                    //             for (let i = 0; i < response.data.length; i++) {
                    //                 that.products.push(response.data[i]);
                    //             }
                    //         }, 500);
                    //     } else {
                    //         this.products = response.data;
                    //     }
                    // }
                });
            },
        },
        mounted:function () {
            // this.swiper = new window.Swiper('.swiper-container', {
            //     cssMode: true,
            //     mousewheel: true,
            //     keyboard: true,
            // })
        }
    }
</script>
