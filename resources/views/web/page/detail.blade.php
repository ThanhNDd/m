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
{{--      <input type="hidden" id="retail" ref="retail" value="">--}}
{{--      <input type="hidden" id="sku_selected" ref="sku_selected" value="">--}}
{{--      <input type="hidden" id="image_selected" ref="image_selected" value="">--}}
      <div class="body-content outer-top-xs">
        <div class='container'>
          <div class='row single-product'>
{{--            <div class='col-xs-12 col-sm-12 col-md-3 sidebar'>--}}
{{--              <div class="sidebar-module-container">--}}
{{--                  <sidebar-component></sidebar-component>--}}
{{--              </div>--}}
{{--            </div>--}}
            <div class='col-xs-12 col-sm-12 col-md-12 rht-col'>
              <div class="detail-block">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 gallery-holder">
                    <div class="product-item-holder size-big single-product-gallery small-gallery">
{{--                      <div id="owl-single-product">--}}
                        <slider-component></slider-component>
{{--                      </div>--}}
                    </div>
                  </div>
                  <div class='col-sm-12 col-md-6 col-lg-6 product-info-block'>
                    <div class="product-info">
                      <h1 class="name">{{$product->name}}</h1>
                      <div>
                        <lazy-component>
                          <rating-component :product_id="{{ $product->id }}" :product_name="'{{ $product->name }}'"
                                          :key="reload"></rating-component>
                        </lazy-component>
                      </div>
                      <div class="stock-container info-container m-t-10">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="float-left">
                              <div class="stock-box">
                                <span class="label">Tình trạng :&nbsp;</span>
                              </div>
                            </div>
                            <div class="float-left">
                              <div class="stock-box">
{{--                                <lazy-component>--}}
                                  <status-component :product_id="{{$product->id}}"></status-component>
{{--                                </lazy-component>--}}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row col-md-12 col-lg-12">
                        <div class="price-box">
                          <span class="price" id="price">{{ $retail }}<sup style="top: -10px;font-size: 16px;"> đ</sup></span>
{{--                          <span class="price">{{ number_format($product->retail).' đ' }}</span>--}}
{{--                          <p style="color: gray;margin-top: 10px;line-height: 1px;">Tiết kiệm:--}}
{{--                            -{{ number_format(ROUND((($product->retail / 1000)*12)/100)*1000) }} đ</p>--}}
{{--                          <p style="color: gray;">Giá thị--}}
{{--                            trường: {{ number_format($product->retail + ROUND((($product->retail / 1000)*12)/100)*1000) }}--}}
{{--                            đ</p>--}}
                        </div>
                      </div><!-- /.row -->
                      <div class="description-container m-t-20">
{{--                        <lazy-component>--}}
                          <attributes-component/>
{{--                        </lazy-component>--}}
                      </div>
{{--                      <div class="quantity-container info-container">--}}
{{--                        <div class="row mb-2">--}}
{{--                          <div class="qty">--}}
{{--                            <span class="label">Số lượng :</span>--}}
{{--                          </div>--}}
{{--                          <div class="qty-count">--}}
{{--                            <div class="cart-quantity">--}}
{{--                              <div class="quant-input">--}}
{{--                                <input type="number" value="1" id="qty" min="1">--}}
{{--                              </div>--}}
{{--                            </div>--}}
{{--                          </div>--}}
{{--                          <div class="qty">--}}
{{--                            <span class="label" id="remain_qty" style="font-size: 14px;"></span>--}}
{{--                          </div>--}}
{{--                        </div>--}}
{{--                        <div class="row">--}}
{{--                          @foreach (json_decode($product->image) as $image)--}}
{{--                            @if($loop->first)--}}
{{--                              <div class="add-btn">--}}
{{--                                <a href="javascript:void(0);" class="btn btn-primary"--}}
{{--                                   v-on:click="addToCart('{{$product->id}}', '{{$product->name}}')">--}}
{{--                                  <i class="fas fa-cart-plus"></i> Thêm vào giỏ--}}
{{--                                </a>--}}
{{--                              </div>--}}
{{--                              <div class="add-btn">--}}
{{--                                <a href="javascript:void(0);" class="btn btn-danger"--}}
{{--                                   v-on:click="buyNow('{{$product->id}}', '{{$product->name}}')">--}}
{{--                                  <i class="fa fa-shopping-cart"></i> Mua ngay--}}
{{--                                </a>--}}
{{--                              </div>--}}
{{--                            @endif--}}
{{--                          @endforeach--}}
{{--                        </div>--}}
{{--                      </div>--}}
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
              @include('web.page.policy.policy')
              @if($product->description)
              <div class="product-tabs inner-bottom-xs">
                <div class="row">
                  <div class="col-sm-12 col-md-3 col-lg-3">
                    <ul id="product-tabs" class="nav nav-tabs nav-tab-cell">
                      <li class="active"><a data-toggle="tab" href="#description">Mô tả sản phẩm</a></li>
                    </ul>
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
              @endif
              <div>
                  <relate-product-component/>
              </div>
              <div>
                  <reviews-component :product_id="{{ $product->id }}" :key="reload"/>
              </div>
              <div>
                  <recommend-product-component/>
              </div>
              @if(isset($hasCookie) && $hasCookie)
                <div>
                  <lazy-component>
                    <recently-product-component></recently-product-component>
                  </lazy-component>
                </div>
              @endif
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer-component></footer-component>
      </div>
    </div>
  @endif
@endsection

@section("script")
    <script src="{{url('public/web/js/detail.js') }}"></script>
@endsection
