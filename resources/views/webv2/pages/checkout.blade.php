@extends('webv2.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('style')
  .sticky {
    position: fixed;
    top: 253px;
    width: 39%;
  }

  .sticky + .content {
    padding-top: 200px;
  }
@endsection
@section('content')
  @include('webv2.pages.breadcrum')

<div class="body-content">
  <div class="container">
    <div class="checkout-box ">
      <div class="row">
        <div class="col-md-6">
          <div class="panel-group checkout-steps" id="accordion">
            <!-- checkout-step-01  -->
            <div class="panel panel-default checkout-step-01">

              <!-- panel-heading -->
              <div class="panel-heading">
                <h4 class="unicase-checkout-title">
                  <a data-toggle="collapse" class="" data-parent="#accordion" href="#collapseOne">
                    <span>1</span>Thông tin khách hàng
                  </a>
                </h4>
              </div>
              <!-- panel-heading -->

              <div id="collapseOne" class="panel-collapse collapse in">

                <!-- panel-body  -->
                <div class="panel-body">
                  <div class="row">
{{--                    <p class="text title-tag-line"><b>Đăng nhập</b> hoặc <b>Đăng ký</b> để <b>Shop Mẹ Ỉn</b> có thể phục vụ bạn tốt hơn thông qua các chương trình chăm sóc khách hàng, khuyến mãi và tích điểm</p>--}}
                    <!-- guest-login -->
                    <div class="col-md-6 col-sm-6 guest-login">
                      <h4 class="checkout-subtitle">Đăng ký</h4>
{{--                      <p class="text title-tag-line">Register with us for future convenience:</p>--}}
                      <form class="register-form outer-top-xs" role="form">
                        <div class="form-group">
                          <label class="info-title" for="registerPhoneNumber">Số điện thoại <span>*</span></label>
                          <input type="text" class="form-control unicase-form-control text-input" id="registerPhoneNumber" >
                        </div>
                        <div class="form-group">
                          <label class="info-title" for="registerUsername">Tên <span>*</span></label>
                          <input type="text" class="form-control unicase-form-control text-input" id="registerUsername" >
                        </div>
                        <div class="form-group">
                          <label class="info-title" for="registerEmail">Email <span>*</span></label>
                          <input type="email" class="form-control unicase-form-control text-input" id="registerEmail" >
                        </div>
                        <div class="form-group">
                          <label class="info-title" for="registerPassword">Mật khẩu <span>*</span></label>
                          <input type="password" class="form-control unicase-form-control text-input" id="registerPassword" >
                        </div>
                        <div class="form-group">
                          <label class="info-title" for="registerConfirmPassword">Nhập lại mật khẩu <span>*</span></label>
                          <input type="password" class="form-control unicase-form-control text-input" id="registerConfirmPassword" >
                        </div>
                        <button type="submit" class="btn-upper btn btn-primary checkout-page-button">Đăng ký</button>
                      </form>
                      <!-- radio-form  -->
{{--                      <form class="register-form" role="form">--}}
{{--                        <div class="radio radio-checkout-unicase">--}}
{{--                          <input id="guest" type="radio" name="text" value="guest" checked>--}}
{{--                          <label class="radio-button guest-check" for="guest">Checkout as Guest</label>--}}
{{--                          <br>--}}
{{--                          <input id="register" type="radio" name="text" value="register">--}}
{{--                          <label class="radio-button" for="register">Register</label>--}}
{{--                        </div>--}}
{{--                        <div class="form-group">--}}
{{--                          <label class="info-title" for="registerPhoneNumber">Số điện thoại <span style="color: red">*</span></label>--}}
{{--                          <input type="text" class="form-control unicase-form-control text-input" id="registerPhoneNumber" placeholder="Nhập số điện thoại">--}}
{{--                        </div>--}}
{{--                      </form>--}}
{{--                      <!-- radio-form  -->--}}

{{--                      <h4 class="checkout-subtitle outer-top-vs">Lợi ích khi đăng ký tài khoản</h4>--}}
{{--                      <p class="text title-tag-line ">Lợi ích khi đăng ký tài khoản</p>--}}
{{--                      <ul class="text instruction inner-bottom-30">--}}
{{--                        <li class="save-time-reg">- Thanh toán dễ dàng và nhanh hơn</li>--}}
{{--                        <li class="save-time-reg">- Tích luỹ 5% giá trị đơn hàng</li>--}}
{{--                        <li class="save-time-reg">- Nhận các chương trình khuyến mãi dành riêng cho thành viên</li>--}}
{{--                        <li class="save-time-reg">- Hỗ trợ chăm sóc nhanh hơn</li>--}}
{{--                      </ul>--}}

{{--                      <button type="submit" class="btn-upper btn btn-primary checkout-page-button checkout-continue ">Tiếp tục</button>--}}
                    </div>
                    <!-- guest-login -->

                    <!-- already-registered-login -->
                    <div class="col-md-6 col-sm-6 already-registered-login">
                      <h4 class="checkout-subtitle">Bạn đã có tài khoản?</h4>
                      <p class="text title-tag-line">Vui lòng đăng nhập</p>
                      <form class="register-form" role="form">
                        <div class="form-group">
                          <label class="info-title" for="loginPhoneNumber">Số điện thoại <span>*</span></label>
                          <input type="text" class="form-control unicase-form-control text-input" id="loginPhoneNumber" placeholder="Nhập số điện thoại">
                        </div>
                        <div class="form-group">
                          <label class="info-title" for="loginPassword">Mật khẩu <span>*</span></label>
                          <input type="password" class="form-control unicase-form-control text-input" id="loginPassword" placeholder="Nhập mật khẩu">
                          <a href="#" class="forgot-password">Quên mật khẩu?</a>
                        </div>
                        <button type="submit" class="btn-upper btn btn-primary checkout-page-button">Đăng nhập</button>
                      </form>
                    </div>
                    <!-- already-registered-login -->

                  </div>
                </div>
                <!-- panel-body  -->

              </div><!-- row -->
            </div>
            <!-- checkout-step-01  -->
            <!-- checkout-step-02  -->
            <div class="panel panel-default checkout-step-02">
              <div class="panel-heading">
                <h4 class="unicase-checkout-title">
                  <a data-toggle="collapse" class="collapsed" data-parent="#accordion" href="#collapseTwo">
                    <span>2</span>Thông tin đơn hàng
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <!-- checkout-step-02  -->

            <!-- checkout-step-03  -->
            <div class="panel panel-default checkout-step-03">
              <div class="panel-heading">
                <h4 class="unicase-checkout-title">
                  <a data-toggle="collapse" class="collapsed" data-parent="#accordion" href="#collapseThree">
                    <span>3</span>Shipping Information
                  </a>
                </h4>
              </div>
              <div id="collapseThree" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <!-- checkout-step-03  -->

            <!-- checkout-step-04  -->
            <div class="panel panel-default checkout-step-04">
              <div class="panel-heading">
                <h4 class="unicase-checkout-title">
                  <a data-toggle="collapse" class="collapsed" data-parent="#accordion" href="#collapseFour">
                    <span>4</span>Shipping Method
                  </a>
                </h4>
              </div>
              <div id="collapseFour" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <!-- checkout-step-04  -->

            <!-- checkout-step-05  -->
            <div class="panel panel-default checkout-step-05">
              <div class="panel-heading">
                <h4 class="unicase-checkout-title">
                  <a data-toggle="collapse" class="collapsed" data-parent="#accordion" href="#collapseFive">
                    <span>5</span>Payment Information
                  </a>
                </h4>
              </div>
              <div id="collapseFive" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <!-- checkout-step-05  -->

            <!-- checkout-step-06  -->
            <div class="panel panel-default checkout-step-06">
              <div class="panel-heading">
                <h4 class="unicase-checkout-title">
                  <a data-toggle="collapse" class="collapsed" data-parent="#accordion" href="#collapseSix">
                    <span>6</span>Order Review
                  </a>
                </h4>
              </div>
              <div id="collapseSix" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <!-- checkout-step-06  -->

          </div><!-- /.checkout-steps -->
        </div>
        <div class="col-md-6">
          <!-- checkout-progress-sidebar -->
          <div class="checkout-progress-sidebar" id="order_information">
            <div class="panel-group">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="unicase-checkout-title">Thông tin đơn hàng</h4>
                </div>
                <div class="">
                  <ul class="nav nav-checkout-progress list-unstyled">
                    <li><a href="#">Billing Address</a></li>
                    <li><a href="#">Shipping Address</a></li>
                    <li><a href="#">Shipping Method</a></li>
                    <li><a href="#">Payment Method</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- checkout-progress-sidebar -->				</div>
      </div><!-- /.row -->
    </div><!-- /.checkout-box -->

<!-- ============================================== BRANDS CAROUSEL ============================================== -->
    @include('webv2.layout.brands')
    <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
  </div><!-- /.body-content -->


@endsection
@section('script')
  <script>
      window.onscroll = function() {myFunction()};
      var header = document.getElementById("order_information");
      var sticky = header.offsetTop;
      function myFunction() {
          if (window.pageYOffset > sticky) {
              header.classList.add("sticky");
          } else {
              header.classList.remove("sticky");
          }
      }
  </script>
@endsection
