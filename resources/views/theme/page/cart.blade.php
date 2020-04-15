@extends('theme.layout.layout')
@section("title", "Giỏ hàng")
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
                        Giỏ hàng
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
                <!-- content cart -->
                <div class="cart segments">
                    <items-cart-component/>
                </div>
                <!-- end content cart -->
            </div>
        </div>
    </div>
@endsection
