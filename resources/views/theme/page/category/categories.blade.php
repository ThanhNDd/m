@extends('theme.layout.layout')
@section('title', 'Danh mục sản phẩm')
@section('content')
    <div id="app" class="view view-reviews ios-edges">
        @include('theme.layout.tabbar')
        <sidebar-component></sidebar-component>
        <div class="page">
            <div class="navbar navbar-page">
                <div class="navbar-inner">
                    <div class="left">
                        <a href="#" class="panel-open">
                            <i class="fas fa-align-left"></i>
                        </a>
                    </div>
                    <div class="title">
                        Danh mục
                    </div>
                    <div class="right">
                        <a href="{{url('/thong-bao/')}}">
                            <i class="fas fa-bell"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="page-content">
                <!-- all categoreis -->
                <div class="all-categories">
                    <div class="container">
                        <div class="content">
                            <a href="{{ url("/danh-muc/be-trai.html") }}">
                                <img src="{{ url('public/mobile/images/brand1.png') }}" alt="">
                            </a>
                        </div>
                        <div class="content">
                            <a href="{{ url("/danh-muc/be-gai.html") }}">
                                <img src="{{ url('public/mobile/images/brand2.png') }}" alt="">
                            </a>
                        </div>
                        <div class="content">
                            <a href="{{ url("/danh-muc/giay-dep.html") }}">
                                <img src="{{ url('public/mobile/images/brand3.png') }}" alt="">
                            </a>
                        </div>
                        <div class="content">
                            <a href="{{ url("/danh-muc/phu-kien.html") }}">
                                <img src="{{ url('public/mobile/images/brand1.png') }}" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- end all categoreis -->
            </div>
        </div>
    </div>
@endsection
