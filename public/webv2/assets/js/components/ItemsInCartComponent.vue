<template>
    <div v-if="carts.length === 0" style="margin: 20px 0; text-align: center">
        <div class="content">
            <h4 class="center">Không tồn tại sản phẩm trong giỏ hàng</h4>
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
            <a href="javascript:void(0)" type="button" class="btn btn-circle waves-effect waves-light btn-indigo">
              <i class="fas fa-shopping-cart"></i>
            </a>
            <p>Giỏ hàng</p>
          </div>
          <div class="steps-step">
            <a v-bind:href="url + '/thanh-toan.html'" type="button" class="btn btn-default btn-circle waves-effect waves-light" disabled="disabled">
              <i class="fas fa-shopping-basket"></i>
            </a>
            <p>Thanh toán</p>
          </div>
          <div class="steps-step">
            <button type="button" class="btn btn-default btn-circle waves-effect waves-light" disabled="disabled">
              <i class="far fa-check-circle"></i>
            </button>
            <p>Hoàn thành</p>
          </div>
        </div>
      </div>
      <div class="row col-md-12 shopping-cart">
        <div class="col-md-8 shopping-cart-table" style="margin: 0px 10px 20px 20px;background: white;">
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
              <tr>
                <th class="cart-romove item" style="width: 8%;">Xoá</th>
                <th class="cart-description item" style="width: 15%;">Hình ảnh</th>
                <th class="cart-product-name item" style="width: 25%;">Tên sản phẩm</th>
                <th class="cart-sub-total item" style="width: 15%;">Đơn giá</th>
                <th class="cart-qty item" style="width: 15%;">Số lượng</th>
                <th class="cart-total last-item">Thành tiền</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(cart, index) in carts">
                <td class="romove-item" style="width: 8%;">
                  <a href="#" title="cancel" class="icon" @click="removeItem(cart, index)">
                    <i class="fa fa-trash-alt"></i>
                  </a>
                </td>
                <td class="cart-image" style="width: 15%;">
                  <a class="entry-thumbnail" v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])" v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
                    <img v-if="cart['image']" v-bind:data-src="cart['image']" alt="">
                    <img v-else="" v-bind:data-src="url + '/public/web/images/img_err.jpg'" alt="">
                  </a>
                </td>
                <td class="cart-product-name-info" style="width: 25%;">
                  <a v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])">
                    <h4 class='cart-product-description'>
                      {{cart['name']}}
                    </h4>
                  </a>
                  <div class="cart-product-info">
                    <span class="product-color">Mã sản phẩm:<span>{{ cart['sku'] }}</span></span>
                  </div>
                  <div class="cart-product-info">
                    <span class="product-color">Màu:<span>{{ cart['color'] }}</span></span>
                  </div>
                  <div class="cart-product-info">
                    <span class="product-color">Size:<span>{{ cart['size'] }}</span></span>
                  </div>
                </td>
                <td class="cart-product-sub-total" style="width: 15%;">
                  <span class="cart-sub-total-price" ref="price" v-html="$options.filters.formatPrice(cart['price'])"></span>
                </td>
                <td class="cart-product-quantity" style="width: 15%;">
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
                    <input type="text" v-bind:value="cart['qty']" readonly ref="qty">
                  </div>
                </td>
                <td class="cart-product-grand-total">
                  <p class="cart-grand-total-price" v-html="$options.filters.formatPrice(subtotal(cart))"></p>
                </td>
              </tr>
              </tbody><!-- /tbody -->
            </table><!-- /table -->
          </div>

        </div>
        <div class="col-md-3 cart-shopping-total" style="margin: 0px 20px 20px 10px;min-height: 300px;">
          <table class="table">
            <thead>
            <tr>
              <th>
                <div class="cart-grand-total">
                  Tổng <span class="inner-left-md" v-html="$options.filters.formatPrice(Total)"></span>
                </div>
              </th>
            </tr>
            </thead><!-- /thead -->
            <tbody>
            <tr>
              <td>
                <div class="cart-checkout-btn float-right">
                  <a v-bind:href="url + '/thanh-toan.html'" class="btn btn-primary btn-flat checkout-btn">
                    Thanh toán <i class="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </td>
            </tr>
            </tbody><!-- /tbody -->
          </table><!-- /table -->
          <div class="row col-md-12 mt-3 no-padding no-margin">
            <ul>
              <li style="font-style:Italic;">
                <i class="fas fa-check-circle text-success"></i>&nbsp;Miễn phí vận chuyển khu vực Hà Nội với đơn từ 250k
              </li>
              <li style="font-style:Italic;">
                <i class="fas fa-check-circle text-success"></i>&nbsp;Miễn phí vận chuyển Toàn Quốc với đơn từ 500k
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-12 continue-shopping no-padding mt-4">
            <a  v-bind:href="url" class="btn btn-upper btn-flat btn-primary outer-left-xs">
              <i class="fas fa-arrow-circle-left"></i>&nbsp;Tiếp tục mua hàng
            </a>
          </div>
        </div>
      </div>
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
            subtotal(cart) {
                let price = cart['price'];
                let qty = cart['qty'];
                return price * qty;
            },
            plus: function (cart) {
                let products = [];
                products.push({
                    "id": cart['id'],
                    "sku": cart['sku'],
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
                    "sku": cart['sku'],
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
              this.$swal({
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
                            "sku": cart['sku'],
                            "color": cart['color'],
                            "size": cart['size']
                        });
                        axios.post(url + "/api/cart/remove", {
                            body: products
                        }).then(response => {
                            this.carts.splice(index, 1);
                            this.$toast.success({
                              title:'Thông báo',
                              message:'Sản phẩm đã được xóa thành công'
                            });
                        })
                    }
                });
            }
        }
    }
</script>
<style scoped>
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
    max-height: 475px;
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
  .continue-shopping {
    bottom: 15px;
    position: absolute;
  }
</style>