@extends('theme.layout.layout')
@section("title", "Chính sách đổi hàng")
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
            Chính sách đổi hàng
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
          <h1 style="text-align: center; box-sizing: border-box; margin: 20px 0px 10px; font-size: 28px; font-family: inherit; font-weight: 500; line-height: 36px; color: inherit;"><strong style="box-sizing: border-box; font-weight: bold;"><span style="font-family: Tahoma;font-size:20px !important;">Chính sách đổi trả hàng</span></strong></h1>
          <h1 style="text-align: center; margin: 20px 0px 10px; font-size: 28px; line-height: 36px;">
            <div class="col-md-12 col-sm-12 col-xs-12 padding-8" style="padding: 8px; float: left;font-size: 14px; text-align: start;"><span style="font-family: Tahoma;">Với mong muốn mang lại sự hài lòng cho quý khách khi mua hàng trực tuyến tại <b>Shop Mẹ Ỉn</b>, chúng tôi có những quy định trong trường hợp quý khách muốn đổi hàng; nhằm đảm bảo rằng những sản phẩm quý khách mua là sản phẩm mà vừa ý nhất.</span></div>
            <div class="col-md-12 col-sm-12 col-xs-12 nopadding" style="float: left;  font-size: 14px; text-align: start; padding: 0px !important; margin: 0px !important;">
              <article style="box-shadow: none;">
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><br><strong style="font-weight: bold;"><span style="font-family: Tahoma;">1. ĐIỀU KIỆN:</span></strong><br><br><span style="font-family: Tahoma;">- Có hóa đơn mua hàng tại&nbsp;</span><span style="font-family: Tahoma; font-size: 14px;">Shop Mẹ Ỉn</span><br><br><span style="font-family: Tahoma;">- Sản phẩm phải còn nguyên vẹn chưa sử dụng như giặt, ủi,…, không hư hỏng hay đã cắt may lại.</span><br><br><span style="font-family: Tahoma;">- Hàng chỉ được đổi để lấy 1 sản phẩm tương tự hay sản phẩm khác có giá trị bằng hoặc cao hơn.</span><br><br><span style="font-family: Tahoma;">- Chỉ hỗ trợ đổi hàng 1 lần duy nhất cho 1 đơn hàng trong vòng 2 ngày sau khi nhận hàng. Phí gửi dịch vụ đổi trả hàng sẽ do Quý Khách thanh toán (trừ&nbsp;trường hợp hàng đổi – trả do lỗi từ&nbsp;</span><span style="font-family: Tahoma; font-size: 14px;">Shop Mẹ Ỉn</span><span style="font-family: Tahoma;">).</span><br><br><strong style="font-weight: bold;"><span style="font-family: Tahoma;">2. CÁC TRƯỜNG HỢP HỖ TRỢ ĐỔI – TRẢ HÀNG:</span></strong><br><br><span style="font-family: Tahoma;">- Hàng không đúng hình ảnh, chủng loại, mẫu mã, size, bé mặc không vừa.</span><br><br><span style="font-family: Tahoma;">- Hàng lỗi :&nbsp;</span><span style="font-family: Tahoma; font-size: 14px;">Shop Mẹ Ỉn</span><span style="font-family: Tahoma;">&nbsp;chỉ hỗ trợ trả hàng khi sản phẩm bị lỗi nguyên nhân từ&nbsp;</span><span style="font-family: Tahoma; font-size: 14px;">Shop Mẹ Ỉn</span><span style="font-family: Tahoma;">&nbsp;và chịu mọi chi phí phát sinh nếu&nbsp;có.</span><br><br><strong style="font-weight: bold;"><span style="font-family: Tahoma;">3. THỜI GIAN:</span></strong><br><br><span style="font-family: Tahoma;">- Tại Hà Nội: Trong vòng 07 ngày theo ngày trên hóa đơn bán hàng hoặc giao hàng.</span><br><br><span style="font-family: Tahoma;">- Tại các tỉnh thành khác: Trong vòng 10 ngày theo ngày trên biên nhận của dịch vụ chuyển trả dấu bưu điện.</span><br><br><strong style="font-weight: bold;"><span style="font-family: Tahoma;">4. THỦ TỤC:</span></strong><br><br><span style="font-family: Tahoma;">Khi có yêu cầu đổi – trả hàng xin Quý Khách vui lòng liên hệ trước với Shop Mẹ Ỉn qua phương tiện liên hệ sau:</span><br><br><span style="font-family: Tahoma;">- Hỗ trợ khách hàng: &nbsp;0962.926.302 từ 8h30 – 20h – Tất cả các ngày trong tuần</span></div>
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;">- Nhắn tin qua Zalo theo số điện thoại: 0962.926.302</span></div>
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;">- Nhắn tin qua facebook <a href="http://m.me/shopmein.net" target="_blank">Shop Mẹ Ỉn</a></span></div>
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;">- Email: shopmein@gmail.com.</span></div>
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;">Nhận được thông tin nhân viên tư vấn sẽ hỗ trợ Quý Khách ngay.</span><br><br><strong style="font-weight: bold;"><span style="font-family: Tahoma;">5. ĐỊA ĐIỂM:</span></strong><br><br><span style="font-family: Tahoma;">Quý Khách chọn 1 trong 2 phương thức sau:</span><br><br><span style="font-family: Tahoma;">a. &nbsp; Đến đổi trực tiếp tại cửa hàng của Shop Mẹ Ỉn ở địa chỉ: Số 227 - Phố Huyện - Thị trấn Quốc Oai - Hà nội.</span><br><br><span style="font-family: Tahoma;">b. &nbsp; Đóng gói sản phẩm cần đổi – trả kèm hóa đơn, ghi rõ lý do, thông tin người gửi sau đó gửi về cho Shop Mẹ Ỉn qua&nbsp;đường bưu điện theo thông tin:</span><br><br><span style="font-family: Tahoma;">Người nhận: Shop Mẹ Ỉn</span></div>
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;">Địa chỉ:&nbsp;</span><span style="font-family: Tahoma;">Số 227 - Phố Huyện - Thị trấn Quốc Oai - Hà nội.</span></div>
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;">Số điện thoại:&nbsp; 0962.926.302</span><br><br><span style="font-family: Tahoma;">Ngay sau khi gửi vui lòng thông báo cho&nbsp;</span><a href="http://m.me/shopmein.net" target="_blank" style="background-color: rgb(255, 255, 255); font-family: Tahoma;">Shop Mẹ Ỉn</a><span style="font-family: Tahoma;">&nbsp;để tiện theo dõi và hỗ trợ giải quyết kịp thời cho Quý&nbsp;Khách khi nhận được hàng.</span></div>
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;"><br></span></div>
                <div class="article-content" style="font-size: 15px; line-height: 26px; padding: 0px 8px 8px;"><span style="font-family: Tahoma;"><br></span></div>
              </article>
            </div>
          </h1>
        </div>
        </div>
        <!-- end content cart -->
      </div>
    </div>
  </div>
@endsection

