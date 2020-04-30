<template>
    <div>
        <a href="#" class="dropdown-toggle lnk-cart" data-toggle="dropdown">
          <div class="items-cart-inner">
            <div class="basket">
              <div class="basket-item-count">
                <span class="count" v-if="cart_number">{{cart_number}}</span>
              </div>
            </div>
          </div>
        </a>
        <ul class="dropdown-menu">
          <li>
            <div class="cart-item product-summary">
              <div class="row">
                <div class="col-xs-4">
                  <div class="image">
                    <a href="detail.html">
                      <img src="" alt="">
                    </a>
                  </div>
                </div>
                <div class="col-xs-7">
                  <h3 class="name"><a href="index8a95.html?page-detail">Simple Product</a></h3>
                  <div class="price">$600.00</div>
                </div>
                <div class="col-xs-1 action"> <a href="#"><i class="fa fa-trash"></i></a> </div>
              </div>
            </div>
            <!-- /.cart-item -->
            <div class="clearfix"></div>
            <hr>
            <div class="clearfix cart-total">
              <div class="pull-right"> <span class="text">Sub Total :</span><span class='price'>$600.00</span> </div>
              <div class="clearfix"></div>
              <a href="checkout.html" class="btn btn-upper btn-primary btn-block m-t-20">Thanh toán</a> </div>
            <!-- /.cart-total-->

          </li>
        </ul>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                cart_number: ''
            }
        },
        created() {
            axios.get(url + '/api/cart')
                .then(response => {
                    this.cart_number = response.data
                });
        },
        methods: {}
    }
</script>
