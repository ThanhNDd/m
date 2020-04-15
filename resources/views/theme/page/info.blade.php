@extends('theme.layout.layout')
@section('title', 'Giới thiệu')
@section('content')
    <div class="view view-reviews ios-edges">
        @include('theme.layout.tabbar')
        <div class="page">
            <div class="account-buyer segments">
                <div class="container">
                    <div class="header-account">
                        <img src="{{url('public/images/icon.png')}}" alt="">
                        <div class="title-name">
                            <h5>Shop Mẹ Ỉn</h5>
                            <p><i class="fas fa-map-marker-alt"></i>Thời trang trẻ em</p>
                        </div>
                    </div>
                </div>
                <div class="divider-space-content"></div>
                <div class="account-menu">
                </div>
            </div>
        </div>
    </div>
@endsection
