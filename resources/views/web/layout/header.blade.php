<!-- ============================================== HEADER ============================================== -->
<header class="header-style-1">
    <!-- ============================================== TOP MENU ============================================== -->
{{--    <div class="top-bar animate-dropdown">--}}
{{--        <div class="container">--}}
{{--            <div class="header-top-inner">--}}
{{--                <div class="cnt-account">--}}
{{--                    <ul class="list-unstyled">--}}
{{--                        <li class="myaccount">--}}
{{--                          <a href="javascript:void(0);">--}}
{{--                            <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Tài khoản--}}
{{--                          </a>--}}
{{--                        </li>--}}
{{--                        <li class="header_cart hidden-xs">--}}
{{--                          <a href="{{url('/gio-hang.html')}}">--}}
{{--                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Giỏ hàng--}}
{{--                          </a>--}}
{{--                        </li>--}}
{{--                        <li class="check">--}}
{{--                          <a href="{{url('/thanh-toan.html')}}">--}}
{{--                            <i class="fas fa-credit-card"></i>&nbsp;Thanh toán--}}
{{--                          </a>--}}
{{--                        </li>--}}
{{--                        <li class="check">--}}
{{--                          <a href="{{url('')}}">--}}
{{--                            <i class="fas fa-id-badge"></i>&nbsp;Liên hệ--}}
{{--                          </a>--}}
{{--                        </li>--}}
{{--                        <li class="login">--}}
{{--                            <login-component></login-component>--}}
{{--                        </li>--}}
{{--                    </ul>--}}
{{--                </div>--}}
{{--                <!-- /.cnt-account -->--}}

{{--                <div class="cnt-block">--}}
{{--                  <ul class="list-unstyled">--}}
{{--                    <li>--}}
{{--                      <a href="javascript:void(0);" class="hotline">--}}
{{--                        <i class="fas fa-phone-volume"></i> Hotline: 0962 926 302--}}
{{--                      </a>--}}
{{--                    </li>--}}
{{--                  </ul>--}}
{{--                </div>--}}
{{--                <!-- /.cnt-cart -->--}}
{{--                <div class="clearfix"></div>--}}
{{--            </div>--}}
{{--            <!-- /.header-top-inner -->--}}
{{--        </div>--}}
{{--        <!-- /.container -->--}}
{{--    </div>--}}
    <!-- /.header-top -->
    <!-- ============================================== TOP MENU : END ============================================== -->
    <div class="main-header pb-0">
        <div class="container">
            <div class="row pb-3" >
                <div class="col-xs-12 col-sm-12 col-md-3 logo-holder">
                    <div class="logo">
                      <a href="{{url('')}}">
                        <img src="{{url('public/web/images/icon.png')}}" alt="logo" style="width: 50px;">
                        <span class="logo-text">Shop Mẹ Ỉn</span>
                      </a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-4 col-sm-6 col-xs-12 top-search-holder">
                    <div class="search-area pt-2">
                        <div class="input-group mb-3">
                            <input placeholder="Bạn muốn tìm gì?" class="form-control" style="border: none;border-radius: 3px 0 0 3px;font-size: 13px;padding: 10px;">
                            <div class="input-group-append">
                                <span class="input-group-text" style="background: white;border: 1px solid white;border-radius: 3px;cursor: pointer;">
                                    <i class="fas fa-search" style="font-size: 16px; color: rgb(51, 51, 51);"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-4 col-xs-12 animate-dropdown top-cart-row float-left">
                    <div class="dropdown dropdown-cart d-inline-block float-left col-md-12 pt-2 no-padding">
                        <div class="cart-component d-inline-block float-left">
                            <cart-number-component></cart-number-component>
                        </div>
                        <div class="login-component d-inline-block float-left" style="margin-left: 20px;margin-top: 5px;">
                            <login-component></login-component>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <!-- ============================================== NAVBAR ============================================== -->
    <div class="header-nav animate-dropdown">
        <div class="container">
            <div class="yamm navbar navbar-default p-0" role="navigation">
                <div class="nav-bg-class col-md-12 no-padding">
                    <div class="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                        <div class="nav-outer pt-3">
                            <ul class="nav navbar-nav col-md-12 no-padding">
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
                                  <a href="{{ url("/khuyen-mai.html") }}">
                                    Khuyến mãi
                                    <span class="menu-label hot-menu hidden-xs">hot</span>
                                  </a>
                                </li>
                                <li class="d-inline-block float-right col-md-4 no-padding">
                                    <slider-text-component></slider-text-component>
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
