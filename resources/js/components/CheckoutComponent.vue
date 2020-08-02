<template>
    <div class="page-content"  v-if="carts.length === 0">
        <div class="cart segments">
            <h5 class="center">Không tồn tại sản phẩm để thanh toán</h5>
            <div class="divider-space-content"></div>
            <a v-bind:href="url" class="button primary-button">
                <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
            </a>
        </div>
    </div>
    <div class="page-content" v-else id="checkout_component">
        <form @submit="checkForm" novalidate="true">
            <div class="cart segments pb-0">
                <h5>Danh sách sản phẩm</h5>
                <div class="container no-padding">
                    <div class="row no-margin" style="max-height: 155px;overflow-y: auto;margin: 0;overflow-x: hidden;">
                        <div class="content mb-2" v-for="(cart, index) in carts">
                        <div class="row col-12 no-margin no-padding">
                            <div class="col-20">
                                <div class="content-image">
                                    <a class="entry-thumbnail"
                                       v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])"
                                       v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                                        <img v-if="cart['image']" v-bind:data-src="cart['image']" alt="">
                                        <img v-else="" v-bind:data-src="url + '/public/web/images/img_err.jpg'">
                                    </a>
                                </div>
                            </div>
                            <div class="col-80">
                                <div class="content-text">
                                    <a v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])">
                                        <p class="title-product" v-text="cart['name'] +' - '+ cart['color'] +' - '+ cart['size']"></p>
                                        <p v-html="$options.filters.formatPrice(cart['price']) + ' x ' + cart['qty'] + ' = ' + $options.filters.formatPrice(cart['price']*cart['qty'])"></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="cart segments pb-0">
                <h5>Thông tin người nhận</h5>
                <div v-if="!isLogged">
                    <div style="width:100%;font-size:12px;" :class="['login-component-m no-margin pt-4 pb-4 form-control d-inline-block text-center', !is_valid_logged ? 'form-control--error' : '']">
                        <p class="d-inline-block no-margin">Hãy </p>
                        <p class="d-inline-block no-margin"><login-component></login-component></p>
                        <p class="d-inline-block no-margin">để thực hiện thanh toán</p>
                    </div>
                    <p class="mt-1 mb-1 text--error d-inline-block" v-if="!is_valid_logged">
                        Bạn chưa đăng nhập
                    </p>
                </div>
                <div v-else>
                    <div class="mb-2 mt-2 form-control" style="font-size: 12px;">
                        <p class="mb-1"><strong>Khách hàng:</strong> {{customer_name}}</p>
                        <p class="mb-1"><strong>Địa chỉ:</strong> {{customer_address}}</p>
                        <p class="mb-1"><strong>Số điện thoại:</strong> {{customer_phone}}</p>
                        <p class="mb-1"><strong>Email:</strong> {{customer_email}}</p>
                    </div>
                    <label for="different_address">
                        <input type="checkbox" id="different_address" name="different_address" v-model="different_address" @click="different_address = true">
                        &nbsp; Giao hàng đến địa chỉ khác
                    </label>
                    <div class="mb-3" v-if="different_address">
                        <div class="form-group mb-1">
                            <label for="name">Họ Tên</label>
                            <input type="text"
                                   :class="['form-control', !is_valid_name ? 'form-control--error' : '']"
                                   placeholder="Họ tên" id="name" v-model="name"
                                   :disabled="show_loading"
                                   ref="name" autocomplete="off">
                            <p class="mt-1 mb-1 text--error d-inline-block" v-if="!is_valid_name">
                                Trường này là bắt buộc
                            </p>
                        </div>
                        <div class="form-group mb-1">
                            <label for="regphone_">Số điện thoại</label>
                            <input type="text"
                                   :class="['form-control', !is_validphone_ || !is_validphone__format || isphone__not_difference ? 'form-control--error' : '']"
                                   placeholder="Số điện thoại" id="regphone_" v-model="phone_"
                                   :disabled="show_loading"
                                   ref="phone" autocomplete="off">
                            <p class="mt-1 mb-1 text--error d-inline-block" v-if="!is_validphone_">
                                Trường này là bắt buộc
                            </p>
                            <p class="mt-1 text--error d-inline-block"
                               v-if="!is_validphone__format">Số điện thoại không đúng
                            </p>
                            <p class="mt-1 text--error d-inline-block"
                               v-if="is_validphone__format && isphone__not_difference"> Số điện thoại người nhận phải khác số điện thoại người đặt hàng
                            </p>
                        </div>
                        <div class="form-group mb-1">
                            <label for="reg_email">Email</label>
                            <input type="email"
                                   :class="['form-control', !is_valid_email || is_existed_email ? 'form-control--error' : '']"
                                   placeholder="Email" id="reg_email"
                                   v-model="email"
                                   :disabled="show_loading"
                                   ref="email" autocomplete="off">
                            <p class="mt-1 mb-1 text--error d-inline-block" v-if="!is_valid_email">
                                Trường này là bắt buộc
                            </p>
                            <p class="mt-1 text--error d-inline-block" v-if="!is_valid_email_format">
                                Email không đúng
                            </p>
                        </div>
                        <div class="form-group mb-1">
                            <label for="city">Tỉnh / Thành phố</label>
                            <v-select :options="city" :reduce="city => city.id" @input="changeCity"
                                      v-model="city_id"
                                      placeholder="Thành phố" label="text" ref="city" id="city"
                                      :disabled="show_loading"
                                      :class="[!is_valid_city ? 'form-control--error' : '']">
                            </v-select>
                            <p class="mt-1 mb-1 text--error d-inline-block" v-if="!is_valid_city">
                                Trường này là bắt buộc
                            </p>
                        </div>
                        <div class="form-group mb-1">
                            <label for="district">Quận / Huyện</label>
                            <v-select :options="district" :reduce="district => district.id"
                                      @input="changeDistrict"
                                      v-model="district_id" placeholder="Quận huyện" label="text"
                                      ref="district"
                                      id="district"
                                      :disabled="show_loading"
                                      :class="[!is_valid_district ? 'form-control--error' : '']">
                            </v-select>
                            <p class="mt-1 mb-1 text--error d-inline-block"
                               v-if="!is_valid_district">Trường này là bắt buộc
                            </p>
                        </div>
                        <div class="form-group mb-1">
                            <label for="village">Phường / Xã</label>
                            <v-select :options="village" :reduce="village => village.id"
                                      @input="changeVillage"
                                      v-model="village_id" placeholder="Phường xã" label="text"
                                      ref="village"
                                      id="village"
                                      :disabled="show_loading"
                                      :class="[!is_valid_village ? 'form-control--error' : '']">
                            </v-select>
                            <p class="mt-1 mb-1 text--error d-inline-block" v-if="!is_valid_village">
                                Trường này là bắt buộc
                            </p>
                        </div>
                        <div class="form-group mb-1">
                            <label for="reg_address">Địa chỉ</label>
                            <input type="text"
                                   :class="['form-control', !is_valid_address ? 'form-control--error' : '']"
                                   placeholder="Số nhà, ..." id="reg_address" v-model="address"
                                   :disabled="show_loading"
                                   ref="address" autocomplete="off">
                            <p class="mt-1 mb-1 text--error d-inline-block" v-if="!is_valid_address">
                                Trường này là bắt buộc
                            </p>
                        </div>
                    </div>
                    <div class="form-group">
                                <textarea placeholder="Ghi chú đơn hàng ..." class="form-control" v-model="note"
                                          ref="note"></textarea>
                    </div>
                    <div class="form-group">
                        <div class="coupon-code d-inline-block" style="width:100%;">
                            <input type="text" class="form-control d-inline-block" placeholder="Mã giảm giá" style="width: 75%;float: left;">
                            <button class="btn btn-primary btn-flat d-inline-block" style="width: 20%;float: right;padding: 5px;font-size: 13px;border-radius: 3px;">Áp dụng</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart segments">
                <h5>Phương thức thanh toán</h5>
                <div :class="['form-control', !is_valid_payment_method ? 'form-control--error' : '']">
                    <div class="form-check-inline">
                        <label class="form-check-label" style="font-size: 12px;">
                            <input type="radio" class="form-check-input" name="gender"
                                   v-model="payment_method" value="3"
                                   :disabled="show_loading || different_address"> Thanh toán khi nhận hàng (COD)
                        </label>
                    </div>
                    <div class="form-check-inline">
                        <label class="form-check-label" style="font-size: 12px;">
                            <input type="radio" class="form-check-input" name="gender"
                                   v-model="payment_method" value="1"
                                   :disabled="show_loading" :checked="different_address"> Thanh toán chuyển khoản
                        </label>
                    </div>
                </div>
                <p class="mt-1 text--error d-inline-block"
                   v-if="!is_valid_payment_method">Trường này là bắt buộc
                </p>
                <div class="form-control mt-2" v-if="payment_method === '1'">
                    <label><strong>Thông tin chuyển khoản</strong></label>
                    <div>
                        <p style="font-size: 12px"><strong>Chủ tài khoản:</strong> NGUYỄN DUY THANH</p>
                        <p style="font-size: 12px"><strong>Ngân hàng:</strong> TIÊN PHONG BANK (TPBank)</p>
                        <p style="font-size: 12px"><strong>Số tài khoản:</strong> 02326064001</p>
                        <p style="font-size: 12px"><strong>Chi nhánh:</strong> PHẠM HÙNG</p>
                        <p style="font-size: 12px"><strong>Nội dung chuyển khoản:</strong> SMI   [Tên khách hàng]   [SĐT]</p>
                    </div>
                </div>
            </div>
            <!-- wrap total cart -->
            <div class="cart segments">
                <div class="wrap-total-cart">
                    <div class="container no-padding">
                        <div class="content-total">
                            <ul class="no-margin">
                                <li>
                                    <p>Tổng tiền</p>
                                </li>
                                <li>
                                    <h6 v-html="$options.filters.formatPrice(totalAmount)"></h6>
                                </li>
                            </ul>
                        </div>
                        <div class="content-total">
                            <ul class="no-margin">
                                <li>
                                    <p>Phí ship</p>
                                </li>
                                <li>
                                    <h6 v-if="shipping > 0"
                                        v-html="$options.filters.formatPrice(totalShipping)"></h6>
                                    <span v-else class="badge badge-success"
                                          style="font-size: 13px;font-weight: normal;">Miễn ship</span>
                                </li>
                            </ul>
                        </div>
                        <div class="content-total">
                            <ul class="no-margin">
                                <li>
                                    <p>Tổng thanh toán</p>
                                </li>
                                <li>
                                    <h5 v-html="$options.filters.formatPrice(totalMoney)"></h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end wrap total cart -->
