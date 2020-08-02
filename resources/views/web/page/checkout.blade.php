@extends('web.layout.layout')
@section("title", "Thanh toán")
@section('content')
  <div id="app">
    @include('web.layout.header')
    <div class="breadcrumb">
      <div class="container">
        <div class="breadcrumb-inner">
          <ul class="list-inline list-unstyled">
            <li><a href="{{url('')}}">Trang chủ</a></li>
            <li><a href="javascript:void(0)">Thanh toán</a></li>
          </ul>
        </div><!-- /.breadcrumb-inner -->
      </div><!-- /.container -->
    </div><!-- /.breadcrumb -->
    <div class="body-content outer-top-xs">
      <div class="container">
        <checkout-component ref="checkout"></checkout-component>
      </div>
    </div>
  </div>
@endsection

