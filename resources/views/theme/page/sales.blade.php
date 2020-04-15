@extends('theme.layout.layout')
@section('title', 'Khuyến mãi')
@section('content')
    <div id="app" class="view view-reviews ios-edges">
        @include('theme.layout.tabbar')
        <div class="page">
            <!-- navbar -->
            <div class="navbar navbar-page">
                <div class="navbar-inner">
                    <div class="left">
                        <a href="#" class="panel-open">
                            <i class="fas fa-align-left"></i>
                        </a>
                    </div>
                    <div class="title">
                        Khuyến mãi
                    </div>
                    <div class="right">
                        <a href="{{url('/notifications/')}}">
                            <i class="fas fa-bell"></i>
                        </a>
                    </div>
                </div>
            </div>
            <!-- end navbar -->
            <div class="page-content">
                <div class="official-brand">
                    <!-- slider brand -->
                    <div class="slider-brand segments-bottom">
                        <div class="container">
                            <div data-pagination='{"el": ".swiper-pagination"}' data-space-between="10"
                                 class="swiper-container swiper-init swiper-container-horizontal">
                                <div class="swiper-pagination"></div>
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="content">
                                            <div class="mask"></div>
                                            <img src="{{url('public/images/brand1.png')}}" alt="">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="content">
                                            <div class="mask"></div>
                                            <img src="{{url('public/images/brand2.png')}}" alt="">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="content">
                                            <div class="mask"></div>
                                            <img src="{{url('public/images/brand3.png')}}" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end slider brand -->

                    <!-- product brand -->
                    <div class="product-brand segments-bottom product">
                        <div class="container">
                            <sale-component/>
                        </div>
                    </div>
                    <!-- end product brand -->
{{--                    <div class="row justify-content-center pb-4">--}}
{{--                        <a href="#" class="view-more">Xem thêm <i--}}
{{--                                class="fas fa-caret-down"></i></a>--}}
{{--                    </div>--}}
                </div>
            </div>
            <!-- end official brand -->
        </div>
    </div>
@endsection
