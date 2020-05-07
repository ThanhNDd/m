@extends('theme.layout.layout')
@section('title', 'Trang chủ')
@section('content')
<div id="app" class="view view-main view-init ios-edges">
    <div class="page page-home page-with-subnavbar">
        @include('theme.layout.tabbar')
        <div class="tabs">
            <div id="tab-home" class="tab tab-home tab-active">
                <!-- home -->
                <!-- navbar home -->
            @include('theme.layout.header')
            <!-- end navbar home -->
                <!-- sidebarbar or panel -->
                <div class="panel-backdrop"></div>
                <!-- end sidebarbar or panel -->
                @include('theme.layout.sidebar')
                <div class="page-content">
                    <!-- slider -->
                    <div class="slider">
                        <div class="swiper-container swiper1" >
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="content">
                                        <div class="mask"></div>
                                        <img src="{{ url('public/mobile/images/banner-m1.png') }}" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="content">
                                        <div class="mask"></div>
                                        <img src="{{ url('public/mobile/images/banner3.png') }}" alt="">
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="content">
                                        <div class="mask"></div>
                                        <img src="{{ url('public/mobile/images/banner2.png') }}" alt="">
                                    </div>
                                </div>
                            </div>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination swiper-pagination1"></div>
                        </div>
                    </div>
                    <!-- end slider -->
                    <!-- cateogries -->
                    @include('theme.page.category.category-wiget')
                    <!-- end cateogries -->
                    <!-- latest product -->
{{--                    <div class="latest-product segments no-pd-b">--}}
{{--                        <div class="container">--}}
{{--                            <div class="section-title">--}}
{{--                                <h3>Bán chạy nhất</h3>--}}
{{--                            </div>--}}
{{--                            <best-seller-component/>--}}
{{--                        </div>--}}
{{--                    </div>--}}
                      <div>
                        <best-seller-component/>
                      </div>
                    <!-- end latest product -->
                    <!-- flash sale -->
                      <div>
                        <flash-sale-component/>
                      </div>
                    <!-- end flash sale -->
                    <!-- popular product -->
{{--                    <div class="popular-product product segments no-pd-b">--}}
{{--                        <div class="container">--}}
{{--                            <div class="section-title">--}}
{{--                                <h3>Hàng mới</h3>--}}
{{--                            </div>--}}
{{--                            <latest-product-component/>--}}
{{--                        </div>--}}
{{--                    </div>--}}
                    <div>
                      <latest-product-component/>
                    </div>
                        <!-- end popular product -->
                    @if(session()->has('viewed'))
                    <div class="flash-sale segments no-pd-b">
                        <div class="container" style="padding: 0 !important;">
                            <div class="section-title">
                                <h3>Sản phẩm bạn đã xem</h3>
                            </div>
                            <viewed-product-component/>
                        </div>
                    </div>
                    @endif
                    <div>
                        <blog-component/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
