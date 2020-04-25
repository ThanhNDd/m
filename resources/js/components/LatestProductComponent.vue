<template>
    <div class="popular-product product segments no-pd-b" v-if="products.length > 0">
      <div class="container">
        <div class="section-title">
          <h3>Hàng mới</h3>
        </div>
        <div class="row">
          <div class="col-50" v-for="product in products">
            <div class="content content-shadow-product">
              <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
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
        <div class="row justify-content-center">
          <a href="javascript:void(0);" class="view-more" v-bind:class="[isFinished ? 'finish' : 'load-more']" @click='getProducts()'>
            <span class="spinner-border spinner-border-sm" v-bind:class="submit ? '' : 'hidden'"></span> Xem thêm<i class="fas fa-caret-down"></i>
          </a>
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
                row: 0, // Record selction position
                rowperpage: 6, // Number of records fetch at a time
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
                axios.post(url + '/api/products', {
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
        }
    }
</script>
