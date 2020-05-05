@extends('web.layout.layout')
@section('title', !empty($prod_title) ? $prod_title : 'Không tồn tại sản phẩm')
@section('content')
  @if(empty($product))
    <div id="app"></div>
    <div id="detail" xmlns:v-on="http://www.w3.org/1999/xhtml">
      <div id="detail-product" class="page">
        <div class="view view-main view-init ios-edges">
          @include('web.layout.header')
          <div class="page-content">
            <div class="product-details segments">
              <div class="container">
                <div class="content">
                  <h5 class="center">Không tồn tại sản phẩm</h5>
                  <div class="divider-space-content"></div>
                  <a href="{{url('')}}" class="button primary-button">
                    <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  @else
    <div id="app"></div>
    <div id="detail" xmlns:v-on="http://www.w3.org/1999/xhtml">
      @include('web.layout.header')
      @include('web.layout.breadcrum')
      <input type="hidden" id="cat_id" ref="categoryId" value="{{$product->category_id}}">
      <input type="hidden" id="product_id" ref="productId" value="{{$product->id}}">
      <input type="hidden" id="type_id" ref="typeId" value="{{$product->type}}">
      <div class="body-content outer-top-xs">
        <div class='container'>
          <div class='row single-product'>
            <div class='col-xs-12 col-sm-12 col-md-3 sidebar'>
              <div class="sidebar-module-container">
                <div class="home-banner outer-top-n outer-bottom-xs">
                  <img src="{{url('resources/views/web/assets/images/banners/LHS-banner.jpg')}}" alt="Image">
                </div>
                @include('web.page.sidebar.sidebar')
              </div>
            </div>
            <div class='col-xs-12 col-sm-12 col-md-9 rht-col'>
              <div class="detail-block">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 gallery-holder">
                    <div class="product-item-holder size-big single-product-gallery small-gallery">
                      <div id="owl-single-product">
                        <lingallery :width="600" :height="400" :items="{{ $images }}"/>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-12 col-md-6 col-lg-6 product-info-block'>
                    <div class="product-info">
                      <h1 class="name">{{$product->name}}</h1>
                      <div>
                        <rating-component :product_id="{{ $product->id }}" :product_name="'{{ $product->name }}'"
                                          :key="reload"/>
                      </div>
                      <div class="stock-container info-container m-t-10">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="pull-left">
                              <div class="stock-box">
                                <span class="label">Tình trạng :</span>
                              </div>
                            </div>
                            <div class="pull-left">
                              <div class="stock-box">
                                <span class="value">Còn hàng</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row col-md-12 col-lg-12">
                        <div class="price-box">
                          <span class="price">{{ number_format($product->retail).' đ' }}</span>
                          <p style="color: gray;margin-top: 10px;line-height: 1px;">Tiết kiệm:
                            -{{ number_format(ROUND((($product->retail / 1000)*12)/100)*1000) }} đ</p>
                          <p style="color: gray;">Giá thị
                            trường: {{ number_format($product->retail + ROUND((($product->retail / 1000)*12)/100)*1000) }}
                            đ</p>
                        </div>
                      </div><!-- /.row -->
                      <div class="description-container m-t-20">
                        <attributes-component/>
                      </div>
                      <div class="quantity-container info-container">
                        <div class="row">
                          <div class="qty">
                            <span class="label">Số lượng :</span>
                          </div>
                          <div class="qty-count">
                            <div class="cart-quantity">
                              <div class="quant-input">
                                <div class="arrows">
                                  <div class="arrow plus gradient"><span class="ir">
                                          <i class="icon fas fa-sort-up"></i>
                                        </span></div>
                                  <div class="arrow minus gradient"><span class="ir">
                                          <i class="icon fas fa-sort-down"></i>
                                        </span></div>
                                </div>
                                <input type="text" value="1">
                              </div>
                            </div>
                          </div>
                          @foreach (json_decode($product->image) as $image)
                            @if($loop->first)
                              <div class="add-btn">
                                <a href="javascript:void(0);" class="btn btn-primary"
                                   v-on:click="addToCart('{{$product->id}}', '{{$product->name}}', '{{$product->retail}}', '{{ url($image->type == 'upload' ? env('IMAGE_URL').$image->src : $image->src) }}')">
                                  <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                                </a>
                              </div>
                              <div class="add-btn">
                                <a href="javascript:void(0);" class="btn btn-danger"
                                   v-on:click="buyNow('{{$product->id}}', '{{$product->name}}', '{{$product->retail}}', '{{ url($image->type == 'upload' ? env('IMAGE_URL').$image->src : $image->src) }}')">
                                  <i class="fa fa-shopping-cart"></i> Mua ngay
                                </a>
                              </div>
                            @endif
                          @endforeach
                        </div>
                      </div>
                      <div class="favorite-button m-t-5">
                        <div class="fb-like" style="float: left; margin-right: 3px;" data-href="{{Request::url()}}"
                             data-width="" data-layout="button_count" data-action="like" data-size="large"
                             data-share="true">
                        </div>
                        <div class="fb-messengermessageus"
                             messenger_app_id="2629504663951964"
                             page_id="256417228645832"
                             color="blue"
                             size="large">
                        </div>
                      </div>
                    </div><!-- /.product-info -->
                  </div><!-- /.col-sm-7 -->
                </div><!-- /.row -->
              </div>
              <div class="policy-info">
                <div class="policy no-mobile" style="width: 50%">
                  <span>
                    <h3>Chính sách vận chuyển:</h3>
                  </span>
                  <span>
                    <i class="fa fa-arrow-circle-right text-success"></i> Giao hàng tận nhà, cho kiểm tra hàng trước khi nhận.
                  </span>
                  <span>
                    <i class="fa fa-arrow-circle-right text-success"></i> Cước phí vận chuyển trong Hà nội là <b class="text-danger">20K</b>, tỉnh thành khác từ <b class="text-danger">25K</b> đến <b class="text-danger">35K</b>.
                  </span>
                  <span>
                    <i class="fa fa-arrow-circle-right text-success"></i>
                    <b class="text-danger">FREESHIP</b> Hà nội cho đơn hàng từ
                    <b class="text-danger">250K</b>, các tỉnh/thành khác hỗ trợ
                    <b class="text-danger">20K</b>
                  </span>
                  <span>
                    <i class="fa fa-arrow-circle-right text-success"></i>
                    <b class="text-danger">FREESHIP</b> TOÀN QUỐC cho đơn hàng hơn
                    <b class="text-danger">500K</b>
                  </span>
                </div>
                <div class="policy no-mobile" style="width: 40%">
                  <span>
                    <h3>Shop Mẹ Ỉn cam kết:</h3>
                  </span>
                  <span>
                    <i class="fa fa-check-circle text-success"></i> Sản phẩm <b class="text-danger">100%</b> như hình
                  </span>
                  <span>
                    <i class="fa fa-check-circle text-success"></i> Vải bền đẹp, không bong tróc.
                  </span>
                  <span>
                    <i class="fa fa-check-circle text-success"></i> Đổi trả nhanh &amp; dễ dàng nếu không vừa ý
                  </span>
                </div>
              </div>
              <div class="product-tabs inner-bottom-xs">
                <div class="row">
                  <div class="col-sm-12 col-md-3 col-lg-3">
                    <ul id="product-tabs" class="nav nav-tabs nav-tab-cell">
                      <li class="active"><a data-toggle="tab" href="#description">Chi tiết</a></li>
                      {{--                          <li><a data-toggle="tab" href="#review">REVIEW</a></li>--}}
                      {{--                          <li><a data-toggle="tab" href="#tags">TAGS</a></li>--}}
                    </ul><!-- /.nav-tabs #product-tabs -->
                  </div>
                  <div class="col-sm-12 col-md-9 col-lg-9">
                    <div class="tab-content">
                      <div id="description" class="tab-pane in active">
                        <div class="product-tab">
                          <p class="text">{!! $product->description !!}</p>
                        </div>
                      </div><!-- /.tab-pane -->
                    </div><!-- /.tab-content -->
                  </div><!-- /.col -->
                </div><!-- /.row -->
              </div><!-- /.product-tabs -->
              <div>
                <relate-product-component/>
              </div>
              <div>
                <reviews-component :product_id="{{ $product->id }}" :key="reload"/>
              </div>
              <div>
                <recommend-product-component/>
              </div>
              @if(session()->has('viewed'))
                <div>
                  <recently-product-component/>
                </div>
              @endif
            </div>
          </div>
        </div>
      </div>
    </div>
  @endif
