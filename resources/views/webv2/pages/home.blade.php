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
{{--      <div>--}}
        <latest-product-component></latest-product-component>
{{--      </div>--}}
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
      <featured-product-component></featured-product-component>
      <!-- ============================================== FEATURED PRODUCTS : END ============================================== -->
      <!-- ============================================== BRANDS CAROUSEL ============================================== -->
      @include('webv2.layout.brands')
      <!-- /.logo-slider -->
      <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->
      <div class="row">
      <!-- ============================================== CONTENT ============================================== -->
      <div class="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
        <!-- ============================================== BLOG SLIDER ============================================== -->
          <blog-component></blog-component>
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
