<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    .container{
      max-width: 1140px;
    }
    b, strong {
      font-weight: bolder;
    }
  </style>
</head>
<body>

<div class="container">
  <h2 align="center">Nhận xét sản phẩm <i>{{$mailContent['product_name']}}</i></h2>
  <p><strong>Tên khách hàng:</strong> {{$mailContent['customer_name']}}</p>
  <p><strong>Số điện thoại:</strong> {{$mailContent['customer_phone']}}</p>
  <p><strong>Email:</strong> {{$mailContent['customer_email']}}</p>
  <p><strong>Ngày nhận xét:</strong> {{$mailContent['review_date']}}</p>
  <p><strong>Đánh giá:</strong> {{$mailContent['rating']}} sao</p>
  <p><strong>Nội dung nhận xét:</strong></p>
  <p><i>{{$mailContent['content']}}</i></p>
  <hr style="border-top: 1px dashed gray;">
  <small style="display: inline-block;width: 100%;"><strong>Shop Mẹ Ỉn</strong> - Thời trang trẻ em</small>
  <small style="display: inline-block;width: 100%;">Địa chỉ: Số 227 - Phố Huyện - TT.Quốc Oai - Hà Nội</small>
  <small style="display: inline-block;width: 100%;">Hotline / Zalo: 0962926302</small>
  <small style="display: inline-block;width: 100%;">Website: https://shopmein.vn</small>
</div>
</body>
</html>
