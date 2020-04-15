<template>
    <div class="page-content"  v-if="carts.length === 0">
        <div class="cart segments">
            <h5 class="center">Không tồn tại sản phẩm để thanh toán</h5>
            <div class="divider-space-content"></div>
            <a href="/" class="button primary-button">
                <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
            </a>
        </div>
    </div>
    <div class="page-content" v-else>
        <form @submit="checkForm" novalidate="true">
            <div class="cart segments">
                <h5>Danh sách sản phẩm</h5>
                <div class="divider-space-content"></div>
                <div class="container">
                    <div class="row" style="max-height: 147px;overflow: auto;">
                        <div class="content" v-for="(cart, index) in carts">
                        <div class="row col-12">
                            <div class="col-20">
                                <div class="content-image">
                                    <img v-bind:src="cart['image']" alt="">
                                </div>
                            </div>
                            <div class="col-80">
                                <div class="content-text">
                                    <p class="title-product" v-text="cart['name'] +' - '+ cart['color'] +' - '+ cart['size']"></p>
                                    <p v-text="displayPrice(cart['price'], cart['qty'])"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="cart segments">
                <h5>Thông tin người nhận</h5>
                <div class="divider-space-content"></div>
                <div style="height: 200px;overflow: auto;margin-bottom: 20px;">
                    <div class="form-group">
                        <input type="text" placeholder="Họ tên" class="form-control" v-model="name" ref="name">
                    </div>
                    <div :class="['form-group', isPhoneValid()]">
                        <input type="text" placeholder="Số điện thoại" class="form-control" v-model="phone" ref="phone">
                    </div>
                    <div :class="['form-group', isEmailValid()]">
                        <input type="email" class="form-control" placeholder="Email" v-model="email" ref="email" />
                    </div>
                    <v-select :options="city" :reduce="city => city.id" @input="changeCity" v-model="city_id" placeholder="Thành phố" label="text" ref="city" class="form-group"></v-select>
                    <v-select :options="district" :reduce="district => district.id" @input="changeDistrict" v-model="district_id" placeholder="Quận huyện" label="text" ref="district" class="form-group"></v-select>
                    <v-select :options="village" :reduce="village => village.id" @input="changeVillage" v-model="village_id" placeholder="Phường xã" label="text" ref="village
