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

          <div class="dropdown dropdown-cart">
            <cart-component></cart-component>
{{--            <a href="#" class="dropdown-toggle lnk-cart" data-toggle="dropdown">--}}
{{--              <div class="items-cart-inner">--}}
{{--                <div class="basket"> <i class="glyphicon glyphicon-shopping-cart"></i> </div>--}}
{{--                <div class="basket-item-count">--}}
{{--                  <span class="count">2</span>--}}
{{--                </div>--}}
{{--                <div class="total-price-basket">--}}
{{--                  <span class="lbl">Giỏ hàng </span>--}}
{{--                </div>--}}
{{--              </div>--}}
{{--            </a>--}}
{{--            <ul class="dropdown-menu">--}}
{{--              <li>--}}
{{--                <div class="cart-item product-summary">--}}
{{--                  <div class="row">--}}
{{--                    <div class="col-xs-4">--}}
{{--                      <div class="image"> <a href="{!! url('public/webv2/pages/detail.html') !!}"><img src="{!! url('public/webv2/assets/images/cart.jpg') !!}" alt=""></a> </div>--}}
{{--                    </div>--}}
{{--                    <div class="col-xs-7">--}}
{{--                      <h3 class="name"><a href="{!! url('public/webv2/pages/index.php?page-detail') !!}">Simple Product</a></h3>--}}
{{--                      <div class="price">$600.00</div>--}}
{{--                    </div>--}}
{{--                    <div class="col-xs-1 action"> <a href="#"><i class="fa fa-trash"></i></a> </div>--}}
{{--                  </div>--}}
{{--                </div>--}}
{{--                <!-- /.cart-item -->--}}
{{--                <div class="clearfix"></div>--}}
{{--                <hr>--}}
{{--                <div class="clearfix cart-total">--}}
{{--                  <div class="pull-right"> <span class="text">Tạm tính :</span><span class='price'>$600.00</span> </div>--}}
{{--                  <div class="clearfix"></div>--}}
{{--                  <a href="{!! url('public/webv2/pages/checkout.html') !!}" class="btn btn-upper btn-primary btn-block m-t-20">Thanh toán</a>--}}
{{--                  <div class="text-center">--}}
{{--                    <a href="{!! url('/gio-hang.html') !!}" class="mt-4">xem giỏ hàng</a>--}}
{{--                  </div>--}}
{{--                </div>--}}
{{--                <!-- /.cart-total-->--}}

