<!DOCTYPE html>
<html lang="en">
<head>
  <title>Thông tin đơn hàng</title>
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
  <!-- <h2 align="center">Thông tin đơn hàng #{{$mailContent['order_id']}}</h2> -->
  <div>
    <!-- <p><strong>Thông tin đơn hàng</strong></p> -->
    <p>Mã đơn hàng: {{$mailContent['order_id']}}</p>
    <p>Ngày đặt hàng: {{$mailContent['order_date']}}</p>
  </div>
  <div>
    <p><strong>Thông tin khách mua hàng</strong></p>
    <p style="text-indent: 30px;">Tên khách hàng: {{$mailContent['customer_name']}}</p>
    <p style="text-indent: 30px;">Số điện thoại: {{$mailContent['customer_phone']}}</p>
    <p style="text-indent: 30px;">Địa chỉ: {{$mailContent['customer_address']}}</p>
  </div>
  @if($mailContent['difference_address'])
  <div>
    <p><strong>Thông tin khách nhận hàng</strong></p>
    <p style="text-indent: 30px;">Tên người nhận: {{$mailContent['name']}}</p>
    <p style="text-indent: 30px;">Số điện thoại người nhận: {{$mailContent['phone']}}</p>
    <p style="text-indent: 30px;">Địa chỉ người nhận: {{$mailContent['address']}}</p>
  </div>
  @endif
  <p><strong>Ghi chú đơn hàng</strong>: {{$mailContent['note']}}</p>
  <p><strong>Danh sách sản phẩm</strong></p>
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
        <td align="right">{{number_format($product['price'], 0, '', ".")}} <sup>đ</sup></td>
        <td align="center">{{$product['qty']}}</td>
        <td align="right">{{number_format( $product['price'] * $product['qty'], 0, '', ".")}} <sup>đ</sup></td>
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
      <td align="right">
        <h3 style="margin: 0;width: 94%;float: left;">{{number_format($mailContent['total_amount'], 0, '', ".")}}</h3><sup>đ</sup>
      </td>
    </tr>
    <tr>
      <td colspan="4" align="right"><strong>Phí ship:</strong></td>
      <td align="right">
        <h3 style="margin: 0;width: 94%;float: left;">{{number_format($mailContent['shipping'], 0, '', ".")}}</h3><sup>đ</sup>
      </td>
    </tr>
    <tr>
      <td colspan="4" align="right"><strong>Giảm trừ:</strong></td>
      <td align="right">
        <h3 style="margin: 0;width: 94%;float: left;">0 </h3> <sup>đ</sup>
      </td>
    </tr>
    <tr>
      <td colspan="4" align="right"><strong>Tổng thanh toán:</strong></td>
      <td align="right" style="color: red;">
        <h2 style="margin: 0;width: 94%;float: left;">{{number_format($mailContent['total_checkout'], 0, '', ".")}} </h2> <sup>đ</sup>
      </td>
    </tr>
    </tbody>
  </table>
  <hr style="border-top: 1px dashed gray;">
  <small style="display: inline-block;width: 100%;"><strong>Shop Mẹ Ỉn</strong> - Thời trang trẻ em</small>
  <small style="display: inline-block;width: 100%;">Địa chỉ: Số 227 - Phố Huyện - TT.Quốc Oai - Hà Nội</small>
  <small style="display: inline-block;width: 100%;">Hotline / Zalo: 0962926302</small>
  <small style="display: inline-block;width: 100%;">Website: https://shopmein.vn</small>
</div>
</body>
</html>
