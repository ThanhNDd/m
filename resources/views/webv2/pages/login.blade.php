@extends('webv2.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('content')
  @include('webv2.pages.breadcrum')

<div class="body-content">
  <div class="container">
    <div class="sign-in-page">
      <div class="row">
        <!-- Sign-in -->
        <div class="col-md-6 col-sm-6 sign-in">
          <h4 class="">Đăng nhập</h4>
{{--          <p class="">Hello, Welcome to your account.</p>--}}
          <form class="register-form outer-top-xs" role="form">
            <div class="form-group">
              <label class="info-title" for="loginphonenumber">Số điện thoại <span>*</span></label>
              <input type="text" class="form-control unicase-form-control text-input" id="loginphonenumber" >
            </div>
            <div class="form-group">
              <label class="info-title" for="loginpassword">Password <span>*</span></label>
              <input type="password" class="form-control unicase-form-control text-input" id="loginpassword" >
            </div>
            <div class="radio outer-xs">
              <label>
                <input type="checkbox" name="rememberme" id="rememberme" value="rememberme">Remember me!
              </label>
              <a href="#" class="forgot-password pull-right">Quên mật khẩu?</a>
            </div>
            <button type="submit" class="btn-upper btn btn-primary checkout-page-button">Đăng nhập</button>
            <div class="social-sign-in outer-top-xs">
              <a href="#" class="facebook-sign-in"><i class="fa fa-facebook"></i> Đăng nhập với Facebook</a>
              <a href="#" class="twitter-sign-in"><i class="fa fa-google-plus"></i> Đăng nhập với Google</a>
            </div>
          </form>
        </div>
        <!-- Sign-in -->

        <!-- create a new account -->
        <div class="col-md-6 col-sm-6 create-new-account">
          <h4 class="checkout-subtitle">Đăng ký</h4>
          <p class="text title-tag-line">Tạo tài khoản mới.</p>
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


        </div>
        <!-- create a new account -->			</div><!-- /.row -->
    </div><!-- /.sigin-in-->
    <!-- ============================================== BRANDS CAROUSEL ============================================== -->
    @include('webv2.layout.brands')
    <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
</div><!-- /.body-content -->

@endsection
