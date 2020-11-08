@extends('theme.layout.layout')
@section('title', !empty($prod_title) ? $prod_title : 'Không tồn tại sản phẩm')
@section('content')
    @if(empty($product))
      <div id="app" xmlns:v-bind="http://www.w3.org/1999/xhtml"></div>
        <div id="detail" xmlns:v-on="http://www.w3.org/1999/xhtml">
            <div id="detail-product" class="page">
                <div class="view view-main view-init ios-edges">
                    @include('theme.layout.header')
                    @include('theme.layout.tabbar')
                    <sidebar-component></sidebar-component>
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
            <sidebar-component></sidebar-component>
            <div id="detail-product" class="page">
                <div class="view view-main view-init ios-edges">
                    @include('theme.layout.header')
                    @include('theme.layout.breadcrum')
                    <div class="page-content d-inline-block col-md-12 pr-0 pl-0">
                        <div class="product-details segments d-inline-block col-md-12">
                            <div class="container">
                                <!-- wrap content product details -->
                                <div class="wrapper-content">
                                    <input type="hidden" id="cat_id" ref="categoryId" value="{{$product->category_id}}">
                                    <input type="hidden" id="product_id" ref="productId" value="{{$product->id}}">
                                    <input type="hidden" id="type_id" ref="typeId" value="{{$product->type}}">
                                    <div class="d-inline-block col-md-12 no-padding">
                                        <div class="d-inline-block col-md-12 no-padding">
                                            <div class="d-inline-block col-md-12 no-padding">
                                                <slider-component></slider-component>
                                            </div>
                                            <div class="swiper-pagination swiper-pagination-detail-product"></div>
                                        </div>
                                    </div>
                                    <div class="wrap-title-product wrap-c-margin">
                                        <h4>{{ $product->name }}</h4>
                                        <div>
                                              <rating-component :product_id="{{ $product->id }}" :product_name="'{{ $product->name }}'" :key="reload"/>
                                        </div>
                                        <h3 style="color: var(--main-color);font-size: 18px;" id="price">{{ $retail }}<sup style="top: -5px;font-size: 12px;"> đ</sup></h3>
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
                                        <p class=""><i class="fas fa-truck"></i> {{ $retail > 250000 ? 'Miễn phí vận chuyển' : 'Miễn phí vận chuyển cho đơn từ 250k' }}</p>
                                    </div>
                                    <div class="wrap-info">
                                        <div class="list">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);" class="item-link item-content">
                                                        <div class="item-inner item-cell">
                                                            <div class="item-row">
                                                                <div class="item-cell" style="width: 30%;">Tình trạng</div>
                                                                <div class="item-cell">
                                                                    <status-component :product_id="{{$product->id}}"></status-component>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <attributes-component></attributes-component>
                                    </div>
                                </div>
                                <div>
                                    <relate-product-component></relate-product-component>
                                </div>
                                <div>
                                    <div class="section-title" v-if="!isReviewed">
                                        <h3 style="width: 100%;">Đánh giá sản phẩm
                                            <span class="see-all-link btn btn-sm btn-warning ratingbtn"
                                                  style="color: #333;width:auto;" @click="openPopupReview">
                                                <i class="fas fa-pen-nib"></i> Viết nhận xét
                                            </span>
                                        </h3>
                                    </div>
                                    <reviews-component :product_id="{{ $product->id }}" :key="reload"/>
                                </div>
                                <div>
                                    <recommend-product-component></recommend-product-component>
                                </div>
                                @if(isset($hasCookie) && $hasCookie)
                                    <div class="related-products flash-sale segments no-pd-b" style="padding: 0;">
                                        <viewed-product-component></viewed-product-component>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="rating" >
                <form-reviews-component  :product_id="{{ $product->id }}"  :product_name="'{{ $product->name }}'"></form-reviews-component>
            </div>
        </div>
    @endif
@endsection

@section("script")
  <script src="{{url('public/mobile/js/detail.js') }}"></script>
@endsection
