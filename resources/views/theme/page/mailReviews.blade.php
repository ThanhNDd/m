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
</div>
</body>
</html>
