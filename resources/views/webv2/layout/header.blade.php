<header class="header-style-1">
  <!-- ============================================== TOP MENU ============================================== -->
  <div class="top-bar animate-dropdown">
    <div class="container">
      <div class="header-top-inner">
        <div class="cnt-account">
          <ul class="list-unstyled">
            <li><a href="{!! url('/tai-khoan.html') !!}"><i class="icon fa fa-user"></i>Tài khoản</a></li>
            <li class="hidden-xs"><a href="{!! url('/wishlist.html') !!}"><i class="icon fa fa-heart"></i>Yêu thích</a></li>
            <li class="hidden-xs"><a href="{!! url('/gio-hang.html') !!}"><i class="icon fa fa-shopping-cart"></i>Giỏ hàng</a></li>
            <li class="hidden-xs"><a href="{!! url('/thanh-toan.html') !!}"><i class="icon fa fa-check"></i>Thanh toán</a></li>
            <li><a href="{!! url('/dang-nhap.html') !!}"><i class="icon fa fa-lock"></i>Đăng nhập</a></li>
          </ul>
        </div>
        <!-- /.cnt-account -->

        <div class="cnt-block">
          <ul class="list-unstyled list-inline">
            <li class="dropdown dropdown-small">
              <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                <span class="value">VND </span><b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">USD</a></li>
                <li><a href="#">VND</a></li>
              </ul>
            </li>
            <li class="dropdown dropdown-small">
              <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                <span class="value">Tiếng việt </span><b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">English</a></li>
                <li><a href="#">Tiếng việt</a></li>
              </ul>
            </li>
          </ul>
          <!-- /.list-unstyled -->
        </div>
        <!-- /.cnt-cart -->
        <div class="clearfix"></div>
      </div>
      <!-- /.header-top-inner -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.header-top -->
  <!-- ============================================== TOP MENU : END ============================================== -->
  <div class="main-header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 logo-holder">
          <!-- ============================================================= LOGO ============================================================= -->
          <div class="logo"> <a href="{!! url('') !!}"> <img src="{!! url('public/webv2/assets/images/logo.png') !!}" alt="logo"> </a> </div>
          <!-- /.logo -->
          <!-- ============================================================= LOGO : END ============================================================= --> </div>
        <!-- /.logo-holder -->

        <div class="col-xs-12 col-sm-8 col-md-6 top-search-holder">
          <!-- /.contact-row -->
          <!-- ============================================================= SEARCH AREA ============================================================= -->
          <div class="search-area">
            <form>
              <div class="control-group">
                <ul class="categories-filter animate-dropdown">
                  <li class="dropdown"> <a class="dropdown-toggle"  data-toggle="dropdown" href="{!! url('public/webv2/pages/category.html') !!}">Danh mục <b class="caret"></b></a>
                    <ul class="dropdown-menu" role="menu" >
                      <li class="menu-header">Bé gái</li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="{!! url('public/webv2/pages/category.html') !!}">- Váy</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="{!! url('public/webv2/pages/category.html') !!}">- Bộ đồ</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="{!! url('public/webv2/pages/category.html') !!}">- Giày dép</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="{!! url('public/webv2/pages/category.html') !!}">- Phụ kiện</a></li>
                    </ul>
                  </li>
                </ul>
                <input class="search-field" placeholder="Nhập để tìm kiếm..." />
                <a class="search-button" href="#" ></a> </div>
            </form>
          </div>
          <!-- /.search-area -->
          <!-- ============================================================= SEARCH AREA : END ============================================================= --> </div>
        <!-- /.top-search-holder -->

        <div class="col-xs-12 col-sm-4 col-md-3 animate-dropdown top-cart-row">
          <!-- ============================================================= SHOPPING CART DROPDOWN ============================================================= -->

          <div class="dropdown dropdown-cart"> <a href="#" class="dropdown-toggle lnk-cart" data-toggle="dropdown">
              <div class="items-cart-inner">
                <div class="basket"> <i class="glyphicon glyphicon-shopping-cart"></i> </div>
                <div class="basket-item-count"><span class="count">2</span></div>
                <div class="total-price-basket">
                  <span class="lbl">Giỏ hàng </span>
{{--                  <span class="total-price"> --}}
{{--                    <span class="sign">$</span>--}}
{{--                    <span class="value">600.00</span> --}}
{{--                  </span> --}}
                </div>
              </div>
            </a>
            <ul class="dropdown-menu">
              <li>
                <div class="cart-item product-summary">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="image"> <a href="{!! url('public/webv2/pages/detail.html') !!}"><img src="{!! url('public/webv2/assets/images/cart.jpg') !!}" alt=""></a> </div>
                    </div>
                    <div class="col-xs-7">
                      <h3 class="name"><a href="{!! url('public/webv2/pages/index.php?page-detail') !!}">Simple Product</a></h3>
                      <div class="price">$600.00</div>
                    </div>
                    <div class="col-xs-1 action"> <a href="#"><i class="fa fa-trash"></i></a> </div>
                  </div>
                </div>
                <!-- /.cart-item -->
                <div class="clearfix"></div>
                <hr>
                <div class="clearfix cart-total">
                  <div class="pull-right"> <span class="text">Tạm tính :</span><span class='price'>$600.00</span> </div>
                  <div class="clearfix"></div>
                  <a href="{!! url('public/webv2/pages/checkout.html') !!}" class="btn btn-upper btn-primary btn-block m-t-20">Thanh toán</a>
                  <div class="text-center">
                    <a href="{!! url('/gio-hang.html') !!}" class="mt-4">xem giỏ hàng</a>
                  </div>
                </div>
                <!-- /.cart-total-->

              </li>
            </ul>
            <!-- /.dropdown-menu-->
          </div>
          <!-- /.dropdown-cart -->

          <!-- ============================================================= SHOPPING CART DROPDOWN : END============================================================= --> </div>
        <!-- /.top-cart-row -->
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

  </div>
  <!-- /.main-header -->

  <!-- ============================================== NAVBAR ============================================== -->
  <div class="header-nav animate-dropdown">
    <div class="container">
      <div class="yamm navbar navbar-default" role="navigation">
        <div class="navbar-header">
          <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
            <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        </div>
        <div class="nav-bg-class">
          <div class="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
            <div class="nav-outer">
              <ul class="nav navbar-nav">
                <li class="active dropdown yamm-fw"> <a href="home.html" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Trang chủ</a> </li>
                <li class="dropdown yamm mega-menu">
                  <a href="{{ url("/danh-muc/be-gai.html") }}" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Bé trai</a>
                  <ul class="dropdown-menu container">
                    <li>
                      <div class="yamm-content ">
                        <div class="row">
                          <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 class="title">Men</h2>
                            <ul class="links">
                              <li><a href="#">Dresses</a></li>
                              <li><a href="#">Shoes </a></li>
                              <li><a href="#">Jackets</a></li>
                              <li><a href="#">Sunglasses</a></li>
                              <li><a href="#">Sport Wear</a></li>
                              <li><a href="#">Blazers</a></li>
                              <li><a href="#">Shirts</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->

                          <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 class="title">Women</h2>
                            <ul class="links">
                              <li><a href="#">Handbags</a></li>
                              <li><a href="#">Jwellery</a></li>
                              <li><a href="#">Swimwear </a></li>
                              <li><a href="#">Tops</a></li>
                              <li><a href="#">Flats</a></li>
                              <li><a href="#">Shoes</a></li>
                              <li><a href="#">Winter Wear</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->

                          <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 class="title">Boys</h2>
                            <ul class="links">
                              <li><a href="#">Toys & Games</a></li>
                              <li><a href="#">Jeans</a></li>
                              <li><a href="#">Shirts</a></li>
                              <li><a href="#">Shoes</a></li>
                              <li><a href="#">School Bags</a></li>
                              <li><a href="#">Lunch Box</a></li>
                              <li><a href="#">Footwear</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->

                          <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 class="title">Girls</h2>
                            <ul class="links">
                              <li><a href="#">Sandals </a></li>
                              <li><a href="#">Shorts</a></li>
                              <li><a href="#">Dresses</a></li>
                              <li><a href="#">Jwellery</a></li>
                              <li><a href="#">Bags</a></li>
                              <li><a href="#">Night Dress</a></li>
                              <li><a href="#">Swim Wear</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->

                          <div class="col-xs-12 col-sm-6 col-md-4 col-menu banner-image"> <img class="img-responsive" src="{!! url('public/webv2/assets/images/banners/top-menu-banner.jpg') !!}" alt=""> </div>
                          <!-- /.yamm-content -->
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="dropdown mega-menu">
                  <a href="{{ url("/danh-muc/be-trai.html") }}"  data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Bé gái </a>
                  <ul class="dropdown-menu container">
                    <li>
                      <div class="yamm-content">
                        <div class="row">
                          <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 class="title">Laptops</h2>
                            <ul class="links">
                              <li><a href="#">Gaming</a></li>
                              <li><a href="#">Laptop Skins</a></li>
                              <li><a href="#">Apple</a></li>
                              <li><a href="#">Dell</a></li>
                              <li><a href="#">Lenovo</a></li>
                              <li><a href="#">Microsoft</a></li>
                              <li><a href="#">Asus</a></li>
                              <li><a href="#">Adapters</a></li>
                              <li><a href="#">Batteries</a></li>
                              <li><a href="#">Cooling Pads</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->

                          <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 class="title">Desktops</h2>
                            <ul class="links">
                              <li><a href="#">Routers & Modems</a></li>
                              <li><a href="#">CPUs, Processors</a></li>
                              <li><a href="#">PC Gaming Store</a></li>
                              <li><a href="#">Graphics Cards</a></li>
                              <li><a href="#">Components</a></li>
                              <li><a href="#">Webcam</a></li>
                              <li><a href="#">Memory (RAM)</a></li>
                              <li><a href="#">Motherboards</a></li>
                              <li><a href="#">Keyboards</a></li>
                              <li><a href="#">Headphones</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->

                          <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 class="title">Cameras</h2>
                            <ul class="links">
                              <li><a href="#">Accessories</a></li>
                              <li><a href="#">Binoculars</a></li>
                              <li><a href="#">Telescopes</a></li>
                              <li><a href="#">Camcorders</a></li>
                              <li><a href="#">Digital</a></li>
                              <li><a href="#">Film Cameras</a></li>
                              <li><a href="#">Flashes</a></li>
                              <li><a href="#">Lenses</a></li>
                              <li><a href="#">Surveillance</a></li>
                              <li><a href="#">Tripods</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->
                          <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 class="title">Mobile Phones</h2>
                            <ul class="links">
                              <li><a href="#">Apple</a></li>
                              <li><a href="#">Samsung</a></li>
                              <li><a href="#">Lenovo</a></li>
                              <li><a href="#">Motorola</a></li>
                              <li><a href="#">LeEco</a></li>
                              <li><a href="#">Asus</a></li>
                              <li><a href="#">Acer</a></li>
                              <li><a href="#">Accessories</a></li>
                              <li><a href="#">Headphones</a></li>
                              <li><a href="#">Memory Cards</a></li>
                            </ul>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner"> <a href="#"><img alt="" src="{!! url('public/webv2/assets/images/banners/banner-side.png') !!}"></a> </div>
                        </div>
                        <!-- /.row -->
                      </div>
                      <!-- /.yamm-content --> </li>
                  </ul>
                </li>
                <li class="dropdown hidden-sm"> <a href="{{ url("/danh-muc/giay-dep.html") }}">Sơ sinh</a> </li>
                <li class="dropdown hidden-sm"> <a href="{{ url("/danh-muc/balo.html") }}">Phụ kiện</a> </li>
                <li class="dropdown"> <a href="{{ url("/danh-muc/balo.html") }}">Khuyến mãi <span class="menu-label hot-menu hidden-xs">hot</span> </a> </li>
                <li class="dropdown"> <a href="{{ url("/danh-muc/balo.html") }}">Bộ sưu tập  <span class="menu-label new-menu hidden-xs">new</span> </a> </li>
              </ul>
              <!-- /.navbar-nav -->
              <div class="clearfix"></div>
            </div>
            <!-- /.nav-outer -->
          </div>
          <!-- /.navbar-collapse -->

        </div>
        <!-- /.nav-bg-class -->
      </div>
      <!-- /.navbar-default -->
    </div>
    <!-- /.container-class -->

  </div>
  <!-- /.header-nav -->
  <!-- ============================================== NAVBAR : END ============================================== -->

</header>