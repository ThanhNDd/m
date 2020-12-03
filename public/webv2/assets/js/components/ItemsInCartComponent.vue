<template>

  <div class="shopping-cart">
    <div class="shopping-cart-table ">
      <div class="table-responsive">
        <table class="table table-condensed table-responsive table-hover">
          <thead>
          <tr>
            <th class="cart-romove item">Xoá</th>
            <th class="cart-description item">Hình ảnh</th>
            <th class="cart-product-name item">Tên sản phẩm</th>
<!--            <th class="cart-edit item">Thay đổi</th>-->
            <th class="cart-qty item">Số lượng</th>
            <th class="cart-sub-total item">Giá</th>
            <th class="cart-total last-item">Thành tiền</th>
          </tr>
          </thead><!-- /thead -->
          <tbody>
          <tr v-for="(cart, index) in carts">
            <td class="romove-item">
              <a href="#" title="cancel" class="icon" @click="removeItem(cart, index)">
                <i class="fa fa-trash-o"></i>
              </a>
            </td>
            <td class="cart-image">
              <a class="entry-thumbnail" v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])" v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">
<!--                <img v-if="cart['image']" v-bind:data-src="cart['image']" alt="">-->
<!--                <img v-else="" v-bind:data-src="url + '/public/web/images/img_err.jpg'" alt="">-->
                <div v-bind:style="{'background-image':'url('+cart['image']+')'}"></div>
              </a>
            </td>
            <td class="cart-product-name-info">
              <h4 class='cart-product-description'>
                <a v-bind:href="cart['name'] | change_to_slug | url_product(cart['id'])">
                    {{cart['name']}}
                </a>
              </h4>
<!--              <div class="row">-->
<!--                <div class="col-sm-4">-->
<!--                  <div class="rating rateit-small"></div>-->
<!--                </div>-->
<!--                <div class="col-sm-8">-->
<!--                  <div class="reviews">-->
<!--                    (06 Reviews)-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>&lt;!&ndash; /.row &ndash;&gt;-->
              <div class="cart-product-info">
                <span class="product-color">{{ cart['sku'] }} - {{ cart['color'] }} - {{ cart['size'] }}</span>
              </div>
<!--              <div class="cart-product-info">-->
<!--                <span class="product-color">Mã sản phẩm:<span>{{ cart['sku'] }}</span></span>-->
<!--              </div>-->
<!--              <div class="cart-product-info">-->
<!--                <span class="product-color">Màu:<span>{{ cart['color'] }}</span></span>-->
<!--              </div>-->
<!--              <div class="cart-product-info">-->
<!--                <span class="product-color">Size:<span>{{ cart['size'] }}</span></span>-->
<!--              </div>-->
            </td>
<!--            <td class="cart-product-edit"><a href="#" class="product-edit">Edit</a></td>-->
            <td class="cart-product-quantity">
              <div class="quant-input">
                <div class="arrows">
                  <div class="arrow plus gradient"><span class="ir"><i class="icon fa fa-sort-asc" @click="plus(cart)"></i></span></div>
                  <div class="arrow minus gradient"><span class="ir"><i class="icon fa fa-sort-desc" @click="minus(cart)"></i></span></div>
                </div>
                <input type="text" v-bind:value="cart['qty']" readonly ref="qty">
              </div>
            </td>
            <td class="cart-product-sub-total"><span :class="'cart-sub-total-price'" v-html="$options.filters.formatPrice(cart['price'])"></span></td>
            <td class="cart-product-grand-total"><span :class="'cart-grand-total-price'" v-html="$options.filters.formatPrice(subtotal(cart))"></span></td>
          </tr>
          </tbody><!-- /tbody -->
          <tfoot>
          <tr>
            <td colspan="7">
              <div class="shopping-cart-btn">
                  <span class="">
                      <a v-bind:href="url" class="btn btn-upper btn-primary outer-left-xs">Tiếp tục mua hàng</a>
                      <a href="#" class="btn btn-upper btn-primary pull-right outer-right-xs">Cập nhật</a>
                  </span>
              </div><!-- /.shopping-cart-btn -->
            </td>
          </tr>
          </tfoot>
        </table><!-- /table -->
      </div>
    </div><!-- /.shopping-cart-table -->
    <div class="col-md-4 col-sm-12 estimate-ship-tax">
    </div>
    <div class="col-md-4 col-sm-12 estimate-ship-tax">
      <div class="box-tabl">
        <table class="table">
          <thead>
          <tr>
            <th>
              <span class="estimate-title">Mã giảm giá</span>
              <p>Hãy nhập mã giảm giá của bạn tại đây (Nếu có)</p>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div class="form-group">
                <input type="text" class="form-control unicase-form-control text-input" placeholder="Nhập mã giảm giá..">
              </div>
              <div class="clearfix pull-right">
                <button type="submit" class="btn-upper btn btn-primary">Áp dụng</button>
              </div>
            </td>
          </tr>
          </tbody><!-- /tbody -->
        </table><!-- /table -->
      </div>
    </div><!-- /.estimate-ship-tax -->

    <div class="col-md-4 col-sm-12 cart-shopping-total">
      <table class="table">
        <thead>
        <tr>
          <th>
            <div class="cart-sub-total total-price">
              <span class="total-price-left">Tạm tính</span>
              <span class="total-price-right" v-html="$options.filters.formatPrice(Total)"></span>
            </div>
            <div class="cart-sub-total total-price">
              <span class="total-price-left">Giảm giá</span>
              <span class="total-price-right">0<sup>đ</sup></span>
            </div>
            <div class="cart-grand-total total-price">
              <span class="total-price-left">Tổng</span>
              <span class="total-price-right" v-html="$options.filters.formatPrice(Total)"></span>
            </div>
          </th>
        </tr>
        </thead><!-- /thead -->
        <tbody>
        <tr>
          <td>
            <div class="cart-checkout-btn pull-right">
              <a v-bind:href="url + '/thanh-toan.html'" class="btn btn-primary btn-flat checkout-btn">
                Thanh toán <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </td>
        </tr>
        </tbody><!-- /tbody -->
      </table><!-- /table -->
    </div><!-- /.cart-shopping-total -->
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
    padding: 10px;
  }
  .table thead th {
    border-bottom: 1px solid #dee2e6;
  }
  .continue-shopping {
    bottom: 15px;
    position: absolute;
  }
  .cart-sub-total-price, .cart-grand-total-price {
    text-transform: lowercase !important;
  }

  td.romove-item, th.cart-romove.item {
    width: 50px;
  }
  td.cart-image, th.cart-description.item {
    width: 100px;
  }
  td.cart-product-quantity, th.cart-qty.item {
    width: 100px;
  }
  td.cart-product-sub-total, th.cart-sub-total.item {
    width: 150px;
  }
  td.cart-product-grand-total, th.cart-total.last-item {
    width: 150px;
  }
  td.cart-product-name-info, th.cart-product-name.item {
    text-align: left !important;
  }
  .shopping-cart .cart-image img {
    width: 50px;
  }
  .cart-image .entry-thumbnail div {
    background-size: contain;
    width: 80px;
    height: 80px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 999px;
  }
  .total-price {
    display: inline-block;
    width: 100%;
  }
  .total-price-left {
    float: left;
  }
  .total-price-right {
    float: right;
  }
</style>
