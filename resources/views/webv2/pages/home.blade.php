@extends('webv2.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('content')
    <div class="body-content" id="top-banner-and-menu">
      @include('webv2.pages.slider')
      <!-- /.owl-carousel -->
    <div class="container home-banner1">
      <div class="row row-bottom">
        <div class="col-sm-4 col-xs-12 col-md-4">
          <a class="btn btn-call btn-bottom" href="tel:0962926302">Gọi ngay</a>
        </div>
        <div class="col-sm-4 col-xs-12 col-md-4">
          <a class="btn btn-email btn-bottom" href="mailto:hotro.shopmein.vn@gmail.com">Liên hệ</a>
        </div>
        <div class="col-sm-4 col-xs-12 col-md-4">
          <a class="btn btn-chat btn-bottom" href="https://m.me/shopmein.vn">Chat ngay</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12"><!-- ============================================== HOT DEALS ============================================== -->
        <div class="sidebar-widget hot-deals wow outer-bottom-xs">
          <h3 class="section-title">Hot deals</h3>
          <div class="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
            <div class="item">
              <div class="products">
                <div class="hot-deal-wrapper">
                  <div class="image"> <img src="{!! url('public/webv2/assets/images/hot-deals/p25.jpg') !!}" alt=""> </div>
                  <div class="sale-offer-tag"><span>49%<br>
                    off</span></div>
                  <div class="timing-wrapper">
                    <div class="box-wrapper">
                      <div class="date box"> <span class="key">120</span> <span class="value">Ngày</span> </div>
                    </div>
                    <div class="box-wrapper">
                      <div class="hour box"> <span class="key">20</span> <span class="value">Giờ</span> </div>
                    </div>
                    <div class="box-wrapper">
                      <div class="minutes box"> <span class="key">36</span> <span class="value">Phút</span> </div>
                    </div>
                    <div class="box-wrapper">
                      <div class="seconds box"> <span class="key">60</span> <span class="value">Giây</span> </div>
                    </div>
                  </div>
                </div>
                <!-- /.hot-deal-wrapper -->

                <div class="product-info text-left m-t-20">
                  <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> $600.00 </span> <span class="price-before-discount">$800.00</span> </div>
                  <!-- /.product-price -->

                </div>
                <!-- /.product-info -->

                <div class="cart clearfix animate-effect">
                  <div class="action">
                    <div class="add-cart-button btn-group">
                      <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                      <button class="btn btn-primary cart-btn" type="button">Thêm vào giỏ</button>
                    </div>
                  </div>
                  <!-- /.action -->
                </div>
                <!-- /.cart -->
              </div>
            </div>
            <div class="item">
              <div class="products">
                <div class="hot-deal-wrapper">
                  <div class="image"> <img src="{!! url('public/webv2/assets/images/hot-deals/p5.jpg') !!}" alt=""> </div>
                  <div class="sale-offer-tag"><span>35%<br>
                    off</span></div>
                  <div class="timing-wrapper">
                    <div class="box-wrapper">
                      <div class="date box"> <span class="key">120</span> <span class="value">Days</span> </div>
                    </div>
                    <div class="box-wrapper">
                      <div class="hour box"> <span class="key">20</span> <span class="value">HRS</span> </div>
                    </div>
                    <div class="box-wrapper">
                      <div class="minutes box"> <span class="key">36</span> <span class="value">MINS</span> </div>
                    </div>
                    <div class="box-wrapper hidden-md">
                      <div class="seconds box"> <span class="key">60</span> <span class="value">SEC</span> </div>
                    </div>
                  </div>
                </div>
                <!-- /.hot-deal-wrapper -->

                <div class="product-info text-left m-t-20">
                  <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> $600.00 </span> <span class="price-before-discount">$800.00</span> </div>
                  <!-- /.product-price -->

                </div>
                <!-- /.product-info -->

                <div class="cart clearfix animate-effect">
                  <div class="action">
                    <div class="add-cart-button btn-group">
                      <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                      <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                    </div>
                  </div>
                  <!-- /.action -->
                </div>
                <!-- /.cart -->
              </div>
            </div>
            <div class="item">
              <div class="products">
                <div class="hot-deal-wrapper">
                  <div class="image"> <img src="{!! url('public/webv2/assets/images/hot-deals/p10.jpg') !!}" alt=""> </div>
                  <div class="sale-offer-tag"><span>35%<br>
                    off</span></div>
                  <div class="timing-wrapper">
                    <div class="box-wrapper">
                      <div class="date box"> <span class="key">120</span> <span class="value">Days</span> </div>
                    </div>
                    <div class="box-wrapper">
                      <div class="hour box"> <span class="key">20</span> <span class="value">HRS</span> </div>
                    </div>
                    <div class="box-wrapper">
                      <div class="minutes box"> <span class="key">36</span> <span class="value">MINS</span> </div>
                    </div>
                    <div class="box-wrapper hidden-md">
                      <div class="seconds box"> <span class="key">60</span> <span class="value">SEC</span> </div>
                    </div>
                  </div>
                </div>
                <!-- /.hot-deal-wrapper -->

                <div class="product-info text-left m-t-20">
                  <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> $600.00 </span> <span class="price-before-discount">$800.00</span> </div>
                  <!-- /.product-price -->

                </div>
                <!-- /.product-info -->

                <div class="cart clearfix animate-effect">
                  <div class="action">
                    <div class="add-cart-button btn-group">
                      <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                      <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                    </div>
                  </div>
                  <!-- /.action -->
                </div>
                <!-- /.cart -->
              </div>
            </div>
          </div>
          <!-- /.sidebar-widget -->
        </div>
        <!-- ============================================== HOT DEALS: END ============================================== --> </div>
      <div class="col-lg-7 col-md-67 col-sm-7 col-xs-12">
        <div class="box1 box-category box-category-wide">
          <div class="full-link box-category-image transition" style="background-image:url({!! url('public/webv2/assets/images/banners/banner1.jpg') !!});"></div>
          <div class="full-link1">
            <h3>Winter Sale</h3>
            <a href="#" class="btn-link1">Buy Now</a>

          </div>
        </div>
        <div class="row">
          <div class="col col-sm-6">
            <div class="box1 box-category">
              <div class="full-link box-category-image transition" style="background-image:url({!! url('public/webv2/assets/images/banners/banner2.jpg') !!});"></div>
              <span class="btn btn-default">Shop Now</span>
              <a href="#" class="full-link"></a>
            </div>
          </div>
          <div class="col col-sm-6">
            <div class="box1 box-category">
              <div class="full-link box-category-image transition" style="background-image:url({!! url('public/webv2/assets/images/banners/banner3.jpg') !!});"></div>
              <span class="btn btn-default">Shop Now</span>
              <a href="#" class="full-link"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- ============================================== INFO BOXES ============================================== -->
      <div class="info-boxes wow fadeInUp">
      <div class="info-boxes-inner">
        <div class="row">
          <div class="header-benefit">
            <div class="benefit-icon"><i class="fa fa-credit-card"></i></div>
            <h4 class="info-box-heading green">7 ngày đổi trả hàng</h4>
          </div>


          <!-- .col -->

          <div class="header-benefit">
            <div class="benefit-icon"><i class="fa fa-truck"></i></div>
            <h4 class="info-box-heading green">Miễn ship toàn quốc với đơn từ 500k</h4>
          </div>



          <!-- .col -->

          <div class="header-benefit">
            <div class="benefit-icon"><i class="fa fa-certificate"></i></div>
            <h4 class="info-box-heading green">Tích luỹ 5% giá trị đơn hàng</h4>
          </div>

          <!-- .col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.info-boxes-inner -->

    </div>
      <!-- /.info-boxes -->
      <!-- ============================================== INFO BOXES : END ============================================== -->
      <!-- ============================================== SCROLL TABS ============================================== -->
      <div>
        <latest-product-component></latest-product-component>
      </div>
      <!-- /.scroll-tabs -->
      <!-- ============================================== SCROLL TABS : END ============================================== -->
      <!-- ============================================== WIDE PRODUCTS ============================================== -->
      <div class="wide-banners wow fadeInUp outer-bottom-xs">
      <div class="row">
        <div class="col-md-12">
          <div class="wide-banner cnt-strip">
            <div class="image"> <img class="img-responsive" src="{!! url('public/webv2/assets/images/banners/home-banner.jpg') !!}" alt=""> </div>
            <div class="strip strip-text">
              <div class="strip-inner">
                <h2 class="text-right">New Childrens Fashion
                  <span class="shopping-needs">Save up to 40% off</span></h2>
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

      </div>
      <!-- /.row -->
    </div>
      <!-- /.wide-banners -->
      <!-- ============================================== WIDE PRODUCTS : END ============================================== -->
      <!-- ============================================== FEATURED PRODUCTS ============================================== -->
      <section class="section featured-product wow fadeInUp">
        <div class="section-title"><h3>Featured products</h3></div>
        <div class="featured-block">
          <div class="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
            <div class="item item-carousel">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image"> <a href="{!! url('/san-pham/detail-1.html') !!}"><img  src="{!! url('public/webv2/assets/images/products/p5.jpg') !!}" alt=""></a> </div>
                    <!-- /.image -->

                    <div class="tag hot"><span>hot</span></div>
                  </div>
                  <!-- /.product-image -->

                  <div class="product-info text-left">
                    <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>
                    <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$800</span> </div>
                    <!-- /.product-price -->

                  </div>
                  <!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li class="lnk wishlist"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                        <li class="lnk"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
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

            <div class="item item-carousel">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image"> <a href="{!! url('/san-pham/detail-1.html') !!}"><img  src="{!! url('public/webv2/assets/images/products/p6.jpg') !!}" alt=""></a> </div>
                    <!-- /.image -->

                    <div class="tag new"><span>new</span></div>
                  </div>
                  <!-- /.product-image -->

                  <div class="product-info text-left">
                    <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>
                    <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$800</span> </div>
                    <!-- /.product-price -->

                  </div>
                  <!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li class="lnk wishlist"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                        <li class="lnk"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
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

            <div class="item item-carousel">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image"> <a href="{!! url('/san-pham/detail-1.html') !!}"><img  src="{!! url('public/webv2/assets/images/blank.gif') !!}" data-echo="{!! url('public/webv2/assets/images/products/p7.jpg') !!}" alt=""></a> </div>
                    <!-- /.image -->

                    <div class="tag sale"><span>sale</span></div>
                  </div>
                  <!-- /.product-image -->

                  <div class="product-info text-left">
                    <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>
                    <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$800</span> </div>
                    <!-- /.product-price -->

                  </div>
                  <!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li class="lnk wishlist"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                        <li class="lnk"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
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

            <div class="item item-carousel">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image"> <a href="{!! url('/san-pham/detail-1.html') !!}"><img  src="{!! url('public/webv2/assets/images/products/p8.jpg') !!}" alt=""></a> </div>
                    <!-- /.image -->

                    <div class="tag hot"><span>hot</span></div>
                  </div>
                  <!-- /.product-image -->

                  <div class="product-info text-left">
                    <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>
                    <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$800</span> </div>
                    <!-- /.product-price -->

                  </div>
                  <!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li class="lnk wishlist"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                        <li class="lnk"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
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

            <div class="item item-carousel">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image"> <a href="{!! url('/san-pham/detail-1.html') !!}"><img  src="{!! url('public/webv2/assets/images/products/p9.jpg') !!}" alt=""></a> </div>
                    <!-- /.image -->

                    <div class="tag new"><span>new</span></div>
                  </div>
                  <!-- /.product-image -->

                  <div class="product-info text-left">
                    <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>
                    <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$800</span> </div>
                    <!-- /.product-price -->

                  </div>
                  <!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li class="lnk wishlist"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                        <li class="lnk"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
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

            <div class="item item-carousel">
              <div class="products">
                <div class="product">
                  <div class="product-image">
                    <div class="image"> <a href="{!! url('/san-pham/detail-1.html') !!}"><img  src="{!! url('public/webv2/assets/images/products/p10.jpg') !!}" alt=""></a> </div>
                    <!-- /.image -->

                    <div class="tag sale"><span>sale</span></div>
                  </div>
                  <!-- /.product-image -->

                  <div class="product-info text-left">
                    <h3 class="name"><a href="{!! url('/san-pham/detail-1.html') !!}">Floral Print Buttoned</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="description"></div>
                    <div class="product-price"> <span class="price"> $450.99 </span> <span class="price-before-discount">$800</span> </div>
                    <!-- /.product-price -->

                  </div>
                  <!-- /.product-info -->
                  <div class="cart clearfix animate-effect">
                    <div class="action">
                      <ul class="list-unstyled">
                        <li class="add-cart-button btn-group">
                          <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                          <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li class="lnk wishlist"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Wishlist"> <i class="icon fa fa-heart"></i> </a> </li>
                        <li class="lnk"> <a class="add-to-cart" href="{!! url('/san-pham/detail-1.html') !!}" title="Compare"> <i class="fa fa-signal" aria-hidden="true"></i> </a> </li>
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
        </div>
        <!-- /.home-owl-carousel -->
      </section>
      <!-- /.section -->
      <!-- ============================================== FEATURED PRODUCTS : END ============================================== -->
      <!-- ============================================== BRANDS CAROUSEL ============================================== -->
      @include('webv2.layout.brands')
      <!-- /.logo-slider -->
      <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->
      <div class="row">
      <!-- ============================================== CONTENT ============================================== -->
      <div class="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
        <!-- ============================================== BLOG SLIDER ============================================== -->
        <section class="section latest-blog outer-bottom-vs">
          <div class="section-title"><h3>Blog</h3></div>
          <div class="blog-slider-container outer-top-xs">
            <div class="owl-carousel blog-slider custom-carousel">
              <div class="item">
                <div class="blog-post">
                  <div class="blog-post-image">
                    <div class="image"> <a href="blog.html"><img src="{!! url('public/webv2/assets/images/blog-post/post1.jpg') !!}" alt=""></a> </div>
                  </div>
                  <!-- /.blog-post-image -->

                  <div class="blog-post-info text-left">
                    <h3 class="name"><a href="#">Voluptatem accusantium doloremque laudantium</a></h3>
                    <span class="info">By Jone Doe &nbsp;|&nbsp; 21 March 2016 </span>
                    <p class="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <a href="#" class="lnk btn btn-primary">Xem thêm</a> </div>
                  <!-- /.blog-post-info -->

                </div>
                <!-- /.blog-post -->
              </div>
              <!-- /.item -->

              <div class="item">
                <div class="blog-post">
                  <div class="blog-post-image">
                    <div class="image"> <a href="blog.html"><img src="{!! url('public/webv2/assets/images/blog-post/post2.jpg') !!}" alt=""></a> </div>
                  </div>
                  <!-- /.blog-post-image -->

                  <div class="blog-post-info text-left">
                    <h3 class="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span class="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p class="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <a href="#" class="lnk btn btn-primary">Xem thêm</a> </div>
                  <!-- /.blog-post-info -->

                </div>
                <!-- /.blog-post -->
              </div>
              <!-- /.item -->

              <!-- /.item -->

              <div class="item">
                <div class="blog-post">
                  <div class="blog-post-image">
                    <div class="image"> <a href="blog.html"><img src="{!! url('public/webv2/assets/images/blog-post/post1.jpg') !!}" alt=""></a> </div>
                  </div>
                  <!-- /.blog-post-image -->

                  <div class="blog-post-info text-left">
                    <h3 class="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span class="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <a href="#" class="lnk btn btn-primary">Read more</a> </div>
                  <!-- /.blog-post-info -->

                </div>
                <!-- /.blog-post -->
              </div>
              <!-- /.item -->

              <div class="item">
                <div class="blog-post">
                  <div class="blog-post-image">
                    <div class="image"> <a href="blog.html"><img src="{!! url('public/webv2/assets/images/blog-post/post2.jpg') !!}" alt=""></a> </div>
                  </div>
                  <!-- /.blog-post-image -->

                  <div class="blog-post-info text-left">
                    <h3 class="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span class="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <a href="#" class="lnk btn btn-primary">Read more</a> </div>
                  <!-- /.blog-post-info -->

                </div>
                <!-- /.blog-post -->
              </div>
              <!-- /.item -->

              <div class="item">
                <div class="blog-post">
                  <div class="blog-post-image">
                    <div class="image"> <a href="blog.html"><img src="{!! url('public/webv2/assets/images/blog-post/post1.jpg') !!}" alt=""></a> </div>
                  </div>
                  <!-- /.blog-post-image -->

                  <div class="blog-post-info text-left">
                    <h3 class="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span class="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <a href="#" class="lnk btn btn-primary">Read more</a> </div>
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
      <!-- ============================================== SIDEBAR ============================================== -->
      <div class="col-xs-12 col-sm-12 col-md-3 sidebar">
        <!-- ============================================== Testimonials============================================== -->
        @include('webv2.pages.testimonials')
        <!-- ============================================== Testimonials: END ============================================== -->
      </div>
      <!-- /.sidemenu-holder -->
      <!-- ============================================== SIDEBAR : END ============================================== -->
    </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    </div>
@endsection
