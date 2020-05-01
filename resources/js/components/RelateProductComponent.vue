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
                rowperpage: 5, // Number of records fetch at a time
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
                let cat_id = document.querySelector('#cat_id').getAttribute('value');
                let id = document.querySelector('#product_id').getAttribute('value');
                let type = document.querySelector('#type_id').getAttribute('value');
                // axios.get(url + '/api/relate/'+id+'/category/'+cat_id+'/type/'+type)
                //     .then(response => {
                //         this.products = response.data;
                //     });
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
