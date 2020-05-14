@extends('theme.layout.layout')
@section('title', !empty($prod_title) ? $prod_title : 'Không tồn tại sản phẩm')
@section('content')
    @if(empty($product))
      <div id="app" xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml"
           xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml"
           xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml"
           xmlns:v-bind="http://www.w3.org/1999/xhtml"></div>
        <div id="detail" xmlns:v-on="http://www.w3.org/1999/xhtml">
            <div id="detail-product" class="page">
                <div class="view view-main view-init ios-edges">
                    @include('theme.layout.header')
                    @include('theme.layout.tabbar')
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
        <div id="detail" xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
            <div id="detail-product" class="page">
                <div class="view view-main view-init ios-edges">
                    @include('theme.layout.header')
                    @include('theme.layout.breadcrum')
                    <div class="page-content">
                        <div class="product-details segments">
                            <div class="container">
                                <!-- wrap content product details -->
                                <div class="wrapper-content">
                                    <input type="hidden" id="cat_id" ref="categoryId" value="{{$product->category_id}}">
                                    <input type="hidden" id="product_id" ref="productId" value="{{$product->id}}">
                                    <input type="hidden" id="type_id" ref="typeId" value="{{$product->type}}">
                                    <div class="slider-p-details">
                                        <div class="swiper-container swiper-detail-product">
                                            <div class="swiper-wrapper">
                                                @foreach (json_decode($product->image) as $image)
                                                    <div class="swiper-slide">
                                                        <div class="content">
                                                            <div class="mask"></div>
                                                            <div class="item" v-lazy-container="{ selector: 'img', error: '{{url('')}}/public/web/images/404.jpg', loading: '' }">
                                                              <img data-src="{{ url($image->type == 'upload' ? env('IMAGE_URL').$image->src : $image->src) }}"
                                                                alt="{{ $product->name }}" title="{{ $product->name }}">
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                            </div>
                                            <div class="swiper-pagination swiper-pagination-detail-product"></div>
                                        </div>
                                    </div>
                                    <div class="wrap-title-product wrap-c-margin">
                                        <h4>{{ $product->name }}</h4>
                                        <div>
{{--                                            <lazy-component>--}}
                                              <rating-component :product_id="{{ $product->id }}" :product_name="'{{ $product->name }}'" :key="reload"/>
{{--                                            </lazy-component>--}}
                                        </div>
                                        <h3 style="color: var(--main-color)">{{ number_format($product->retail).' đ' }}</h3>
                                    </div>
                                    <div class="fb-like" style="float: left; margin-right: 3px;" data-href="{{Request::url()}}"
                                         data-width="" data-layout="button" data-action="like" data-size="small"
                                         data-share="true">
                                    </div>
                                    <div class="fb-messengermessageus"
                                         messenger_app_id="2629504663951964"
                                         page_id="256417228645832"
                                         color="blue"
                                         size="standard">
                                    </div>
                                    <div class="freeship">
                                        <p class=""><i class="fas fa-truck"></i> {{ $product->retail > 250000 ? 'Miễn phí vận chuyển' : 'Miễn phí vận chuyển cho đơn tư 250k' }}</p>
                                    </div>
                                    <div class="wrap-info">
{{--                                      <lazy-component>--}}
                                        <attributes-component :description="'{{ $product->description }}'"/>
{{--                                      </lazy-component>--}}
                                    </div>
                                </div>
                                <div>
{{--                                  <lazy-component>--}}
                                    <relate-product-component/>
{{--                                  </lazy-component>--}}
                                </div>
                                <!-- product review -->
                                <div>
                                    <div class="row section-title">
                                        <h3 style="width: 100%;">Đánh giá sản phẩm
                                            <span class="see-all-link btn btn-sm btn-warning ratingbtn"
                                                  style="color: #333;width:auto;" @click="openPopupReview">
                                                <i class="fas fa-pen-nib"></i> Viết nhận xét
                                            </span>
                                        </h3>
                                    </div>
{{--                                  <lazy-component>--}}
                                    <reviews-component :product_id="{{ $product->id }}" :key="reload"/>
{{--                                  </lazy-component>--}}
                                </div>
                                <div>
{{--                                  <lazy-component>--}}
                                    <recommend-product-component/>
{{--                                  </lazy-component>--}}

                                </div>
                                <!-- end recommended for you -->
                                @if(isset($hasCookie) && $hasCookie)
                                    <div class="related-products flash-sale segments no-pd-b" style="padding: 0;">
                                      <lazy-component>
                                            <viewed-product-component/>
                                      </lazy-component>
                                    </div>
                                @endif
                            </div>
                        </div>
                        <!-- end product details -->
                        <!-- action product details -->
                        <div class="wrap-action-product-d">
                            <div class="container">
                                <div class="row">
                                    <div style="margin-left: 5px;">
                                        <div class="content-message">
                                            <a href="{{url('')}}"><i class="fas fa-home"></i></a>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="content-message">
                                            <a href="https://m.me/shopmein.net" target="_blank"><i class="fas fa-comment"></i></a>
                                        </div>
                                    </div>
                                    @foreach (json_decode($product->image) as $image)
                                        @if ($loop->first)
                                    <div>
                                        <div class="content-button">
                                            <a href="javascript:void(0);" class="button secondary-button"
                                               v-on:click="addToCart('{{$product->id}}', '{{$product->name}}', '{{$product->retail}}', '{{ url($image->type == 'upload' ? env('IMAGE_URL').$image->src : $image->src) }}')">
                                                <i class="fas fa-cart-arrow-down"></i> Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="content-button">
                                            <a href="javascript:void(0);" class="button secondary-button"
                                               v-on:click="buyNow('{{$product->id}}', '{{$product->name}}', '{{$product->retail}}', '{{ url($image->type == 'upload' ? env('IMAGE_URL').$image->src : $image->src) }}')">
                                                <i class="fas fa-cart-plus"></i> Mua ngay
                                            </a>
                                        </div>
                                    </div>
                                        @endif
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <!-- end action product details -->
                    </div>
                </div>
            </div>
            <!-- description sheet modal -->
            <div class="sheet-modal detail-sheet">
                <div class="toolbar">
                    <div class="toolbar-inner">
                        <div class="left">Bảng chọn size</div>
                        <div class="right">
                            <a href="javascript:void(0);" class="link sheet-close"><i class="fas fa-check"></i></a>
                        </div>
                    </div>
                </div>
                <div class="sheet-modal-inner segments">
                    <div class="page-content">
                        <div class="container">
                            <h3 class="center">Bảng chọn size cho bé</h3>
                            <div class="table-responsive">
                                <h5>1. Size quần áo</h5>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tuổi</th>
                                        <th>Chiều cao (cm)</th>
                                        <th>Cân nặng (kg)</th>
                                        <th>Size</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Anna</td>
                                        <td>Pitt</td>
                                        <td>35</td>
                                        <td>New York</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-responsive">
                                <h5>2. Size giày dép</h5>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tuổi</th>
                                        <th>Chiều cao (cm)</th>
                                        <th>Cân nặng (kg)</th>
                                        <th>Size</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Anna</td>
                                        <td>Pitt</td>
                                        <td>35</td>
                                        <td>New York</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end description sheet modal -->
            <div id="rating" >
                <div class="sheet-modal rating-sheet">
                    <div class="toolbar">
                        <div class="toolbar-inner">
                            <div class="left">Viết nhận xét</div>
                            <div class="right">
                                <a href="javascript:void(0);" class="link sheet-close" v-on:click="cancelReview()"><i class="fas fa-check"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="sheet-modal-inner segments">
                        <div class="page-content" style="background: #fff;padding-bottom: 20px;">
                            <div class="container" id="form-review">
                                <form style="padding-top: 10px;">
                                    <input id="ratings-hidden" name="rating" type="hidden">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Họ tên" id="fullname" autofocus v-model="fullname" ref="fullname">
                                    </div>
                                    <div :class="['form-group', isPhoneValid()]">
                                        <input type="text" class="form-control" placeholder="Số điện thoại" id="phone" v-model="phone" ref="phone">
                                    </div>
                                    <div :class="['form-group', isEmailValid()]">
                                        <input type="email" class="form-control" placeholder="Email" id="email" v-model="email" ref="email">
                                    </div>
                                    <div class="form-group">
                                        <textarea rows="3" class="form-control" placeholder="Nội dung nhận xét" id="content" v-model="content" ref="content"></textarea>
                                    </div>
                                    <div class="text-right">
                                        <star-rating :item-size="30"
                                                     border-color="#ffffff"
                                                     inactive-color="#D8D8D8"
                                                     active-color="#ffc107"
                                                     v-model="rating"
                                        ></star-rating>
                                        <div class="float-right">
                                            <button type="button" class="btn btn-primary" v-on:click="submitReviews('{{$product->id}}')" :disabled="submit">
                                              <i class="fa fa-spinner fa-spin" style="font-size:20px" v-bind:class="submit ? '' : 'hidden'"></i>&nbsp;Đồng ý
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="form-review-success" class="hidden">
                                <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                                    <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                                    <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                                </div>
                                <div class="swal2-title" style="">Đăng nhận xét thành công!</div>
                                <div class="swal2-text" style="text-align: center;width: 100%;">Cám ơn bạn đã nhận xét sản phẩm!</div>
                                <div class="swal2-footer" style="text-align: center;margin-top: 0;">
                                    <div class="swal2-button-container" style="width: 50%;margin: auto;">
                                        <button class="link sheet-close btn btn-danger" v-on:click="cancelReview()">Đóng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
@endsection

@section("script")
  <script src="{{url('public/mobile/js/detail.min.js') }}"></script>
@endsection
