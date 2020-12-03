@extends('webv2.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('content')
  @include('webv2.pages.breadcrum')
  <input type="hidden" id="cat_id" ref="categoryId" value="{{$product->category_id}}">
  <input type="hidden" id="product_id" ref="productId" value="{{$product->id}}">
  <input type="hidden" id="type_id" ref="typeId" value="{{$product->type}}">
<div class="body-content outer-top-xs" id="app">
  <div class='container'>
    <div class='row single-product'>
      <!-- /.sidebar -->
      <div class='col-md-12'>
        <div class="detail-block">
          <div class="row  wow fadeInUp">

            <div class="col-xs-12 col-sm-6 col-md-5 gallery-holder">
{{--              <slider-gallery-component :product_name="'{{$product->name}}'"></slider-gallery-component>--}}
              <slider-component :product_name="'{{$product->name}}'" ref="sliderComponent"></slider-component>
            </div><!-- /.gallery-holder -->
            <div class='col-sm-6 col-md-7 product-info-block'>
              <div class="product-info">
                <h1 class="name">{{$product->name}}</h1>
                <div class="stock-container info-container m-t-10">
                  <div class="row">
                    <div class="col-sm-2 col-xs-2">
                      <div class="stock-box">
                        <span class="label">Tình trạng :</span>
                      </div>
                    </div>
                    <div class="col-sm-8 col-xs-8">
                      <div class="stock-box">
                        <status-component :product_id="{{$product->id}}"></status-component>
                      </div>
                    </div>
                  </div><!-- /.row -->
                </div><!-- /.stock-container -->
                <div class="stock-container info-container m-t-10">
                  <div class="row">
                    <div class="col-sm-2 col-xs-2">
                      <div class="stock-box">
                        <span class="label">Mã sản phẩm :</span>
                      </div>
                    </div>
                    <div class="col-sm-8 col-xs-8">
                      <div class="stock-box text-secondary">
                        {{$product->id}}
                      </div>
                    </div>
                  </div><!-- /.row -->
                </div>
                <div class="price-container info-container m-t-20">
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6">
                      <div class="price-box">
                        <span class="price" id="price">{{ $retail }}<sup style="top: -10px;font-size: 16px;"> đ</sup></span>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6">
                      <div class="favorite-button">
                        <a class="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Lưu vào yêu thích" href="#">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a class="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Add to Compare" href="#">
                          <i class="fa fa-signal"></i>
                        </a>
                      </div>
                    </div>
                  </div><!-- /.row -->
                </div><!-- /.price-container -->
                <attributes-component></attributes-component>
              </div><!-- /.product-info -->
            </div><!-- /.col-sm-7 -->
          </div><!-- /.row -->
        </div>

        <div class="product-tabs inner-bottom-xs  wow fadeInUp">
          <div class="row">
            <div class="col-sm-3">
              <ul id="product-tabs" class="nav nav-tabs nav-tab-cell">
                <li class="active"><a data-toggle="tab" href="#description">Mô tả</a></li>
              </ul><!-- /.nav-tabs #product-tabs -->
            </div>
            <div class="col-sm-9">

              <div class="tab-content">

                <div id="description" class="tab-pane in active">
                  <div class="product-tab">
                    @if($product->description != '' && $product->description != '<p><br></p>')
                      {!! $product->description !!}
                    @else
                      Mô tả đang được cập nhật ... !!!
                    @endif
                  </div>
                </div><!-- /.tab-pane -->
              </div><!-- /.tab-content -->
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.product-tabs -->

        <!-- ============================================== UPSELL PRODUCTS ============================================== -->
        <relate-product-component></relate-product-component><!-- /.section -->
        <!-- ============================================== UPSELL PRODUCTS : END ============================================== -->

      </div><!-- /.col -->
      <div class="clearfix"></div>
    </div><!-- /.row -->
    <!-- ============================================== BRANDS CAROUSEL ============================================== -->
    <div id="brands-carousel" class="logo-slider wow fadeInUp">

      <div class="logo-slider-inner">
        <div id="brand-slider" class="owl-carousel brand-slider custom-carousel owl-theme">
          <div class="item m-t-15">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand1.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item m-t-10">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand2.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand3.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand4.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand5.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand6.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand2.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand4.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand1.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->

          <div class="item">
            <a href="#" class="image">
              <img data-echo="{!! url('public/webv2/assets/images/brands/brand5.png') !!}" src="{!! url('public/webv2/assets/images/blank.gif') !!}" alt="">
            </a>
          </div><!--/.item-->
        </div><!-- /.owl-carousel #logo-slider -->
      </div><!-- /.logo-slider-inner -->

    </div><!-- /.logo-slider -->
    <!-- ============================================== BRANDS CAROUSEL : END ============================================== -->	</div><!-- /.container -->
</div><!-- /.body-content -->

@endsection
