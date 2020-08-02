<template>
    <div class="latest-product segments no-pd-b" v-if="products.length > 0">
      <div class="container">
        <div class="section-title">
          <h3>Bán chạy nhất</h3>
        </div>
        <div class="row">
          <div class="col-50" v-for="product in products">
            <div class="content content-shadow-product">
              <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                <div class="image" v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                  <img v-bind:data-src="product.image | format_image('200x200')" v-bind:alt="product.name">
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
                url: ''
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                axios.post(url + '/api/best-seller', {
                    row: this.row,
                    rowperpage: this.rowperpage
                }).then(response => {
                    if (response.data !== '' && response.data.length > 0) {
                        this.row += this.rowperpage;
                        let len = this.products.length;
                        if (len > 0) {
                            this.buttonText = "Loading ...";
                            setTimeout(function () {
                                this.buttonText = "Xem thêm";
                                // Loop on data and push in posts
                                for (let i = 0; i < response.data.length; i++) {
                                    this.products.push(response.data[i]);
                                }
                            }, 500);
                        } else {
                            this.products = response.data;
                        }
                    } else {
                        this.buttonText = "Không có thêm sản phẩm.";
                        this.isFinished = true;
                    }
                });
            }
        }
    }
</script>
