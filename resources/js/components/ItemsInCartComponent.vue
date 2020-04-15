<template>
    <div class="container"  v-if="carts.length === 0">
        <div class="content">
            <h5 class="center">Không tồn tại sản phẩm để thanh toán</h5>
            <div class="divider-space-content"></div>
            <a v-bind:href="url" class="button primary-button">
                <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
            </a>
        </div>
    </div>
    <div class="container" v-else>
        <div class="content" v-for="(cart, index) in carts">
            <div class="row">
                <div class="col-10">
                    <div class="content-checkbox">
                        <label class="trash">
                            <i class="fa fa-trash-alt" @click="removeItem(cart, index)"></i>
                        </label>
                    </div>
                </div>
                <div class="col-20">
                    <div class="content-image">
                        <img v-bind:src="cart['image']" alt="">
                    </div>
                </div>
                <div class="col-40">
                    <div class="content-text">
                        <p class="title-product" v-text="cart['name'] +' - '+ cart['color'] +' - '+ cart['size']"></p>
                        <p class="price">{{ cart['price'] | formatPrice }}</p>
                    </div>
                </div>
                <div class="col-30 align-self-center">
                    <div class="number-goods">
                        <div class="stepper stepper-small stepper-init">
                            <div class="stepper-button-minus" @click="minus(cart)"></div>
                            <div class="stepper-input-wrap">
                                <input type="text" v-bind:value="cart['qty']" readonly>
                            </div>
                            <div class="stepper-button-plus" @click="plus(cart)"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- divider -->
        <div class="divider-space-content"></div>
        <!-- end divider -->
        <!-- wrap total cart -->
        <div class="wrap-total-cart">
            <div class="container">
                <div class="content-total">
                    <ul>
                        <li>
                            <p>Total</p>
                        </li>
                        <li>
                            <h6>{{Total | formatPrice}}</h6>
                        </li>
                    </ul>
                </div>
                <div class="content-button">
                    <a v-bind:href="url + '/checkout/'" class="button primary-button"><i
                        class="fas fa-shopping-bag"></i>Xác nhận thanh toán</a>
                </div>
            </div>
        </div>
        <!-- end wrap total cart -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carts: [],
                url: ''
            }
        },
        created() {
            this.url = url;
            axios.get(url + '/api/carts')
                .then(response => {
                    this.carts = response.data
                });
        },
        computed: {
            /**
             * @return {number}
             */
            Total() {
                let total = 0;
                this.carts.forEach(cart => {
                    total += cart['price'] * cart['qty'];
                });
                return total;
            }
        },
        methods: {
            plus: function (cart) {
                let products = [];
                products.push({
                    "id": cart['id'],
                    "color": cart['color'],
                    "size": cart['size'],
                    "qty" : cart['qty'],
                    "type" : "plus"
                });
                this.process(products);
            },
            minus: function (cart) {
                let products = [];
                products.push({
                    "id": cart['id'],
                    "color": cart['color'],
                    "size": cart['size'],
                    "qty" : cart['qty'],
                    "type" : "minus"
                });
                this.process(products);
            },
            process: function(products){
                axios.post(url + "/api/cart/change", {
                    body: products
                }).then(response => {
                    this.carts = response.data
                })
            },
            removeItem(cart, index) {
                swal({
                    title: "Bạn chắc chắn muốn xoá sản phẩm này?",
                    text: "",
                    icon: "warning",
                    buttons: ["Huỷ", "Đồng ý"],
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        let products = [];
                        products.push({
                            "id": cart['id'],
                            "color": cart['color'],
                            "size": cart['size']
                        });
                        axios.post(url + "/api/cart/remove", {
                            body: products
                        }).then(response => {
                            this.carts.splice(index, 1);
                            this.$toast.top('Sản phẩm đã được xoá');
                        })
                    }
                });
            }
        }
    }
</script>
