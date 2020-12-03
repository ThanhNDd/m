<template>
  <section class="section featured-product wow fadeInUp">
    <div class="section-title"><h3>Upsell products</h3></div>
    <div class="owl-carousel home-owl-carousel1 upsell-product custom-carousel owl-theme outer-top-xs">

      <div class="item item-carousel" v-for="product in products">
        <div class="products">

          <div class="product">
            <div class="product-image">
              <div class="image">
                <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                  <!--                        <img v-bind:src="product.image | format_image('400x400')" v-bind:alt="product.name">-->
                  <div :style="{'background-image':'url('+product.image+')'}">
                  </div>
                </a>
              </div><!-- /.image -->

<!--              <div class="tag sale"><span>sale</span></div>-->
            </div><!-- /.product-image -->


            <div class="product-info text-left">
              <h3 class="name">
                <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                  {{product.name}}
                </a>
              </h3>
<!--              <div class="rating rateit-small"></div>-->
<!--              <div class="description"></div>-->

              <div class="product-price float-left col-md-12 col-lg-12 no-padding">
                <p class="price" v-html="$options.filters.formatPrice(product.retail)"></p>
              </div><!-- /.product-price -->

            </div><!-- /.product-info -->
<!--            <div class="cart clearfix animate-effect">-->
<!--              <div class="action">-->
<!--                <ul class="list-unstyled">-->
<!--                  <li class="add-cart-button btn-group">-->
<!--                    <button class="btn btn-primary icon" data-toggle="dropdown" type="button">-->
<!--                      <i class="fa fa-shopping-cart"></i>-->
<!--                    </button>-->
<!--                    <button class="btn btn-primary cart-btn" type="button">Add to cart</button>-->

<!--                  </li>-->

<!--                  <li class="lnk wishlist">-->
<!--                    <a class="add-to-cart" href="detail.html" title="Wishlist">-->
<!--                      <i class="icon fa fa-heart"></i>-->
<!--                    </a>-->
<!--                  </li>-->

<!--                  <li class="lnk">-->
<!--                    <a class="add-to-cart" href="detail.html" title="Compare">-->
<!--                      <i class="fa fa-signal"></i>-->
<!--                    </a>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>&lt;!&ndash; /.action &ndash;&gt;-->
<!--            </div>&lt;!&ndash; /.cart &ndash;&gt;-->

          </div><!-- /.product -->

        </div><!-- /.products -->
      </div><!-- /.item -->

    </div><!-- /.home-owl-carousel -->
  </section>
</template>

<script>
    export default {
        data() {
            return {
                products: '',
                // isFinished: false,
                row: 0, // Record selction position
                // rowperpage: 5, // Number of records fetch at a time
                // buttonText: 'Xem thêm',
                url: '',
                // submit: false,
                // rowperpage: 10
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                let cat_id = document.querySelector('#cat_id').getAttribute('value');
                let id = document.querySelector('#product_id').getAttribute('value');
                let type = document.querySelector('#type_id').getAttribute('value');
                // axios.get(url + '/api/relate/'+id+'/category/'+cat_id+'/type/'+type)
                //     .then(response => {
                //         this.products = response.data;
                //     });
                this.submit = true;
                return new Promise((resolve, reject) => {
                    axios.post(url + '/api/relate', {
                        product_id: id,
                        cat_id: cat_id,
                        type: type,
                        row: this.row,
                        rowperpage: 10
                    }).then(response => {
                        this.products = response.data;
                        resolve();
                    }).catch(error => reject(error));
                });

            },
            // scrollToTop: function () {
            //     let top = $('#load_more_relate').offset().top;
            //     top = top - 100;
            //     window.scrollTo({
            //         top: top,
            //         left: 0,
            //         behavior: 'smooth'
            //     });
            // }
        },
        mounted() {
            this.getProducts().then(() => {
                let owl = $(this);
                let  itemPerLine = owl.data('item');
                if(!itemPerLine){
                    itemPerLine = 4;
                }
                $('.home-owl-carousel1').owlCarousel({
                    items : itemPerLine,
                    itemsTablet:[768,2],
                    itemsDesktop : [1199,2],
                    navigation : true,
                    pagination : false,
                    navigationText: ["", ""]
                });
            })
        }
    }
</script>
<style scoped>
  .image a div {
    height: 270px;
    background-position-y: center;
    background-position-x: center;
    border-radius: 10px;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>
