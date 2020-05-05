<!-- ============================================== HEADER ============================================== -->
<header class="header-style-1">

    <!-- ============================================== TOP MENU ============================================== -->
    <div class="top-bar animate-dropdown">
        <div class="container">
            <div class="header-top-inner">
                <div class="cnt-account">
                    <ul class="list-unstyled">
                        <li class="myaccount">
                          <a href="javascript:void(0);">
                            <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Tài khoản
                          </a>
                        </li>
                        <li class="header_cart hidden-xs">
                          <a href="{{url('/gio-hang.html')}}">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Giỏ hàng
                          </a>
                        </li>
                        <li class="check">
                          <a href="{{url('/thanh-toan.html')}}">
                            <i class="fas fa-credit-card"></i>&nbsp;Thanh toán
                          </a>
                        </li>
                        <li class="login">
                          <a href="javascript:void(0);">
                            <i class="fas fa-sign-in-alt"></i>&nbsp;Đăng nhập
                          </a>
                        </li>
                    </ul>
                </div>
                <!-- /.cnt-account -->

                <div class="cnt-block">
                  <ul class="list-unstyled">
                    <li>
                      <a href="javascript:void(0);" class="hotline">
                        <i class="fas fa-phone-volume"></i> Hotline: 0962 926 302
                      </a>
                    </li>
                  </ul>
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
                    <div class="logo">
                      <a href="{{url('')}}">
                        <img src="{{url('resources/views/web/assets/images/logo.png') }}" alt="logo">
                      </a>
                    </div>
                    <!-- /.logo -->
                    <!-- ============================================================= LOGO : END ============================================================= --> </div>
                <!-- /.logo-holder -->

                <div class="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
                    <!-- /.contact-row -->
                    <!-- ============================================================= SEARCH AREA ============================================================= -->
                    <div class="search-area">
                        <form>
                            <div class="control-group">
                                <ul class="categories-filter animate-dropdown">
                                    <li class="dropdown">
                                      <a class="dropdown-toggle"  data-toggle="dropdown" href="category.html">Danh mục <b class="caret"></b></a>
                                        <ul class="dropdown-menu" role="menu" >
                                            <li class="menu-header">Bé trai</li>
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href="category.html">Bé gái</a></li>
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href="category.html">Giày dép</a></li>
                                            <li role="presentation"><a role="menuitem" tabindex="-1" href="category.html">Phụ kiện</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <input class="search-field" placeholder="Bạn muốn tìm gì?" />
                                <a class="search-btn" href="#" >
                                  <i class="fas fa-search" style="font-size: 16px;color: #333;"></i>
                                </a> </div>
                        </form>
                    </div>
                    <!-- /.search-area -->
                    <!-- ============================================================= SEARCH AREA : END ============================================================= --> </div>
                <!-- /.top-search-holder -->

                <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
                    <!-- ============================================================= SHOPPING CART DROPDOWN ============================================================= -->
                    <div class="dropdown dropdown-cart">
                        <cart-number-component></cart-number-component>
                    </div>
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
                                <li class="active dropdown">
                                  <a href="{{url('')}}">
                                    Trang chủ</a>
                                </li>
                                <li class="dropdown yamm mega-menu">
                                  <a href="{{ url("/danh-muc/be-trai.html") }}">
                                    Bé trai
                                  </a>
                                </li>
                                <li class="dropdown mega-menu">
                                  <a href="{{ url("/danh-muc/be-gai.html") }}">
                                    Bé gái
                                  </a>
                                </li>
                                <li class="dropdown hidden-sm">
                                  <a href="{{ url("/danh-muc/giay-dep.html") }}">
                                    Giày dép
                                  </a>
                                </li>
                                <li class="dropdown hidden-sm">
                                  <a href="{{ url("/danh-muc/phu-kien.html") }}">
                                    Phụ kiện
                                  </a>
                                </li>
                                <li class="dropdown hidden-sm">
                                  <a href="{{ url("/danh-muc/khuyen-mai.html") }}">
                                    Khuyến mãi
                                    <span class="menu-label hot-menu hidden-xs">hot</span>
                                  </a>
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
