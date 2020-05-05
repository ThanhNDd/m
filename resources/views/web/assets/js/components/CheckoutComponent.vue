<template>
    <div class="container"  v-if="carts.length === 0" style="margin: 20px 0; text-align: center">
      <div class="content">
        <h4 class="center">Không tồn tại sản phẩm để thanh toán</h4>
        <div class="divider-space-content"></div>
        <a v-bind:href="url" class="btn btn-primary">
          <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
        </a>
      </div>
    </div>
  <div class="container" v-else>
    <div class="steps-form">
      <div class="steps-row setup-panel">
        <div class="steps-step">
          <a v-bind:href="url + '/gio-hang.html'" type="button" class="btn btn-default btn-circle waves-effect waves-light ">
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
          <a href="#step-3" type="button" class="btn btn-default btn-circle waves-effect waves-light" disabled="disabled">
            <i class="far fa-check-circle"></i>
          </a>
          <p>Hoàn thành</p>
        </div>
      </div>
    </div>
    <form @submit="checkForm" novalidate="true">
          <div class="row col-md-12" style="background: #fff; margin-bottom: 30px;">
            <div class="col-md-6">
              <h3>Thông tin người nhận</h3>
              <div class="divider-space-content"></div>
              <div style="margin-bottom: 20px;">
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
                <div class="form-group">
                  <textarea placeholder="Ghi chú đơn hàng ..." class="form-control" v-model="note" ref="note"></textarea>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h3>Danh sách sản phẩm</h3>
              <div class="container" style="padding: 0;width: 100%;">
                <div class="w-product">
                  <div class="content" v-for="(cart, index) in carts">
                    <div class="row">
                      <div class="col-md-3 col-lg-3">
                        <div class="content-image">
                          <img v-bind:src="cart['image']" width="100px">
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-8">
                        <div class="content-text">
                          <p class="title-product" v-text="cart['name'] +' - '+ cart['color'] +' - '+ cart['size']"></p>
                          <p v-text="displayPrice(cart['price'], cart['qty'])"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="coupon-code">
                      <input type="text" class="form-control" placeholder="Mã giảm giá">
                      <button class="btn btn-primary">Áp dụng</button>
                  </div>
                  <div class="wrap-total-cart">
                    <div class="container" style="padding: 0;background: #f8f8f8;">
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
            </div>
            <div class="col-md-12 estimate-ship-tax" style="margin-bottom: 20px;margin-top: 10px;padding: 0;">
                <div class="col-md-6">
                    <a v-bind:href="url" class="btn btn-upper btn-primary outer-left-xs">
                      <i class="fas fa-arrow-circle-left"></i>&nbsp;Tiếp tục mua hàng
                    </a>
                </div>
                <div class="col-md-6">
                  <button type="submit" class="btn btn-danger" style="float: right;" v-bind:class="submit ? 'disabled' : ''" v-bind:disabled="submit">
                    <span class="fas fa-shopping-bag" v-bind:class="submit ? 'hidden' : ''"></span>
                    <span class="spinner-border spinner-border-sm" v-bind:class="submit ? '' : 'hidden'"></span> Thanh toán
                  </button>
                </div>
            </div>
          </div>
<!--        </div>-->
<!--      </div>&lt;!&ndash; /.shopping-cart &ndash;&gt;-->
<!--    </div> &lt;!&ndash; /.row &ndash;&gt;-->
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
                url: ''
            }
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
            subtotal(cart) {
                let price = cart['price'];
                let qty = cart['qty'];
                return price * qty;
            },
            formatPrice: function(value) {
                let val = (value/1).toFixed(0).replace('.', ',');
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ';
            },
            checkForm: function (e) {
                e.preventDefault();
                if (this.name && this.phone && this.address && this.city && this.district && this.village && this.address) {
                    this.submit = true;
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
                    "total_checkout" : this.total_checkout,
                    "note" : this.note,
                });
                console.log(JSON.stringify(orders));
                axios.post(url + "/api/thuc-hien-thanh-toan", {
                    body: orders
                }).then(response => {
                    this.submit = false;
                    if(response.data === 201) {
                        window.location.href =  url + "/hoan-thanh.html";
                    } else {
                        swal({
                            title: "Đã xảy ra lỗi!",
                            text: response.data,
                            icon: "error",
                            button: "Đồng ý",
                        });
                    }
                })
            }
        },
    }

</script>
