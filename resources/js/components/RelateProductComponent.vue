<template>
    <div class="related-products segments no-pd-b">
        <div class="section-title">
            <h3>Sản phẩm tương tự</h3>
        </div>
        <div class="swiper-container swiper-relate-product">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="margin-right: 15px;" v-for="product in products">
                    <div class="content content-shadow-product">
                        <a v-bind:href="url + '/product-details/' + product.id">
                            <div class="image">
                                <img v-bind:src="product.image | format_image" v-bind:alt="product.name">
                            </div>
                            <div class="text">
                                <p class="title-product title-product-center" v-text="product.name"></p>
                                <p class="price">{{product.retail | formatPrice}}</p>
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
                products: [],
                url: '',
                swiper: null
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
            this.swiper = new window.Swiper('.swiper-container', {
                cssMode: true,
                mousewheel: true,
                keyboard: true,
            })
        }
    }
</script>
