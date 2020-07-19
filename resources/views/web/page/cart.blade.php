@extends('web.layout.layout')
@section("title", "Giỏ hàng")
@section('content')
  <div id="app">
    @include('web.layout.header')
    <div class="breadcrumb">
      <div class="container">
        <div class="breadcrumb-inner">
          <ul class="list-inline list-unstyled">
            <li><a href="{{url('')}}">Trang chủ</a></li>
            <li><a href="javascript:void(0)">Giỏ hàng</a></li>
          </ul>
        </div><!-- /.breadcrumb-inner -->
      </div><!-- /.container -->
    </div><!-- /.breadcrumb -->
    <div class="body-content outer-top-xs">
      <div class="container">
        <items-cart-component/>
      </div>
    </div>
    <div>
      <footer-component></footer-component>
    </div>
  </div>
@endsection

