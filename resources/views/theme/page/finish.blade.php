@extends('theme.layout.layout')
@section("title", "Đặt hàng thành công")
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
                        Đặt hàng thành công
                    </div>
                    <div class="right">
                        <a href="{{ url('/notifications') }}">
                            <i class="fas fa-bell"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="page-content">
                @if(session()->has('finish'))
                    <div class="swal-icon swal-icon--success">
                        <span class="swal-icon--success__line swal-icon--success__line--long"></span>
                        <span class="swal-icon--success__line swal-icon--success__line--tip"></span>
                        <div class="swal-icon--success__ring"></div>
                        <div class="swal-icon--success__hide-corners"></div>
                    </div>
                    <div class="swal-title" style="">Đặt hàng thành công!</div>
                    <div class="swal-text" style="text-align: center">Cám ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý!</div>
                    <div class="swal-footer" style="text-align: center">
                        <div class="swal-button-container">
                            <a href="/" class="button primary-button">
                                <i class="fas fa-arrow-alt-circle-left"></i> Về trang chủ
                            </a>
                        </div>
                    </div>
                @else
                    <div class="cart segments">
                        <a href="/" class="button primary-button">
                            <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
                        </a>
                    </div>
                @endif

            </div>
        </div>
    </div>
@endsection
