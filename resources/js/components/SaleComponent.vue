<template>
    <div>
        <div class="row">
            <div class="col-50" v-for="product in products">
                <div class="content content-shadow-product">
                    <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        <div class="image">
                            <img v-bind:src="product.image | format_image" v-bind:alt="product.name">
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
                            <p class="price sale-price" v-html="$options.filters.formatPrice(product.retail )"></p>
                            <p class="price" v-html="$options.filters.formatSalePrice(product.discount, product.retail)"></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="row justify-content-center" id="load_more_flash_sale">
            <a href="#" class="view-more" v-bind:class="[isFinished ? 'finish' : 'load-more']" @click='getProducts()'>
                {{ buttonText }} <i class="fas fa-caret-down"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: '',
                isFinished: false,
                row: 0, // Record selction position
                rowperpage: 10, // Number of records fetch at a time
                buttonText: 'Xem thêm',
                url: ''
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                axios.post(url + '/api/sales', {
                    row: this.row,
                    rowperpage: this.rowperpage
                }).then(response => {
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
                                that.scrollToTop();
                            }, 500);
                        } else {
                            this.products = response.data;
                        }
                    } else {
                        this.buttonText = "Không có thêm sản phẩm.";
                        this.isFinished = true;
                    }
                });
            },
            scrollToTop: function() {
                let top = $('#load_more_flash_sale').offset().top;
                top = top - 100;
                window.scrollTo({
                    top: top,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
</script>
