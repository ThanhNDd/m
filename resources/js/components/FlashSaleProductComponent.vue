<template>
    <div class="flash-sale segments no-pd-b" v-if="products.length > 0">
      <div class="container" style="padding: 0 !important;">
        <div class="section-title">
          <h3>Khuyến mãi
            <a v-bind:href="url + '/khuyen-mai.html'" class='see-all-link'>Xem thêm &raquo;</a>
          </h3>
        </div>
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
                    <p class="price sale-price">{{ product.retail | formatPrice }}</p>
                    <p class="price">{{product.discount, product.retail | formatSalePrice}}</p>
                  </div>
                </a>
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
                isFinished: false,
                row: 0, // Record selction position
                rowperpage: 10, // Number of records fetch at a time
                buttonText: 'Xem thêm',
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
                axios.post(url + '/api/flash-sales', {
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
        },
    }
</script>
