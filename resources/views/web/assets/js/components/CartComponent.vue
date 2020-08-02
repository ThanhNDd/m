<template>
    <div>
        <a v-bind:href="url + '/gio-hang.html'" class="lnk-cart">
          <div class="items-cart-inner">
            <div class="">
                <i class="fas fa-shopping-cart"></i>
              <div class="basket-item-count cart_number">
                <span class="count" v-if="cart_number">{{cart_number}}</span>
              </div>
            </div>
          </div>
        </a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cart_number: '',
                url: ''
            }
        },
        created() {
            this.url = url;
            axios.get(url + '/api/cart')
                .then(response => {
                    this.cart_number = response.data
                });
        },
    }
</script>
<style scoped>
    i.fas.fa-shopping-cart {
        font-size: 35px;
        margin-top: 0px !important;
    }
</style>
