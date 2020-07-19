<template>
    <div class="related-products segments no-pd-b">
        <div class="section-title">
            <h3>Sản phẩm tương tự</h3>
        </div>
        <div class="swiper-container swiper-relate-product">
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
                isFinished: false,
                row: 0,
                rowperpage: 10,
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
                let cat_id = document.querySelector('#cat_id').getAttribute('value');
                let id = document.querySelector('#product_id').getAttribute('value');
                let type = document.querySelector('#type_id').getAttribute('value');
                this.submit = true;
                axios.post(url + '/api/relate', {
                    product_id: id,
                    cat_id: cat_id,
                    type: type,
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
                                that.buttonText = 'Xem thêm';
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
        mounted:function () {
            this.swiper = new window.Swiper('.swiper-container', {
                cssMode: true,
                mousewheel: true,
                keyboard: true,
            })
        }
    }
</script>
