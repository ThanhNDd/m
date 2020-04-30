<!-- ============================================== SIDEBAR ============================================== -->
{{--<div class="col-xs-12 col-sm-12 col-md-3 sidebar">--}}
    <!-- ================================== TOP NAVIGATION ================================== -->
{{--      @include('web.page.sidebar.vertical_menu')--}}
    <!-- /.side-menu -->
    <!-- ================================== TOP NAVIGATION : END ================================== -->
    <!-- ============================================== HOT DEALS ============================================== -->
      @include('web.page.sidebar.flase_sale')
    <!-- ============================================== HOT DEALS: END ============================================== -->
    <!-- ============================================== SPECIAL OFFER ============================================== -->
      @include('web.page.sidebar.best_view')
    <!-- /.sidebar-widget -->
    <!-- ============================================== SPECIAL OFFER : END ============================================== -->
    <!-- ============================================== PRODUCT TAGS ============================================== -->
      @include('web.page.sidebar.tags')
    <!-- /.sidebar-widget -->
    <!-- ============================================== PRODUCT TAGS : END ============================================== -->
    <!-- ============================================== SPECIAL DEALS ============================================== -->

    <div class="sidebar-widget outer-bottom-small">
        <h3 class="section-title">Special Deals</h3>
        <div class="sidebar-widget-body outer-top-xs">
            <div class="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs"  style="opacity: 1; display: block;">
                <div class="item">
                    <div class="products special-product">
                        <div class="product">
                            <div class="product-micro">
                                <div class="row product-micro-row">
                                    <div class="col col-xs-5">
                                        <div class="product-image">
                                            <div class="image"> <a href="#"> <img src="{{url('resources/views/web/assets/images/products/p8.jpg') }}" alt=""> </a> </div>
                                            <!-- /.image -->

                                        </div>
                                        <!-- /.product-image -->
                                    </div>
                                    <!-- /.col -->
                                    <div class="col col-xs-7">
                                        <div class="product-info">
                                            <h3 class="name"><a href="#">Floral Print Shirt</a></h3>
                                            <div class="rating rateit-small"></div>
                                            <div class="product-price"> <span class="price"> $450.99 </span> </div>
                                            <!-- /.product-price -->

                                        </div>
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.product-micro-row -->
                            </div>
                            <!-- /.product-micro -->

                        </div>
                        <div class="product">
                            <div class="product-micro">
                                <div class="row product-micro-row">
                                    <div class="col col-xs-5">
                                        <div class="product-image">
                                            <div class="image"> <a href="#"> <img src="{{url('resources/views/web/assets/images/products/p5.jpg') }}" alt=""> </a> </div>
                                            <!-- /.image -->

                                        </div>
                                        <!-- /.product-image -->
                                    </div>
                                    <!-- /.col -->
                                    <div class="col col-xs-7">
                                        <div class="product-info">
                                            <h3 class="name"><a href="#">Floral Print Shirt</a></h3>
                                            <div class="rating rateit-small"></div>
                                            <div class="product-price"> <span class="price"> $450.99 </span> </div>
                                            <!-- /.product-price -->

                                        </div>
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.product-micro-row -->
                            </div>
                            <!-- /.product-micro -->

                        </div>
                        <div class="product">
                            <div class="product-micro">
                                <div class="row product-micro-row">
                                    <div class="col col-xs-5">
                                        <div class="product-image">
                                            <div class="image"> <a href="#"> <img src="{{url('resources/views/web/assets/images/products/p6.jpg') }}" alt="image"> </a> </div>
                                            <!-- /.image -->

                                        </div>
                                        <!-- /.product-image -->
                                    </div>
                                    <!-- /.col -->
                                    <div class="col col-xs-7">
                                        <div class="product-info">
                                            <h3 class="name"><a href="#">Floral Print Shirt</a></h3>
                                            <div class="rating rateit-small"></div>
                                            <div class="product-price"> <span class="price"> $450.99 </span> </div>
                                            <!-- /.product-price -->

                                        </div>
                                    </div>
                                    <!-- /.col -->
                                </div>
                                <!-- /.product-micro-row -->
                            </div>
                            <!-- /.product-micro -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.sidebar-widget-body -->
    </div>
    <!-- /.sidebar-widget -->
    <!-- ============================================== SPECIAL DEALS : END ============================================== -->
    <!-- ============================================== NEWSLETTER ============================================== -->
      @include('web.page.sidebar.news_letter')
    <!-- /.sidebar-widget -->
    <!-- ============================================== NEWSLETTER: END ============================================== -->

    <!-- ============================================== Testimonials============================================== -->
      @include('web.page.sidebar.testimonials')
    <!-- ============================================== Testimonials: END ============================================== -->
{{--</div>--}}
<!-- /.sidemenu-holder -->
<!-- ============================================== SIDEBAR : END ============================================== -->
