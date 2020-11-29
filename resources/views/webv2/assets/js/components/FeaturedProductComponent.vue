<template>
    <section class="section featured-product wow fadeInUp" v-if="products.length > 0">
        <div class="section-title"><h3>Featured products</h3></div>
        <div class="tab-content outer-top-xs">
            <div class="tab-pane in active" id="all">
                <div class="product-slider">
                    <div class="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="4">
                        <div class="item item-carousel" v-for="product in products">
                            <div class="products">
                                <div class="product">
                                    <div class="product-image">
                                        <div class="image">
                                            <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                                                <!--                                                <div v-lazy-container="{ selector: 'img', error: url + '/public/web/images/404.jpg', loading: '' }">-->
                                                <!--                                                    <img v-bind:data-src="!product.image || product.image === '[]' ? product.variant_image : product.image | format_image('400x400')"-->
                                                <!--                                                         v-bind:alt="product.name">-->
                                                <!--                                                </div>-->
                                                <div :style="{'background-image':'url('+product.variant_image+')'}"></div>
                                            </a>
                                        </div>
                                        <div class="tag new"><span>new</span></div>
                                    </div>
                                    <!-- /.product-image -->
                                    <div class="product-info text-left">
                                        <h3 class="name">
                                            <a v-bind:href="product.name | change_to_slug | url_product(product.id)">
                                                {{product.name}}
                                            </a>
                                        </h3>
                                        <!--                                        <div class="float-left col-md-12 col-lg-12 no-padding">-->
                                        <!--                                          <i v-bind:class="product.rating == 0 ? 'far fa-star' : (product.rating >= 1 ? 'fa fa-star' : 'fa fa-star-half-alt')" style="color:#ffc107;"></i>-->
                                        <!--                                          <i v-bind:class="product.rating > 1 ? (product.rating >= 2 ? 'fa fa-star-o' : 'fas fa-star-half-alt') : 'fa fa-star' " style="color:#ffc107;"></i>-->
                                        <!--                                          <i v-bind:class="product.rating > 2 ? (product.rating >= 3 ? 'fa fa-star-o' : 'fas fa-star-half-alt') : 'fa fa-star' " style="color:#ffc107;"></i>-->
                                        <!--                                          <i v-bind:class="product.rating > 3 ? (product.rating >= 4 ? 'fa fa-star-o' : 'fas fa-star-half-alt') : 'fa fa-star' " style="color:#ffc107;"></i>-->
                                        <!--                                          <i v-bind:class="product.rating > 4 ? (product.rating >= 5 ? 'fa fa-star-o' : 'fas fa-star-half-alt') : 'fa fa-star' " style="color:#ffc107;"></i>-->
                                        <!--                                          <span style="margin-left: 5px; color: gray;" v-if="product.reviews > 0">({{ product.reviews }})</span>-->
                                        <!--                                        </div>-->
                                        <div class="product-price float-left col-md-12 col-lg-12 no-padding">
                                            <p class="price" v-html="$options.filters.formatPrice(product.retail)"></p>
                                        </div>
                                    </div>
                                    <!-- /.product-info -->
                                    <div class="cart clearfix animate-effect">
                                        <div class="action">
                                            <ul class="list-unstyled">
                                                <li class="add-cart-button btn-group">
                                                    <button data-toggle="tooltip" class="btn btn-primary icon"
                                                            type="button" title="Add Cart"><i
                                                            class="fa fa-shopping-cart"></i></button>
                                                    <button class="btn btn-primary cart-btn" type="button">Add to cart
                                                    </button>
                                                </li>
                                                <li class="lnk wishlist"><a data-toggle="tooltip" class="add-to-cart"
                                                                            href="{!! url('/san-pham/detail-1.html') !!}"
                                                                            title="Wishlist"> <i
                                                        class="icon fa fa-heart"></i> </a></li>
                                                <li class="lnk"><a data-toggle="tooltip" class="add-to-cart"
                                                                   href="{!! url('/san-pham/detail-1.html') !!}"
                                                                   title="Compare"> <i class="fa fa-signal"
                                                                                       aria-hidden="true"></i> </a></li>
                                            </ul>
                                        </div>
                                        <!-- /.action -->
                                    </div>
                                    <!-- /.cart -->
                                </div>
                                <!-- /.product -->

                            </div>
                            <!-- /.products -->
                        </div>
                        <!-- /.item -->
                    </div>
                    <!-- /.home-owl-carousel -->
                </div>
                <!-- /.product-slider -->
            </div>
            <!-- /.tab-pane -->
        </div>
        <!-- /.tab-content -->
    </section>
</template>

<script>
    export default {
        data() {
            return {
                products: '',
                isFinished: false,
                row: 0,
                buttonText: 'Xem thêm',
                url: '',
                submit: false,
                rowperpage: 10
            }
        },
        created() {
            this.url = url;
            this.getProducts();
        },
        methods: {
            getProducts: function () {
                return new Promise((resolve, reject) => {
                    axios.post(url + '/api/products', {
                        row: this.row,
                        rowperpage: 10
                    }).then(response => {
                        this.products = response.data;
                        resolve();
                    }).catch(error => reject(error));
                });
            }
        },
        mounted() {
            this.getProducts().then(() => {
                let owl = $(this);
                let  itemPerLine = owl.data('item');
                if(!itemPerLine){
                    itemPerLine = 4;
                }
                $('.home-owl-carousel').owlCarousel({
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
        background-size: 270px;
        background-repeat: no-repeat;
    }
</style>