<!--            <div class="cart segments">-->
<!--                <button type="submit" class="button primary-button" v-bind:class="submit ? 'disabled' : ''" v-bind:disabled="submit">-->
<!--                    <span class="spinner-border spinner-border-sm" v-if="submit"></span> Thanh toán-->
<!--                </button>-->
<!--            </div>-->
            <div class="wrap-action-product-d">
                <div class="container">
                    <div class="d-inline-block" style="width: 100%;">
                        <div class="d-inline-block" style="width: 15%;">
                            <div class="content-message">
                                <a v-bind:href="url"><i class="fas fa-home"></i></a>
                            </div>
                        </div>
<!--                        <button type="button" class="button primary-button" v-bind:class="submit ? 'disabled' : ''" v-bind:disabled="submit">-->
<!--                            <span class="spinner-border spinner-border-sm" v-if="submit"></span> Thanh toán-->
<!--                        </button>-->
                        <div class="d-inline-block" style="width: 80%;float: right;">
                            <button type="button" class="button primary-button"
                                    style="float: right;" v-bind:disabled="show_loading"
                                    @click="checkout">
                                <i class="spinner-border spinner-border-sm" style="font-size:20px" v-if="show_loading"></i>
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
    import login from './LoginComponent.vue';
    export default {
        data() {
            return {
                carts: [],
                errors: [],
                name: '',
                phone_: '',
                email: '',
                address: '',
                note: '',
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
                phone_reg : /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                submit: false,
                url: '',
                different_address: false,
                isLogged: false,
                customer_id: '',
                customer_name: '',
                customer_phone: '',
                customer_address: '',
                customer_email: '',
                customer_city: '',
                is_valid_logged: true,
                is_valid_name: true,
                is_valid_phone: true,
                is_valid_phone_format: true,
                is_valid_email_format: true,
                is_valid_city: true,
                is_valid_district: true,
                is_valid_village: true,
                is_valid_address: true,
                is_valid_payment_method: true,
                is_phone_not_difference: false,
                show_loading: false,
            }
        },
        mixins: [
            login
        ],
        created() {
            this.url = url;
            this.loadCarts();
            this.loadCity();
            this.$root.checkLogged();
            let that = this;
            setTimeout(function () {
                that.getDataCustomer();
                that.calculateShipping();
            },2000);
        },
        watch: {
            name: function () {
                this.is_valid_name = this.name;
            },
            phone_: function () {
                if(this.phone_) {
                    this.is_valid_phone = true;
                } else {
                    this.is_valid_phone = false
                }
                if(this.phone_.length > 0) {
                    this.is_valid_phone_format = this.phone_reg.test(this.phone_);
                    if(this.is_valid_phone_format) {
                        if(this.phone_ === this.customer_phone) {
                            this.is_phone_not_difference = true;
                        } else {
                            this.is_phone_not_difference = false;
                        }
                    }
                }
            },
            email: function () {
                this.is_valid_email = this.email;
                if(this.email.length > 0) {
                    this.is_valid_email_format = this.email_reg.test(this.email);
                }
            },
            city_id: function () {
                this.is_valid_city = this.city_id;
            },
            district_id: function () {
                this.is_valid_district = this.district_id;
            },
            village_id: function () {
                this.is_valid_village = this.village_id;
            },
            address: function () {
                this.is_valid_address = this.address;
            },
            payment_method: function () {
                this.is_valid_payment_method = this.payment_method;
            },
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
                // if(this.city_id === 1) {
                //     if(this.total_amount > 250000) {
                //         this.shipping = 0;
                //     } else {
                //         this.shipping = 20000;
                //     }
                // } else {
                //     if(this.total_amount > 500000) {
                //         this.shipping = 0;
                //     } else {
                //         this.shipping = 30000;
                //     }
                // }
                // return this.shipping;
                return this.calculateShipping();
            },
            totalMoney: function() {
                return this.total_checkout = this.total_amount + this.shipping;
            }
        },
        methods: {
            getDataCustomer: function() {
                this.isLogged = this.$root.isLogged;
                this.customer_id = this.$root.customer_id;
                this.customer_name = this.$root.customer_name;
                this.customer_phone = this.$root.customer_phone;
                this.customer_address = this.$root.customer_address;
                this.customer_email = this.$root.customer_email;
                this.customer_city = this.$root.customer_city;
            },
            checkLogged: function() {
                axios.post(url + '/api/check-logged')
                    .then(response => {
                        if(response.data !== 'not_exist_user') {
                            this.isLogged = true;
                            this.customer_id = response.data.id;
                            this.customer_name = response.data.name;
                            this.customer_phone = response.data.phone;
                            this.customer_address = response.data.address;
                            this.customer_email = response.data.email;
                            this.customer_city = response.data.city_id;
                        } else {
                            this.isLogged = false;
                        }
                    }).catch(e =>{
                    this.isLogged = false;
                });
            },
            calculateShipping: function() {
                let cityId = '';
                if(this.different_address) {
                    cityId = this.city_id;
                } else {
                    cityId = this.customer_city;
                }
                if (cityId === 1) {
                    if (this.total_amount > 250000) {
                        this.shipping = 0;
                    } else {
                        this.shipping = 20000;
                    }
                } else {
                    if (this.total_amount > 500000) {
                        this.shipping = 0;
                    } else {
                        this.shipping = 30000;
                    }
                }
                return this.shipping;
            },
            loadCarts: function() {
                axios.get(url + '/api/carts')
                    .then(response => {
                        this.carts = response.data;
                    });
            },
            loadCity: function() {
                axios.get(url + '/api/zone/city')
                    .then(response => {
                        this.city = JSON.parse(response.data).results;
                    });
            },
            displayPrice: function (price, qty) {
                let val = $options.filters.formatPrice(price*qty);
                return $options.filters.formatPrice(price) + " x " + qty + " = " + $options.filters.formatPrice(price*qty);
            },
            subtotal(cart) {
                let price = cart['price'];
                let qty = cart['qty'];
                return price * qty;
            },
            checkForm: function () {
                let is_valid_form = true;
                if(!this.isLogged) {
                    this.is_valid_logged = false;
                    is_valid_form = false;
                }
                if(this.different_address) {
                    if (!this.name) {
                        this.is_valid_name = false;
                        is_valid_form = false;
                    }
                    if (!this.phone_) {
                        this.is_validphone_ = false;
                        is_valid_form = false;
                    } else if (!this.phone_reg.test(this.phone_)) {
                        this.is_validphone__format = false;
                        is_valid_form = false;
                    } else if(this.phone_ === this.customer_phone) {
                        this.isphone__not_difference = true;
                        is_valid_form = false;
                    }
                    if (this.email !== '' && !this.email_reg.test(this.email)) {
                        this.is_valid_email_format = false;
                        is_valid_form = false;
                    }
                    if (!this.city_id) {
                        this.is_valid_city = false;
                        is_valid_form = false;
                    }
                    if (!this.district_id) {
                        this.is_valid_district = false;
                        is_valid_form = false;
                    }
                    if (!this.village_id) {
                        this.is_valid_village = false;
                        is_valid_form = false;
                    }
                    if (!this.address) {
                        this.is_valid_address = false;
                        is_valid_form = false;
                    }
                }
                if(!this.payment_method) {
                    this.is_valid_payment_method = false;
                    is_valid_form = false;
                }
                return is_valid_form;
            },
            changeCity: function(val) {
                this.city_id = val;
                axios.get(url + '/api/zone/district/'+val)
                    .then(response => {
                        this.district = JSON.parse(response.data).results;
                        this.district_id = null;
                        this.village_id = null;
                    });
            },
            changeDistrict: function(val) {
                this.district_id = val;
                axios.get(url + '/api/zone/village/'+val)
                    .then(response => {
                        this.village = JSON.parse(response.data).results;
                        this.village_id = null;
                    });
            },
            changeVillage: function(val) {
                this.village_id = val;
            },
            checkout: function () {
                this.show_loading = true;
                if(!this.checkForm()) {
                    this.show_loading = false;
                    return;
                }
                // this.$bvModal.msgBoxConfirm('Hãy chắc chắn các thông tin trong đơn hàng là chính xác.', {
                //     title: 'Xác nhận',
                //     size: 'sm',
                //     buttonSize: 'sm',
                //     okVariant: 'danger',
                //     okTitle: 'Đồng ý',
                //     cancelTitle: 'Hủy',
                //     footerClass: 'p-2',
                //     hideHeaderClose: false,
                //     centered: true,
                //     modalClass: 'checkout-confirm',
                //     noCloseOnEsc: true,
                //     noCloseOnBackdrop: true
                // }).then(value => {
                //     console.log(value);
                //     this.show_loading = false;
                //     if(value) {
                //         let orders = [];
                //         orders.push({
                //             "customer_id": this.customer_id,
                //             "difference_address": this.different_address,
                //             "name": this.name,
                //             "phone": this.phone_,
                //             "email": this.email,
                //             "city_id": this.city_id,
                //             "district_id": this.district_id,
                //             "village_id": this.village_id,
                //             "address": this.address,
                //             "total_amount": this.total_amount,
                //             "shipping": this.shipping,
                //             "total_checkout": this.total_checkout,
                //             "note": this.note,
                //             "payment_method": this.payment_method
                //         });
                //         axios.post(url + "/api/thuc-hien-thanh-toan", {
                //             body: orders
                //         }).then(response => {
                //             this.show_loading = false;
                //             if (response.status === 200) {
                //                 window.location.href = url + "/hoan-thanh.html";
                //             } else {
                //                 this.$toast.top('Đã xảy ra lỗi');
                //             }
                //         }).catch(e => {
                //             this.show_loading = false;
                //             this.$toast.top('Đã xảy ra lỗi');
                //         })
                //     }
                // }).catch(err => {
                //
                // });


                this.$swal.fire({
                    title: 'Xác nhận?',
                    text: "Hãy chắc chắn rằng các thông tin trong đơn hàng đã chính xác!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'Hủy'
                }).then((result) => {
                    if (result.value) {
                        let orders = [];
                        orders.push({
                            "customer_id": this.customer_id,
                            "difference_address": this.different_address,
                            "name": this.name,
                            "phone": this.phone_,
                            "email": this.email,
                            "city_id": this.city_id,
                            "district_id": this.district_id,
                            "village_id": this.village_id,
                            "address": this.address,
                            "total_amount": this.total_amount,
                            "shipping": this.shipping,
                            "total_checkout": this.total_checkout,
                            "note": this.note,
                            "payment_method": this.payment_method
                        });
                        axios.post(url + "/api/thuc-hien-thanh-toan", {
                            body: orders
                        }).then(response => {
                            this.show_loading = false;
                            if (response.status === 200) {
                                window.location.href = url + "/hoan-thanh.html";
                            } else {
                                this.$toast.top('Đã xảy ra lỗi');
                            }
                        }).catch(e => {
                            this.show_loading = false;
                            this.$toast.top('Đã xảy ra lỗi');
                        })
                    } else {
                        this.show_loading = false;
                    }
                });
            },
            // showConfirmMsg() {
            //     this.boxTwo = '';
            //     this.$bvModal.msgBoxConfirm('Hãy chắc chắn các thông tin trong đơn hàng là chính xác.', {
            //         title: 'Xác nhận',
            //         size: 'sm',
            //         buttonSize: 'sm',
            //         okVariant: 'danger',
            //         okTitle: 'Đồng ý',
            //         cancelTitle: 'Hủy',
            //         footerClass: 'p-2',
            //         hideHeaderClose: false,
            //         centered: true
            //     }).then(value => {
            //         this.boxTwo = value
            //     })
            //     .catch(err => {
            //
            //     })
            // }
        }
    }

</script>
<style scoped>
    .form-control--error {
        border: 1px solid #ff00009c !important;
    }
    .form-control {
        height: auto;
    }
    button.btn.btn-secondary.btn-sm, button.btn.btn-danger.btn-sm {
        width: 20%;
    }
    .swal2-confirm.swal2-styled {
        width: 40%;
        padding: 5px;
        border-radius: 3px;
        font-weight: normal;
        font-size: 14px;
        float: left;
    }
    .swal2-actions {
        display: inline-block;
        width: 100%;
    }
    .swal2-cancel.swal2-styled {
        width: 40%;
        padding: 5px;
        border-radius: 3px;
        font-weight: normal;
        font-size: 14px;
        float: right;
    }
</style>