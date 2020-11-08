@extends('theme.layout.layout')
@section('title', 'Thời trang trẻ em thu đông 2020 | Quần áo trẻ em thu đông 2020 | Quần áo bé trai, váy bé gái')
@section('content')
  <div id="app"></div>
  <div id="home" class="view view-main view-init ios-edges">
    <div class="page page-home page-with-subnavbar">
      @include('theme.layout.tabbar')
      <div class="tabs">
        <div id="tab-home" class="tab tab-home tab-active">
          @include('theme.layout.header')
{{--          <div class="panel-backdrop"></div>--}}
{{--          @include('theme.layout.sidebar')--}}
            <sidebar-component></sidebar-component>
          <div class="page-content">
              <div class="slider">
                  <div class="swiper-container swiper1" >
                      <div class="swiper-wrapper">
                          <div class="swiper-slide">
                              <div class="content">
                                  <div class="mask"></div>
{{--                                      <div class="item" v-lazy-container="{ selector: 'img', error: '{{url('')}}/public/web/images/404.jpg', loading: '{{url('')}}/public/web/images/loading.gif' }">--}}
                                  <img src="{{ url('resources/views/web/assets/images/banners/smi.jpg') }}" alt="">
{{--                                      </div>--}}
                              </div>
                          </div>
{{--                          <div class="swiper-slide">--}}
{{--                              <div class="content">--}}
{{--                                  <div class="mask"></div>--}}
{{--                                      <div class="item" v-lazy-container="{ selector: 'img', error: '{{url('')}}/public/web/images/404.jpg', loading: '{{url('')}}/public/web/images/loading.gif' }">--}}
{{--                                          <img src="{{ url('public/mobile/images/banner-m1.png') }}" alt="">--}}
{{--                                      </div>--}}
{{--                              </div>--}}
{{--                          </div>--}}
{{--                          <div class="swiper-slide">--}}
{{--                              <div class="content">--}}
{{--                                  <div class="mask"></div>--}}
{{--                                      <div class="item" v-lazy-container="{ selector: 'img', error: '{{url('')}}/public/web/images/404.jpg', loading: '{{url('')}}/public/web/images/loading.gif' }">--}}
{{--                                  <img src="{{ url('public/mobile/images/banner2.png') }}" alt="">--}}
{{--                                      </div>--}}
{{--                              </div>--}}
{{--                          </div>--}}
                      </div>
                      <!-- Add Pagination -->
                      <div class="swiper-pagination swiper-pagination1"></div>
                  </div>
              </div>
              @include('theme.page.category.category-wiget')
            <div>
                <best-seller-component></best-seller-component>
            </div>
            <div>
                <flash-sale-component></flash-sale-component>
            </div>
            <div>
                <latest-product-component></latest-product-component>
            </div>
            @if(isset($hasCookie) && $hasCookie)
            <div class="flash-sale segments no-pd-b">
                <viewed-product-component></viewed-product-component>
            </div>
            @endif
            <div>
                <blog-component></blog-component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
@section("script")
  <script src="{{url('public/mobile/js/home.min.js') }}"></script>
@endsection