" class="form-group"></v-select>
                    <div class="form-group">
                        <input type="text" placeholder="Thôn xóm, số nhà ..." class="form-control" v-model="address" ref="address">
                    </div>
                </div>
            </div>
            <!-- wrap total cart -->
            <div class="cart segments">
                <div class="wrap-total-cart">
                    <div class="container">
                        <div class="content-total">
                            <ul>
                                <li>
                                    <p>Tổng tiền</p>
                                </li>
                                <li>
                                    <h6>{{totalAmount | formatPrice}}</h6>
                                </li>
                            </ul>
                        </div>
                        <div class="content-total">
                            <ul>
                                <li>
                                    <p>Phí ship</p>
                                </li>
                                <li>
                                    <h6>{{totalShipping | formatPrice}}</h6>
                                </li>
                            </ul>
                        </div>
                        <div class="content-total">
                            <ul>
                                <li>
                                    <p>Tổng thanh toán</p>
                                </li>
                                <li>
                                    <h6>{{totalMoney | formatPrice}}</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end wrap total cart -->
            <div class="cart segments">
                <button type="submit" class="button primary-button">
                    <i class="fas fa-shopping-bag"></i>Thanh toán
                </button>
            </div>
        </form>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                carts: [],
                errors: [],
                name: '',
                phone: '',
                email: '',
                address: '',
                city: [],
                city_id: '',
                district: [],
                district_id: '',
                village: [],
                village_id: '',
                total_checkout: 0,
                total_amount:0,
                shipping: 0,
                email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone_reg : /^((09|03|07|08|05)+([0-9]{8})\b)$/
            }
        },
        created() {
            axios.get(url + '/api/carts')
                .then(response => {
                    this.carts = response.data;
                    console.log(this.carts.length);
                });
            axios.get(url + '/api/zone/city')
                .then(response => {
                    this.city = JSON.parse(response.data).results;
                });
        },
        computed: {
            /**
             * @return {number}
             */
            totalAmount: function() {
                // let total = 0;
                this.carts.forEach(cart => {
                    this.total_amount += cart['price'] * cart['qty'];
                });
                return this.total_amount;
            },
            /**
             * @return {number}
             */
            totalShipping: function() {
                if(this.city_id === 1) {
                    if(this.total_amount > 250000) {
                        this.shipping = 0;
                    } else {
                        this.shipping = 20000;
                    }
                } else {
                    if(this.total_amount > 500000) {
                        this.shipping = 0;
                    } else {
                        this.shipping = 30000;
                    }
                }
                return this.shipping;
            },
            totalMoney: function() {
                return this.total_checkout = this.total_amount + this.shipping;
            }
        },
        methods: {
            displayPrice: function (price, qty) {
                let val = this.formatPrice(price*qty);
                return this.formatPrice(price) + " x " + qty + " = " + val;
            },
            formatPrice: function(value) {
                let val = (value/1).toFixed(0).replace('.', ',');
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
            },
            checkForm: function (e) {
                e.preventDefault();
                if (this.name && this.phone && this.address && this.city && this.district && this.village && this.address) {
                    this.checkout();
                    return true;
                }
                if (!this.name) {
                    this.$toast.top('Bạn chưa nhập tên');
                    this.$refs.name.focus();
                    return false;
                }
                if (!this.phone) {
                    this.$toast.top('Bạn chưa nhập số điện thoại.');
                    this.$refs.phone.focus();
                    return false;
                } else if(!this.phone_reg.test(this.phone)) {
                    this.$toast.top('Số điện thoại chưa đúng.');
                    this.$refs.phone.focus();
                    return false;
                }
                if(this.email !== '' && !this.email_reg.test(this.email)) {
                    this.$toast.top('Email chưa đúng.');
                    this.$refs.email.focus();
                    return false;
                }
                if (!this.city_id) {
                    this.$toast.top('Bạn chưa chọn thành phố.');
                    return false;
                }
                if (!this.district_id) {
                    this.$toast.top('Bạn chưa chọn quận huyện.');
                    return false;
                }
                if (!this.village_id) {
                    this.$toast.top('Bạn chưa chọn phường xã.');
                    return false;
                }
                if (!this.address) {
                    this.$toast.top('Bạn chưa nhập số nhà.');
                    this.$refs.address.focus();
                    return false;
                }
            },
            isPhoneValid: function() {
                return (this.phone === "")? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
            },
            isEmailValid: function() {
                return (this.email === "")? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
            },
            changeCity: function(val) {
                this.city_id = val;
                axios.get(url + '/api/zone/district/'+val)
                    .then(response => {
                        console.log(response.data);
                        this.district = JSON.parse(response.data).results;
                        this.district_id = null;
                        this.village_id = null;
                    });
            },
            changeDistrict: function(val) {
                this.district_id = val;
                axios.get(url + '/api/zone/village/'+val)
                    .then(response => {
                        console.log(response.data);
                        this.village = JSON.parse(response.data).results;
                        this.village_id = null;
                    });
            },
            changeVillage: function(val) {
                this.village_id = val;
            },
            checkout: function() {
                let orders = [];
                orders.push({
                    "customer_name": this.name,
                    "number_phone": this.phone,
                    "email": this.email,
                    "cityId" : this.city_id,
                    "districtId" : this.district_id,
                    "villageId" : this.village_id,
                    "address" : this.address,
                    "total_amount" : this.total_amount,
                    "shipping" : this.shipping,
                    "total_checkout" : this.total_checkout
                });
                console.log(JSON.stringify(orders));
                axios.post(url + "/api/process-checkout", {
                    body: orders
                }).then(response => {
                    console.log(response.data);
                    if(response.data === 201) {
                        window.location.href =  url + "/finish";
                    } else {
                        swal({
                            title: "Đã xảy ra lỗi!",
                            text: "Xin vui lòng thử lại sau!",
                            icon: "error",
                            button: "Đồng ý",
                        });
                    }
                })
            }
        },
    }

</script>
