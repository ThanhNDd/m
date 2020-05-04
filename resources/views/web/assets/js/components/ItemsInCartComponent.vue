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
            <a href="#step-1" type="button" class="btn btn-circle waves-effect waves-light btn-indigo">
              <i class="fas fa-shopping-cart"></i>
            </a>
            <p>Giỏ hàng</p>
          </div>
          <div class="steps-step">
            <a href="#step-2" type="button" class="btn btn-default btn-circle waves-effect waves-light" disabled="disabled">
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
      <div class="row ">
        <div class="shopping-cart">
          <div class="shopping-cart-table ">
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th class="cart-romove item">Xoá</th>
                  <th class="cart-description item">Hình ảnh</th>
                  <th class="cart-product-name item">Tên sản phẩm</th>
                  <th class="cart-sub-total item">Đơn giá</th>
                  <th class="cart-qty item">Số lượng</th>
                  <th class="cart-total last-item">Thành tiền</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(cart, index) in carts">
                  <td class="romove-item">
                    <a href="#" title="cancel" class="icon" @click="removeItem(cart, index)">
                      <i class="fa fa-trash-alt"></i>
                    </a>
                  </td>
                  <td class="cart-image">
                    <a class="entry-thumbnail" href="javascript:void(0);">
                        <img v-bind:src="cart['image']" alt="">
                    </a>
                  </td>
                  <td class="cart-product-name-info">
                    <h4 class='cart-product-description'>
                      <p>{{cart['name']}}</p>
                    </h4>
                    <div class="cart-product-info">
                      <span class="product-color">Màu:<span>{{ cart['color'] }}</span></span>
                    </div>
                    <div class="cart-product-info">
                      <span class="product-color">Size:<span>{{ cart['size'] }}</span></span>
                    </div>
                  </td>
                  <td class="cart-product-sub-total">
                    <span class="cart-sub-total-price">{{ cart['price'] | formatPrice }}</span>
                  </td>
                  <td class="cart-product-quantity">
                    <div class="quant-input">
                      <div class="arrows">
                        <div class="arrow plus gradient">
                          <span class="ir">
                            <i class="icon fas fa-sort-up" @click="plus(cart)"></i>
                          </span>
                        </div>
                        <div class="arrow minus gradient">
                          <span class="ir">
                            <i class="icon fas fa-sort-down" @click="minus(cart)"></i>
                          </span>
                        </div>
                      </div>
                      <input type="text" v-bind:value="cart['qty']" readonly>
                    </div>
                  </td>
                  <td class="cart-product-grand-total">
                    <span class="cart-grand-total-price">{{subtotal(cart['price'], cart('qty'))}}</span>
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
          </div><!-- /.estimate-ship-tax -->

          <div class="col-md-4 col-sm-12 estimate-ship-tax">

          </div><!-- /.estimate-ship-tax -->

          <div class="col-md-4 col-sm-12 cart-shopping-total">
            <table class="table">
              <thead>
              <tr>
                <th>
                  <div class="cart-grand-total">
                    Tổng <span class="inner-left-md">{{Total | formatPrice}}</span>
                  </div>
                </th>
              </tr>
              </thead><!-- /thead -->
              <tbody>
              <tr>
                <td>
                  <div class="cart-checkout-btn pull-right">
                    <a v-bind:href="url + '/thanh-toan.html'" class="btn btn-primary checkout-btn">
                      Thanh toán <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </td>
              </tr>
              </tbody><!-- /tbody -->
            </table><!-- /table -->
          </div><!-- /.cart-shopping-total -->
        </div><!-- /.shopping-cart -->
      </div> <!-- /.row -->
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
            },

        },
        methods: {
            subtotal(price, qty) {
                return price * qty;
            },
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
                this.subtotal(cart['price'], cart['qty']);
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
                this.subtotal(cart['price'], cart['qty']);
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
