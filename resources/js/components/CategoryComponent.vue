<template>
    <div>
        <div class="row">
            <div class="col-50" v-for="product in products">
                <div class="content content-shadow-product">
                    <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                        <div class="image">
                          <div class="image" v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                              <img v-bind:data-src="!product.image || product.image === '[]' ? product.variant_image : product.image | format_image('200x200')" v-bind:alt="product.name">
                          </div>
                        </div>
                      <div class="text">
                        <p class="title-product title-product-center">{{product.name}}</p>
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
        <div class="row justify-content-center">
          <a href="javascript:void(0);" class="view-more" v-bind:class="[isFinished ? 'finish' : 'load-more']" @click='getProducts()'>
            <span class="spinner-border spinner-border-sm" v-if="submit"></span> Xem thêm<i class="fas fa-caret-down"></i>
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
                this.submit = true;
                let pathname = window.location.pathname;
                pathname = pathname.split('/');
                pathname = pathname[pathname.length-1];
                axios.post(url + '/api/danh-muc/'+pathname, {
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
        }
    }
</script>
