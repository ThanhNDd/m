@extends('theme.layout.layout')
@section('title', 'Danh mục sản phẩm')
@section('content')
    <div id="app" class="view view-reviews ios-edges">
        @include('theme.layout.tabbar')
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
                        <a href="{{url('/notifications/')}}">
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
                            <a href="{{ url("/categories/boys") }}">
                                <img src="{{ url('public/images/brand1.png') }}" alt="">
                            </a>
                        </div>
                        <div class="content">
                            <a href="{{ url("/categories/girls") }}">
                                <img src="{{ url('public/images/brand2.png') }}" alt="">
                            </a>
                        </div>
                        <div class="content">
                            <a href="{{ url("/categories/shoes") }}">
                                <img src="{{ url('public/images/brand3.png') }}" alt="">
                            </a>
                        </div>
                        <div class="content">
                            <a href="{{ url("/categories/accessories") }}">
                                <img src="{{ url('public/images/brand1.png') }}" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- end all categoreis -->
            </div>
        </div>
    </div>
@endsection