{{--              </li>--}}
{{--            </ul>--}}
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
                <li class="active"> <a href="{{ url("") }}">Trang chủ</a> </li>
                <li class="dropdown yamm mega-menu">
                  <a href="{{ url("/danh-muc/be-gai.html") }}" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Bé trai</a>
                  <ul class="dropdown-menu container">
                    <li>
                      <div class="yamm-content ">
                        <div class="row">
                          <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 class="title">Áo</h2>
                            <ul class="links">
                                <li><a href="#">Áo khoác</a></li>
                                <li><a href="#">Áo len</a></li>
                                <li><a href="#">Áo thun</a></li>
                                <li><a href="#">Áo siêu nhân</a></li>
                                <li><a href="#">Áo sơ mi</a></li>
                                <li><a href="#">Áo polo</a></li>
                                <li><a href="#">Áo sát nách</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->
                          <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 class="title">Quần</h2>
                            <ul class="links">
                                <li><a href="#">Quần jean</a></li>
                                <li><a href="#">Quần kaki</a></li>
                                <li><a href="#">Quần thô</a></li>
                                <li><a href="#">Quần hộp</a></li>
                                <li><a href="#">Quần âu</a></li>
                                <li><a href="#">Quần jogger</a></li>
                                <li><a href="#">Quần thun</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->
                          <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 class="title">Set trang phục</h2>
                            <ul class="links">
                              <li><a href="#">Bộ hiphop</a></li>
                              <li><a href="#">Bộ gió</a></li>
                              <li><a href="#">Bộ siêu nhân</a></li>
                              <li><a href="#">Bộ nỉ</a></li>
                              <li><a href="#">Bộ thể thao</a></li>
                              <li><a href="#">Bộ thu đông</a></li>
                              <li><a href="#">Bộ mùa hè</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->
                          <div class="col-xs-12 col-sm-6 col-md-4 col-menu banner-image" style="float:right">
                              <div style="
                                    background: url('https://cbu01.alicdn.com/img/ibank/2020/443/183/18663381344_981030018.jpg');
                                    background-position: right;
                                    background-size: contain;
                                    width: 400px;
                                    height: 300px;
                                    background-repeat: no-repeat;
                                    float: right;
                                    margin-bottom: 20px;
                                "></div>
                          </div>
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
                            <h2 class="title">Váy</h2>
                            <ul class="links">
                                <li><a href="#">Váy công chúa</a></li>
                                <li><a href="#">Váy tiểu thư</a></li>
                                <li><a href="#">Váy ren</a></li>
                                <li><a href="#">Váy voan</a></li>
                                <li><a href="#">Váy len</a></li>
                                <li><a href="#">Váy nhung</a></li>
                                <li><a href="#">Váy xếp ly</a></li>
                                <li><a href="#">Váy elsa</a></li>
                                <li><a href="#">Váy bò</a></li>
                                <li><a href="#">Váy hoa</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->

                          <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 class="title">Áo</h2>
                            <ul class="links">
                                <li><a href="#">Áo len</a></li>
                                <li><a href="#">Áo khoác</a></li>
                                <li><a href="#">Áo Dạ</a></li>
                                <li><a href="#">Áo gió</a></li>
                                <li><a href="#">Áo hoddie</a></li>
                                <li><a href="#">Áo sơ mi</a></li>
                                <li><a href="#">Áo 2 dây</a></li>
                                <li><a href="#">Áo cadigan</a></li>
                                <li><a href="#">Áo thun</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->

                          <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 class="title">Quần</h2>
                            <ul class="links">
                              <li><a href="#">Quần jean</a></li>
                              <li><a href="#">Quần thô</a></li>
                              <li><a href="#">Quần hiphop</a></li>
                              <li><a href="#">Quần thể thao</a></li>
                              <li><a href="#">Quần ống rộng</a></li>
                              <li><a href="#">Quần short</a></li>
                              <li><a href="#">Chân váy</a></li>
                              <li><a href="#">Quần âu</a></li>
                              <li><a href="#">Quần tất</a></li>
                              <li><a href="#">Quần thun</a></li>
                            </ul>
                          </div>
                          <!-- /.col -->
                          <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 class="title">Set trang phục</h2>
                            <ul class="links">
                                <li><a href="#">Bộ phong cách</a></li>
                                <li><a href="#">Bộ thể thao</a></li>
                                <li><a href="#">Bộ yếm áo</a></li>
                                <li><a href="#">Bộ chân váy</a></li>
                                <li><a href="#">Bộ thun</a></li>
                                <li><a href="#">Bộ đồ ngủ</a></li>
                                <li><a href="#">Bộ quần áo</a></li>
                                <li><a href="#">Bộ đi học</a></li>
                                <li><a href="#">Bộ 2 dây</a></li>
                                <li><a href="#">Bộ đồ bơi</a></li>
                            </ul>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner">
                              <div style="
                                    background: url('https://cbu01.alicdn.com/img/ibank/2019/884/811/12477118488_1152233505.jpg');
                                    background-position: right;
                                    background-size: contain;
                                    width: 330px;
                                    height: 330px;
                                    background-repeat: no-repeat;
                                    float: right;
                                    margin-bottom: 20px;
                                "></div>
                          </div>
                        </div>
                        <!-- /.row -->
                      </div>
                      <!-- /.yamm-content --> </li>
                  </ul>
                </li>
                  <li class="dropdown mega-menu">
                      <a href="{{ url("/danh-muc/be-trai.html") }}"  data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Sơ sinh</a>
                      <ul class="dropdown-menu container">
                          <li>
                              <div class="yamm-content">
                                  <div class="row">
                                      <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                          <h2 class="title">Áo</h2>
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
                                          <h2 class="title">Quần</h2>
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
                                          <h2 class="title">Set trang phục</h2>
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
                                      <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                          <h2 class="title">Váy</h2>
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
                  <li class="dropdown mega-menu">
                      <a href="{{ url("/danh-muc/be-trai.html") }}"  data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Phụ kiện</a>
                      <ul class="dropdown-menu container">
                          <li>
                              <div class="yamm-content">
                                  <div class="row">
                                      <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                          <h2 class="title">Bé trai</h2>
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
                                          <h2 class="title">Bé gái</h2>
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
                                          <h2 class="title">Sơ sinh</h2>
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
{{--                <li class="dropdown"> <a href="{{ url("/danh-muc/balo.html") }}">Khuyến mãi <span class="menu-label hot-menu hidden-xs">hot</span> </a> </li>--}}
                  <li class="dropdown mega-menu">
                      <a href="{{ url("/danh-muc/be-trai.html") }}"  data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Khuyến mãi <span class="menu-label hot-menu hidden-xs">hot</span></a>
                      <ul class="dropdown-menu container">
                          <li>
                              <div class="yamm-content">
                                  <div class="row">
                                      <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                          <h2 class="title">Khuyến mãi</h2>
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
                                      <div class="col-xs-12 col-sm-12 col-md-6 col-menu custom-banner"> <a href="#"><img alt="" src="{!! url('public/webv2/assets/images/banners/banner-side.png') !!}"></a> </div>
                                  </div>
                                  <!-- /.row -->
                              </div>
                              <!-- /.yamm-content --> </li>
                      </ul>
                  </li>
                  <li class="dropdown mega-menu">
                      <a href="{{ url("/danh-muc/be-trai.html") }}"  data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Bộ sưu tập <span class="menu-label hot-menu hidden-xs">hot</span></a>
                      <ul class="dropdown-menu container">
                          <li>
                              <div class="yamm-content">
                                  <div class="row">
                                      <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                          <h2 class="title">Bộ sưu tập</h2>
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
                                      <div class="col-xs-12 col-sm-12 col-md-6 col-menu custom-banner"> <a href="#"><img alt="" src="{!! url('public/webv2/assets/images/banners/banner-side.png') !!}"></a> </div>
                                  </div>
                                  <!-- /.row -->
                              </div>
                              <!-- /.yamm-content --> </li>
                      </ul>
                  </li>
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
