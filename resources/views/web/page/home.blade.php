@extends('web.layout.layout')
@section('title', 'Trang chủ')
@section('content')
<!-- ============================================== HEADER : END ============================================== -->
<div id="app">
  @include('web.layout.header')
  <div class="body-content outer-top-vs" id="top-banner-and-menu">
    <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-3 sidebar">
            @include('web.page.sidebar.vertical_menu')
            @include('web.page.sidebar.sidebar')
          </div>
            <!-- ============================================== CONTENT ============================================== -->
            <div class="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
                <!-- ========================================== SECTION – HERO ========================================= -->
                <div id="hero">
                    <div id="owl-main" class="owl-carousel owl-inner-nav owl-ui-sm" style="opacity: 1; display: block;">
                        <div class="item" style="background-image: url({{url('resources/views/web/assets/images/sliders/01.jpg') }});">
                            <div class="container-fluid">
                                <div class="caption bg-color vertical-center text-left">
                                    <div class="slider-header fadeInDown-1">Top Brands</div>
                                    <div class="big-text fadeInDown-1"> New Collections </div>
                                    <div class="excerpt fadeInDown-2 hidden-xs"> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> </div>
                                    <div class="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" class="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                                </div>
                                <!-- /.caption -->
                            </div>
                            <!-- /.container-fluid -->
                        </div>
                        <!-- /.item -->
                    </div>
                    <!-- /.owl-carousel -->
                </div>
                <div class="best-seller">
                  <best-seller-component/>
                </div>

                <!-- ========================================= SECTION – HERO : END ========================================= -->
                <!-- ============================================== WIDE PRODUCTS ============================================== -->
                <div class="wide-banners outer-bottom-xs">
                    <div class="row">
                        <div class="col-md-4 col-sm-4">
                            <div class="wide-banner cnt-strip">
                                <div class="image"> <img class="img-responsive" src="{{url('resources/views/web/assets/images/banners/home-banner1.jpg') }}" alt=""> </div>
                            </div>
                            <!-- /.wide-banner -->
                        </div>

                        <div class="col-md-4 col-sm-4">
                            <div class="wide-banner cnt-strip">
                                <div class="image"> <img class="img-responsive" src="{{url('resources/views/web/assets/images/banners/home-banner3.jpg') }}" alt=""> </div>
                            </div>
                            <!-- /.wide-banner -->
                        </div>

                        <!-- /.col -->
                        <div class="col-md-4 col-sm-4">
                            <div class="wide-banner cnt-strip">
                                <div class="image"> <img class="img-responsive" src="{{url('resources/views/web/assets/images/banners/home-banner2.jpg') }}" alt=""> </div>
                            </div>
                            <!-- /.wide-banner -->
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.wide-banners -->

                <!-- ============================================== WIDE PRODUCTS : END ============================================== -->
                <!-- ============================================== FEATURED PRODUCTS ============================================== -->
                <section class="section featured-product">
                  <latest-product-component/>
                </section>
                <!-- /.section -->
                <!-- ============================================== FEATURED PRODUCTS : END ============================================== -->
                <!-- ============================================== WIDE PRODUCTS ============================================== -->
                <div class="wide-banners outer-bottom-xs">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="wide-banner1 cnt-strip">
                                <div class="image"> <img class="img-responsive" src="{{url('resources/views/web/assets/images/banners/home-banner.jpg') }}" alt=""> </div>
                                <div class="strip strip-text">
                                    <div class="strip-inner">
                                        <h2 class="text-right">Amazing Sunglasses<br>
                                            <span class="shopping-needs">Get 40% off on selected items</span></h2>
                                    </div>
                                </div>
                                <div class="new-label">
                                    <div class="text">NEW</div>
                                </div>
                                <!-- /.new-label -->
                            </div>
                            <!-- /.wide-banner -->
                        </div>
                        <!-- /.col -->
                        <div class="col-md-4">
                            <div class="wide-banner cnt-strip">
                                <div class="image"> <img class="img-responsive" src="{{url('resources/views/web/assets/images/banners/home-banner4.jpg') }}" alt=""> </div>


                                <!-- /.new-label -->
                            </div>
                            <!-- /.wide-banner -->
                        </div>

                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.wide-banners -->
                <!-- ============================================== WIDE PRODUCTS : END ============================================== -->
                <!-- /.sidebar-widget -->
                <!-- ============================================== BEST SELLER : END ============================================== -->
                @if(session()->has('viewed'))
                    <div>
                        <recently-product-component/>
                    </div>
                @endif
              <!-- ============================================== BLOG SLIDER ============================================== -->
              <section class="section latest-blog outer-bottom-vs">
                <h3 class="section-title">Blog</h3>
                <div class="blog-slider-container outer-top-xs">
                  <div class="owl-carousel blog-slider custom-carousel" style="opacity: 1; display: block;">
                    <div class="item">
                      <div class="blog-post">
                        <div class="blog-post-image">
                          <div class="image"> <a href="blog.html"><img src="{{url('resources/views/web/assets/images/blog-post/blog_big_03.jpg') }}" alt=""></a> </div>
                        </div>
                        <!-- /.blog-post-image -->

                        <div class="blog-post-info text-left">
                          <h3 class="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                          <span class="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                          <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                        </div>
                        <!-- /.blog-post-info -->

                      </div>
                      <!-- /.blog-post -->
                    </div>
                    <!-- /.item -->

                    <div class="item">
                      <div class="blog-post">
                        <div class="blog-post-image">
                          <div class="image"> <a href="blog.html"><img src="{{url('resources/views/web/assets/images/blog-post/blog_big_01.jpg') }}" alt=""></a> </div>
                        </div>
                        <!-- /.blog-post-image -->

                        <div class="blog-post-info text-left">
                          <h3 class="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                          <span class="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                          <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                        </div>
                        <!-- /.blog-post-info -->

                      </div>
                      <!-- /.blog-post -->
                    </div>
                    <!-- /.item -->

                    <div class="item">
                      <div class="blog-post">
                        <div class="blog-post-image">
                          <div class="image"> <a href="blog.html"><img src="{{url('resources/views/web/assets/images/blog-post/blog_big_02.jpg') }}" alt=""></a> </div>
                        </div>
                        <!-- /.blog-post-image -->

                        <div class="blog-post-info text-left">
                          <h3 class="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                          <span class="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                          <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                        </div>
                        <!-- /.blog-post-info -->

                      </div>
                      <!-- /.blog-post -->
                    </div>
                    <!-- /.item -->

                  </div>
                  <!-- /.owl-carousel -->
                </div>
                <!-- /.blog-slider-container -->
              </section>
              <!-- /.section -->
              <!-- ============================================== BLOG SLIDER : END ============================================== -->
            </div>
            <!-- /.homebanner-holder -->
            <!-- ============================================== CONTENT : END ============================================== -->
        </div>
        <!-- /.row -->
        <!-- ============================================== BRANDS CAROUSEL ============================================== -->
{{--        @include('web.layout.logoslider')--}}
        <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->
    </div>
    <!-- /.container -->
</div>
<!-- /#top-banner-and-menu -->

<!-- ============================================== INFO BOXES ============================================== -->
@include('web.layout.featurebox')
<!-- ============================================== INFO BOXES : END ============================================== -->
</div>
@endsection
