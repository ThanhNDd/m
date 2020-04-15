<template>
    <div>
        <div class="row">
            <div class="col-50" v-for="product in products">
                <div class="content content-shadow-product">
                    <a v-bind:href="url + '/product-details/' + product.id">
                        <div class="image">
                            <img v-bind:src="product.image | format_image" v-bind:alt="product.name">
                        </div>
                        <div class="text">
                            <p class="title-product title-product-center" v-text="product.name"></p>
                            <p class="price"> {{ product.retail | formatPrice }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <a href="#" class="view-more" v-bind:class="[isFinished ? 'hidden' : 'load-more']" @click='getProducts()'>
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
                let pathname = window.location.pathname;
                pathname = pathname.split('/');
                pathname = pathname[pathname.length-1];
                axios.post(url + '/api/category/'+pathname, {
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
        }
    }
</script>
