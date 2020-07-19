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
    <div v-else>
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
                    <a href="#step-2" type="button" class="btn btn-circle waves-effect waves-light btn-indigo">
                        <i class="fas fa-shopping-basket"></i>
                    </a>
                    <p>Thanh toán</p>
                </div>
                <div class="steps-step">
                    <a href="#step-3" type="button" class="btn btn-default btn-circle waves-effect waves-light"
                       disabled="disabled">
                        <i class="far fa-check-circle"></i>
                    </a>
                    <p>Hoàn thành</p>
                </div>
            </div>
        </div>
        <form @submit="checkForm" novalidate="true">
            <div class="row col-md-12" style="background: #fff; margin-bottom: 30px;">
                <div class="col-md-5 mt-2 customer-info">
                    <h3>Thông tin người nhận</h3>
                    <div v-if="!isLogged" style="display:inline-block;text-align: center;width:100%" class="mt-4 mb-4">
                        <p style="display:inline-block;margin-right: 5px;">Hãy </p>
                        <p style="display:inline-block;margin-right: 5px;"><login-component></login-component></p>
                        <p style="display:inline-block;margin-right: 5px;">để thực hiện thanh toán</p>
                    </div>
                    <div v-if="isLogged">
                        <label for="different_address">
                            <input type="checkbox" id="different_address" name="different_address" v-model="different_address" @click="different_address = true">
                            &nbsp; Giao hàng đến địa chỉ khác
                        </label>
                        <div class="mb-3" v-if="different_address">
                            <div class="form-group">
                                <input type="text" placeholder="Họ tên" class="form-control" v-model="name" ref="name">
                            </div>
                            <div :class="['form-group', isPhoneValid()]">
                                <input type="text" placeholder="Số điện thoại" class="form-control" v-model="phone"
                                       ref="phone">
                            </div>
                            <div :class="['form-group', isEmailValid()]">
                                <input type="email" class="form-control" placeholder="Email" v-model="email" ref="email"/>
                            </div>
                            <v-select :options="city" :reduce="city => city.id" @input="changeCity" v-model="city_id"
                                      placeholder="Thành phố" label="text" ref="city" class="form-group"></v-select>
                            <v-select :options="district" :reduce="district => district.id" @input="changeDistrict"
                                      v-model="district_id" placeholder="Quận huyện" label="text" ref="district"
                                      class="form-group"></v-select>
                            <v-select :options="village" :reduce="village => village.id" @input="changeVillage"
                                      v-model="village_id" placeholder="Phường xã" label="text" ref="village" class="form-group">
                            </v-select>
                            <div class="form-group">
                                <input type="text" placeholder="Thôn xóm, số nhà ..." class="form-control" v-model="address"
                                       ref="address">
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Ghi chú đơn hàng ..." class="form-control" v-model="note"
                                          ref="note"></textarea>
                            </div>
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
                        <div class="coupon-code col-md-6 float-left">
                            <input type="text" class="form-control" placeholder="Mã giảm giá">
                            <button class="btn btn-primary btn-flat mt-2">Áp dụng</button>
                        </div>
                        <div class="wrap-total-cart col-md-6 float-left">
                            <div class="container" style="padding: 0;background: #f8f8f8;">
                                <div class="content-total mb-2">
                                    <ul>
                                        <li>
                                            <p>Tổng tiền</p>
                                        </li>
                                        <li>
                                            <h6 v-html="$options.filters.formatPrice(totalAmount)"></h6>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content-total mb-2">
                                    <ul>
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
                                <div class="content-total mb-2">
                                    <ul>
                                        <li>
                                            <p>Chiết khấu</p>
                                        </li>
                                        <li>
                                            <h6 v-html="$options.filters.formatPrice(reduce)"></h6>
                                        </li>
                                    </ul>
                                </div>
                                <div class="content-total mb-2">
                                    <ul>
                                        <li>
                                            <p>Tổng thanh toán</p>
                                        </li>
                                        <li>
                                            <h6 style="font-size: 25px; color: red;"
                                                v-html="$options.filters.formatPrice(totalMoney)"></h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 estimate-ship-tax"
                     style="margin-bottom: 20px;margin-top: 10px;padding: 0;text-align: right;">
                    <button type="submit" class="btn btn-danger btn-flat mr-2" style="float: right;"
                            v-bind:class="submit ? 'disabled' : ''" v-bind:disabled="submit">
                        <span class="fas fa-shopping-bag" v-if="submit"></span>
                        <i class="fa fa-spinner fa-spin" style="font-size:20px"v-if="submit"></i>
                        Thanh toán
                    </button>
                </div>
            </div>
            <!--        </div>-->
            <!--      </div>&lt;!&ndash; /.shopping-cart &ndash;&gt;-->
            <!--    </div> &lt;!&ndash; /.row &ndash;&gt;-->
        </form>
    </div>

