@extends('web.layout.layout')
@section("title", "Hoàn thành thanh toán")
@section('content')
  <div id="app">
    @include('web.layout.header')
    <div class="breadcrumb">
      <div class="container" >
        <div class="breadcrumb-inner">
          <ul class="list-inline list-unstyled">
            <li><a href="{{url('')}}">Trang chủ</a></li>
            <li><a href="javascript:void(0)">Hoàn thành</a></li>
          </ul>
        </div><!-- /.breadcrumb-inner -->
      </div><!-- /.container -->
    </div><!-- /.breadcrumb -->
    <div class="body-content outer-top-xs">
      <div class="steps-form">
        <div class="steps-row setup-panel">
          <div class="steps-step">
            <a href="javascript:void(0)" type="button" class="btn btn-default btn-circle waves-effect waves-light " disabled="disabled">
              <i class="fas fa-shopping-cart"></i>
            </a>
            <p>Giỏ hàng</p>
          </div>
          <div class="steps-step">
            <a href="javascript:void(0)" type="button" class="btn btn-default btn-circle waves-effect waves-light" disabled="disabled">
              <i class="fas fa-shopping-basket"></i>
            </a>
            <p>Thanh toán</p>
          </div>
          <div class="steps-step">
            <a href="javascript:void(0)" type="button" class="btn btn-circle waves-effect waves-light btn-indigo">
              <i class="far fa-check-circle"></i>
            </a>
            <p>Hoàn thành</p>
          </div>
        </div>
      </div>
      <div class="container" style="padding-bottom: 20px;background: #fff;">
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
                <a href="{{url('')}}" class="btn btn-primary">
                  <i class="fas fa-arrow-alt-circle-left"></i> Về trang chủ
                </a>
              </div>
            </div>
          @else
            <div class="cart segments" style="text-align: center;margin-top: 20px;">
              <a href="{{url('')}}" class="btn btn-primary">
                <i class="fas fa-arrow-alt-circle-left"></i> Quay về trang chủ
              </a>
            </div>
          @endif
      </div>
    </div>
  </div>
@endsection
