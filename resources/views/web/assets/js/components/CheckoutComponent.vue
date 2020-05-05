<template>
    <div class="container"  v-if="carts.length === 0" style="margin: 20px 0; text-align: center">
      <div class="content">
        <h4 class="center">Không tồn tại sản phẩm trong giỏ hàng</h4>
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
      <div class="row ">
      <div class="shopping-cart">
        <div class="shopping-cart-table ">
          <div class="table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th class="cart-description item">Hình ảnh</th>
                <th class="cart-product-name item">Tên sản phẩm</th>
                <th class="cart-sub-total item">Đơn giá</th>
                <th class="cart-qty item">Số lượng</th>
                <th class="cart-total last-item">Thành tiền</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(cart, index) in carts">
                <td class="cart-image">
                  <a class="entry-thumbnail" v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])">
                    <img v-bind:src="cart['image']" alt="">
                  </a>
                </td>
                <td class="cart-product-name-info">
                  <a v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])">
                    <h4 class='cart-product-description'>
                      {{cart['name']}}
                    </h4>
                  </a>
                  <div class="cart-product-info">
                    <span class="product-color">Màu:<span>{{ cart['color'] }}</span></span>
                  </div>
                  <div class="cart-product-info">
                    <span class="product-color">Size:<span>{{ cart['size'] }}</span></span>
                  </div>
                </td>
                <td class="cart-product-sub-total">
                  <span class="cart-sub-total-price" ref="price">{{ cart['price'] | formatPrice }}</span>
                </td>
                <td class="cart-product-quantity">
                  <div class="quant-input">
                    <p>{{cart['qty']}}</p>
                  </div>
                </td>
                <td class="cart-product-grand-total">
                  <span class="cart-grand-total-price">{{subtotal(cart) | formatPrice}}</span>
                </td>
              </tr>
              </tbody><!-- /tbody -->
            </table><!-- /table -->
          </div>
        </div><!-- /.shopping-cart-table -->
        <div class="col-md-4 col-sm-12 estimate-ship-tax">
          <a  v-bind:href="url" class="btn btn-upper btn-primary outer-left-xs">
            <i class="fas fa-arrow-circle-left"></i>&nbsp;Tiếp tục mua hàng
          </a>
        </div>
        <div class="col-md-4 col-sm-12 estimate-ship-tax">
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
          </div>
        </div><!-- /.estimate-ship-tax -->
        <div class="col-md-4 col-sm-12 cart-shopping-total">
          <table class="table">
            <thead>
            <tr>
              <th>
                <div class="cart-grand-total">
                  Tổng <span class="inner-left-md">{{totalAmount | formatPrice}}</span>
                </div>
              </th>
            </tr>
            </thead><!-- /thead -->
            <tbody>
            <tr>
              <td>
                <div class="cart-grand-total">
                  Phí ship <span class="inner-left-md">{{totalShipping | formatPrice}}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="cart-grand-total">
                  Tổng thanh toán <span class="inner-left-md">{{totalMoney | formatPrice}}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="cart segments">
                  <button type="submit" class="button primary-button" v-bind:class="submit ? 'disabled' : ''" v-bind:disabled="submit">
                    <span class="fas fa-shopping-bag" v-bind:class="submit ? 'hidden' : ''"></span>
                    <span class="spinner-border spinner-border-sm" v-bind:class="submit ? '' : 'hidden'"></span> Thanh toán
                  </button>
                </div>
              </td>
            </tr>
            </tbody><!-- /tbody -->
          </table><!-- /table -->
        </div><!-- /.cart-shopping-total -->
      </div><!-- /.shopping-cart -->
    </div> <!-- /.row -->
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
                    "total_checkout" : this.total_checkout
                });
                console.log(JSON.stringify(orders));
                axios.post(url + "/api/thuc-hien-thanh-toan", {
                    body: orders
                }).then(response => {
                    this.submit = false;
                    if(response.data === 201) {
                        window.location.href =  url + "/cam-on.html";
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
