@extends('theme.layout.layout')
@section("title", "Đặt hàng thành công")
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
                        Đặt hàng thành công
                    </div>
                    <div class="right">
                        <a href="{{ url('/thong-bao.html') }}">
                            <i class="fas fa-bell"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="page-content">
                @if(session()->has('finish'))
                    <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                      <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                      <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                    </div>
                    <div class="swal2-title" style="">Đặt hàng thành công!</div>
                    <div class="swal2-text" style="text-align: center">Cám ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý!</div>
                    <div class="swal2-footer" style="text-align: center;padding: 0;border: none;">
                        <div class="swal2-button-container" style="margin: auto;width: 50%;">
                            <a href="{{url('')}}" class="button primary-button">
                                <i class="fas fa-arrow-alt-circle-left"></i> Về trang chủ
                            </a>
                        </div>
                    </div>
                @else
                    <div class="cart segments">
                        <a href="{{url('')}}" class="button primary-button">
                            <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
                        </a>
                    </div>
                @endif

            </div>
        </div>
    </div>
@endsection
