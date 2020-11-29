@extends('webv2.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('content')
  @include('webv2.pages.breadcrum')

<div class="body-content outer-top-xs">
  <div class="container">
    <div class="row ">
      <div class="shopping-cart">
        <div class="shopping-cart-table ">
          <div class="table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th class="cart-romove item">Xoá</th>
                <th class="cart-description item">Hình ảnh</th>
                <th class="cart-product-name item">Tên sản phẩm</th>
                <th class="cart-edit item">Thay đổi</th>
                <th class="cart-qty item">Số lượng</th>
                <th class="cart-sub-total item">Giá</th>
                <th class="cart-total last-item">Thành tiền</th>
              </tr>
              </thead><!-- /thead -->
              <tfoot>
              <tr>
                <td colspan="7">
                  <div class="shopping-cart-btn">
							<span class="">
								<a href="#" class="btn btn-upper btn-primary outer-left-xs">Tiếp tục mua hàng</a>
								<a href="#" class="btn btn-upper btn-primary pull-right outer-right-xs">Cập nhật</a>
							</span>
                  </div><!-- /.shopping-cart-btn -->
                </td>
              </tr>
              </tfoot>
              <tbody>
              <tr>
                <td class="romove-item"><a href="#" title="cancel" class="icon"><i class="fa fa-trash-o"></i></a></td>
                <td class="cart-image">
                  <a class="entry-thumbnail" href="detail.html">
                    <img src="{!! url('public/webv2/assets/images/products/p1.jpg') !!}" alt="">
                  </a>
                </td>
                <td class="cart-product-name-info">
                  <h4 class='cart-product-description'><a href="detail.html">Floral Print Buttoned</a></h4>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="rating rateit-small"></div>
                    </div>
                    <div class="col-sm-8">
                      <div class="reviews">
                        (06 Reviews)
                      </div>
                    </div>
                  </div><!-- /.row -->
                  <div class="cart-product-info">
                    <span class="product-color">Color:<span>Blue</span></span>
                  </div>
                </td>
                <td class="cart-product-edit"><a href="#" class="product-edit">Edit</a></td>
                <td class="cart-product-quantity">
                  <div class="quant-input">
                    <div class="arrows">
                      <div class="arrow plus gradient"><span class="ir"><i class="icon fa fa-sort-asc"></i></span></div>
                      <div class="arrow minus gradient"><span class="ir"><i class="icon fa fa-sort-desc"></i></span></div>
                    </div>
                    <input type="text" value="1">
                  </div>
                </td>
                <td class="cart-product-sub-total"><span class="cart-sub-total-price">$300.00</span></td>
                <td class="cart-product-grand-total"><span class="cart-grand-total-price">$300.00</span></td>
              </tr>
              <tr>
                <td class="romove-item"><a href="#" title="cancel" class="icon"><i class="fa fa-trash-o"></i></a></td>
                <td class="cart-image">
                  <a class="entry-thumbnail" href="detail.html">
                    <img src="{!! url('public/webv2/assets/images/products/p2.jpg') !!}" alt="">
                  </a>
                </td>
                <td class="cart-product-name-info">
                  <h4 class='cart-product-description'><a href="detail.html">Floral Print Buttoned</a></h4>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="rating rateit-small"></div>
                    </div>
                    <div class="col-sm-8">
                      <div class="reviews">
                        (06 Reviews)
                      </div>
                    </div>
                  </div><!-- /.row -->
                  <div class="cart-product-info">
                    <span class="product-color">color:<span>Pink</span></span>
                  </div>
                </td>
                <td class="cart-product-edit"><a href="#" class="product-edit">Edit</a></td>
                <td class="cart-product-quantity">
                  <div class="cart-quantity">
                    <div class="quant-input">
                      <div class="arrows">
                        <div class="arrow plus gradient"><span class="ir"><i class="icon fa fa-sort-asc"></i></span></div>
                        <div class="arrow minus gradient"><span class="ir"><i class="icon fa fa-sort-desc"></i></span></div>
                      </div>
                      <input type="text" value="1">
                    </div>
                  </div>
                </td>
                <td class="cart-product-sub-total"><span class="cart-sub-total-price">$300.00</span></td>
                <td class="cart-product-grand-total"><span class="cart-grand-total-price">$300.00</span></td>
              </tr>
              </tbody><!-- /tbody -->
            </table><!-- /table -->
          </div>
        </div><!-- /.shopping-cart-table -->
        <div class="col-md-4 col-sm-12 estimate-ship-tax">
{{--          <div class="box-tabl">--}}
{{--            <table class="table">--}}
{{--              <thead>--}}
{{--              <tr>--}}
{{--                <th>--}}
{{--                  <span class="estimate-title">Estimate shipping and tax</span>--}}
{{--                  <p>Enter your destination to get shipping and tax.</p>--}}
{{--                </th>--}}
{{--              </tr>--}}
{{--              </thead><!-- /thead -->--}}
{{--              <tbody>--}}
{{--              <tr>--}}
{{--                <td>--}}
{{--                  <div class="form-group">--}}
{{--                    <label class="info-title control-label">Country <span>*</span></label>--}}
{{--                    <select class="form-control unicase-form-control selectpicker">--}}
{{--                      <option>--Select options--</option>--}}
{{--                      <option>India</option>--}}
{{--                      <option>SriLanka</option>--}}
{{--                      <option>united kingdom</option>--}}
{{--                      <option>saudi arabia</option>--}}
{{--                      <option>united arab emirates</option>--}}
{{--                    </select>--}}
{{--                  </div>--}}
{{--                  <div class="form-group">--}}
{{--                    <label class="info-title control-label">State/Province <span>*</span></label>--}}
{{--                    <select class="form-control unicase-form-control selectpicker">--}}
{{--                      <option>--Select options--</option>--}}
{{--                      <option>TamilNadu</option>--}}
{{--                      <option>Kerala</option>--}}
{{--                      <option>Andhra Pradesh</option>--}}
{{--                      <option>Karnataka</option>--}}
{{--                      <option>Madhya Pradesh</option>--}}
{{--                    </select>--}}
{{--                  </div>--}}
{{--                  <div class="form-group">--}}
{{--                    <label class="info-title control-label">Zip/Postal Code</label>--}}
{{--                    <input type="text" class="form-control unicase-form-control text-input" placeholder="">--}}
{{--                  </div>--}}
{{--                  <div class="pull-right">--}}
{{--                    <button type="submit" class="btn-upper btn btn-primary">GET A QOUTE</button>--}}
{{--                  </div>--}}
{{--                </td>--}}
{{--              </tr>--}}
{{--              </tbody>--}}
{{--            </table>--}}
{{--          </div>--}}
        </div><!-- /.estimate-ship-tax -->

        <div class="col-md-4 col-sm-12 estimate-ship-tax">
          <div class="box-tabl">
            <table class="table">
              <thead>
              <tr>
                <th>
                  <span class="estimate-title">Mã giảm giá</span>
                  <p>Hãy nhập mã giảm giá của bạn tại đây (Nếu có)</p>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div class="form-group">
                    <input type="text" class="form-control unicase-form-control text-input" placeholder="Nhập mã giảm giá..">
                  </div>
                  <div class="clearfix pull-right">
                    <button type="submit" class="btn-upper btn btn-primary">Áp dụng</button>
                  </div>
                </td>
              </tr>
              </tbody><!-- /tbody -->
            </table><!-- /table -->
          </div>
        </div><!-- /.estimate-ship-tax -->

        <div class="col-md-4 col-sm-12 cart-shopping-total">
          <table class="table">
            <thead>
            <tr>
              <th>
                <div class="cart-sub-total">
                  Tổng<span class="inner-left-md">$600.00</span>
                </div>
                <div class="cart-grand-total">
                  Tổng cộng<span class="inner-left-md">$600.00</span>
                </div>
              </th>
            </tr>
            </thead><!-- /thead -->
            <tbody>
            <tr>
              <td>
                <div class="cart-checkout-btn pull-right">
{{--                  <button type="submit" class="btn btn-primary checkout-btn">THỰC HIỆN THANH TOÁN</button>--}}
                  <a href="{!! url('/thanh-toan.html') !!}" class="btn btn-primary checkout-btn">THỰC HIỆN THANH TOÁN</a>
{{--                  <span class="">Checkout with multiples address!</span>--}}
                </div>
              </td>
            </tr>
            </tbody><!-- /tbody -->
          </table><!-- /table -->
        </div><!-- /.cart-shopping-total -->			</div><!-- /.shopping-cart -->
    </div> <!-- /.row -->
    <!-- ============================================== BRANDS CAROUSEL ============================================== -->
    @include('webv2.layout.brands')
    <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
</div><!-- /.body-content -->


@endsection
