<template>
    <div class="swiper-container swiper-flash-sale">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="margin-right: 15px;" v-for="product in products">
                <div class="content content-shadow-product">
                    <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        <div class="image">
                            <img v-bind:src="product.image | format_image" v-bind:alt="product.name">
                        </div>
                        <div class="text">
                            <p class="title-product title-product-center" v-text="product.name"></p>
                            <p class="price">{{ product.price | formatPrice }}</p>
                        </div>
                    </a>
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
