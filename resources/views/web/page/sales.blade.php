@extends('web.layout.layout')
@section("title", "Khuyến mãi")
@section('content')
  <div id="app">
    @include('web.layout.header')
    <div class="breadcrumb">
      <div class="container">
        <div class="breadcrumb-inner">
          <ul class="list-inline list-unstyled">
            <li><a href="{{url('')}}">Trang chủ</a></li>
            <li><a href="javascript:void(0)">Khuyến mãi</a></li>
          </ul>
        </div><!-- /.breadcrumb-inner -->
      </div><!-- /.container -->
    </div>
    <div class="body-content outer-top-xs">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-3 sidebar">
            @include('web.page.sidebar.vertical_menu')
            @include('web.page.sidebar.sidebar')
          </div>
          <div class="col-xs-12 col-sm-12 col-md-9 rht-col">
            <!-- ========================================== SECTION – HERO ========================================= -->
            <div id="category" class="category-carousel hidden-xs">
              <div class="item">
                <div class="image"> <img src="{{url('resources/views/web/assets/images/banners/cat-banner-1.jpg')}}" alt="" class="img-responsive"> </div>
                <div class="container-fluid">
                  <div class="caption vertical-top text-left">
                    <div class="big-text"> Big Sale </div>
                    <div class="excerpt hidden-sm hidden-md"> Save up to 49% off </div>
                    <div class="excerpt-normal hidden-sm hidden-md"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
                    <div class="buy-btn"><a href="#" class="lnk btn btn-primary">Show Now</a></div>
                  </div>
                  <!-- /.caption -->
                </div>
                <!-- /.container-fluid -->
              </div>
            </div>
            <div class="clearfix filters-container m-t-10">
              <div class="row">
                <div class="col col-sm-6 col-md-3 col-lg-3 col-xs-6">
                  <div class="filter-tabs">
                    <ul id="filter-tabs" class="nav nav-tabs nav-tab-box nav-tab-fa-icon">
                      <li class="active"> <a data-toggle="tab" href="#grid-container"><i class="icon fa fa-th-large"></i>Grid</a> </li>
                      <li><a data-toggle="tab" href="#list-container"><i class="icon fa fa-bars"></i>List</a></li>
                    </ul>
                  </div>
                  <!-- /.filter-tabs -->
                </div>
                <!-- /.col -->
                <!-- /.col -->
              </div>
            </div>
            <div>
              <sale-component/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