</template>

<script>
    import loginComponent from './LoginComponent.vue';
    export default {
        data() {
            return {
                carts: [],
                errors: [],
                name: '',
                phone: '',
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
                isLogged: false
            }
        },
        components: {
            loginComponent
        },
        created() {
            this.url = url;
            axios.get(url + '/api/carts')
                .then(response => {
                    this.carts = response.data;
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
                if (this.city_id === 1) {
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
            totalMoney: function () {
                return this.total_checkout = this.total_amount + this.shipping;
            },
        },
        methods: {
            displayPrice: function (price, qty) {
                let val = this.formatPrice(price * qty);
                return this.formatPrice(price) + " x " + qty + " = " + val;
            },
            subtotal(cart) {
                let price = cart['price'];
                let qty = cart['qty'];
                return price * qty;
            },
            formatPrice: function (value) {
                let val = (value / 1).toFixed(0).replace('.', ',');
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
            },
            checkForm: function (e) {
                e.preventDefault();
                if (this.name && this.phone && this.address && this.city && this.district && this.village && this.address) {
                    this.submit = true;
                    this.checkout();
                    return true;
                }
                if(!this.isLogged) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Bạn chưa đăng nhập'
                    });
                    return false;
                }
                if (!this.name) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Bạn chưa nhập tên'
                    });
                    this.$refs.name.focus();
                    return false;
                }
                if (!this.phone) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Bạn chưa nhập số điện thoại.'
                    });
                    this.$refs.phone.focus();
                    return false;
                } else if (!this.phone_reg.test(this.phone)) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Số điện thoại chưa đúng.'
                    });
                    this.$refs.phone.focus();
                    return false;
                }
                if (this.email !== '' && !this.email_reg.test(this.email)) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Email chưa đúng.'
                    });
                    this.$refs.email.focus();
                    return false;
                }
                if (!this.city_id) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Bạn chưa chọn thành phố.'
                    });
                    return false;
                }
                if (!this.district_id) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Bạn chưa chọn quận huyện.'
                    });
                    return false;
                }
                if (!this.village_id) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Bạn chưa chọn phường xã.'
                    });
                    return false;
                }
                if (!this.address) {
                    this.$toast.error({
                        title: 'Lỗi',
                        message: 'Bạn chưa nhập số nhà.'
                    });
                    this.$refs.address.focus();
                    return false;
                }
            },
            isPhoneValid: function () {
                return (this.phone === "") ? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
            },
            isEmailValid: function () {
                return (this.email === "") ? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
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
                let orders = [];
                orders.push({
                    "customer_name": this.name,
                    "number_phone": this.phone,
                    "email": this.email,
                    "cityId": this.city_id,
                    "districtId": this.district_id,
                    "villageId": this.village_id,
                    "address": this.address,
                    "total_amount": this.total_amount,
                    "shipping": this.shipping,
                    "total_checkout": this.total_checkout,
                    "note": this.note,
                });
                console.log(JSON.stringify(orders));
                axios.post(url + "/api/thuc-hien-thanh-toan", {
                    body: orders
                }).then(response => {
                    this.submit = false;
                    if (response.data === 201) {
                        window.location.href = url + "/hoan-thanh.html";
                    } else {
                        this.$toast.error({
                            title: 'Lỗi',
                            message: 'Đã xảy ra lỗi.'
                        });
                    }
                })
            }
        },
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

    .w-product {
        max-height: 415px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .cart-product-info span {
        font-size: 12px;
    }
</style>