@endsection

@section("script")
  <script>
      const detail = new Vue({
          el: '#detail',
          data() {
              return {
                  products: [],
                  type: '',
                  description: '',
                  rating: 0,
                  fullname: '',
                  phone: '',
                  email: '',
                  content: '',
                  email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                  phone_reg: /^((09|03|07|08|05)+([0-9]{8})\b)$/,
                  reload: 0,
                  items: []
              }
          },
          methods: {
              addToCart: function (id, name, price, image) {
                  let color = document.querySelector('input[name=color]:checked');
                  if (color == null) {
                      this.$toast.top('Bạn chưa chọn màu');
                      return;
                  }
                  let size = document.querySelector('input[name=size]:checked');
                  if (size == null) {
                      this.$toast.top('Bạn chưa chọn size');
                      return;
                  }
                  this.products = [];
                  this.products.push({
                      "id": id,
                      "name": name,
                      "price": price,
                      "image": image,
                      "color": color.value,
                      "size": size.value,
                  });
                  this.storeInCart();
              },
              buyNow: function (id, name, price, image) {
                  this.type = "buyNow";
                  this.addToCart(id, name, price, image);
              },
              storeInCart: function () {
                  axios.post(url + "/api/cart", {
                      body: this.products
                  }).then(response => {
                      this.$toast.top('Đã thêm vào giỏ hàng');
                      document.querySelector('.cart_number').innerHTML = '<span class="badge badge-danger" style="background: #fdd922;color: #666;">' + response.data.length + '</span>';
                      if (this.type === "buyNow") {
                          window.location.href = url + "/thanh-toan.html";
                      }
                  })
              },
              cancelReview: function () {
                  this.fullname = '';
                  this.phone = '';
                  this.email = '';
                  this.content = '';
                  this.rating = 0;
                  this.$refs.fullname.focus();
                  $("#form-review").removeClass('hidden');
                  $("#form-review-success").addClass('hidden');
              },
              isPhoneValid: function () {
                  return (this.phone === "") ? "" : (this.phone_reg.test(this.phone)) ? 'has-success' : 'has-error';
              },
              isEmailValid: function () {
                  return (this.email === "") ? "" : (this.email_reg.test(this.email)) ? 'has-success' : 'has-error';
              },
              submitReviews: function (product_id) {
                  if (!this.validate()) {
                      return false;
                  }
                  let review = [];
                  review.push({
                      "name": this.fullname,
                      "phone": this.phone,
                      "email": this.email,
                      "content": this.content,
                      "rating": this.rating,
                      "product_id": product_id
                  });
                  console.log(JSON.stringify(review));
                  axios.post(url + "/api/submit-reviews", {
                      body: review
                  }).then(response => {
                      console.log(response.data);
                      if (response.data === 201) {
                          $("#form-review").addClass('hidden');
                          $("#form-review-success").removeClass('hidden');
                          this.reload++;
                      } else {
                          swal({
                              title: "Đã xảy ra lỗi!",
                              text: "Xin vui lòng thử lại sau!",
                              icon: "error",
                              button: "Đồng ý",
                          });
                      }
                  })
              },
              validate: function () {
                  if (this.fullname && this.phone && this.content && this.rating) {
                      return true;
                  }
                  if (!this.fullname) {
                      this.$toast.top('Bạn chưa nhập tên');
                      this.$refs.fullname.focus();
                      return false;
                  }
                  if (this.phone === '') {
                      this.$toast.top('Bạn chưa nhập số điện thoại');
                      this.$refs.phone.focus();
                      return false;
                  } else if (!this.phone_reg.test(this.phone)) {
                      this.$toast.top('Số điện thoại chưa đúng.');
                      this.$refs.phone.focus();
                      return false;
                  }
                  if (this.email !== '' && !this.email_reg.test(this.email)) {
                      this.$toast.top('Email chưa đúng.');
                      this.$refs.email.focus();
                      return false;
                  }
                  if (!this.content) {
                      this.$toast.top('Bạn chưa nhập nội dung nhận xét');
                      this.$refs.content.focus();
                      return false;
                  }
                  if (!this.rating) {
                      this.$toast.top('Bạn chưa chọn số sao');
                      return false;
                  }
              },
              openPopupReview: function () {
                  $(".rating-sheet").addClass("modal-in");
                  $("html").addClass("with-modal-sheet");
                  $(".sheet-close").click(function () {
                      $(".rating-sheet").removeClass("modal-in");
                      $("html").removeClass("with-modal-sheet");

                  });
              }
          }
      });
      // new Swiper('.swiper-detail-product', {
      //     cssMode: true,
      //     mousewheel: true,
      //     keyboard: true,
      //     pagination: {
      //         el: '.swiper-pagination-detail-product',
      //         dynamicBullets: true,
      //         paginationClickable: true
      //     },
      //     autoplay: {
      //         delay: 5000,
      //     },
      // });
  </script>
@endsection
