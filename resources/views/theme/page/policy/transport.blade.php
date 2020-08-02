@extends('theme.layout.layout')
@section("title", "Chính sách vận chuyển")
@section('content')
  <div id="app" class="view view-reviews ios-edges">
    @include('theme.layout.tabbar')
    <sidebar-component></sidebar-component>
    <div class="page">
      <div class="navbar navbar-page">
        <div class="navbar-inner">
          <div class="left">
            <a href="javascript:void(0);" class="panel-open">
              <i class="fas fa-align-left"></i>
            </a>
          </div>
          <div class="title">
            Chính sách vận chuyển
          </div>
          <div class="right">
            <a href="{{url('/thong-bao.html')}}">
              <i class="fas fa-bell"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- end navbar -->
      <div class="page-content">
        <!-- content cart -->
        <div class="cart segments">
          <div class="col-md-12 col-sm-12 col-xs-12 padding-8" style="padding: 8px; float: left; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;">
            <h1 style="text-align: center; margin: 20px 0px 10px; font-size: 28px; line-height: 36px;">
              <strong style="font-weight: bold;"><span style="font-family: Tahoma; font-size: 20px !important;">CHÍNH SÁCH VẬN CHUYỂN</span><br></strong>
            </h1>
          </div>
          <div class="col-md-12 col-sm-12 col-xs-12 nopadding" style="float: left; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; padding: 0px !important; margin: 0px !important;">
            <article style="box-shadow: none;">
              <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><strong style="font-weight: bold;"><span style="font-family: Tahoma;">1. PHẠM VI GIAO HÀNG</span></strong><br><span style="font-family: Tahoma;"><strong>Shop Mẹ Ỉn</strong> giao hàng đến tất cả các khu vực trong phạm vi toàn lãnh thổ Việt Nam và hợp tác cùng những đơn vị vận chuyển đáng tin cậy, cước phí phù hợp nhất với dịch vụ chuyển phát nhanh để giao hàng trực tiếp đến Quý Khách.</span><br><br>
                <strong style="font-weight: bold;"><span style="font-family: Tahoma;">2. CHI PHÍ GIAO HÀNG</span></strong><br><span style="font-family: Tahoma;">- TẠI HÀ NỘI:</span><br><span style="font-family: Tahoma;">•</span><span class="Apple-tab-span" style="white-space: pre; font-family: Tahoma; width: auto !important; height: auto !important;"> Miễn phí giao hàng cho </span><span style="font-family: Tahoma;">đơn hàng từ 250,000đ trở lên.</span><br><span style="font-family: Tahoma;">•</span><span class="Apple-tab-span" style="white-space: pre; font-family: Tahoma; width: auto !important; height: auto !important;"> </span><span style="font-family: Tahoma;">Đơn hàng dưới 250,000đ: phí giao hàng 20,000đ / 1 lần giao.</span><br><span style="font-family: Tahoma;">- TẠI CÁC TỈNH THÀNH KHÁC: phụ thuộc vào số lượng cũng như địa chỉ giao hàng (sẽ thông báo cước phí vận chuyển cho khách khi đặt hàng)</span><br><span style="font-family: Tahoma;">•</span><span class="Apple-tab-span" style="white-space: pre; font-family: Tahoma; width: auto !important; height: auto !important;"> Miễn phí giao hàng cho </span><span style="font-family: Tahoma;">đơn hàng từ 500,000đ trở lên.</span></div>
              <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;">•</span><span class="Apple-tab-span" style="white-space: pre; font-family: Tahoma; width: auto !important; height: auto !important;"> Đơn hàng</span><span style="font-family: Tahoma;">&nbsp;dưới 500,000đ phí giao hàng 30,000 đ / 1 lần giao.<br><br></span></div>
              <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><strong style="font-weight: bold;"><span style="font-family: Tahoma;">3. THỜI GIAN GIAO HÀNG</span></strong><br><span style="font-family: Tahoma;">- Tại Hà Nội: từ 1 đến 2 ngày.</span><br><span style="font-family: Tahoma;">- Tại các tỉnh thành khác: từ 2 đến 4 ngày.</span><br><span style="font-family: Roboto-Regular;"><span style="font-family: Tahoma;">Lưu ý: Ngày giao hàng phụ thuộc vào ngày làm việc của các đơn vị vận chuyển, hàng sẽ được giao từ thứ 2 đến thứ 6 không bao gồm các ngày lễ, tết và thời gian giao là thời gian dự kiến.Thời gian giao hàng chính thức có thể sớm hơn hoặc trễ hơn một vài ngày tùy theo khu vực hoặc một số điều kiện khách quan mà Shop Mẹ Ỉn không kiểm soát được (Ví dụ: hư hỏng phương tiện, thiên tai, lũ lụt,...)</span><br></span></div>
              <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Roboto-Regular;"><span style="font-family: Tahoma;"><br></span></span></div>
              <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Roboto-Regular;"><span style="font-family: Tahoma;"><br></span></span></div>
              <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Roboto-Regular;"><span style="font-family: Tahoma;"><br></span></span></div>
              <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Roboto-Regular;"><br></span></div>
            </article>
          </div>
        </div>
        <!-- end content cart -->
      </div>
    </div>
  </div>
@endsection
