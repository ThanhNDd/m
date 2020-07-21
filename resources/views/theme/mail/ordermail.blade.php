<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1140px;
    }
    .table-bordered {
      border: 1px solid #dee2e6;
    }
    .table {
      width: 100%;
      margin-bottom: 1rem;
      color: #212529;
    }
    table {
      border-collapse: collapse;
    }
    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
    }
    .table-striped tbody tr:nth-of-type(odd) {
      background-color: rgba(0,0,0,.05);
    }
    .table-bordered td, .table-bordered th {
      border: 1px solid #dee2e6;
    }
    .table td, .table th {
      padding: .75rem;
      vertical-align: top;
    }
    .table-borderless tbody+tbody, .table-borderless td, .table-borderless th, .table-borderless thead th {
      border: 0;
    }
    b, strong {
      font-weight: bolder;
    }
  </style>
</head>
<body>

<div class="container">
  <h2 align="center">Thông tin đơn hàng #{{$mailContent['order_id']}}</h2>
  <p><strong>Tên khách hàng:</strong> {{$mailContent['customer_name']}}</p>
  <p><strong>Số điện thoại:</strong> {{$mailContent['customer_phone']}}</p>
  <p><strong>Địa chỉ:</strong> {{$mailContent['customer_address']}}</p>
  <p><strong>Ngày đặt hàng:</strong> {{$mailContent['order_date']}}</p>
  <p><strong>Ghi chú đơn hàng:</strong> {{$mailContent['note']}}</p>

  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th width="10%">SKU</th>
      <th width="50%">Tên sản phẩm</th>
      <th width="15%">Đơn giá</th>
      <th width="10%">Số lượng</th>
      <th width="15%">Thành tiền</th>
    </tr>
    </thead>
    <tbody>
    @foreach($mailContent['products'] as $product)
      <tr>
        <td>{{$product['sku']}}</td>
        <td>{{$product['product_name']}}</td>
        <td align="right">{{number_format($product['price'])}} đ</td>
        <td align="center">{{$product['qty']}}</td>
        <td align="right">{{number_format( $product['price'] * $product['qty'] )}} đ</td>
      </tr>
    @endforeach
    </tbody>
  </table>
  <table class="table table-borderless">
    <thead>
    <tr>
      <th width="10%"></th>
      <th width="50%"></th>
      <th width="15%"></th>
      <th width="10%"></th>
      <th width="15%"></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td colspan="4" align="right"><strong>Tổng:</strong></td>
      <td align="right"><strong>{{number_format($mailContent['total_amount'])}} đ</strong></td>
    </tr>
    <tr>
      <td colspan="4" align="right"><strong>Phí ship:</strong></td>
      <td align="right"><strong>{{number_format($mailContent['shipping'])}} đ</strong></td>
    </tr>
    <tr>
      <td colspan="4" align="right"><strong>Giảm trừ:</strong></td>
      <td align="right"><strong>0 đ</strong></td>
    </tr>
    <tr>
      <td colspan="4" align="right"><strong>Tổng thanh toán:</strong></td>
      <td align="right"><strong>{{number_format($mailContent['total_checkout'])}} đ</strong></td>
    </tr>
    </tbody>
  </table>
</div>
</body>
</html>
