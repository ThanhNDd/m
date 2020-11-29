<template>
    <div v-if="carts.length === 0" style="margin: 20px 0; text-align: center">
        <div class="content">
            <h4 class="center">Không tồn tại sản phẩm để thanh toán</h4>
            <div class="divider-space-content"></div>
            <a v-bind:href="url" class="btn btn-primary">
                <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
            </a>
        </div>
    </div>
    <div v-else id="checkout_component">
        <div class="steps-form">
            <div class="steps-row setup-panel">
                <div class="steps-step">
                    <a v-bind:href="url + '/gio-hang.html'" type="button"
                       class="btn btn-default btn-circle waves-effect waves-light ">
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                    <p>Giỏ hàng</p>
                </div>
                <div class="steps-step">
                    <a href="javascript:void(0)" type="button" class="btn btn-circle waves-effect waves-light btn-indigo">
                        <i class="fas fa-shopping-basket"></i>
                    </a>
                    <p>Thanh toán</p>
                </div>
                <div class="steps-step">
                    <button type="button" class="btn btn-default btn-circle waves-effect waves-light"
                       disabled="disabled">
                        <i class="far fa-check-circle"></i>
                    </button>
                    <p>Hoàn thành</p>
                </div>
            </div>
        </div>
<!--        <form @submit="checkForm" novalidate="true" style="background: #fff;">-->
            <div class="row col-md-12" style="padding-bottom: 30px;background: rgb(255, 255, 255);margin-bottom: 30px;">
                <div class="col-md-5 mt-2 customer-info">
                    <h3>Thông tin người nhận</h3>
                    <div v-if="!isLogged" style="display:inline-block;text-align: center;width:100%" class="mt-4 mb-4">
                        <p style="display:inline-block;">Hãy </p>
                        <p style="display:inline-block;"><login-component></login-component></p>
                        <p style="display:inline-block;margin-right: 5px;">để thực hiện thanh toán</p>
                    </div>
                    <div v-else>
                        <div class="mb-2 mt-2">
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
                    </div>
                    <div class="row col-md-12">
                        <ul>
                            <li style="font-style:Italic;">
                                <i class="fas fa-check-circle text-success"></i>&nbsp;Miễn phí vận chuyển khu vực Hà Nội với đơn từ 250k
                            </li>
                            <li style="font-style:Italic;">
                                <i class="fas fa-check-circle text-success"></i>&nbsp;Miễn phí vận chuyển Toàn Quốc với đơn từ 500k
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-7 mt-2 product-info">
                    <div class="container" style="">
                        <h3>Danh sách sản phẩm</h3>
                        <div class="w-product">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th class="cart-description item" style="width: 15%;">Hình ảnh</th>
                                        <th class="cart-product-name item" style="width: 25%;">Tên sản phẩm</th>
                                        <th class="cart-sub-total item" style="width: 15%;">Đơn giá</th>
                                        <th class="cart-qty item" style="width: 15%;">Số lượng</th>
                                        <th class="cart-total last-item">Thành tiền</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(cart, index) in carts">
                                        <td class="cart-image" style="width: 15%;">
                                            <a class="entry-thumbnail"
                                               v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])"
                                               v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                                                <img v-if="cart['image']" v-bind:data-src="cart['image']" alt=""
                                                     width="80px">
                                                <img v-else="" v-bind:data-src="url + '/public/web/images/img_err.jpg'"
                                                     alt=""
                                                     width="80px">
                                            </a>
                                        </td>
                                        <td class="cart-product-name-info" style="width: 25%;">
                                            <a v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])">
                                                <h4 class='cart-product-description'>
                                                    {{cart['name']}}
                                                </h4>
                                            </a>
                                            <div class="cart-product-info">
                                                <span class="product-color">Mã sản phẩm:&nbsp;&nbsp;<span>{{ cart['sku'] }}</span></span>
                                            </div>
                                            <div class="cart-product-info">
                                                <span class="product-color">Màu:&nbsp;&nbsp;<span>{{ cart['color'] }}</span></span>
                                            </div>
                                            <div class="cart-product-info">
                                                <span class="product-color">Size:&nbsp;&nbsp;<span>{{ cart['size'] }}</span></span>
                                            </div>
                                        </td>
                                        <td class="cart-product-sub-total" style="width: 15%;">
                                    <span class="cart-sub-total-price" ref="price"
                                          v-html="$options.filters.formatPrice(cart['price'])"></span>
                                        </td>
                                        <td class="cart-product-quantity" style="width: 15%;">
                                            <div class="quant-input">
                                                <span>{{cart['qty']}}</span>
                                            </div>
                                        </td>
                                        <td class="cart-product-grand-total">
                                            <p class="cart-grand-total-price"
                                               v-html="$options.filters.formatPrice(subtotal(cart))"></p>
                                        </td>
                                    </tr>
                                    </tbody><!-- /tbody -->
                                </table><!-- /table -->
                            </div>
                        </div>
                        <div class="col-md-6 float-left no-padding">
                            <div class="coupon-code">
                                <input type="text" class="form-control" placeholder="Mã giảm giá">
                                <button class="btn btn-primary btn-flat">Áp dụng</button>
                            </div>
                            <label class="form-check-inline" style="font-size: 16px;"><strong>Phương thức thanh toán</strong></label>
                            <div :class="['form-control', !is_valid_payment_method ? 'form-control--error' : '']">
                                <div class="form-check-inline">
                                    <label class="form-check-label" style="font-size: 14px;">
                                        <input type="radio" class="form-check-input" name="gender"
                                               v-model="payment_method" value="3"
                                               :disabled="show_loading || different_address"> Thanh toán khi nhận hàng (COD)
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label" style="font-size: 14px;">
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
                                    <p style="font-size: 13px"><strong>Chủ tài khoản:</strong> NGUYỄN DUY THANH</p>
                                    <p style="font-size: 13px"><strong>Ngân hàng:</strong> TIÊN PHONG BANK (TPBank)</p>
                                    <p style="font-size: 13px"><strong>Số tài khoản:</strong> 02326064001</p>
                                    <p style="font-size: 13px"><strong>Chi nhánh:</strong> PHẠM HÙNG</p>
                                    <p style="font-size: 13px"><strong>Nội dung chuyển khoản:</strong> SMI   [Tên khách hàng]   [SĐT]</p>
                                </div>
                            </div>
                        </div>

                        <div class="wrap-total-cart col-md-6 float-left no-padding">
                            <div class="container" style="padding: 0;background: #f8f8f8;">
                                <div class="content-total mb-2">
                                    <ul class="col-md-12 no-padding">
                                        <li class="col-md-6 no-padding float-left">
                                            <p>Tổng tiền</p>
                                        </li>
                                        <li class="col-md-6 no-padding">
                                            <h6 v-html="$options.filters.formatPrice(totalAmount)"></h6>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content-total mb-2">
                                    <ul class="col-md-12 no-padding">
                                        <li class="col-md-6 no-padding float-left">
                                            <p>Phí ship</p>
                                        </li>
                                        <li class="col-md-6 no-padding">
                                            <h6 v-if="shipping > 0"
                                                v-html="$options.filters.formatPrice(totalShipping)"></h6>
                                            <span v-else class="badge badge-success"
                                                  style="font-size: 13px;font-weight: normal;">Miễn ship</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content-total mb-2">
                                    <ul class="col-md-12 no-padding">
                                        <li class="col-md-6 no-padding float-left">
                                            <p>Chiết khấu</p>
                                        </li>
                                        <li class="col-md-6 no-padding">
                                            <h6 v-html="$options.filters.formatPrice(reduce)"></h6>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content-total mb-2">
                                    <ul class="col-md-12 no-padding">
                                        <li class="col-md-6 no-padding float-left">
                                            <p>Tổng thanh toán</p>
                                        </li>
                                        <li class="col-md-6 no-padding">
                                            <h6 style="font-size: 25px; color: red;"
                                                v-html="$options.filters.formatPrice(totalMoney)"></h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12 estimate-ship-tax"
                                 style="margin-bottom: 20px;margin-top: 10px;padding: 0;text-align: right;float:right;">
                                <button type="button" class="btn btn-warning btn-flat"
                                        style="float: right;" v-bind:disabled="show_loading"
                                        @click="checkout">
                                    <i class="fa fa-spinner fa-spin" style="font-size:20px" v-if="show_loading"></i>
                                    Thanh toán
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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
                total_amount: 0,
                shipping: 0,
                email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                phone_reg: /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                submit: false,
                url: '',
                reduce: 0,
                different_address: false,
                isLogged: false,
                customer_id: '',
                customer_name: '',
                customer_phone: '',
                customer_address: '',
                customer_email: '',
                customer_city: '',
                is_valid_name: true,
                is_validphone_: true,
                is_validphone__format: true,
                is_valid_email_format: true,
                is_valid_city: true,
                is_valid_district: true,
                is_valid_village: true,
                is_valid_address: true,
                is_valid_payment_method: true,
                isphone__not_difference: false,
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
            this.checkLogged();
            this.calculateShipping();

        },
        watch: {
            name: function () {
                this.is_valid_name = this.name;
            },
            phone_: function () {
                if(this.phone_) {
                    this.is_validphone_ = true;
                } else {
                    this.is_validphone_ = false
                }
                if(this.phone_.length > 0) {
                    this.is_validphone__format = this.phone_reg.test(this.phone_);
                    if(this.is_validphone__format) {
                        if(this.phone_ === this.customerphone_) {
                            this.isphone__not_difference = true;
                        } else {
                            this.isphone__not_difference = false;
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
            }
        },
        computed: {
            /**
             * @return {number}
             */
            totalAmount: function () {
                // let total = 0;
                this.carts.forEach(cart => {
                    this.total_amount += cart['price'] * cart['qty'];
                });
                return this.total_amount;
            },
            /**
             * @return {number}
             */
            totalShipping: function () {
               return this.calculateShipping();
            },
            totalMoney: function () {
                return this.total_checkout = this.total_amount + this.shipping;
            },
        },
        methods: {
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
                let val = this.formatPrice(price * qty);
                return this.formatPrice(price) + " x " + qty + " = " + val;
            },
            subtotal(cart) {
                let price = cart['price'];
                let qty = cart['qty'];
                return price * qty;
            },
            // formatPrice: function (value) {
            //     let val = (value / 1).toFixed(0).replace('.', ',');
            //     return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
            // },
            checkForm: function () {
                if(!this.isLogged) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Bạn chưa đăng nhập'
                    });
                    return false;
                }
                let is_valid_form = true;
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
                    } else if(this.phone_ === this.customerphone_) {
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
            changeCity: function (val) {
                this.city_id = val;
                axios.get(url + '/api/zone/district/' + val)
                    .then(response => {
                        this.district = JSON.parse(response.data).results;
                        this.district_id = null;
                        this.village_id = null;
                    });
            },
            changeDistrict: function (val) {
                this.district_id = val;
                axios.get(url + '/api/zone/village/' + val)
                    .then(response => {
                        this.village = JSON.parse(response.data).results;
                        this.village_id = null;
                    });
            },
            changeVillage: function (val) {
                this.village_id = val;
            },
            checkout: function () {
                this.show_loading = true;
                if(!this.checkForm()) {
                    this.show_loading = false;
                    return;
                }
                this.$swal.fire({
                    title: 'Xác nhận?',
                    text: "Hãy chắc chắn rằng các thông tin trong đơn hàng đã chính xác!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK!'
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
                                this.$toast.error({
                                    title: 'Lỗi',
                                    message: 'Đã xảy ra lỗi.'
                                });
                            }
                        }).catch(e => {
                            this.show_loading = false;
                            this.$toast.error({
                                title: 'Lỗi',
                                message: 'Đã xảy ra lỗi.'
                            });
                        })
                    }
                });
            }
        },
        mounted() {
            this.$root.$on('checkout', () => {
                this.isLogged = false;
            });
        }
    }

</script>
<style scoped>
    .customer-info h3, .product-info h3 {
        font-size: 23px;
    }

    .product-info .container {
        padding: 0;
        width: 100%;
    }

    .cart-product-description {
        font-size: 15px;
    }

    .table td, .table th {
        padding: 10px;
    }

    /*.w-product {*/
    /*    max-height: 415px;*/
    /*    overflow-y: auto;*/
    /*    overflow-x: hidden;*/
    /*}*/

    .cart-product-info span {
        font-size: 12px;
    }


    table {
        display: flex;
        flex-flow: column;
        width: 100%;
    }

    thead {
        flex: 0 0 auto;
    }

    tbody {
        flex: 1 1 auto;
        display: block;
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 350px;
    }

    tr {
        width: 100%;
        display: table;
        table-layout: fixed;
    }
    .table td, .table th {
        border-top: none;
    }
    .table thead th {
        border-bottom: 1px solid #dee2e6;
    }
</style>