@extends('theme.layout.layout')
@section("title", "Thanh toán")
@section('content')
    <div id="app" class="view view-reviews ios-edges">
        <sidebar-component></sidebar-component>
{{--        @include('theme.layout.tabbar')--}}
        <div class="page">
            <div class="navbar navbar-page">
                <div class="navbar-inner">
                    <div class="left">
                        <a href="#" class="panel-open">
                            <i class="fas fa-align-left"></i>
                        </a>
                    </div>
                    <div class="title">
                        Xác nhận thanh toán
                    </div>
                    <div class="right">
                        <a href="{{ url('/thong-bao.html') }}">
                            <i class="fas fa-bell"></i>
                        </a>
                    </div>
                </div>
            </div>
            <!-- end navbar -->
            <checkout-component/>
        </div>
    </div>
@endsection
